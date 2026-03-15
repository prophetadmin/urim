$ErrorActionPreference = "Stop"

function Assert-True {
  param(
    [bool]$Condition,
    [string]$Message
  )
  if (-not $Condition) {
    Write-Output "FAIL: $Message"
    exit 1
  }
}

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

function Invoke-NodeInline {
  param(
    [string]$Script,
    [string]$Description = "Node validation"
  )

  $tempDir = Join-Path $PSScriptRoot ".tmp"
  New-Item -ItemType Directory -Force -Path $tempDir | Out-Null
  $tempFile = Join-Path $tempDir ("urim_validation_" + [Guid]::NewGuid().ToString("N") + ".js")
  try {
    Set-Content -LiteralPath $tempFile -Value $Script -Encoding UTF8
    & node $tempFile
    if ($LASTEXITCODE -ne 0) {
      throw "$Description failed with exit code $LASTEXITCODE"
    }
  } finally {
    Remove-Item -LiteralPath $tempFile -Force -ErrorAction SilentlyContinue
  }
}

if ($MyInvocation.InvocationName -ne ".") {
  Push-Location (Join-Path $PSScriptRoot "..\..")
  try {
    $scripts = @(
      "02_EXODUS/tests/e2e_grounded_query_validation.ps1",
      "02_EXODUS/tests/support_state_validation.ps1",
      "02_EXODUS/tests/source_disclosure_and_session_validation.ps1",
      "02_EXODUS/tests/resolver_metadata_validation.ps1"
    )

    foreach ($scriptPath in $scripts) {
      Assert-FileExists -Path $scriptPath
      & $scriptPath
      if ($LASTEXITCODE -ne 0) {
        throw "Validation script failed: $scriptPath"
      }
    }

    Write-Output "PASS"
    exit 0
  } finally {
    Pop-Location
  }
}
