---
name: Cyber-Sovereign Professional
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#f8f5f5'
  on-tertiary: '#313030'
  tertiary-container: '#dcd9d8'
  on-tertiary-container: '#5f5e5e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 80px
  section-gap: 120px
  container-max: 1280px
---

## Brand & Style

The design system is anchored in the principles of **Cognitive Sovereignty** and **Attention Conservation**. It is a system built for high-performance business environments where clarity is a premium and mental bandwidth is a finite resource. The aesthetic balances deep-tech sophistication with institutional reliability.

The visual style is **Corporate Modern with a Cyber-Technical Edge**. It utilizes a "Dark Mode First" approach to reduce eye strain (Attention Conservation) and high-contrast neon accents to direct focus toward critical path actions. The interface feels like a secure, high-end command center—precise, unpolluted, and authoritative. Elements are spaced to allow for rapid scanning, ensuring the user remains in total control of their information environment (Cognitive Sovereignty).

## Colors

The palette is strictly curated to maintain a low-stimulus, high-focus environment. 

- **Foundation:** A near-black background (`#050505`) minimizes light emission, while tiered grays define the information architecture.
- **Primary:** Neon Cyan (`#00F0FF`) is used exclusively for active states, indicators of progress, and interactive cues. It represents the "energy" of the system.
- **Functional White:** Pure white is reserved for high-level headings and primary buttons to ensure maximum legibility.
- **Subtle Boundaries:** Borders use low-contrast grays to define structure without creating visual noise.

## Typography

Typography is used to create a clear informational hierarchy. 

**Hanken Grotesk** serves as the primary display face, offering a sharp, contemporary feel that communicates professional precision. **Inter** handles the bulk of the reading experience, chosen for its neutral, highly legible character that supports "Attention Conservation." **JetBrains Mono** is introduced for meta-data and labels to lean into the technical "Business Essentials" narrative, suggesting a system that is as rigorous as code.

Vertical rhythm is strictly maintained with a 4px baseline grid. Headlines should utilize tight letter-spacing for a "locked-in" look.

## Layout & Spacing

The layout philosophy follows a **12-column Fixed Grid** on desktop, transitioning to a fluid single column on mobile. 

- **Rhythm:** All margins and paddings are multiples of 8px. Large section gaps (120px+) are intentional to allow the eye to rest and to isolate complex concepts, preventing cognitive overload.
- **Density:** High-density grids are used within cards for technical specs, while landing sections use generous whitespace to emphasize high-level value propositions.
- **Alignment:** Content is predominantly left-aligned to mimic natural reading patterns, supporting the "Attention Conservation" goal by reducing eye movement.

## Elevation & Depth

This design system avoids traditional drop shadows in favor of **Tonal Layering and Inner Glows**.

- **Surface Tiers:** The background is the lowest level. Surface containers (cards) use a subtle shift to `#111111` with a 1px solid border in `#222222`.
- **Active State Elevation:** Interactive elements do not "lift" off the page; instead, they "ignite." Use a subtle inner-glow or a outer-bloom effect using the Primary Cyan color to indicate focus.
- **Glassmorphism:** Use only for persistent navigation bars, employing a heavy backdrop blur (20px) and a semi-transparent dark tint to maintain context while keeping text legible.

## Shapes

The shape language is "Soft-Technical." Sharp corners are avoided to prevent the UI from feeling aggressive, but large radii are also shunned to avoid looking "consumer-grade" or overly casual.

- **Standard Radius:** 4px (Soft) for buttons, inputs, and small cards.
- **Container Radius:** 8px (Rounded-lg) for large section containers or complex dashboards.
- **Iconography:** Use line-based icons with a 2px stroke weight. Avoid filled icons unless used as a status indicator.

## Components

### Buttons
- **Primary:** Solid White background, Black text. No radius (sharp) or 4px radius. On hover, a Cyan 2px bottom border or glow appears.
- **Secondary:** Transparent background, 1px White border. White text.
- **Ghost:** Transparent background, Cyan text, Monospaced font.

### Cards
- Cards use a subtle `#111111` fill. Headers inside cards should use a 1px Cyan bottom divider if the card contains multiple data points. 

### Inputs
- Dark backgrounds (`#0A0A0A`) with a 1px border that turns Cyan on focus. Labels should use the `label-caps` (JetBrains Mono) style to feel like "form entries."

### Chips/Tags
- Small, rectangular with 2px radius. Use a Cyan background at 10% opacity with Cyan text for technical tags.

### Lists
- Use Cyan-colored numerals or geometric bullets (squares) to denote items, reinforcing the structured nature of the "Business Essentials" offering.
