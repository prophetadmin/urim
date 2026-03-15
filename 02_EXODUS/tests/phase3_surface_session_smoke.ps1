$ErrorActionPreference = "Stop"

function Assert-FileExists {
  param([string]$Path)
  if (-not (Test-Path -LiteralPath $Path)) {
    Write-Output "FAIL: Missing file $Path"
    exit 1
  }
}

function Assert-ContainsAnchor {
  param(
    [string]$Path,
    [string]$Anchor
  )
  $content = Get-Content -Raw -LiteralPath $Path
  if ($content.IndexOf($Anchor, [System.StringComparison]::Ordinal) -lt 0) {
    Write-Output "FAIL: Missing anchor '$Anchor' in $Path"
    exit 1
  }
}

$checks = @(
  @{
    Path = "02_EXODUS/runtime/surface/chat_app.html"
    Anchors = @()
  },
  @{
    Path = "02_EXODUS/runtime/surface/chat_app.js"
    Anchors = @("support_state", "source_disclosure_request")
  },
  @{
    Path = "02_EXODUS/runtime/session/session_store.js"
    Anchors = @("user_triggered_save")
  }
)

foreach ($check in $checks) {
  Assert-FileExists -Path $check.Path
  foreach ($anchor in $check.Anchors) {
    Assert-ContainsAnchor -Path $check.Path -Anchor $anchor
  }
}

Write-Output "PASS"
exit 0
