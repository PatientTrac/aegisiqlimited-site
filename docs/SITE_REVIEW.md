# AegisIQ Limited Corporate Site Review

## Executive decision

`aegisiqlimited.com` should be the corporate product-family hub, not the only place where a product's detailed pricing appears.

Each product site should own:

- the complete feature and workflow story;
- the live plan table and feature comparison;
- checkout or product-specific sales conversion;
- product-specific terms, disclosures, and risk notices;
- demonstrations, login, and support entry points.

The corporate site should own:

- AegisIQ Limited's identity and product-family narrative;
- product discovery and routing;
- concise product overviews;
- cross-product comparison;
- trust, governance, and company information;
- links to each product's source-of-truth pricing page.

## Why Wealth Ledger pricing must move to the Wealth Ledger site

The draft placed the entire AegisIQ Wealth Ledger pricing table on the corporate site while AegisIQ Equity already maintained pricing on `aegisiqequity.ai`. That creates inconsistent buyer journeys and two risks:

1. Product pricing can drift when a plan changes on one site but not another.
2. The corporate site begins to look like the Wealth Ledger site rather than the parent company for four applications.

Approved target:

- `https://aegisiqequity.ai/pricing`
- `https://aegisiqstockledger.com/pricing`
- `https://aegisiqwealthledger.com/pricing`
- `https://aegisiqfintech.com/pricing` or a product-specific enterprise-sales route

The corporate `pricing.html` page is now a pricing directory explaining this architecture and linking to each application.

## Main issues in the uploaded draft

### 1. The home page did not clearly distinguish company, suite, and product responsibilities

The draft mixed company history, shared-spine claims, product summaries, Wealth Ledger pricing, and investor-portal conversion. The revised home page gives the corporate site one job: explain the application family and route the user correctly.

### 2. Product pages were too shallow

Each product page contained a hero and six capability cards, but lacked:

- a complete workflow;
- target personas;
- a comparison section;
- product-specific pricing links;
- product-specific limitations and disclaimers;
- a clear explanation of how the product differs from the other AegisIQ applications.

The four revised corporate product pages now include those sections.

### 3. The visual treatment lacked product evidence

The draft relied mostly on gradients, text, and small symbolic shapes. It did not give visitors a premium visual understanding of the applications. The redesign adds original vector dashboard illustrations for:

- Equity research;
- Stock Ledger ownership control;
- Wealth Ledger accounting and owner reporting;
- Investor Portal operations;
- the corporate application network;
- security and governance controls.

These are product-interface illustrations rather than stock-photo memes, stick figures, or generic clip art.

### 4. Some statements could overstate implementation status

The draft asserted a universal `entity_id`, automatic cross-product flow, and four live platforms. Those claims should appear only when the relevant integration is implemented and tested. The revised copy describes product-family design and operating fit without claiming every cross-product connection is already live.

### 5. Placeholder corporate history remained public-facing

The `20XX` timeline placeholders undermined confidence. The redesign removes unverified history and uses verified company details:

- AegisIQ Limited;
- Hong Kong;
- incorporated 9 January 2026;
- BRN / UBI 79570488.

### 6. Translation controls implied more localization than the pages delivered

The draft language selector translated only limited interface strings while most page content remained English. The redesigned corporate pages remove the incomplete selector. It should return only when full-page translations and legal review are available.

### 7. The contact form was not operational

The draft stated that the form endpoint still required configuration. The redesign uses direct, explicit email actions until a tested form and consent workflow are connected.

## Revised information architecture

- `/` — corporate application-family home
- `/compare` — application comparison and selection
- `/pricing` — pricing directory linking to product sources of truth
- `/equity` — corporate Equity overview, features, workflow, personas, comparison, pricing link
- `/stock-ledger` — corporate Stock Ledger overview, features, workflow, personas, comparison, pricing link
- `/wealth-ledger` — corporate Wealth Ledger overview, features, workflow, personas, comparison, pricing link
- `/investor-portal` — corporate Investor Portal overview, features, workflow, personas, comparison, pricing link
- legal policy routes retained

## Visual standard

The corporate site now uses:

- deep navy and black surfaces;
- gold confidence cues;
- product-specific blue, gold, teal, and violet accents;
- premium dashboard and control-plane illustrations;
- large, modern typography;
- clear whitespace and strong hierarchy;
- responsive desktop and mobile layouts;
- no meme, cartoon, or stick-figure imagery.

## Final commercial rule

Do not duplicate detailed plan amounts on the corporate site unless all product sites consume a shared pricing source. Until then, product sites are authoritative and the corporate site links to them.
