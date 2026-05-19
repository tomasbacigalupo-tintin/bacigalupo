---
name: estudio-bacigalupo-design
description: Use this skill to generate well-branded interfaces and assets for Estudio Bacigalupo & Asociados, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation

- Brand: **Estudio Bacigalupo & Asociados** — Argentine professional services firm. Claims adjustment + risk analysis for the insurance sector.
- Language: **Spanish (Argentina)**, formal register (usted), first-person plural. No emoji.
- Palette: **steel blue** primary (`#4090C0`, hover `#2A6E97`) on a cool slate neutral ramp. White / off-white surfaces.
- Type: **Montserrat** (display headings, bold) + **Source Sans 3** (body, UI). Google Fonts.
- Tone: conservative, document-grade, technical. Borders > shadows. No gradients in identity, no decorative illustration.

## Files in this skill

- `README.md` — full brand documentation: company context, content fundamentals, visual foundations, iconography. **Read first.**
- `colors_and_type.css` — all design tokens as CSS variables + element defaults. Import into any HTML file: `<link rel="stylesheet" href="colors_and_type.css">`.
- `assets/logo-primary.png` — primary logo lockup.
- `preview/` — small HTML specimens of every system token (colours, type, spacing, components). Useful as visual reference.
- `ui_kits/marketing-site/` — hi-fi recreation of a corporate site for the firm. Self-contained React + Babel components — copy any of them as a starting point.

## When invoked

1. Ask what the user wants to build (page, slide, prototype, asset).
2. Confirm the language (Spanish is the default).
3. For visual artifacts, link `colors_and_type.css` and copy the logo + any needed assets into your output folder.
4. Match the tone documented in `README.md → Content fundamentals`. Use Lucide icons (CDN) — no emoji.
