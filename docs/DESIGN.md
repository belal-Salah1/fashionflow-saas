---
version: alpha
name: FashionFlow-design-system
description: |
  A premium, dual-theme design system for FashionFlow — a fashion/apparel SaaS. It adapts Linear's craft-forward, surface-ladder discipline into a fashion-editorial voice: Clash Display headlines over Inter UI, a single emerald brand accent, and two first-class themes — "Gallery Porcelain" (light) and "Soft Ink" (dark). Light mode floats crisp white cards on warm porcelain with whisper-soft layered shadows; dark mode stacks a cool-graphite surface ladder with hairline borders and a faint top-edge highlight. The system serves two surfaces from one token set: a data-dense admin app (dashboard, catalog, inventory, POS, orders, CRM, campaigns, analytics, AI) and a photography-first storefront. Motion is the premium layer — spring-based, purposeful, reduced-motion-aware — and is documented as a first-class system rather than left implicit.

# ─────────────────────────────────────────────────────────────
# TOKENS
# Colors are SEMANTIC and theme-resolved: every token name below exists
# in BOTH the `light` and `dark` maps with the same key. Components
# reference the semantic name (e.g. {color.surface-1}); the value comes
# from whichever theme is active. Implemented as CSS custom properties
# that swap under the `.dark` class on <html> (see "Theming").
# ─────────────────────────────────────────────────────────────

colors:
  light:            # "Gallery Porcelain"
    canvas: "#f5f4f2"          # page background — cool porcelain
    canvas-sunken: "#efeeeb"   # wells, track backgrounds, code blocks
    surface-1: "#ffffff"       # default card / panel
    surface-2: "#fafafa"       # nested / inset surface, table stripe
    surface-3: "#f0efec"       # hover fill, pressed inset, skeleton base
    hairline: "#ecebe8"        # default 1px border / divider
    hairline-strong: "#dedcd7" # input border, stronger divider
    ink: "#1a1a19"             # primary text; also the LIGHT primary-button fill
    ink-muted: "#4a4945"       # secondary text, active nav label
    ink-subtle: "#7d7c78"      # metadata, placeholder, inactive nav
    ink-tertiary: "#a6a4a0"    # disabled text, footnotes
    on-ink: "#ffffff"          # text on the ink primary button
    accent: "#1f9e7a"          # emerald — links, focus, active, positive
    accent-hover: "#1b8b6c"
    accent-pressed: "#17795d"
    accent-soft: "#e4f3ee"     # tinted badge / selection background
    on-accent: "#ffffff"
    focus-ring: "#1f9e7a"      # rendered at ~45% alpha in a 3px ring
    success: "#1f9e7a"
    success-soft: "#e4f3ee"
    warning: "#b8791f"
    warning-soft: "#f7eddb"
    danger: "#c23b32"
    danger-soft: "#f7e4e2"
    info: "#2f6fed"
    info-soft: "#e5edfd"
    overlay: "rgba(26,26,25,0.32)"   # modal scrim
  dark:             # "Soft Ink"
    canvas: "#131518"          # page background — soft ink (never #000)
    canvas-sunken: "#0e1013"   # wells, track backgrounds, code blocks
    surface-1: "#1c1f24"       # default card / panel
    surface-2: "#23272e"       # nested surface, hovered card, table stripe
    surface-3: "#2a2e35"       # active/pressed fill, sub-nav
    hairline: "#2a2e35"        # default 1px border / divider
    hairline-strong: "#363b44" # input border, stronger divider
    ink: "#eef1f2"             # primary text
    ink-muted: "#b9c0c7"       # secondary text
    ink-subtle: "#8b939b"      # metadata, placeholder, inactive nav
    ink-tertiary: "#626a72"    # disabled text, footnotes
    on-ink: "#04130c"          # (parity token; ink is not used as a fill in dark)
    accent: "#35c08a"          # emerald — links, focus, active, positive, PRIMARY button
    accent-hover: "#4dd39e"
    accent-pressed: "#2aa878"
    accent-soft: "rgba(53,192,138,0.16)"
    on-accent: "#04130c"       # near-black text on the emerald button
    focus-ring: "#35c08a"
    success: "#35c08a"
    success-soft: "rgba(53,192,138,0.16)"
    warning: "#e0b062"
    warning-soft: "rgba(224,176,98,0.16)"
    danger: "#f0645a"
    danger-soft: "rgba(240,100,90,0.16)"
    info: "#5b8def"
    info-soft: "rgba(91,141,239,0.16)"
    overlay: "rgba(0,0,0,0.60)"

