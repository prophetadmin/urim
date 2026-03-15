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
    Path = "02_EXODUS/runtime/workflow/query_orchestrator.js"
    Anchors = @("vector_locator_only")
  },
  @{
    Path = "02_EXODUS/runtime/services/grounded_answer_service.js"
    Anchors = @("resolved authority content")
  },
  @{
    Path = "02_EXODUS/runtime/policy/policy_enforcer.js"
    Anchors = @("no_model_switching", "lexicon_advisory", "source_disclosure_optional")
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
