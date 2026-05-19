# Estudio Bacigalupo & Asociados — Design System

> Sistema de diseño corporativo para **Estudio Bacigalupo & Asociados**, firma argentina especializada en liquidación de siniestros y análisis de riesgos para el sector asegurador.

---

## About the firm

**Estudio Bacigalupo & Asociados** is an Argentine professional services firm specialised in **claims adjustment (liquidación de siniestros)** and **risk analysis** for insurance companies, brokers and enterprise clients. The firm operates with an interdisciplinary technical team and a nationwide network of field inspectors, delivering:

- Integral claims management (gestión integral de siniestros)
- Technical inspections (inspecciones técnicas)
- Specialised risk advisory (asesoramiento especializado)

**Audience:** insurance carriers, brokers, corporate risk managers, legal departments. Predominantly Spanish-speaking, Argentina/LatAm.

**Brand promise:** professionalism, technical rigour, operational efficiency, personalised attention.

## Sources reviewed

Only one asset was provided for this engagement:

- `uploads/chatgpt-image-16-jul-2025-06_23_55-p.m.-m7Vb94p0B2tDn1aJ.png` — primary logo lockup (Estudio Bacigalupo & Asociados, blue "EB" monogram over wordmark).

There is **no existing codebase, Figma file, marketing site, or product UI to reference.** The system below is built outward from the logo: extracting its palette, recognising its typographic character, and proposing a coherent, conservative corporate identity appropriate for the insurance services sector in Argentina.

> If a marketing site, brand guidelines, or component library exists, please attach it — every choice here is open to refinement once we see prior art.

---

## Content fundamentals

Estudio Bacigalupo speaks the language of the Argentine professional services sector: **technical, formal, reassuring, third-person**. The voice is that of a trusted external specialist, not a consumer brand.

**Language:** Spanish (Argentina). English secondary, used only when an international client requires it. Use Spanish first, never translate idioms literally.

**Voice principles**
- **Formal but human.** Use **usted** (not vos/tú) in customer-facing copy: *"Lo asesoramos en cada etapa del siniestro."* Reserve informal register for internal tools.
- **First-person plural.** The firm speaks as *nosotros* — a team, never a single individual: *"Ofrecemos cobertura nacional."*
- **Technical precision over marketing puffery.** Prefer *"liquidación de siniestros patrimoniales"* over *"soluciones integrales 360°"*.
- **Concrete proof points.** Years of experience, provinces covered, branches of expertise. Avoid vague superlatives.
- **No emoji.** Ever. This is a B2B professional services brand.
- **No exclamation marks** in body copy. They erode authority.

**Casing**
- **Sentence case** for body and most headings: *"Nuestro equipo técnico"*.
- **ALL CAPS** reserved for the wordmark and very short section labels (≤3 words): *"NUESTROS SERVICIOS"*, *"CONTACTO"*.
- Title Case is avoided — it reads as English-translated.

**Lexicon (preferred terms)**
| Use | Avoid |
|---|---|
| Siniestro | Accidente, incidente |
| Liquidación | Cálculo, resolución |
| Asegurado / tomador | Cliente final |
| Inspección técnica | Revisación, chequeo |
| Cobertura nacional | Alcance federal |
| Asesoramiento especializado | Consultoría premium |

**Example copy**

> **Liquidación integral de siniestros.** Gestionamos el proceso completo, desde la denuncia hasta el cierre del expediente, con criterio técnico y respaldo documental.

> **Red nacional de inspectores.** Operamos en las 23 provincias y CABA, con tiempos de respuesta garantizados para inspecciones de campo.

> Confíe la gestión de su cartera de siniestros a un equipo con más de [X] años de experiencia en el mercado asegurador argentino.

**Numbers and units**
- Use Argentine conventions: comma for decimals (*USD 1.250,00*), point for thousands.
- Dates: *15 de marzo de 2026* in long form, *15/03/2026* in tables.
- Never abbreviate "siniestro" or "asegurado".

---

## Visual foundations

The whole system is anchored on the logo's two-colour scheme: a calm **steel blue** (the "EB" mark and "& Asociados") against a deep **charcoal grey** (the wordmark). Everything else is restraint — generous whitespace, crisp dividers, no decorative flourish.

