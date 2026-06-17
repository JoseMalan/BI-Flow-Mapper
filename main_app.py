# main_app.py
import base64
import sys
from pathlib import Path

if getattr(sys, 'frozen', False):
    BASE_DIR = Path(sys.executable).resolve().parent
else:
    BASE_DIR = Path(__file__).resolve().parent

import socket
import threading
import time
import traceback
import urllib.request
import webview
from http.server import ThreadingHTTPServer
from backend import find_port, Handler, write_port_file, HOST


def wait_for_port(port: int, timeout: float = 15.0) -> bool:
    """Aguarda até o servidor aceitar conexões TCP na porta dada."""
    deadline = time.monotonic() + timeout
    while time.monotonic() < deadline:
        try:
            with socket.create_connection((HOST, port), timeout=0.3):
                return True
        except OSError:
            time.sleep(0.1)
    return False


def wait_for_health(port: int, timeout: float = 10.0) -> bool:
    """Aguarda o /api/health retornar 200 após o socket estar aberto."""
    deadline = time.monotonic() + timeout
    while time.monotonic() < deadline:
        try:
            with urllib.request.urlopen(
                f"http://{HOST}:{port}/api/health", timeout=1.0
            ) as resp:
                if resp.status == 200:
                    return True
        except Exception:
            time.sleep(0.15)
    return False


class JsApi:
    """Exposed to JavaScript as window.pywebview.api.*
    
    Methods here are called from app.js to save files via a native
    Save-As dialog, bypassing pywebview's blocked link.click() downloads.
    """

    def save_file(self, b64_data: str, suggested_name: str, mime: str) -> dict:
        """Generic file saver used by both PNG and DOCX exports.

        Parameters
        ----------
        b64_data       : base64-encoded file content (data-URL prefix stripped by JS)
        suggested_name : default filename shown in the Save-As dialog
        mime           : MIME type string (used only for reference)
        """
        try:
            raw = base64.b64decode(b64_data)
            # Build file-type filter for the dialog
            ext = Path(suggested_name).suffix.lower()
            if ext == ".png":
                file_types = ("PNG Image (*.png)",)
            elif ext == ".docx":
                file_types = ("Word Document (*.docx)",)
            else:
                file_types = ("All files (*.*)",)

            # show_save_dialog returns the chosen path or None if cancelled
            save_path = webview.windows[0].create_file_dialog(
                webview.SAVE_DIALOG,
                directory=str(Path.home()),
                save_filename=suggested_name,
                file_types=file_types,
            )

            if not save_path:
                return {"ok": False, "reason": "cancelled"}

            # pywebview may return a tuple or a str depending on platform
            dest = Path(save_path[0] if isinstance(save_path, (list, tuple)) else save_path)
            dest.write_bytes(raw)
            return {"ok": True, "path": str(dest)}

        except Exception as exc:
            traceback.print_exc()
            return {"ok": False, "reason": str(exc)}


if __name__ == "__main__":
    port_holder = {"port": None, "error": None}
    server_ready = threading.Event()

    def server_thread():
        try:
            port = find_port(4173)
            port_holder["port"] = port
            server = ThreadingHTTPServer((HOST, port), Handler)
            # Escreve o arquivo de porta DEPOIS do bind (servidor já está escutando)
            write_port_file(port)
            server_ready.set()          # sinaliza: bind feito, pode tentar health-check
            server.serve_forever()
        except Exception:
            port_holder["error"] = traceback.format_exc()
            server_ready.set()          # desbloqueia o main mesmo em caso de erro

    t = threading.Thread(target=server_thread, daemon=True)
    t.start()

    # Aguarda o bind (ou falha) — até 15 s
    server_ready.wait(timeout=15)

    if port_holder["error"]:
        webview.create_window(
            "BI Flow Mapper — Erro",
            html=f"<pre style='color:red;padding:2em'>{port_holder['error']}</pre>",
            width=800, height=400,
        )
        webview.start()
        sys.exit(1)

    port = port_holder["port"]
    if port is None:
        sys.exit("Servidor nao iniciou a tempo.")

    # Confirma via health-check (servidor já em serve_forever)
    if not wait_for_health(port, timeout=10):
        sys.exit(f"Servidor subiu na porta {port} mas nao respondeu ao health-check.")

    api = JsApi()

    webview.create_window(
        "BI Flow Mapper",
        f"http://{HOST}:{port}",
        width=1400, height=860,
        min_size=(900, 600),
        js_api=api,          # ← expõe JsApi como window.pywebview.api
    )
    webview.start()