typography:
  # Display tiers → Clash Display. Text/UI tiers → Inter. Mono → JetBrains Mono.
  display-xl:  { fontFamily: Clash Display, fontSize: 64px, fontWeight: 600, lineHeight: 1.04, letterSpacing: -1.6px }
  display-lg:  { fontFamily: Clash Display, fontSize: 48px, fontWeight: 600, lineHeight: 1.06, letterSpacing: -1.2px }
  display-md:  { fontFamily: Clash Display, fontSize: 36px, fontWeight: 600, lineHeight: 1.10, letterSpacing: -0.8px }
  headline:    { fontFamily: Clash Display, fontSize: 26px, fontWeight: 600, lineHeight: 1.18, letterSpacing: -0.4px }
  title:       { fontFamily: Clash Display, fontSize: 20px, fontWeight: 600, lineHeight: 1.25, letterSpacing: -0.2px }  # page/section titles in-app
  card-title:  { fontFamily: Inter,         fontSize: 16px, fontWeight: 600, lineHeight: 1.35, letterSpacing: -0.1px } # dense card headers
  subhead:     { fontFamily: Inter,         fontSize: 18px, fontWeight: 400, lineHeight: 1.45, letterSpacing: -0.1px }
  body-lg:     { fontFamily: Inter,         fontSize: 16px, fontWeight: 400, lineHeight: 1.55, letterSpacing: 0 }
  body:        { fontFamily: Inter,         fontSize: 14px, fontWeight: 400, lineHeight: 1.55, letterSpacing: 0 }       # DEFAULT app body
  body-strong: { fontFamily: Inter,         fontSize: 14px, fontWeight: 600, lineHeight: 1.55, letterSpacing: 0 }
  body-sm:     { fontFamily: Inter,         fontSize: 13px, fontWeight: 400, lineHeight: 1.5,  letterSpacing: 0 }
  caption:     { fontFamily: Inter,         fontSize: 12px, fontWeight: 500, lineHeight: 1.4,  letterSpacing: 0.1px }
  metric:      { fontFamily: Clash Display, fontSize: 28px, fontWeight: 600, lineHeight: 1.1,  letterSpacing: -0.8px }  # KPI numbers
  button:      { fontFamily: Inter,         fontSize: 14px, fontWeight: 600, lineHeight: 1.0,  letterSpacing: 0 }
  button-sm:   { fontFamily: Inter,         fontSize: 13px, fontWeight: 600, lineHeight: 1.0,  letterSpacing: 0 }
  eyebrow:     { fontFamily: Inter,         fontSize: 12px, fontWeight: 600, lineHeight: 1.3,  letterSpacing: 0.6px }   # UPPERCASE
  mono:        { fontFamily: JetBrains Mono, fontSize: 13px, fontWeight: 400, lineHeight: 1.5, letterSpacing: 0 }       # SKUs, IDs, code

rounded:
  xs: 4px       # chips, tiny badges, checkboxes
  sm: 6px       # inline tags, small controls
  md: 8px       # buttons, inputs, dropdown items
  lg: 12px      # cards, panels, table container
  xl: 16px      # large panels, modals, product-screenshot frames
  xxl: 24px     # hero/marketing CTA panels (rare)
  pill: 9999px  # filter chips, status pills, segmented control, toggle
  full: 9999px  # avatars, icon-only round buttons

spacing:        # 4px base unit
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section-app: 40px      # vertical rhythm between blocks INSIDE the admin app
  section-market: 96px   # vertical rhythm between marketing/storefront sections

motion:
  duration:
    instant: 80ms    # state color flips (hover fill), checkbox tick
    fast: 140ms      # button press, chip toggle, tooltip
    base: 200ms      # default — dropdowns, tab underline, hover lift
    slow: 320ms      # modals, drawers, page/route content
    slower: 480ms    # large drawers, KPI count-up, orchestrated entrances
  easing:
    standard: "cubic-bezier(0.2, 0, 0, 1)"      # Linear-style default — quick out, soft settle
    decelerate: "cubic-bezier(0, 0, 0, 1)"      # enters (element arriving)
    accelerate: "cubic-bezier(0.4, 0, 1, 1)"    # exits (element leaving)
    emphasized: "cubic-bezier(0.34, 1.3, 0.5, 1)" # slight overshoot for delight (chips, toggles)
  spring:            # for physics-based libs (e.g. motion-v / @vueuse/motion)
    snappy: { stiffness: 480, damping: 34, mass: 1 }   # buttons, toggles, popovers
    smooth: { stiffness: 260, damping: 30, mass: 1 }   # cards, drawers, page content
    bouncy: { stiffness: 420, damping: 20, mass: 1 }   # celebratory / AI-complete moments
  stagger: 40ms      # per-item delay in list/grid entrance orchestration
  distance:
    nudge: 4px       # press/settle micro-travel
    rise: 8px        # card hover lift & list-item enter offset
    slide: 16px      # dropdown/popover enter offset
    sheet: 100%      # drawer/sheet off-canvas travel

