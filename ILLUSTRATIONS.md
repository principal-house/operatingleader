# ILLUSTRATIONS.md — OperatingLeader article illustrations

> How to create editorial illustrations for OperatingLeader articles in Jānis's
> established visual style: dark charcoal background, muted gold accents, minimalist
> grid-based layouts, typography-led. Companion to [BRAND.md](BRAND.md) (broader visual
> identity) and [CLAUDE.md](CLAUDE.md).
>
> **Use this when** Jānis asks to create / generate / design an illustration, graphic, or
> visual for an OperatingLeader article ("make an illustration for this article", "I need
> a graphic for this post", "match this style"). Always deliver both the SVG source and
> an exported PNG.

---

## Where things live (this repo)

| Thing | Path |
|---|---|
| Shipped illustrations (referenced by blog markdown as `/images/<name>.png`) | `public/images/` |
| SVG sources + style reference exemplars | `.PROJECT-FILES/operatingleader/illustration-references/` |
| Existing rendered examples to match | `public/images/founder-vs-pe.png`, `public/images/scaling-wall.png`, `public/images/illustration-value-stack.png` |

> ⚠️ **Reference-SVG status:** the three canonical reference SVGs this playbook cites
> (`illustration-break-at-40.svg`, `illustration-founder-vs-pe.svg`,
> `illustration-who-can-build.svg`) are **not yet in the repo** — they came from the
> original Claude Chat skill bundle. Until they're added to
> `.PROJECT-FILES/operatingleader/illustration-references/`, work from the design system
> below and the rendered PNG examples above. (Ask Jānis to drop in the originals, or
> reconstruct them from this spec.)

---

## Reference files

Before generating any illustration, read the closest-matching reference SVG (once they're
in `illustration-references/`). Extract exact coordinates, font sizes, and color values
from the SVG source. Do not rely on memory.

| File | Pattern | When to read |
|---|---|---|
| `illustration-break-at-40.svg` | 2×2 quadrant with danger zone | Scaling, team stages, risk zones |
| `illustration-founder-vs-pe.svg` | Vertical split comparison | Contrasting two mindsets, approaches, or eras |
| `illustration-who-can-build.svg` | 2×2 before/after grid | Change, before/after, new capabilities |

---

## Brand identity

Editorial, data-visualization aesthetic. Think Harvard Business Review or MIT Sloan
Management Review. Restrained, confident, typography-led. Nothing decorative. Every
element earns its place.

---

## Design system

### Color palette (non-negotiable)

| Role | Hex | Usage |
|---|---|---|
| Background | `#1a1a1a` | Always. Full canvas fill. |
| Gold accent | `#C9A84C` | Title, key numbers, "answer" elements, branding |
| White primary | `#ffffff` | Main content text, high-importance labels |
| Gray mid | `#888888` | Secondary labels, descriptive text, axis labels, footer branding |
| Gray dark | `#666666` | Tertiary labels, bottom-row annotations |
| Gold tint fill | `#C9A84C` @ `opacity="0.07"` | Highlight quadrant/zone background |
| Gold divider | `#C9A84C` @ `opacity="0.4"` | Main title underline |
| Gold subtle | `#C9A84C` @ `opacity="0.25"` | Grid lines, structural dividers |
| Gold faint | `#C9A84C` @ `opacity="0.2"` | Secondary structural lines |

**Never use:** gradients, drop shadows, glows, bright colors, blues, reds, greens, or any
color outside this palette. Exception: danger/warning zones may use a dark red (`#8B1A1A`)
background fill sparingly (see the break-at-40 pattern).

> Note: the gold here (`#C9A84C`) is the illustration token. BRAND.md lists the brand gold
> as `#c9a55a`. Keep illustrations on `#C9A84C` to match the existing published set.

### Typography

- **Font stack:** `'Inter', 'Helvetica Neue', Arial, sans-serif`
- **Title:** 18px, weight 700, `#C9A84C`, `letter-spacing="2"`, ALL CAPS
- **Axis/section headers:** 10-11px, weight 600-700, `#C9A84C` or `#888888`,
  `letter-spacing="1.5-2"`, ALL CAPS
- **Primary content text:** 18-28px, weight 600-700, `#ffffff` (main label in each zone)
- **The gold punchline:** key insight text in `#C9A84C` at full opacity. This is where the
  reader's eye lands.
- **Descriptive labels:** 11-13px, `#888888` (introduces or contextualizes a stat)
- **Muted/before state:** same size as active, but `#ffffff` @ `opacity="0.4"`
  (communicates "old world")
- **Bottom annotations:** 10px, `fill="#666666"`, `letter-spacing="1"`, ALL CAPS
- **Footer branding:** 9px, `fill="#888888"`, `letter-spacing="2"`, ALL CAPS. Always
  "THE OPERATING LEADER".

### Canvas & grid

- **ViewBox:** always `0 0 680 400`
- **Export size:** `1360 × 800` (2× retina)
- **Safe area:** x=60 to x=620, y=40 to y=390
- **Title:** centered at `x="340" y="52"`
- **Title underline:** `x1="60" y1="68" x2="620" y2="68"`, `stroke="#C9A84C"`,
  `stroke-width="0.5"`, `opacity="0.4"`
- **Content area:** y=82 to y=362
- **Footer:** `x="340" y="388-398"`

---

## Layout patterns

### Pattern 1: 2×2 quadrant grid
*Before/after, team stages, risk zones, scaling phases.*

Four quadrants divided by a vertical line at x=340-350 and a horizontal line at y=218-222.
Outer grid border optional. One quadrant is typically highlighted as the focal point.

- **Top-left:** usually the "before" or low-risk state
- **Top-right:** usually the focal/danger/after state. Highlight with gold tint rect or
  danger zone.
- **Bottom-left:** secondary "before" metric, muted
- **Bottom-right:** secondary "after" metric, gold punchline

Reference: `illustration-break-at-40.svg`, `illustration-who-can-build.svg`

### Pattern 2: Vertical split comparison
*Two mindsets, two eras, two approaches.*

Canvas split at x=340 by a single gold vertical line (`opacity="0.35"`). No title or title
underline. The section labels act as headers. Left side: gray label (`#888888`) =
old/neutral state. Right side: gold label (`#C9A84C`) = new/better state. Last statement
on the right side in gold = the punchline. No grid lines, no axis labels, no bottom
annotations. Pure typographic.

Reference: `illustration-founder-vs-pe.svg`

### Pattern 3: Single statement
*Pull quotes, key principles, standalone insights.*

Full canvas. One large statement centered vertically and horizontally. Supporting label
above in gold (10-11px, ALL CAPS). No grid, no dividers.

---

## Title rules

Titles must be immediately clear to someone with zero context. They appear in feeds and
article headers with no surrounding copy.

**Good:** `WHO CAN BUILD DIGITAL PRODUCTS NOW?` · `WHY COMPANIES BREAK AT 40` ·
`FOUNDER MINDSET VS PE MINDSET`

**Bad (too vague):** `WHO CAN BUILD?` (build what?) · `THE SHIFT` (what shift?) ·
`BEFORE AND AFTER` (of what?)

If the title feels vague without the article, make it more specific.

---

## Export (this machine)

cairosvg is installed (`/opt/homebrew/bin/cairosvg`, Python 3). Author the SVG, then
render the PNG straight into `public/images/` so the blog markdown can reference it as
`/images/<name>.png`.

```sh
# Option A: CLI
cairosvg illustration.svg -o public/images/<name>.png -W 1360 -H 800

# Option B: Python (same result)
python3 -c "import cairosvg; cairosvg.svg2png(url='illustration.svg', \
  write_to='public/images/<name>.png', output_width=1360, output_height=800)"
```

Always deliver:
1. The **SVG source** (saved to `.PROJECT-FILES/operatingleader/illustration-references/`
   if it's a new reusable pattern, otherwise alongside the article work).
2. The **PNG** exported to `public/images/` at `1360 × 800`.
3. The exact markdown line to embed it, e.g. `![Alt text](/images/<name>.png)`.

---

## Quality checklist

Before exporting, verify:

- [ ] Background is `#1a1a1a` (not transparent, not near-black gray)
- [ ] Title is gold `#C9A84C`, ALL CAPS, specific enough without article context
- [ ] Title underline present at y=68 (except Pattern 2, which has no title)
- [ ] Gold used sparingly: title, key numbers, punchline, accent markers only
- [ ] The "answer"/insight element is clearly in gold (eye goes there first)
- [ ] "Before" state is visually muted (`opacity="0.4"` on white)
- [ ] Footer "THE OPERATING LEADER" uses `#888888` minimum (must be readable)
- [ ] No gradients, shadows, glows, or off-palette colors
- [ ] SVG viewBox is `0 0 680 400`
- [ ] PNG exported at `1360 × 800` into `public/images/`
