# Cursor starter material — Muhammad Affan

This bundle contains:
- `AGENTS.md`: persistent instructions for Cursor Agent
- `docs/portfolio-master-prompt.md`: full creative/engineering brief
- `docs/cv-source.md`: portfolio-safe text source based on the provided CV, with phone omitted

Copy the contents of this zip into the **root** of the newly initialized Next.js repository (same level as `package.json`). Do not nest this extracted folder inside another folder.

Suggested verification from PowerShell in project root:
```
Test-Path .\AGENTS.md
Test-Path .\docs\portfolio-master-prompt.md
Test-Path .\docs\cv-source.md
```
All three must be `True`.

Do not commit the original DOCX CV if you do not want its personal information to be public later. Upload/attach redacted, approved screenshots only.