# ─────────────────────────────────────────────────────────────
# COMPONENTS  (values reference SEMANTIC color tokens — theme-resolved)
# ─────────────────────────────────────────────────────────────
components:
  button-primary:            # LIGHT: ink fill / DARK: emerald fill (see note)
    backgroundColor: "{color.ink}"        # dark theme overrides to {color.accent}
    textColor: "{color.on-ink}"           # dark theme overrides to {color.on-accent}
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 9px 15px
    height: 38px
    motion: "press: scale .97 @ {motion.duration.fast}; hover: bg→ink-muted/accent-hover @ {motion.duration.instant}"
  button-secondary:
    backgroundColor: "{color.surface-1}"
    textColor: "{color.ink}"
    border: "1px solid {color.hairline-strong}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 9px 15px
    height: 38px
  button-tertiary:           # ghost / text
    backgroundColor: "transparent"
    textColor: "{color.ink-muted}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 9px 12px
    hoverBackground: "{color.surface-3}"
  button-accent:             # emerald CTA in BOTH themes (use when accent must read as the action)
    backgroundColor: "{color.accent}"
    textColor: "{color.on-accent}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 9px 15px
  button-danger:
    backgroundColor: "{color.danger}"
    textColor: "#ffffff"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 9px 15px
  button-icon:               # square/round icon-only
    backgroundColor: "transparent"
    textColor: "{color.ink-subtle}"
    rounded: "{rounded.md}"
    size: 34px
    hoverBackground: "{color.surface-3}"
  input:
    backgroundColor: "{color.surface-1}"
    textColor: "{color.ink}"
    placeholder: "{color.ink-subtle}"
    border: "1px solid {color.hairline-strong}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 9px 12px
    height: 38px
  input-focused:
    border: "1px solid {color.accent}"
    ring: "3px {color.focus-ring} @ 45% alpha"
    motion: "ring fades in @ {motion.duration.fast} {motion.easing.decelerate}"
  select: { extends: input, affordance: "chevron-down, ink-subtle, rotates 180° on open @ {motion.duration.base}" }
  textarea: { extends: input, height: auto, minHeight: 88px, padding: 10px 12px }
  search-field:
    extends: input
    rounded: "{rounded.pill}"
    leadingIcon: "magnifier, {color.ink-subtle}"
  checkbox:
    size: 18px
    rounded: "{rounded.xs}"
    border: "1.5px solid {color.hairline-strong}"
    checkedBackground: "{color.accent}"
    motion: "tick draws @ {motion.duration.fast} {motion.easing.emphasized}; box scale .9→1"
  toggle:
    trackWidth: 38px
    trackHeight: 22px
    rounded: "{rounded.pill}"
    offTrack: "{color.hairline-strong}"
    onTrack: "{color.accent}"
    knob: "#ffffff"
    motion: "knob slides @ {motion.duration.base} {motion.easing.emphasized}"
  segmented-control:
    backgroundColor: "{color.surface-2}"
    rounded: "{rounded.pill}"
    padding: 3px
    thumb: "{color.surface-1} + {elevation.e1}"
    motion: "thumb slides between segments @ {motion.duration.base} {motion.easing.standard} (shared-element)"
  tab-bar:
    itemColor: "{color.ink-subtle}"
    itemActiveColor: "{color.ink}"
    indicator: "2px {color.accent} underline"
    motion: "underline slides + width-morphs to active tab @ {motion.duration.base} {motion.easing.standard}"
  filter-chip:
    backgroundColor: "{color.surface-1}"
    textColor: "{color.ink-muted}"
    border: "1px solid {color.hairline}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.pill}"
    padding: 6px 12px
  filter-chip-active:
    backgroundColor: "{color.accent-soft}"
    textColor: "{color.accent}"
    border: "1px solid transparent"
  badge:                     # neutral status pill
    backgroundColor: "{color.surface-2}"
    textColor: "{color.ink-muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 3px 9px
  badge-success:  { backgroundColor: "{color.success-soft}", textColor: "{color.success}" }   # "In stock", "Active", "Paid"
  badge-warning:  { backgroundColor: "{color.warning-soft}", textColor: "{color.warning}" }   # "Low stock", "Pending"
  badge-danger:   { backgroundColor: "{color.danger-soft}",  textColor: "{color.danger}"  }   # "Out of stock", "Refunded"
  badge-info:     { backgroundColor: "{color.info-soft}",    textColor: "{color.info}"    }   # "Draft", "Scheduled"
  badge-ai:       { background: "accent→info gradient @ 16% alpha", textColor: "{color.accent}", icon: "sparkle" } # AI-generated marker
  stat-card:                 # KPI tile
    backgroundColor: "{color.surface-1}"
    border: "1px solid {color.hairline}"
    rounded: "{rounded.lg}"
    padding: 16px 18px
    elevation: "{elevation.e1}"   # light only; dark uses ladder+hairline
    parts: "eyebrow label ({typography.eyebrow} ink-subtle) · value ({typography.metric} ink) · delta ({typography.caption} success|danger)"
    motion: "value count-up @ {motion.duration.slower} {motion.easing.decelerate} on first view (IntersectionObserver)"
  card:
    backgroundColor: "{color.surface-1}"
    border: "1px solid {color.hairline}"
    rounded: "{rounded.lg}"
    padding: 20px
    elevation: "{elevation.e1}"
    hover: "translateY(-{motion.distance.rise}) + elevation→e2 @ {motion.duration.base} {motion.easing.standard} (interactive cards only)"
  data-table:
    container: "{color.surface-1}, 1px {color.hairline}, {rounded.lg}, overflow-hidden"
    headerRow: "{color.surface-2} bg, {typography.eyebrow} ink-subtle, sticky top:0"
    row: "{typography.body}, 1px {color.hairline} bottom rule, height 52px"
    rowHover: "{color.surface-2} (light) / {color.surface-2} (dark) @ {motion.duration.instant}"
    rowSelected: "{color.accent-soft} bg, 2px {color.accent} left-border"
    density: "comfortable 52px · compact 40px (user toggle)"
  sidebar:
    backgroundColor: "{color.canvas}"     # flush with page, separated by hairline
    width: 248px  (collapsed 64px)
    itemColor: "{color.ink-subtle}"
    itemActive: "{color.surface-2} bg, {color.ink} text, {rounded.md}, 2px accent left-marker"
    motion: "collapse/expand width @ {motion.duration.slow} {motion.easing.standard}; labels fade @ {motion.duration.fast}"
  topbar:
    backgroundColor: "{color.canvas} @ 80% + backdrop-blur(12px)"   # premium glass on scroll
    borderBottom: "1px solid {color.hairline}"
    height: 56px
    parts: "store-switcher · breadcrumb · global search · notifications · theme-toggle · avatar"
  store-switcher:            # multi-tenant store selector
    trigger: "avatar/logo + store name ({typography.body-strong}) + chevron"
    menu: "{extends: dropdown-menu}, current store checked, 'Manage stores' footer action"
  dropdown-menu:
    backgroundColor: "{color.surface-1}"
    border: "1px solid {color.hairline}"
    rounded: "{rounded.lg}"
    elevation: "{elevation.e3}"
    itemHover: "{color.surface-3}"
    motion: "enter: opacity 0→1 + translateY(-{motion.distance.slide})→0 + scale .98→1, origin top @ {motion.duration.base} {motion.easing.decelerate}"
  tooltip:
    backgroundColor: "{color.ink}"        # inverted
    textColor: "{color.canvas}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: 5px 8px
    motion: "fade+2px rise @ {motion.duration.fast}, 400ms open delay"
  modal:
    backgroundColor: "{color.surface-1}"
    rounded: "{rounded.xl}"
    padding: 24px
    maxWidth: 520px
    elevation: "{elevation.e4}"
    scrim: "{color.overlay} + backdrop-blur(2px)"
    motion: "scrim fade @ {motion.duration.base}; card scale .96→1 + rise @ {motion.duration.slow} {motion.spring.smooth}"
  drawer:                    # side sheet — filters, product quick-edit, cart
    backgroundColor: "{color.surface-1}"
    width: 480px (right) — full-width bottom-sheet on mobile
    rounded: "{rounded.xl} on the leading edge"
    elevation: "{elevation.e4}"
    motion: "slide from edge {motion.distance.sheet}→0 @ {motion.duration.slow} {motion.spring.smooth}"
  toast:
    backgroundColor: "{color.surface-1}"
    border: "1px solid {color.hairline}"
    rounded: "{rounded.lg}"
    elevation: "{elevation.e3}"
    accentBar: "3px left bar in semantic color"
    motion: "enter slide-in from bottom-right + fade @ {motion.duration.slow} {motion.spring.snappy}; stack reflows w/ FLIP; auto-dismiss 5s w/ progress hairline"
  command-palette:           # ⌘K global — a Linear signature, elevated
    backgroundColor: "{color.surface-1} @ 92% + backdrop-blur(20px)"   # glass
    rounded: "{rounded.xl}"
    elevation: "{elevation.e4}"
    resultActive: "{color.surface-3}, accent leading icon"
    motion: "scrim fade + panel scale .98→1 rise @ {motion.duration.slow} {motion.spring.smooth}; results list-fade on query change"
  pagination: { itemRounded: "{rounded.md}", activeBackground: "{color.surface-3}", activeText: "{color.ink}" }
  breadcrumb: { color: "{color.ink-subtle}", activeColor: "{color.ink}", separator: "chevron ink-tertiary" }
  avatar: { rounded: "{rounded.full}", sizes: "24 / 32 / 40", ring: "2px surface-1 for stacked groups" }
  empty-state:
    parts: "illustration/icon (ink-tertiary) · {typography.card-title} heading · {typography.body} ink-subtle · primary action"
    motion: "icon + copy fade+rise stagger {motion.stagger} on mount"
  skeleton:
    backgroundColor: "{color.surface-3}"
    rounded: "match target"
    motion: "shimmer sweep L→R, 1.4s loop, {motion.easing.standard}; respects reduced-motion (falls back to opacity pulse)"
  progress-bar: { track: "{color.surface-3}", fill: "{color.accent}", rounded: "{rounded.pill}", height: 6px }
  ai-panel:                  # AI-generated content surface (copy, design, campaign, forecast)
    backgroundColor: "{color.surface-1}"
    border: "1px solid {color.accent} @ 24% alpha"
    accentWash: "top-edge accent→info gradient @ 8% alpha (the one sanctioned gradient)"
    rounded: "{rounded.xl}"
    marker: "{component.badge-ai} 'AI generated' pill, always visible until reviewed"
    motion: "streamed text: token fade-in; 'thinking' state: shimmering accent hairline; complete: {motion.spring.bouncy} check"
  product-card:              # storefront masonry tile (photography-first)
    backgroundColor: "{color.surface-1}"
    rounded: "{rounded.lg}"
    padding: 0     # image is full-bleed to the radius
    parts: "4:5 image · title {typography.body-strong} · price {typography.body} ink-muted · optional overlay pill"
    hover: "image scale 1→1.04 (clipped) + card rise, @ {motion.duration.slow} {motion.easing.standard}"
  top-nav-market:            # storefront / marketing top nav
    backgroundColor: "{color.canvas} @ 80% + backdrop-blur(12px)"
    height: 64px
    rounded: "{rounded.xs}"
