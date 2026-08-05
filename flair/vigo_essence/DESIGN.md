---
name: Vigo Essence
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#524342'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0ef'
  outline: '#857371'
  outline-variant: '#d7c2c0'
  surface-tint: '#8a4e4a'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#370d0c'
  on-primary-container: '#b5726e'
  inverse-primary: '#ffb3ae'
  secondary: '#7f5527'
  on-secondary: '#ffffff'
  secondary-container: '#fdc48c'
  on-secondary-container: '#784f21'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1e1c0f'
  on-tertiary-container: '#888472'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad7'
  primary-fixed-dim: '#ffb3ae'
  on-primary-fixed: '#370d0c'
  on-primary-fixed-variant: '#6d3734'
  secondary-fixed: '#ffdcbd'
  secondary-fixed-dim: '#f4bc84'
  on-secondary-fixed: '#2c1600'
  on-secondary-fixed-variant: '#643e12'
  tertiary-fixed: '#e8e3cd'
  tertiary-fixed-dim: '#ccc7b2'
  on-tertiary-fixed: '#1e1c0f'
  on-tertiary-fixed-variant: '#4a4737'
  background: '#fcf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'
  surface-cream: '#FFF9E3'
  ink-deep: '#340A0A'
  accent-gold: '#AD7D4B'
  neutral-light: '#F4F4F4'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-bold:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.03em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap-lg: 120px
  section-gap-md: 80px
---

## Brand & Style

The design system is rooted in **Modern Minimalism with a Premium Editorial flair**. It targets a discerning audience that values both high-performance utility and sophisticated aesthetics. The UI evokes a sense of "technical luxury"—where precision engineering meets high-fashion styling.

The visual language is characterized by expansive whitespace, a warm and intentional color palette, and a sharp, structured layout. Drawing inspiration from high-end performance apparel, the system prioritizes clarity and bold imagery to create an aspirational shopping experience. The emotional response is one of confidence, quality, and effortless style.

## Colors

The palette is anchored by a rich, authoritative **Deep Burgundy/Brown** (`#340A0A`) which serves as the primary driver for text and high-importance UI elements. This is balanced by a warm **Cream** (`#FFF9E3`) background, which softens the overall aesthetic compared to pure white, providing a more premium, "tailored" feel.

The **Golden Brown** (`#AD7D4B`) is used sparingly as an accent for call-to-actions and interactive highlights, creating a cohesive visual thread that connects to the brand's monogram. High-contrast blacks and light greys from the reference material are reserved for utility icons and secondary text to maintain legibility without overpowering the warm brand tones.

## Typography

This design system utilizes a dual-sans-serif approach to bridge the gap between editorial elegance and functional readability. 

**Hanken Grotesk** is the primary display face. It is used for headlines and labels to provide a sharp, contemporary edge. For large display titles, tight letter-spacing and heavy weights are encouraged to create a bold, "fashion-first" impact.

**Manrope** is used for all body and descriptive text. Its balanced proportions and modern construction ensure high legibility at smaller scales, maintaining a clean and professional appearance across long-form content and product descriptions. All labels use uppercase styling with slight tracking for a refined, institutional look.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid** model. Content is contained within a maximum width of 1440px for desktop clarity, but sections often use full-bleed imagery to create an immersive experience.

A strict 8px grid governs all micro-spacing. High-level sections are separated by significant vertical gaps (`section-gap-lg`) to enforce the minimalist aesthetic. 

- **Desktop:** 12-column grid, 64px outer margins, 24px gutters.
- **Tablet:** 8-column grid, 40px outer margins, 20px gutters.
- **Mobile:** 4-column grid, 20px outer margins, 16px gutters. Elements should stack vertically, prioritizing large-scale product imagery.

## Elevation & Depth

To maintain a "High-Performance" aesthetic, this design system avoids heavy shadows. Instead, it relies on **Tonal Layering** and **Crisp Outlines**.

1.  **Surfaces:** The primary background is the Cream (`#FFF9E3`). Secondary areas (like sidebar filters or cart drawers) use a light Neutral-light (`#F4F4F4`) to create subtle distinction.
2.  **Borders:** Use thin, low-opacity borders (1px) in the primary color at 10% opacity for card containers and input fields.
3.  **Active States:** Interactive elements like hover states on cards should use a very subtle "lift" effect—either a 1% scale increase or a very soft, diffused ambient shadow (`0 10px 30px rgba(52, 10, 10, 0.05)`).

## Shapes

The shape language is **Soft and Precise**. A consistent 4px (`0.25rem`) corner radius is applied to most UI elements (buttons, inputs, cards) to maintain a modern, "tailored" appearance that isn't overly aggressive or too playful.

- **Buttons & Inputs:** Use the standard `rounded` (4px).
- **Product Images:** Should remain sharp (0px) or use the standard `rounded` for a slightly softer look.
- **Special Accents:** Pill-shapes are reserved exclusively for "New" or "Sale" status badges to make them distinct from functional UI buttons.

## Components

### Buttons
Primary buttons are solid Deep Burgundy (`#340A0A`) with Cream text. They are large, with generous horizontal padding (32px) and no border. Secondary buttons use an outline of the Deep Burgundy with the Golden Brown accent text for hover states.

### Product Cards
Cards are borderless with a focus on high-resolution imagery. The product title and price are set in Hanken Grotesk. Hovering over a card should trigger a secondary "Quick Add" button that slides up from the bottom or a clean color-swatch selector.

### Mega-Menus
The navigation uses a full-width mega-menu approach. Content is organized into clear columns with the Primary color used for category headings and the Secondary/Accent color used for "Featured" or "New Arrival" links.

### Input Fields
Fields use a minimalist design: a bottom border only, or a very light 4-sided border in the Cream-darkened shade. The focus state is signaled by the border color shifting to the Golden Brown accent.

### Navigation
The header is sticky and transparent on hero sections, transitioning to a solid Cream background on scroll. Icons for the cart and profile are thin-stroke (1.5px) to match the refined typography.