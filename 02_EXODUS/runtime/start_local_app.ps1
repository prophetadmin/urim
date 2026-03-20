param(
  [int]$Port = 8787,
  [switch]$OpenBrowser
)

$ErrorActionPreference = "Stop"

$hostScript = Join-Path $PSScriptRoot "host\local_app_host.js"
if (-not (Test-Path -LiteralPath $hostScript)) {
  throw "Missing host script: $hostScript"
}

$launchUrl = "http://127.0.0.1:$Port/app_shell.html"
Write-Output "Starting URIM local app host at $launchUrl"
Write-Output "Entry path: 02_EXODUS/runtime/surface/app_shell.html (served via Node host)"

if ($OpenBrowser) {
  Start-Process $launchUrl | Out-Null
}

& node $hostScript --port $Port
exit $LASTEXITCODE