---

## Overview

FashionFlow's system takes Linear's engineering-grade discipline — a strict surface ladder, hairline borders, scarce accent, tight radii, negative-tracked display type — and re-voices it for fashion. Two moves make it *fashion-premium* rather than *tool-premium*: **Clash Display** headlines (an editorial grotesk) sitting over **Inter** UI, and a warm **Gallery Porcelain** light theme that floats crisp white cards on porcelain with whisper-soft shadows. Dark mode ("Soft Ink") keeps Linear's craft: a cool-graphite ladder (`{color.canvas}` `#131518` → `surface-1` → `surface-2` → `surface-3`) carried by hairlines, never pure black.

The single chromatic accent is **emerald** (`#1f9e7a` light / `#35c08a` dark) — used on links, focus rings, active/selected states, positive deltas, and the primary CTA in dark mode. It is never decorative. There is one deliberate departure from Linear's "no gradients" rule: a whisper-thin **accent→info gradient wash** reserved exclusively for **AI surfaces** and the occasional storefront hero, so AI-generated content is visually distinct from human-authored chrome.

The system dresses **two surfaces from one token set**:

- **The admin app** — data-dense: sidebar + glass topbar, KPI stat-cards, data tables, dense forms, tabs, badges, drawers, toasts, a ⌘K command palette, charts, and clearly-labeled AI panels. Tighter `{spacing.section-app}` (40px) rhythm.
- **The storefront** — photography-first: masonry product grids, full-bleed product cards, editorial hero sections. Looser `{spacing.section-market}` (96px) rhythm. This is where Pinterest-style masonry DNA lives.