### Palette

The blue sampled from the logo is `#4090C0` — a muted, slightly desaturated cerulean that reads as competent and calm rather than playful. The wordmark grey is `#3F3F3F`. From these two seeds the system extends to:

- **Primary (steel blue) ramp** — 50 → 900, with `#4090C0` as the 500 mid-tone and `#2A6E97` as the action/link colour (better contrast on white).
- **Neutral (slate) ramp** — 50 → 900, slightly cool to harmonise with the blue. Bodies of text sit at `#1F2937`, secondary at `#52606D`, dividers at `#E4E7EB`.
- **Semantic** — success `#1F8A5B`, warning `#B7791F`, danger `#B23A48`, info shares the primary 500. All muted; no neon.
- **Surfaces** — `#FFFFFF` primary, `#F7F8FA` page background, `#EEF2F6` for tinted blocks.

No gradients in identity surfaces. A single, very subtle vertical gradient (`#FFFFFF → #F7F8FA`) is permitted on hero sections only.

### Typography

- **Display / headings:** **Montserrat** (Bold 700, SemiBold 600). Geometric, capable in ALL CAPS, mirrors the proportions of the wordmark.
- **Body / UI:** **Source Sans 3** (Regular 400, SemiBold 600). Highly legible at small sizes, neutral, optimised for forms and tables — critical for an insurance product.
- **Numeric / tables:** Source Sans 3 with `font-variant-numeric: tabular-nums`.

> ⚠ **Font flag:** the logo wordmark appears to use a Montserrat-family geometric sans (or near relative). Google Fonts **Montserrat** is used as the documented substitute. If the firm has a licensed bespoke typeface for the wordmark, please share the file — we will swap it in for display headings.

**Scale** (1.250 major-third):
- `h1` 48 / 56 — page titles, hero
- `h2` 36 / 44 — section headers
- `h3` 28 / 36 — sub-sections
- `h4` 22 / 30 — card titles
- `body-lg` 18 / 28 — intro paragraphs
- `body` 16 / 26 — default
- `body-sm` 14 / 22 — secondary
- `caption` 12 / 18 — labels, meta

### Spacing

8-point grid. Tokens: `space-1` 4, `space-2` 8, `space-3` 12, `space-4` 16, `space-5` 24, `space-6` 32, `space-7` 48, `space-8` 64, `space-9` 96. Section paddings on marketing pages: 96px desktop / 56px mobile.

### Corner radii

Conservative. **`radius-sm` 4px** for inputs, badges. **`radius-md` 8px** for cards, buttons. **`radius-lg` 12px** for major surfaces (modals, hero panels). No pill-shaped buttons — too consumer.

### Borders

Hairline `1px solid var(--neutral-200)` is the workhorse. Dividers between sections, around cards, on tables. **Borders carry more weight than shadows** in this system.

### Shadows / elevation

Used sparingly. Three levels only:
- `shadow-sm` — `0 1px 2px rgba(15, 23, 42, 0.04)` — for raised inputs / buttons on hover
- `shadow-md` — `0 4px 12px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04)` — cards, dropdowns
- `shadow-lg` — `0 16px 48px rgba(15, 23, 42, 0.10), 0 2px 8px rgba(15, 23, 42, 0.04)` — modals, full-page overlays

No coloured / glow shadows. No inner shadows.

### Backgrounds & imagery

- Predominantly **white / off-white surfaces**. Marketing pages use full-bleed photography of professional contexts (industrial inspection, paperwork, urban architecture) — **always cool-toned, never warm-grade**, with a subtle desaturation. Imagery feels documentary, not stocky.
- A 4–8% steel-blue overlay is applied over hero imagery to unify it with the palette.
- **No hand-drawn illustrations.** **No repeating patterns or textures.** If illustrations are ever needed, use flat geometric line-art in primary blue at 1.5px stroke — but prefer photography or empty whitespace.

### Layout

