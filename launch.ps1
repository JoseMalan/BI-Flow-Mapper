$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Windows.Forms

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$backend = Join-Path $root "backend.py"
$portFile = Join-Path $root "bi-flow-mapper.port"
$venvPython = Join-Path $root ".venv\Scripts\python.exe"
$codexPython = Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"

function Test-PythonDependency {
  param([string]$PythonPath)
  if (-not (Get-Command $PythonPath -ErrorAction SilentlyContinue)) {
    return $false
  }
  & $PythonPath -c "import pbixray, docx, PIL" *> $null
  return $LASTEXITCODE -eq 0
}

$python = $null
foreach ($candidate in @($venvPython, "python.exe", $codexPython)) {
  if (Test-PythonDependency $candidate) {
    $python = $candidate
    break
  }
}

if (-not $python) {
  [System.Windows.Forms.MessageBox]::Show("O BI Flow Mapper nao encontrou um Python com pbixray instalado. Execute: .venv\Scripts\python.exe -m pip install -r requirements.txt", "BI Flow Mapper") | Out-Null
  exit 1
}

Remove-Item -LiteralPath $portFile -ErrorAction SilentlyContinue

$startInfo = [System.Diagnostics.ProcessStartInfo]::new()
$startInfo.FileName = $python
$startInfo.Arguments = """" + $backend + """"
$startInfo.WorkingDirectory = $root
$startInfo.UseShellExecute = $false
$startInfo.CreateNoWindow = $true

$process = [System.Diagnostics.Process]::new()
$process.StartInfo = $startInfo
$null = $process.Start()

$url = $null
for ($i = 0; $i -lt 60; $i++) {
  if (Test-Path $portFile) {
    $url = (Get-Content -LiteralPath $portFile -Raw).Trim()
    if ($url) {
      try {
        $health = Invoke-WebRequest -UseBasicParsing "$url/api/health" -TimeoutSec 1
        if ($health.StatusCode -eq 200) {
          break
        }
      } catch {
        $url = $null
      }
    }
  }

  if ($process.HasExited) {
    [System.Windows.Forms.MessageBox]::Show("O BI Flow Mapper nao conseguiu iniciar. Verifique se o Python e o pacote pbixray estao instalados.", "BI Flow Mapper") | Out-Null
    exit 1
  }

  Start-Sleep -Milliseconds 250
}

if (-not $url) {
  foreach ($port in 4173..4192) {
    try {
      $candidate = "http://127.0.0.1:$port"
      $health = Invoke-WebRequest -UseBasicParsing "$candidate/api/health" -TimeoutSec 1
      if ($health.StatusCode -eq 200) {
        $url = $candidate
        break
      }
    } catch {}
  }
}

if (-not $url) {
  [System.Windows.Forms.MessageBox]::Show("O BI Flow Mapper iniciou, mas nao respondeu ao health-check.", "BI Flow Mapper") | Out-Null
  exit 1
}

Start-Process $url
