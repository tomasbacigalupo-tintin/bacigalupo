# Marketing site — UI kit

A high-fidelity, click-through recreation of a corporate website for **Estudio Bacigalupo & Asociados**. Built to demonstrate the design tokens (`/colors_and_type.css`) in a realistic context.

> ⚠ **Note** — no live website was supplied. This kit is an *interpretation* of what a brand-aligned marketing site for the firm should look like, based on the logo, palette, and tone of voice established in `/README.md`. Section IA (Servicios → Cobertura → Proceso → Equipo → Contacto) is conventional for B2B professional services in Argentina; the kit is open to refinement once we see prior art.

## How to run
Open `index.html` directly. React + Babel are loaded from CDN; each section is its own JSX component.

## Components

| File | Purpose |
|---|---|
| `App.jsx` | Page composition — assembles all sections into a single landing page. |
| `Header.jsx` | Fixed top navigation with brand mark + primary nav + CTA. |
| `Hero.jsx` | Eyebrow, headline, sub-headline, dual CTA, KPI strip. |
| `Servicios.jsx` | Four service cards with Lucide icons. |
| `Cobertura.jsx` | "Nationwide coverage" block — stats + provincial list. |
| `Proceso.jsx` | Five-step process strip. |
| `Equipo.jsx` | Team intro with placeholder portrait slots. |
| `ContactoCTA.jsx` | Closing call to action on tinted block. |
| `Footer.jsx` | Dark-slate footer with inverted wordmark + columns. |

## Conventions

- All design values come from `../../colors_and_type.css` (linked at the top of `index.html`).
- Icons: **Lucide** via CDN, rendered through `data-lucide="…"` and `lucide.createIcons()`.
- Imagery: **placeholder slots** — labelled tiles in `var(--neutral-100)` with a Lucide glyph. Replace with documentary cool-toned photography per the visual foundations.
- Copy: Argentine Spanish, **usted**, sentence case. See `/README.md → Content fundamentals` for the lexicon.

## Caveats

- **No real photography.** Every image is a labelled placeholder.
- **Team portraits** are silhouette placeholders. The firm should supply professional headshots.
- **Map of Argentina** is rendered as a stat strip, not a geographic SVG, to avoid an inaccurate hand-drawn approximation.
- **Forms are dead.** The contact CTA is visual only — no backend.