- Max content width 1200px on marketing, 1440px on app surfaces.
- 12-column grid with 24px gutters.
- Top navigation is fixed; reaches the page edges with a 1px bottom border on scroll (no shadow).
- Footer is a generous dark-slate block (`--neutral-900`) with the wordmark inverted.

### Motion

Restrained and functional.
- **Duration:** 150ms for state changes, 250ms for entrances, never longer than 400ms.
- **Easing:** `cubic-bezier(0.2, 0.8, 0.2, 1)` (standard ease-out) for almost everything.
- Fades and short translateY (4–8px) only. **No bounces, no springs, no parallax.**
- Page transitions: cross-fade only.

### Interaction states

- **Hover (buttons, links):** darken the primary by ~8% — `#4090C0 → #2A6E97`. Cards lift only via a borderColor → `--primary-300` shift, not a shadow change. No scale transforms.
- **Active / pressed:** darken further (~12%) and shift `translateY(1px)`.
- **Focus:** 2px outline in `var(--primary-500)` with 2px offset. Never remove focus.
- **Disabled:** 40% opacity, `cursor: not-allowed`, no hover state.

### Cards

- Background: `#FFFFFF`.
- Border: `1px solid var(--neutral-200)`.
- Radius: `8px`.
- Padding: `24px`.
- Hover (only if interactive): border darkens to `var(--primary-300)`. No shadow change.

### Transparency & blur

Avoided. The brand reads as document-grade, printable. The only acceptable use of blur is a subtle `backdrop-filter: blur(8px)` on a fixed nav background **only** when overlaying a hero image — never on plain surfaces.

### Iconography

See [ICONOGRAPHY](#iconography) below.

---

## Iconography

The firm has no proprietary icon system. We adopt **Lucide** (lucide.dev, MIT licensed) as the system-wide icon set — clean 1.5px-stroke outlines, geometric, and visually compatible with Montserrat + Source Sans 3.

- **Style:** outline only, never filled.
- **Stroke:** 1.5px (Lucide default at 24px).
- **Default size:** 20px in dense UI, 24px in marketing, 32–40px in feature blocks.
- **Colour:** `currentColor` — inherits from text. In primary contexts use `var(--primary-600)`; on dark surfaces use `var(--neutral-50)`.
- **No emoji.** **No unicode pictographs.** **No PNG icons.** Lucide SVGs only.

Recommended Lucide picks for common firm concepts:
- *Siniestros / claims:* `clipboard-list`, `file-text`, `file-check`
- *Inspecciones:* `search`, `map-pin`, `camera`
- *Análisis de riesgo:* `shield-check`, `bar-chart-3`, `activity`
- *Cobertura nacional:* `map`, `globe`, `network`
- *Equipo / asesoramiento:* `users`, `briefcase`, `phone`

Loaded via the official CDN:
```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
```

The brand logo (`assets/logo-primary.png`) is not an icon — never use the "EB" monogram as a UI affordance.

> ⚠ **Substitution flag:** Lucide is a *substitution* for an unknown house style. If the firm has an existing icon set (in a stationery template, sales deck, etc.), please share and we'll port it.

---

## Index

| File / folder | What's in it |
|---|---|
| `README.md` | This document. |
| `SKILL.md` | Agent-Skills entry point — read first when invoking this design system as a skill. |
| `colors_and_type.css` | All CSS custom properties (colours, type scale, spacing, radii, shadows) plus semantic element styles. |
| `fonts/` | Webfont licence notes (fonts themselves loaded from Google Fonts CDN). |
| `assets/` | Brand logos and image files. |
| `preview/` | HTML cards rendered in the Design System tab — type, colour, spacing, components, brand. |
| `ui_kits/marketing-site/` | High-fidelity recreation of a corporate site for the firm: home, services, team, contact. Includes JSX components. |

---

## Caveats & open questions

1. **No prior digital surface was supplied.** All ramps, typography, components, and tone guidance are an *informed proposal* extrapolated from the logo. The firm may have a brand book or existing site that should override this.
2. **Wordmark typeface** is treated as Montserrat. Confirm or supply the licensed font.
3. **Imagery** — we recommend documentary cool-toned photography but have no library to work from.
4. **Icons** — Lucide is a placeholder until a house standard is confirmed.

