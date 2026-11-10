---
name: Sergio Llenderrozos Portfolio
description: A restrained engineering portfolio grounded in specific work and authentic project evidence.
colors:
  background: "#f8f9fb"
  surface: "#eef1f5"
  text: "#172334"
  muted: "#536174"
  line: "#d7dee7"
  accent: "#2459be"
  accent-hover: "#194594"
  on-accent: "#ffffff"
  status: "#25634e"
  development: "#815213"
  selection: "#d9e6ff"
  dark-background: "#101721"
  dark-surface: "#1a2533"
  dark-text: "#edf1f7"
  dark-muted: "#aab7c9"
  dark-line: "#303e51"
  dark-accent: "#95b9ff"
  dark-accent-hover: "#bed3ff"
  dark-on-accent: "#101721"
  dark-status: "#9cd5bd"
  dark-development: "#edc684"
  dark-selection: "#2b436d"
typography:
  display:
    fontFamily: '"Onest Variable", sans-serif'
    fontSize: "clamp(3rem, 6.8vw, 5.6rem)"
    fontWeight: 550
    lineHeight: 1.04
    letterSpacing: "-.04em"
  headline:
    fontFamily: '"Onest Variable", sans-serif'
    fontSize: "clamp(1.8rem, 3vw, 2.5rem)"
    fontWeight: 550
    lineHeight: 1.2
    letterSpacing: "-.035em"
  title:
    fontFamily: '"Onest Variable", sans-serif'
    fontSize: "1.2rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-.02em"
  body:
    fontFamily: '"Onest Variable", sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: '"Onest Variable", sans-serif'
    fontSize: ".875rem"
    fontWeight: 500
    lineHeight: 1.65
rounded:
  tag: "4px"
  control: "6px"
  image: "12px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  xxl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: ".8rem 1.2rem"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  text-link:
    textColor: "{colors.text}"
    typography: "{typography.label}"
  technology-tag:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    rounded: "{rounded.tag}"
    padding: ".3rem .65rem"
  header-control:
    textColor: "{colors.text}"
    rounded: "{rounded.control}"
    size: "44px"
  project-image:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.image}"
    width: "100%"
---

# Design System: Sergio Llenderrozos Portfolio

## Overview

**Creative North Star: "Work as Evidence"**

The portfolio presents engineering work through open editorial rows, clear type, and authentic project screenshots. Its cool neutral canvas, navy text, and restrained blue accent support a professional, readable account of contributions. This describes the implemented visual world pinned in `.impeccable/surfaces/portfolio.md`.

Information remains visible in either language and theme. Fine separators establish rhythm; measured whitespace and text hierarchy do the organizing. Light is the default, with an explicitly selected dark alternative. A quiet, pointer-responsive field is confined to the hero and does not move the content.

**Key Characteristics:**

- Self-hosted Onest throughout, with fluid headings and readable supporting text.
- Cool neutral surfaces, navy text, and a single blue interaction accent.
- Open rows and thin separators, with authentic public project screenshots.
- Equivalent English and Spanish layouts, responsive stacking, and visible keyboard focus.

## Colors

The frontmatter records the exact semantic values from `src/styles/global.css`; `dark-` entries replace the matching light role when the root has the dark class.

### Primary

- **Restrained Blue** (`accent`, `accent-hover`, `on-accent`): primary action, role line, punctuation, link states, and keyboard focus. The dark accent is lighter, with dark text on filled actions.

### Neutral

- **Cool Paper** (`background`): the continuous page and sticky header canvas.
- **Soft Slate** (`surface`): quiet technology tags, control hover, and screenshot backing.
- **Deep Navy** (`text`): headings, important facts, and default links.
- **Reading Slate** (`muted`): descriptions, navigation, dates, and supporting information.
- **Fine Slate** (`line`): section, row, header, and contact separators.
- **Selection Blue** (`selection`): selected text, retaining the theme's text color.

The `status` and `development` colors are semantic exceptions for delivered and in-development project labels. Always pair the colored dot with explicit text.

**The Semantic Theme Rule.** Change the full semantic palette together; dark mode must retain text hierarchy, separator visibility, and readable filled actions.

## Typography

**Display and Body Font:** Onest Variable, with sans-serif fallback, self-hosted through `@fontsource-variable/onest` in the shared layout.

Onest supplies both the identity and reading voice. Medium variable weights and close heading tracking establish emphasis without introducing a second display face. The frontmatter owns the base display, headline, title, body, and action-label roles.

### Hierarchy

- **Display:** the two-line name. On mobile its size becomes `clamp(2.7rem, 11vw, 4rem)`; the desktop weight, line-height, and tracking remain.
- **Headline:** section headings. The contact heading uses `clamp(2rem, 3.7vw, 3rem)`, becoming `2rem` on mobile.
- **Title:** experience and supporting headings. Project titles use `clamp(1.4rem, 2.2vw, 1.8rem)` and `-.03em` tracking; mobile uses `1.5rem`.
- **Body:** comfortable base reading. The hero description uses `clamp(1.125rem, 1.8vw, 1.4rem)` within `38ch`; mobile uses `1.1rem` within `40ch`. Project descriptions use `1.125rem` with `1.5` line-height.
- **Label:** actions use the frontmatter label role. Dates and case labels use `.8rem`; tags and status use `.75rem`. Labels stay in natural case.