**Key characteristics**

- Two first-class themes toggled by `.dark` on `<html>`; every color is a theme-resolved semantic token.
- One emerald accent; hierarchy comes from weight, size, and the surface ladder — not color.
- Primary CTA is **ink** in light (monochrome-editorial) and **emerald** in dark (espresso would vanish on `#131518`). Use `button-accent` when the action itself must read emerald in both.
- Light depth = soft **layered shadows**; dark depth = **surface ladder + hairlines** + a faint top-edge highlight. Almost no drop shadow on dark except overlays.
- Tight radius vocabulary: `8px` controls, `12px` cards, `16px` panels/modals, pill for chips/toggles/status.
- **Motion is a documented system**, spring-based and reduced-motion-aware — the primary premium signal.

## Colors

> Every token exists in both `colors.light` and `colors.dark`. Reference the semantic name (`{color.surface-2}`); it resolves to the active theme. Do not hardcode hex in components.

### Brand & accent
- **Accent / Emerald** (`{color.accent}`): links, focus ring, active/selected state, positive delta, dark-mode primary CTA. Keep it scarce — at most one filled accent CTA per view; everything else earns emphasis from weight and surface.
- **Accent soft** (`{color.accent-soft}`): the only accent *fill* allowed at scale — selection rows, active chips, success badges.

### Surface ladder
Light climbs `canvas #f5f4f2 → surface-1 #ffffff → surface-2 #fafafa → surface-3 #f0efec`; dark climbs `canvas #131518 → surface-1 #1c1f24 → surface-2 #23272e → surface-3 #2a2e35`. Never skip a rung to signal hierarchy — climb one step. `canvas-sunken` is *below* canvas for wells, tracks, and code blocks.

### Text
`ink` (primary) → `ink-muted` (secondary) → `ink-subtle` (metadata/placeholder) → `ink-tertiary` (disabled). Build text hierarchy from this ramp plus weight, not from tinting body copy.

### Semantic
`success` (emerald, unified with accent — positive is on-brand), `warning` (amber), `danger` (red), `info` (blue), each with a `-soft` tint for badge/callout backgrounds. `danger` is reserved for destructive/loss states — because the accent is green, red reads unambiguously as "stop".

### Contrast
All text/background pairings target **WCAG AA** (≥4.5:1 body, ≥3:1 large/UI). `ink-subtle` on `canvas` is the floor for readable text; `ink-tertiary` is disabled-only and never carries meaning alone.

## Typography

### Families
- **Clash Display** (Fontshare, weights 600/700) — all display tiers, in-app page/section titles, and KPI metric numbers. Its editorial character is the fashion signal. Fallback stack: `"Clash Display", "Inter", system-ui, sans-serif`.
- **Inter** (weights 400/500/600/700) — all UI and body: tables, forms, buttons, captions, dense reading. Fallback: `"Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`.
- **JetBrains Mono** (400) — SKUs, order IDs, code, API keys. Fallback: `ui-monospace, "SF Mono", Menlo, monospace`.

Load via self-hosted `woff2` in `resources/js/assets/fonts/` (do not hot-link Fontshare/Google in production). Preload the two most-used cuts (Inter 400/600) to avoid layout shift.

### Hierarchy

