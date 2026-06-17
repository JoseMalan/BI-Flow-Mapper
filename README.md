# BI Flow Mapper

> **Visual data lineage explorer for Power BI — runs entirely on your machine.**

BI Flow Mapper reads a `.pbix` file and draws the full pipeline from data sources through Power Query, model tables, DAX measures, calculated columns and report visuals — with impact analysis, relationship diagrams, architecture overview, pages inventory, and Word documentation export.

---

## Two ways to run

| | Desktop app | Browser mode |
|---|---|---|
| **How** | Run the `.exe` in `releases` | `python backend.py` (or double-click the `.vbs`) |
| **Window** | Native window (WebView2) | Your default browser |
| **File exports** | Native Save-As dialog | Browser download |
| **Platform** | Windows 10 / 11 | Windows, macOS, Linux |
| **Python required** | ❌ No | ✅ Yes |

Both modes use the same `backend.py` server and the same `app.js` frontend — the only difference is how the window is opened and how files are saved.

---

## Screenshots

| Map | Relationships | Architecture | Pages |
|-----|---------------|--------------|-------|
| Lineage graph with all node types | Model relationship diagram + table | Source → Power BI architecture | Report pages with visual count |

---

## Features

- 🔗 **End-to-end lineage graph** — Source → Query → Table → Measure / Calc. Column → Visual
- 🔍 **Impact analysis** — click any node to highlight upstream dependencies and downstream impact
- 🗂️ **Relationship diagram** — interactive ERD with cardinality, cross-filter direction and active/inactive state
- 🏗️ **Architecture view** — connector cards wired to the Power BI dataset node with connection paths
- 📄 **Pages inventory** — lists all report pages with visual count and canvas dimensions
- 🔌 **166 Power Query connectors** detected automatically from M expressions and `TMSCHEMA_DATASOURCES`
- 🔎 **Lineage filter** — toggle to show only the lineage of a selected node
- 📤 **Export** — PNG image for every tab (Map, Relationships, Architecture, Pages), JSON graph, and Word (.docx) documentation
- 🌐 **EN / PT-BR** interface

---

## How it works

```
.pbix file  ──►  backend.py (pbixray)  ──►  JSON graph  ──►  app.js
```

1. `backend.py` starts a local HTTP server and uses **pbixray** to extract:
   - Power Query / M expressions
   - Data sources (`TMSCHEMA_DATASOURCES`)
   - Model tables, schema and semantic metadata
   - DAX measures and calculated columns
   - Model relationships
   - Report layout (pages and visual containers)
2. The frontend (`app.js`) builds and renders the lineage graph, relationship ERD, architecture diagram and pages list.
3. In **desktop mode**, `main_app.py` manages the server thread and opens a native WebView2 window. File exports use a JS↔Python bridge (`window.pywebview.api`) to show native Save-As dialogs.
4. In **browser mode**, `backend.py` is started directly and the URL is opened in any browser. File exports use the browser's built-in download.

If the backend is unavailable (e.g. opening `index.html` directly as a file), a lightweight in-browser ZIP parser runs as fallback — results will be partial.

---

## Getting started

---

### 🖥️ Desktop app (Windows 10 / 11 — no Python required)

**Prerequisite:** Windows 10 or 11 (WebView2 is built in — nothing extra to install).

1. Go to the `dist/` folder.
2. Double-click **`BI Flow Mapper.exe`**.

That's it. A native window opens with the full UI.  
File exports (PNG, DOCX, JSON) open a native **Save As** dialog.

---

### 🌐 Browser mode (Windows / macOS / Linux — Python required)

**Prerequisites:**

| Requirement | Version |
|-------------|---------|
| Python | **3.8+** (3.10+ recommended) |
| pip | any recent version |

**Install dependencies:**

```bash
pip install -r requirements.txt
```

**Run:**

**Option A — double-click** `BI Flow Mapper.vbs` (Windows only).  
That script starts `backend.py` and opens your default browser automatically.

**Option B — command line** (Windows / macOS / Linux):

```bash
python backend.py
# or choose a specific port:
python backend.py --port 5000
```

Then open `http://127.0.0.1:4173` (or whichever port was printed) in your browser.

File exports use the **browser's built-in download**.

---

Then drag and drop (or click **Select PBIX**) any `.pbix`, `.pbit` or `.zip` file.

---

## Project structure

```
bi-flow-mapper/
├── dist/
│   └── BI Flow Mapper.exe   # Standalone desktop app (no Python needed)
├── index.html               # Single-page application shell
├── app.js                   # All frontend logic (graph, tabs, export)
├── styles.css               # UI styles
├── backend.py               # Local HTTP server + pbixray analysis
├── main_app.py              # Desktop launcher — pywebview window + JS↔Python bridge
├── connector_catalog.py     # 166 Power Query connectors (auto-generated)
├── requirements.txt         # Python dependencies (browser mode only)
├── launch.ps1               # PowerShell launcher (called by the .vbs)
├── BI Flow Mapper.vbs       # One-click Windows launcher (browser mode)
├── bi-flow-mapper.port      # Runtime port file (auto-created, git-ignored)
└── assets/
    └── connectors/          # Connector icon PNGs (64 px)
```

---

## Node types

| Icon | Type | Description |
|------|------|-------------|
| ![source](https://img.shields.io/badge/SRC-0078D4?style=flat-square) | **Source** | Detected data connector (SQL Server, Excel, PostgreSQL…) |
| ![query](https://img.shields.io/badge/M-F2C811?style=flat-square&logoColor=000) | **Query** | Power Query / M table or transformation step |
| ![model](https://img.shields.io/badge/TBL-107C10?style=flat-square) | **Model** | Loaded model table |
| ![measure](https://img.shields.io/badge/DAX-D83B01?style=flat-square) | **Measure** | DAX measure |
| ![calc_col](https://img.shields.io/badge/CC-9B5094?style=flat-square) | **Calc. Column** | DAX calculated column |
| ![visual](https://img.shields.io/badge/VIS-8764B8?style=flat-square) | **Visual** | Report visual inferred from layout |

---

## Dependencies

| Package | Role |
|---------|------|
| [`pbixray`](https://github.com/Hugoberry/pbixray) | Reads `.pbix` internals (Power Query, DAX, schema, relationships, layout) |
| [`python-docx`](https://python-docx.readthedocs.io) | Generates Word (.docx) documentation export |
| [`Pillow`](https://pillow.readthedocs.io) | Renders ERD, architecture and banner images inside the Word export |
| [`pywebview`](https://pywebview.flowrl.com) | Native desktop window via WebView2; JS↔Python bridge for Save-As dialogs |
| [`pyinstaller`](https://pyinstaller.org) | Packages the app into a standalone `.exe` (build only, not needed to run) |

All other dependencies (`numpy`, `pandas`, `apsw`, etc.) are pulled in transitively by pbixray.

---

## Known limitations

- Visual ↔ field bindings are inferred from the report layout JSON, not from a live Analysis Services connection, so some edges may be missing or approximate.
- Calculated columns from Power BI's internal auto-date hierarchy tables are filtered out automatically.
- The desktop `.exe` requires WebView2, available by default on Windows 10/11.

---

## Roadmap

1. Exact field-level dependencies between columns and visuals
2. Technical diagnostics screen (model size, column cardinality, storage stats)
3. HTML / PDF documentation export

---

## License

MIT — see `LICENSE` for details.
