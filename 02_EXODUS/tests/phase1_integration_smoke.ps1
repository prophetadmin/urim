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
    Path = "02_EXODUS/runtime/integrations/chat_api_client.js"
    Anchors = @("127.0.0.1:8081")
  },
  @{
    Path = "02_EXODUS/runtime/integrations/embedding_client.js"
    Anchors = @("127.0.0.1:8084", "POST /embedding")
  },
  @{
    Path = "02_EXODUS/runtime/integrations/qdrant_client.js"
    Anchors = @("127.0.0.1:6333", "emb_v2_nomic_embed_text_v1_5_f16_768")
  },
  @{
    Path = "02_EXODUS/runtime/data/boxed_authority_reader.js"
    Anchors = @(
      "D:\\boxed\\TierL_EB\\<source_id>\\<source_id>.md",
      "D:\\boxed\\Tier2\\<source_id>\\<source_id>.md",
      "<source_id>.meta.json",
      "<source_id>.sha256"
    )
  },
  @{
    Path = "02_EXODUS/runtime/workflow/retrieval_metadata_normalizer.js"
    Anchors = @("tier, source_id, parent_id, chunk_index")
  },
  @{
    Path = "02_EXODUS/runtime/resolver/boxed_authority_resolver.js"
    Anchors = @("stable_source_identity")
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
