# PROMPTVAULT

**AI Prompt Library for SOC Analysts and Detection Engineers**

Part of [H3AD-AI](https://h3ad-sec.github.io/H3AD-AI/) · [H3AD-SEC Platform](https://h3ad-sec.github.io)

Live at: [h3ad-sec.github.io/PROMPTVAULT](https://h3ad-sec.github.io/PROMPTVAULT/)

---

## What It Does

PROMPTVAULT is a curated library of AI prompts built for security analyst workflows. Each prompt targets a specific task — writing detection rules, building hunting hypotheses, drafting IR summaries, scoring false positives — and is structured to work with Claude, GPT-4, or any capable LLM.

The library is organized by category, searchable, and backed by YAML source files so it stays easy to extend.

---

## Categories

| Category | Focus |
|----------|-------|
| Detection Engineering | Rule writing, logic validation, Sigma/KQL/XQL translation |
| Threat Hunting | Hypothesis generation, pivot suggestions, TTP-based hunt plans |
| Incident Response | Timeline summaries, escalation write-ups, post-incident reports |
| Threat Intelligence | IOC context, actor profiling, TTP summarization |
| SOC Operations | Alert triage, shift handover notes, runbook drafting |
| Training | Scenario creation, knowledge checks, concept explanations |

---

## Structure

Each prompt entry includes a title, category tag, a brief description of what it produces, and the prompt body. Prompts follow a consistent structure — role context first, then task, then output format — to produce analyst-quality output rather than generic summaries.

---

## Part of H3AD-AI

PROMPTVAULT is one tool in the [H3AD-AI](https://h3ad-sec.github.io/H3AD-AI/) module of the [H3AD-SEC](https://h3ad-sec.github.io) platform.

Other H3AD-AI tools: INSIGHT-AI · QUERYCRAFT-AI · FPLENS-AI · ATTMAP-AI · CHRONO-AI · MALBRIEF-AI

## H3AD-SEC Platform Modules

| Module | Tools |
|--------|-------|
| [H3AD-X](https://h3ad-sec.github.io/H3AD-X/) | X-VERDIKT, PARSE-X, DNSCOPE, MAILSCOPE |
| [H3AD-AI](https://h3ad-sec.github.io/H3AD-AI/) | INSIGHT-AI, QUERYCRAFT-AI, FPLENS-AI, ATTMAP-AI, CHRONO-AI, MALBRIEF-AI, PROMPTVAULT |
| [H3AD-DETECT](https://h3ad-sec.github.io/H3AD-DETECT/) | TRACERULES |
| [H3AD-HUNT](https://h3ad-sec.github.io/H3AD-HUNT/) | HYPOS, PIVEX, TRACEPULSE |
| [H3AD-OPS](https://h3ad-sec.github.io/H3AD-OPS/) | QUICKTRACE, SHIFTLOG, PHISHOPS |
| [H3AD-DF](https://h3ad-sec.github.io/H3AD-DF/) | REGSCOPE, MALBRIEF-AI |
| [H3AD-IR](https://h3ad-sec.github.io/H3AD-IR/) | Coming soon |
| [H3AD-LEARN](https://h3ad-sec.github.io/H3AD-LEARN/) | Threat Hunting (9 ch), LOLBAS (8 ch) |

---

## License

MIT
