"use strict";

const POLICY_NO_MODEL_SWITCHING = "no_model_switching";
const POLICY_LEXICON_ADVISORY = "lexicon_advisory";
const POLICY_SOURCE_DISCLOSURE_OPTIONAL = "source_disclosure_optional";

function enforceNoModelSwitching(policyContext = {}) {
  const requestedModel = policyContext.requested_model || null;
  const configuredModel = policyContext.configured_model || null;

  if (requestedModel && configuredModel && requestedModel !== configuredModel) {
    throw new Error(
      `${POLICY_NO_MODEL_SWITCHING}: requested model does not match configured model`
    );
  }

  return {
    policy: POLICY_NO_MODEL_SWITCHING,
    enforced: true
  };
}

function evaluateLexiconAdvisory(lexiconContext = {}) {
  const narrowingTerms = Array.isArray(lexiconContext.narrowing_terms)
    ? lexiconContext.narrowing_terms
    : [];

  return {
    policy: POLICY_LEXICON_ADVISORY,
    mode: "advisory",
    narrowing_terms: narrowingTerms
  };
}

function shouldDiscloseSources(disclosureContext = {}) {
  return {
    policy: POLICY_SOURCE_DISCLOSURE_OPTIONAL,
    disclose_sources: disclosureContext.source_disclosure_request === true
  };
}

function enforceWorkflowPolicy(policyInput = {}) {
  return {
    model: enforceNoModelSwitching(policyInput.model),
    lexicon: evaluateLexiconAdvisory(policyInput.lexicon),
    disclosure: shouldDiscloseSources(policyInput.disclosure)
  };
}

module.exports = {
  POLICY_NO_MODEL_SWITCHING,
  POLICY_LEXICON_ADVISORY,
  POLICY_SOURCE_DISCLOSURE_OPTIONAL,
  enforceNoModelSwitching,
  evaluateLexiconAdvisory,
  shouldDiscloseSources,
  enforceWorkflowPolicy
};
