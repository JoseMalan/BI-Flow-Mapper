# -*- mode: python ; coding: utf-8 -*-
from PyInstaller.utils.hooks import collect_all, collect_submodules

# Coleta TUDO de cada pacote (código + binários nativos + dados)
datas_extra    = []
binaries_extra = []
hiddenimports_extra = []

for pkg in ('pbixray', 'pandas', 'pyarrow', 'numpy', 'lxml', 'openpyxl',
            'docx', 'PIL', 'webview'):
    d, b, h = collect_all(pkg)
    datas_extra    += d
    binaries_extra += b
    hiddenimports_extra += h

a = Analysis(
    ['main_app.py'],
    pathex=[],
    binaries=binaries_extra,
    datas=[
        ('index.html',           '.'),
        ('app.js',               '.'),
        ('styles.css',           '.'),
        ('backend.py',           '.'),
        ('connector_catalog.py', '.'),
        ('image',                'image'),
        ('assets',               'assets'),
    ] + datas_extra,
    hiddenimports=hiddenimports_extra + [
        # pywebview backends Windows
        'webview',
        'webview.platforms.winforms',
        'webview.platforms.edgechromium',
        'webview.platforms.mshtml',
        'clr',
        'System',
        'System.Windows.Forms',
        # stdlib
        'http.server',
        'zipfile',
        'io',
        'tempfile',
        'threading',
        'socket',
        'urllib.request',
        # docx submodules explícitos
        'docx.oxml',
        'docx.oxml.ns',
        'docx.shared',
        'docx.enum.text',
        'docx.enum.table',
        # PIL explícitos
        'PIL.Image',
        'PIL.ImageDraw',
        'PIL.ImageFont',
    ],
    hookspath=[],
    hooksconfig={},
    runtime_hooks=[],
    excludes=[],
    noarchive=False,
    optimize=0,
)

pyz = PYZ(a.pure)

exe = EXE(
    pyz,
    a.scripts,
    a.binaries,
    a.datas,
    [],
    name='BI Flow Mapper',
    debug=False,
    bootloader_ignore_signals=False,
    strip=False,
    upx=True,
    upx_exclude=[],
    runtime_tmpdir=None,
    console=False,
    disable_windowed_traceback=False,
    argv_emulation=False,
    target_arch=None,
    codesign_identity=None,
    entitlements_file=None,
    icon=['C:\\Users\\malan\\OneDrive\\Documentos\\BI Flow Mapper\\image\\icon.ico'],
)