**The One Family Rule.** Build hierarchy with Onest size, weight, spacing, and color; preserve the shared reading voice across both locales.

## Layout

The centered container caps at `1120px`, with width `calc(100% - 96px)` above the tablet boundary. At `max-width: 900px`, its width becomes `calc(100% - 64px)`; at `max-width: 600px`, it becomes `calc(100% - 40px)`. These are inclusive maximum-width breakpoints.

Desktop sections use paired editorial columns rather than enclosed cards. The hero uses `1.12fr 1fr` with a `3rem` gap; section introductions use `1fr 1.12fr` with a `4rem` gap. Experience rows use `1fr 1.65fr`; screenshot-led project rows use `1fr 1.08fr` and a `48px` column gap. Tablet reduces gaps and adjusts column ratios. Mobile stacks the project title and status, then the screenshot, contribution, and link. The profile grid also becomes one column.

The spacing scale records recurring steps, not a restriction on component-specific measurements. Major sections begin after `48px`, use a top separator and `66px` top padding, then reduce to `40px` top padding on mobile. Experience rows use `32px` vertical padding, reduced to `28px` on mobile. Project rows have their own final separator and spacing.

The sticky header has an `88px` minimum inner height. On mobile it wraps into a `108px` minimum header: identity and controls first, all four navigation links below. Anchor clearance uses root scroll padding (`7rem`, mobile `9rem`) and section scroll margins. The header becomes static at heights of `480px` or less to keep the reading and focus area available. Preserve long translated labels and contact text without horizontal overflow.

## Elevation & Depth

There are no box shadows, floating cards, or backdrop blur in the implemented system. The sticky header is an opaque page-colored surface with a fine bottom border. Depth comes from typography, tonal tags, screenshot content, and thin separators. The hero alone uses a soft accent wash with fine circuit-like SVG traces, kept behind the text and outside the interaction tree.

**The Open Row Rule.** Organize experience and project content with whitespace and fine separators; retain their open page surface.

## Shapes

Controls and primary actions have gently rounded corners; tags use a smaller radius and screenshot crops a larger radius, as recorded in frontmatter. Screenshot frames clip overflow, preserve a `1.45` aspect ratio, and align the image crop to the top. Small circles mark statuses and decorative trace endpoints. Structural separators are `1px` lines.

## Components

### Buttons and links

The primary action is compact and clear: accent fill, contrasting text, a `48px` minimum height, and the frontmatter padding. Hover uses the accent-hover role with a `.2s ease-out` background transition. Text actions have a `44px` minimum height, an inline SVG arrow, and gain accent color and underline on hover.

All interactive elements use the global focus outline: `2px solid` accent with `5px` offset and `2px` outline corner radius. Preserve the skip link and native anchor behavior. No focus, hover, or animation is needed to reveal content.

### Technology tags and status

Technology tags are passive, compact labels on the surface tone, with `.75rem` text and the tag padding in frontmatter. They wrap with `.5rem` gaps. Project status is a dot plus natural-language text, using the appropriate semantic color; it is not an action.

### Navigation and controls

Navigation uses muted `.875rem` links with `.75rem` vertical padding; hover and an available `aria-current="location"` state use accent color. Mobile navigation uses `.8rem` text and `44px` minimum targets across a full-width second row. Header controls have `44px` minimum dimensions and surface-color hover. The theme toggle has a stable localized name and reports its state via `aria-pressed`. Language switching keeps the active section. Links that open another tab include a localized accessible description.

### Project rows

Authentic public screenshots establish evidence alongside the project title, category, explicit status, contribution details, wrapping technologies, and visit link. Screenshots have descriptive alternative text. Each featured project has a single explicit website link. Use a text-only row when a suitable real screenshot is unavailable. No generic card background or shadow surrounds the row.

### Earlier projects

Earlier projects sit below the featured rows under a smaller “Other projects” heading. Keep each entry compact: title, one short description, technologies, and demo/source links. Use the same flat surface and muted supporting text, with actions beside the text on desktop and below on mobile. Preserve earlier work, including games, without promoting it to a featured case study.

### Contact row

The email link spans its column with a thin bottom border and an inline SVG arrow. Hover changes both text and border to accent. Social links reuse the text-action treatment. Contact becomes a stacked section on mobile.

### Motion

A faint accent highlight follows a fine pointer inside the hero, updating at most once per frame and fading out on exit. Content remains static. On touch, with reduced motion, or without JavaScript, the background is static. Higher contrast and forced-colors preferences hide the background. Reduced motion also disables transitions and smooth scrolling.

## Do's and Don'ts

### Do:

- **Do** use semantic theme roles together and retain clear hierarchy in both themes.
- **Do** preserve Onest, open rows, fine separators, and authentic public project screenshots.
- **Do** verify both languages at 375, 768, and 1440px, visible keyboard focus, native anchors, and light fallback when storage or JavaScript is unavailable.
- **Do** pair project-status color with explicit text and maintain equivalent facts in both locales.

### Don't:

- **Don't** add a portrait, decorative illustration, hero statistics, or skill meters to this portfolio.
- **Don't** manufacture screenshots or use private enterprise records as visual evidence.
- **Don't** introduce elevated card stacks or decorative effects into the established flat editorial layout.
- **Don't** make content visibility depend on JavaScript, animation, hover, or theme storage.