| Token | Family | Size | Weight | Tracking | Use |
|---|---|---|---|---|---|
| `display-xl` | Clash | 64 | 600 | -1.6 | Storefront/marketing hero |
| `display-lg` | Clash | 48 | 600 | -1.2 | Marketing section openers |
| `display-md` | Clash | 36 | 600 | -0.8 | Sub-section headlines |
| `headline` | Clash | 26 | 600 | -0.4 | Empty-state / dialog heroes |
| `title` | Clash | 20 | 600 | -0.2 | **In-app page & section titles** |
| `card-title` | Inter | 16 | 600 | -0.1 | Dense card / table-group headers |
| `subhead` | Inter | 18 | 400 | -0.1 | Lead paragraphs |
| `body-lg` | Inter | 16 | 400 | 0 | Comfortable reading |
| `body` | Inter | 14 | 400 | 0 | **Default app body** |
| `body-strong` | Inter | 14 | 600 | 0 | Labels, emphasis, nav |
| `body-sm` | Inter | 13 | 400 | 0 | Secondary meta, table cells |
| `caption` | Inter | 12 | 500 | +0.1 | Badge text, footnotes |
| `metric` | Clash | 28 | 600 | -0.8 | KPI numbers |
| `button` / `button-sm` | Inter | 14 / 13 | 600 | 0 | Button labels |
| `eyebrow` | Inter | 12 | 600 | +0.6 | UPPERCASE section eyebrows / stat labels |
| `mono` | JetBrains | 13 | 400 | 0 | SKUs, IDs, code |

### Principles
- **Clash for voice, Inter for work.** Anything a user *reads to act* (tables, forms, values) is Inter. Anything that *sets tone* (titles, heroes, KPI numbers) is Clash.
- **Negative tracking scales with size** — aggressive at display (−1.6px), neutral at body (0). This is core to the premium feel; don't ship display type at default tracking.
- **Eyebrows track positive** (+0.6) and go UPPERCASE — the taxonomic counterpoint to negative-tracked display.

## Layout

### Spacing
4px base. Tokens: `xxs 4 · xs 8 · sm 12 · md 16 · lg 24 · xl 32 · xxl 48`. Vertical section rhythm splits by surface: **`section-app` 40px** inside the admin app (dense), **`section-market` 96px** on storefront/marketing (breathing). Card interior padding: `20px` (cards), `16–18px` (stat-cards, table cells), `24px` (modals).

### App shell (admin)
Fixed **sidebar** (248px, collapsible to 64px icon-rail) + sticky glass **topbar** (56px) + fluid content well with a **max content width of 1200px** and 24–32px page gutters. Content region uses a 12-column fluid grid; stat-card rows are 4-up (desktop) → 2-up (tablet) → 1-up (mobile).

### Storefront grid
Column-based **masonry** for product browsing: 5-up (ultrawide) → 4-up (desktop) → 3-up (tablet) → 2-up (mobile) with 12–16px gutters. Product images hold a 4:5 portrait ratio; the column count changes, not the ratio. Marketing feature rows alternate text/image left–right and stack text-over-image on mobile.

### Whitespace philosophy
In the app, the surface ladder *is* the separation — blocks lift onto `surface-1` cards rather than floating in whitespace. On the storefront, whitespace does the work: generous `section-market` gaps and tight image gutters so photography touches edge-to-edge.

## Elevation & Depth

Depth is expressed **differently per theme** — this is deliberate, not an oversight.

**Light — layered soft shadows** (warm-tinted, never pure black):

| Level | Shadow | Use |
|---|---|---|
| e0 | none | body, flush regions |
| e1 | `0 1px 2px rgba(17,17,15,.04), 0 4px 12px rgba(17,17,15,.05)` | resting cards, stat-cards, tables |
| e2 | `0 2px 4px rgba(17,17,15,.05), 0 8px 24px rgba(17,17,15,.08)` | hovered/interactive card lift |
| e3 | `0 4px 8px rgba(17,17,15,.06), 0 16px 40px rgba(17,17,15,.12)` | dropdowns, popovers, toasts |
| e4 | `0 8px 16px rgba(17,17,15,.08), 0 32px 64px rgba(17,17,15,.18)` | modals, drawers, command palette |

