## Purpose

Defines a distinctive, evidence-led portfolio experience that communicates Harold Peñaloza's verified frontend impact clearly across desktop, tablet, mobile, keyboard, and reduced-motion contexts.

## ADDED Requirements

### Requirement: The opening view establishes identity and proof
The opening view SHALL make Harold Peñaloza's name, Frontend Software Engineer role, core value proposition, availability, and primary contact/CV actions immediately scannable. It SHALL include concise proof drawn only from supported portfolio facts, including the five years of React experience and the test-pipeline improvement from roughly two hours to thirty minutes.

#### Scenario: Recruiter scans the first viewport
- **WHEN** a recruiter opens either locale at a desktop or mobile width
- **THEN** identity, role, positioning, at least one concrete proof point, and a primary next action are understandable without navigating to another page

### Requirement: Content hierarchy is evidence-led
The page SHALL present production experience before supporting projects and skills, SHALL prioritize outcomes over technology lists, and SHALL give experience, projects, capabilities, and contact visually distinguishable compositions rather than repeating one generic card treatment.

#### Scenario: Visitor scans the full page
- **WHEN** a visitor scrolls from the hero through contact
- **THEN** the visual rhythm differentiates each section while preserving a clear narrative from identity to proof to capabilities to contact

### Requirement: Local visual identity is portfolio-owned
The rendered site SHALL use a small local set of visual tokens and portfolio-specific components without loading or depending on `@harpeblue/signal`. The visual direction SHALL remain dark, technical, and recognizably HarpeBlue through deep navy surfaces, electric blue and cyan accents, strong editorial typography, precise borders, and restrained atmospheric effects.

#### Scenario: Dependency audit
- **WHEN** maintainers inspect installed runtime dependencies, compiled CSS, and component markup
- **THEN** no HarpeBlue Signal package, stylesheet import, token, theme, utility, or component class is required to render the portfolio

#### Scenario: Brand continuity review
- **WHEN** the redesigned page is compared with the existing identity
- **THEN** it remains recognizably dark and HarpeBlue while no longer looking like a sequence of Signal demonstration panels

### Requirement: Bilingual presentation stays structurally aligned
English and Spanish routes SHALL render the same sections, proof hierarchy, interaction set, and project order from aligned localized data structures. User-facing copy SHALL remain in localized data rather than being hardcoded into presentation components unless it is a proper noun or non-linguistic label.

#### Scenario: Locale comparison
- **WHEN** maintainers compare both locale routes at the same viewport
- **THEN** both routes expose equivalent information architecture and actions without layout failure caused by translated text length

### Requirement: Navigation remains complete at every width
The navigation SHALL provide working links to every advertised section plus a visible language switcher. At widths down to 320 CSS pixels, controls SHALL remain reachable without undiscoverable horizontal overflow, and the current interaction pattern SHALL support keyboard and touch input.

#### Scenario: Narrow mobile navigation
- **WHEN** a visitor uses the page at 320 to 390 CSS pixels
- **THEN** all section destinations and the locale switch can be found and activated without horizontal page scrolling

#### Scenario: Keyboard navigation
- **WHEN** a visitor traverses navigation and actions using only the keyboard
- **THEN** focus order follows the document, every control has a visible focus indicator, and in-page navigation lands below sticky UI

### Requirement: Page accessibility is resilient
The site SHALL use semantic landmarks and heading order, provide a skip link to main content, preserve meaningful link labels, meet WCAG AA text contrast for normal presentation, and avoid conveying essential meaning through color alone.

#### Scenario: Assistive navigation
- **WHEN** a screen-reader or keyboard user enters the page
- **THEN** they can skip repetitive navigation, identify page regions and headings, and understand the purpose of primary links

### Requirement: Motion respects user preference
Any non-essential entrance, hover, or atmospheric motion SHALL be subtle and SHALL be disabled or reduced when `prefers-reduced-motion: reduce` is active.

#### Scenario: Reduced motion is requested
- **WHEN** the operating system requests reduced motion
- **THEN** smooth scrolling, decorative animation, and transition-heavy effects do not run

### Requirement: Core content works without client JavaScript
All portfolio content, locale navigation, section navigation, CV access, project links, and contact links SHALL work in the server-rendered static HTML without requiring client-side JavaScript.

#### Scenario: Scripts are unavailable
- **WHEN** a visitor loads either route with client JavaScript disabled
- **THEN** the complete portfolio remains readable and every core navigation or outbound action remains usable

### Requirement: Responsive layouts avoid overflow
The page SHALL remain legible and free of unintended horizontal overflow from 320 CSS pixels through wide desktop viewports. Long proper nouns, technology labels, URLs, and localized phrases SHALL wrap without overlapping adjacent content.

#### Scenario: Responsive visual verification
- **WHEN** both locales are captured at representative mobile and desktop widths
- **THEN** no primary content is clipped, overlapped, or hidden and interactive controls retain usable target sizes
