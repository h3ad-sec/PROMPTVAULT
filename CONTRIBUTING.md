# Contributing to PROMPTVAULT

PROMPTVAULT is a community-driven prompt library for SOC analysts and detection engineers. Every prompt here has been tested in a real workflow — we keep the quality bar high.

## How to contribute

**1. Copy the template**
```
cp prompt-template.yaml data/prompts/{category}/{your-prompt-id}.yaml
```

Categories: `triage` · `detect` · `intel` · `hunt` · `respond` · `analyze`

**2. Fill it out**
- `id`: kebab-case, unique across the repo
- `use_case`: one sentence — what it does and when to use it
- `prompt`: the actual prompt with `{PLACEHOLDER}` for user input
- `example_output`: a real output from your model — no fabricated examples
- `limitations`: be honest about where it fails

**3. Regenerate the manifest**
```
npm install
npm run generate
```

**4. Open a PR**
Title format: `add: {prompt title} [{category}]`

## Quality bar

- Prompt must be tested — paste a real `example_output`, not a made-up one
- `limitations` field is required — every prompt has edge cases
- If you tested on multiple models, add `variants[]` — it makes the library more useful
- One prompt per PR

## Categories

| Category | Covers |
|----------|--------|
| triage | Alert verdicts, false positive evaluation, severity rating |
| detect | Sigma/KQL rule writing, rule explanation, detection gap analysis |
| intel | Threat report summarization, TTP extraction, threat actor profiling |
| hunt | Hunting hypothesis generation, lead extraction, pivot suggestions |
| respond | IR timeline analysis, incident report drafting, containment steps |
| analyze | Log explanation, anomaly description, event correlation |