**Dark — surface ladder + hairline + edge-highlight** (Linear's method):

| Level | Treatment | Use |
|---|---|---|
| e0 | flat | body |
| e1 | `surface-1` + 1px `hairline` + `inset 0 1px 0 rgba(255,255,255,.04)` | cards, tables |
| e2 | `surface-2` + 1px `hairline-strong` | hovered/featured cards |
| e3 | `surface-2` + 1px `hairline-strong` + `0 8px 24px rgba(0,0,0,.4)` | dropdowns, popovers, toasts |
| e4 | `surface-2` + `0 24px 64px rgba(0,0,0,.55)` | modals, drawers, command palette |

The faint **top-edge inner highlight** on dark lifted surfaces gives the "crisply rendered" feel Linear is known for. Overlays are the only dark surfaces that carry a real drop shadow.

## Shapes

| Token | Value | Use |
|---|---|---|
| `xs` 4 | chips, tiny badges, checkboxes |
| `sm` 6 | inline tags, small controls |
| `md` 8 | **buttons, inputs, menu items** |
| `lg` 12 | **cards, panels, table container** |
| `xl` 16 | large panels, modals, drawers, product frames |
| `xxl` 24 | hero CTA panels (rare) |
| `pill` | chips, status pills, segmented control, toggle |
| `full` | avatars, round icon buttons |

No sharp-cornered interactive elements. Radius steps by role, not decoration: a control is always `md`, a card is always `lg`, an overlay is always `xl`.

## Motion & Animation

Motion is FashionFlow's headline premium layer. It is **purposeful** (communicates state, hierarchy, and spatial relationship — never ornament), **fast** (most interactions ≤ 200ms; nothing an active user repeats exceeds 320ms), **spring-based** for anything that moves through space, and **accessible** (every animation degrades under `prefers-reduced-motion`).

### Tokens
Durations `instant 80 · fast 140 · base 200 · slow 320 · slower 480` (ms). Easings: `standard` (default), `decelerate` (enters), `accelerate` (exits), `emphasized` (slight overshoot for delight). Springs: `snappy` (controls), `smooth` (cards/drawers/pages), `bouncy` (celebratory/AI-complete). Travel: `nudge 4 · rise 8 · slide 16 · sheet 100%`.

### Interaction catalog

| Interaction | Spec |
|---|---|
| **Button press** | `scale .97` @ `fast` `standard`; release settles via `snappy`. Hover: bg color flip @ `instant`. |
| **Card hover** (interactive) | `translateY(-8px)` + e1→e2 @ `base` `standard`. |
| **Focus ring** | 3px accent ring fades+expands from 0 @ `fast` `decelerate`. |
| **Toggle / checkbox** | knob slide / tick draw @ `base`/`fast` `emphasized` (the overshoot sells it). |
| **Tab underline** | indicator slides and width-morphs to the active tab @ `base` `standard`. |
| **Segmented control** | thumb is a shared element that slides between segments @ `base`. |
| **Dropdown / popover** | opacity 0→1 + `translateY(-16px)`→0 + `scale .98→1`, transform-origin top @ `base` `decelerate`. |
| **Modal** | scrim fade @ `base`; card `scale .96→1` + rise @ `slow` `spring.smooth`. Exit uses `accelerate`, faster. |
| **Drawer / sheet** | slides from edge (`sheet`→0) @ `slow` `spring.smooth`; scrim fades in parallel. |
| **Toast** | slide-in from bottom-right + fade @ `slow` `spring.snappy`; stack reflows via **FLIP**; 5s auto-dismiss with a depleting progress hairline. |
| **Command palette (⌘K)** | glass panel `scale .98→1` + rise @ `slow` `spring.smooth`; results cross-fade as the query changes. |
| **List / table / grid entrance** | items fade + rise `8px` with `stagger 40ms` (cap the stagger at ~8 items, then batch). |
| **KPI count-up** | numbers animate from 0 to value @ `slower` `decelerate`, triggered once via IntersectionObserver. |
| **Skeleton** | shimmer sweep L→R, 1.4s loop; opacity-pulse fallback under reduced-motion. |
| **Page / route transition** | outgoing content fades+lifts `accelerate` (fast); incoming fades+settles `decelerate` — orchestrated on Inertia visits. |
| **Sidebar collapse** | width morph @ `slow` `standard`; labels fade @ `fast` so text never squishes. |
| **AI streaming** | generated tokens fade in as they arrive; a shimmering accent hairline marks the "thinking" state; completion pulses a `spring.bouncy` check. |
| **Store switch** | brief content cross-fade to signal the tenant context changed. |

### Rules
- Animate **`transform` and `opacity` only** for anything on a hot path; avoid animating layout properties (width/height/top) except deliberate, contained cases (sidebar, accordion) — and prefer transforms/`grid-template` tricks there too.
- Add `will-change` only during the animation, then remove it.
- Respect **`prefers-reduced-motion: reduce`**: disable travel/scale/parallax and shimmer; keep opacity fades ≤ `fast` and instant state changes. Never remove *feedback*, only *movement*.
- Motion has a **budget**: one hero moment per view (page entrance, or a celebratory AI-complete), not many competing animations. Restraint is what reads as premium.

### Implementation note
CSS transitions/keyframes cover most of the catalog (press, hover, focus, tabs, skeleton, dropdowns). For spring physics and orchestration (drawers, toasts/FLIP, staggered lists, KPI count-up, page transitions) a small Vue motion layer is expected — **`motion-v`** (Motion for Vue) or **`@vueuse/motion`**. Adding it is a dependency decision to confirm at implementation time (per `CLAUDE.md`); the tokens above are library-agnostic. Vue's built-in `<Transition>`/`<TransitionGroup>` (with `Inertia`'s page lifecycle) drives enter/leave and FLIP list reflow without extra deps where springs aren't required.

## Premium Details (beyond Linear)

- **Glass surfaces**: sticky topbars and the command palette use `background @ 80–92% + backdrop-blur(12–20px)` over the ladder. The only place blur is allowed.
- **AI gradient wash**: the single sanctioned gradient — a `accent→info` wash at ≤8% alpha on `ai-panel` top edges and select storefront heroes. Marks "this is AI / this is a marketing moment." Never on chrome.
- **Dark edge-highlight**: `inset 0 1px 0 rgba(255,255,255,.04)` on lifted dark surfaces.
- **Accent focus glow** (dark): focus ring may carry a faint `0 0 0 3px accent@40%` glow; light mode stays crisp (no glow).
- **Optional grain**: a ~2% monochrome noise overlay on large empty canvases/heroes to avoid flat banding on OLED. Off by default; opt-in per surface.
- **Micro-restraint**: these are seasonings. If a view has AI panel + hero gradient + glass + count-ups all at once, cut back — one focal flourish per screen.

## Theming

Themes are CSS custom properties on `:root`, overridden under `html.dark`. The existing `useTheme` composable / theme store toggles the `.dark` class and persists preference (`light` / `dark` / `system`); no component reads a theme flag — they read tokens.

