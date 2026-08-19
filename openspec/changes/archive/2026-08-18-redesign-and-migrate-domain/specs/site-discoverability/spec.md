## Purpose

Defines the metadata, crawl discovery, social presentation, structured data, and static-delivery behavior needed for the portfolio to be accurately discovered and shared under its new domain.

## ADDED Requirements

### Requirement: Locale metadata is complete and consistent
Each locale SHALL publish a localized title and description together with its canonical URL, absolute language alternates, Open Graph title, description, URL, locale, site name, and preview image, plus Twitter large-image metadata.

#### Scenario: English metadata audit
- **WHEN** metadata is extracted from the English page
- **THEN** all search and social fields describe the English page and use absolute `https://harpeblue.com` URLs

#### Scenario: Spanish metadata audit
- **WHEN** metadata is extracted from the Spanish page
- **THEN** all search and social fields describe the Spanish page, identify the Spanish locale, and use the Spanish canonical URL

### Requirement: Social preview artwork is share-ready
The site SHALL expose a stable, absolute social preview image with HarpeBlue styling, a 1.91:1 sharing aspect ratio, meaningful alternative metadata where supported, and no dependency on a remote image service.

#### Scenario: Portfolio URL is shared
- **WHEN** a social crawler reads either locale page
- **THEN** it finds an accessible HarpeBlue-branded preview image hosted on `harpeblue.com`

### Requirement: Structured data uses verified facts
Each locale SHALL expose valid JSON-LD describing the page as a professional profile for Harold Peñaloza and linking only the verified public GitHub, LinkedIn, website, role, location, and project facts available in repository content.

#### Scenario: Structured data is parsed
- **WHEN** a search tool parses either locale page
- **THEN** it receives syntactically valid structured data whose URLs use the canonical domain and whose claims match visible portfolio content

### Requirement: Crawlers can discover both locales
The deployed site SHALL expose a robots policy that permits public crawling and points to a sitemap containing only the canonical English and Spanish URLs.

#### Scenario: Crawler requests discovery files
- **WHEN** a crawler requests `/robots.txt` and `/sitemap.xml`
- **THEN** both responses are available, reference `harpeblue.com`, and enumerate the two canonical locale routes without legacy-domain URLs

### Requirement: Brand browser assets are consistent
The site SHALL provide a recognizable HarpeBlue favicon in formats referenced by the document and SHALL publish a theme color that matches the redesigned dark interface.

#### Scenario: Browser renders page chrome
- **WHEN** a browser loads either locale
- **THEN** it can retrieve the referenced icon assets and use a dark HarpeBlue theme color

### Requirement: Static delivery remains lightweight
The production build SHALL pre-render both locale pages and discovery files, SHALL NOT ship a client-side application bundle for core presentation, and SHALL NOT require remote fonts, trackers, or third-party visual libraries.

#### Scenario: Production build is inspected
- **WHEN** maintainers build and inspect the generated output
- **THEN** all required routes and assets exist as static output and core presentation has no third-party runtime request requirement

### Requirement: Production build is verifiable
Repository implementation SHALL pass the configured Astro production build and SHALL provide visual checks for both locales at representative desktop and mobile widths before being considered complete.

#### Scenario: Implementation handoff
- **WHEN** maintainers prepare the change for review
- **THEN** the production build succeeds and the reported verification includes responsive visual evidence for English and Spanish
