## Purpose

Defines the public domain, locale URLs, contact identity, and migration behavior that keep every portfolio surface consistent with the `harpeblue.com` brand.

## ADDED Requirements

### Requirement: Canonical bilingual URLs
The site SHALL use `https://harpeblue.com/` as the canonical English URL and `https://harpeblue.com/es/` as the canonical Spanish URL. Each locale SHALL advertise absolute `en`, `es`, and `x-default` alternates, with `x-default` resolving to English.

#### Scenario: English metadata
- **WHEN** a crawler requests the English page
- **THEN** the page declares `https://harpeblue.com/` as canonical and publishes English, Spanish, and x-default alternates on `harpeblue.com`

#### Scenario: Spanish metadata
- **WHEN** a crawler requests the Spanish page
- **THEN** the page declares `https://harpeblue.com/es/` as canonical and publishes the same aligned locale alternates

### Requirement: Repository-owned identity is consistent
Repository metadata, maintainer guidance, site configuration, visible portfolio content, and public downloadable documents SHALL identify this portfolio and repository as `harpeblue.com` and SHALL use the current GitHub repository URL. References that describe the separate HarpeBlue Signal project SHALL remain unchanged.

#### Scenario: Stale identity audit
- **WHEN** maintainers search text and extract text from public binary documents
- **THEN** no stale `harpeblue.dev` portfolio, repository, canonical, demo, or contact reference remains in repository-owned content

#### Scenario: Signal remains a project
- **WHEN** visitors inspect the project showcase after the site stops consuming Signal CSS
- **THEN** HarpeBlue Signal remains identified as a separate project with its own repository, demo, and verified description

### Requirement: Public contact identity uses the new domain
Visible email actions and the public CV SHALL use `hello@harpeblue.com`. The mailbox SHALL be verified operational before the new site is made canonical in production.

#### Scenario: Visitor starts an email
- **WHEN** a visitor activates an email contact action
- **THEN** the action opens a message addressed to `hello@harpeblue.com`

#### Scenario: Mailbox is not ready
- **WHEN** deployment verification cannot confirm that `hello@harpeblue.com` receives mail
- **THEN** production cutover is treated as incomplete rather than publishing a broken primary contact path

### Requirement: Public CV remains safe and current
The public English CV SHALL show the new domain and email address, preserve the supported professional facts already present in the portfolio, and SHALL NOT expose a private phone number or local source-file path.

#### Scenario: Recruiter downloads the CV
- **WHEN** a visitor downloads the public CV
- **THEN** its visible and extractable text uses `harpeblue.com` and `hello@harpeblue.com` without a phone number or local filesystem URL

### Requirement: Domain aliases preserve navigation
The production deployment SHALL permanently redirect `www.harpeblue.com`, `harpeblue.dev`, and `www.harpeblue.dev` requests to the HTTPS apex `harpeblue.com` host while preserving the requested path and query string.

#### Scenario: Legacy Spanish URL
- **WHEN** a visitor requests `https://www.harpeblue.dev/es/` with any query string
- **THEN** the deployment returns a permanent redirect to the equivalent `https://harpeblue.com/es/` URL with that query string preserved

#### Scenario: New www alias
- **WHEN** a visitor requests a route on `https://www.harpeblue.com`
- **THEN** the deployment permanently redirects to the same route on `https://harpeblue.com`

### Requirement: Locales preserve proper nouns
English and Spanish pages SHALL preserve the exact spellings of Harold Peñaloza, HarpeBlue, HarpeBlue Signal, Ubidots S.A.S., Omarchy, and Terminal Lab and SHALL protect rendered proper nouns from browser translation where practical.

#### Scenario: Spanish page rendering
- **WHEN** the Spanish page is rendered or browser translation is offered
- **THEN** protected proper nouns retain their required spelling and the visible CV label remains `CV`