```css
:root {                      /* Gallery Porcelain */
  --color-canvas: #f5f4f2;  --color-surface-1: #ffffff;  /* …all light tokens… */
  --color-accent: #1f9e7a;
}
html.dark {                  /* Soft Ink */
  --color-canvas: #131518;  --color-surface-1: #1c1f24;  /* …all dark tokens… */
  --color-accent: #35c08a;
}
```

Tailwind (v3, `tailwind.config.js`) maps these to utilities via `colors: { canvas: 'var(--color-canvas)', … }` with `darkMode: 'class'`, so `bg-canvas`, `text-ink`, `border-hairline`, `text-accent` all follow the theme automatically. Radius/spacing/type tokens extend the theme the same way.

**Per-tenant storefront accent**: the platform/admin accent is fixed emerald, but a tenant's **storefront** may override `--color-accent` (and its hover/soft derivatives) at the storefront root to match their brand. Admin chrome never inherits a tenant override.

## Do's and Don'ts

### Do
- Reference **semantic tokens** (`{color.surface-2}`, `{color.accent}`); let the theme resolve them.
- Climb the surface ladder one rung for hierarchy; lift cards onto `surface-1`.
- Keep the accent scarce — one filled accent action per view.
- Use **ink** primary buttons in light, **emerald** in dark; reach for `button-accent` only when the action itself must read emerald in both.
- Pair Clash titles with Inter body; keep everything readable-to-act in Inter.
- Animate transform/opacity, honor reduced-motion, and spend the motion budget on one focal moment per view.
- Label every AI-generated surface with the `badge-ai` marker until a human reviews it.

### Don't
- Don't use `#000000` as the dark canvas — it's `#131518`.
- Don't tint body copy for emphasis — use weight and the ink ramp.
- Don't introduce a second chromatic accent; emerald is the only brand color.
- Don't add gradients or blur outside the two sanctioned cases (AI/hero wash, glass topbar/palette).
- Don't drop-shadow dark cards — use the ladder + hairline (overlays excepted).
- Don't ship display type at default letter-spacing.
- Don't animate layout properties on hot paths, and never remove *feedback* under reduced-motion — only *movement*.

## Responsive Behavior

| Name | Width | Key changes |
|---|---|---|
| ultrawide | 1920+ | content well holds 1200px; storefront masonry 5-up |
| desktop-lg | 1440 | default; sidebar expanded; stat-cards 4-up |
| desktop | 1280 | same; narrower gutters |
| tablet | 1024 | sidebar auto-collapses to 64px icon-rail; stat-cards 2-up; masonry 3-up |
| mobile-lg | 768 | sidebar → off-canvas drawer (hamburger); topbar search → icon; tables → stacked cards or horizontal scroll; masonry 2-up |
| mobile | 480 | single column; `display-*` scales down (hero 64→36); drawers/modals become bottom sheets; `section-market` 96→48 |

**Touch targets** ≥ 44×44px. Buttons sit at 38px visual height with expanded hit area to 44px on touch; icon buttons 34px visual / 44px target; table rows ≥ 44px on touch. **Tables** never shrink text below `body-sm`; below `md` they either scroll horizontally within a bordered container or reflow to stacked key–value cards (per-table choice). **Drawers/modals** dock to the bottom as sheets on mobile with a drag-to-dismiss affordance.

## Accessibility

- **Contrast** AA across both themes; verify token pairings, not just the defaults.
- **Focus** is always visible — the 3px accent ring appears on keyboard focus (`:focus-visible`), never suppressed. Never rely on color alone: pair status color with text/icon (e.g. "Low stock" label, not just amber).
- **Motion** honors `prefers-reduced-motion`.
- **Hit areas** meet 44px on touch regardless of visual size.
- **Semantics**: modals/drawers trap focus and restore it on close; the command palette and menus are keyboard-navigable; toasts announce via `aria-live`.

## Iteration Guide

1. Work one component at a time; reference it by its `components:` token name and resolve every `{color.*}` / `{typography.*}` / `{motion.*}` reference.
2. Decide the component's **surface rung** first, then its radius (by role), then its motion (from the catalog).
3. Default body to `{typography.body}` (Inter 14/400); reach for Clash only at `title` and above.
4. Keep the accent scarce; if a new element "needs" color, ask whether weight + surface can carry it instead.
5. Add component states as explicit variants (`-hover`, `-active`, `-focused`, `-disabled`, `-loading`), never bury them in prose.
6. Every new interaction maps to a motion token — no ad-hoc durations or easings.
7. Confirm both themes and the reduced-motion fallback before considering a component done.

## Known Gaps / Next

- **Charts**: analytics needs a data-viz palette derived from the emerald accent + a categorical ramp — not yet specified here (define before building the analytics module).
- **POS**: the point-of-sale surface likely needs a high-contrast, large-target "register" density variant beyond the standard app density.
- **Email/marketing templates**: campaign emails render outside this CSS-variable system and need a parallel inlined-style token map.
- **Illustration/empty-state art**: a consistent illustration style isn't defined; empty-states currently specify icon + copy only.
- **Component realization**: these are specs; the shared Vue primitives in `resources/js/shared/components/ui/` (currently Breeze defaults) need rebuilding against these tokens.
