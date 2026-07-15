# FashionFlow AI — Product Requirements Document

**AI-Powered Fashion Commerce & Growth Platform**
Condensed Markdown reference derived from the source PRD (`FashionFlow-AI-PRD (1).pdf`, v1.0 — Engineering Build Reference / Extended Edition, 72 pages). Concrete numbers, entity names, state machines, and business rules are preserved. Narrative chapters (12. User Flows, 19. User Stories, 20. Complete Business Scenarios) are pointer-noted rather than reproduced verbatim — they mostly restate the workflows, personas, and rules already captured structurally below. Consult the original PDF for full narrative walkthroughs.

---

## Part I — Product Foundations

### 1. Executive Summary

**1.1 Overview** — FashionFlow AI is a multi-tenant SaaS platform for clothing stores, fashion brands, boutique owners, and online fashion businesses. It unifies product management, inventory, POS, order management, CRM, marketing automation, analytics, and generative AI into one operating system for fashion commerce. Every entity (product, variant, campaign, customer segment) is modeled around apparel-retail realities — size/color matrices, seasonal collections, style-driven merchandising, visually-led marketing — rather than being a generic commerce platform.

**1.2 The Business Problem** — Fashion retailers stitch together 4–6 disconnected tools today:

| Function | Typical tool today | Problem |
|---|---|---|
| Inventory & POS | Shopify, Square, Lightspeed | No fashion-specific variant/size intelligence |
| Marketing | Meta Ads Manager, Mailchimp | Not connected to real inventory or sales data |
| Design/Content | Canva, Photoshop, freelancers | Slow, expensive, disconnected from catalog |
| Customer Management | Spreadsheets, basic CRM | No segmentation tied to purchase behavior |
| Analytics | Google Analytics, manual spreadsheets | Fragmented, not fashion-specific, no AI insight |

**1.4 Vision** — Become "the default operating system for fashion businesses."

**1.5 Objectives** — O1 Unify Operations · O2 Automate Growth (AI content/campaigns/recommendations) · O3 Improve Decision-Making (fashion-specific analytics/AI) · O4 Increase Retention & Revenue · O5 Scale to Multi-Branch Retailers.

**1.6 Success Metrics/KPIs**

| Category | KPI | Target definition |
|---|---|---|
| Adoption | Active stores (weekly) | ≥1 core action (order, product edit, campaign) per week |
| Activation | Time-to-first-sale | Median signup → first recorded order |
| AI Engagement | AI feature adoption rate | % of active stores using ≥1 AI feature/month |
| Retention | Store churn rate | % of stores canceling subscription/month |
| Revenue Impact | Merchant GMV growth | % revenue increase QoQ after adoption |
| Marketing Effectiveness | Campaign-attributed revenue | % of merchant revenue traceable to in-platform campaigns |
| Platform Health | System uptime | ≥99.9% monthly uptime |

### 2. Product Vision

**2.1 Why FashionFlow AI Exists** — A single style can explode into 20+ sellable variants (size × color × fit); trends make products time-sensitive; visual merchandising/content drives conversion far more than other retail categories; fashion customers respond strongly to segmentation (VIP, frequent, seasonal). Generic commerce platforms ignore all of this.

**2.2 Differentiation**

| Dimension | Shopify | FashionFlow AI |
|---|---|---|
| Product Model | Generic product/variant model | Native size/color/fit variant matrix with fashion-specific attributes |
| Marketing | Requires third-party apps | Native campaign engine tied directly to inventory & customer segments |
| AI Content | Limited/plugin-based | Native AI Product Writer, Fashion Designer, Campaign Generator |
| Analytics | Generic commerce analytics | Fashion-specific (slow-moving styles, sell-through, seasonal performance) |
| Design Tools | None (Canva/Photoshop) | Native AI Fashion Designer for prints, patterns, collections |

vs. traditional POS (Lightspeed/Square): those ring up sales and track register stock only — no marketing, CRM, or content. FashionFlow treats POS as one module feeding the same real-time inventory/customer/analytics engine used by marketing and AI. vs. standalone inventory systems: FashionFlow's inventory is deeply integrated — a low-stock event can trigger an AI recommendation to pause a campaign, or the AI Store Assistant can proactively recommend which slow-moving styles to discount.

**2.3 Competitive Advantages** — (1) Vertical specialization, (2) AI as a core capability not a bolt-on, (3) unified data model (no reconciliation), (4) built for multi-branch retailers from day one, (5) real-time operations via WebSocket infrastructure.

### 3. User Personas

| Persona | Role | Key needs | Permissions |
|---|---|---|---|
| Layla | Store Owner (2-branch boutique) | Grow revenue, understand ROI, spend less time on admin, control pricing/discounts | Full account owner — all modules, billing, admin |
| Omar | Marketing Manager | Launch campaigns fast without an agency, AI-generated ad copy/creative, prove ROI | Full Marketing/Campaigns/Landing Pages/Analytics (marketing-scoped); read-only Inventory/Finance |
| Mona | Sales Employee (POS) | Fast checkout, cross-branch stock lookup, purchase-history visibility | POS + Order creation, read-only Product/Inventory, no Marketing/Analytics/Settings |
| Karim | Warehouse Employee | Accurate stock counts, efficient receiving, fulfillment | Full Inventory/PO/Supplier access, fulfillment status updates, no Customer PII/Analytics |
| Platform Admin | Internal FashionFlow staff | Platform uptime, merchant support, fraud/abuse monitoring, subscription plan admin | Cross-tenant, scoped + audit-logged; no silent billing/PII access |

### 4. User Roles & Permission Matrix

**4.1 Roles** — **Platform Admin** (cross-tenant, internal staff, manages the platform not a store's day-to-day) · **Store Owner** (single account, may own multiple stores/branches, full control incl. billing) · **Manager** (one or more assigned branches, elevated operational access, no billing/delete) · **Employee** (one assigned branch; sub-typed by **Department** — Sales Floor / Warehouse / Customer Support — for finer-grained restriction without proliferating role types).

**4.2 Ownership rules** — A Store is always owned by exactly one Store Owner account. Ownership transfer requires explicit confirmation from both parties and is audit-logged. A Store Owner may own multiple stores (multi-branch or multi-brand); each store has independent settings/catalog/staff but can optionally share a customer database (account-level config). Deleting a Store Owner account requires transferring or deactivating all owned stores first.

**4.3 Permission matrix** (F = Full CRUD/Delete, W = Write no-delete, R = Read-only, X = No access, C = Configurable by Store Owner)

| Module | Platform Admin | Store Owner | Manager | Employee (Sales) | Employee (Warehouse) |
|---|---|---|---|---|---|
| Store Settings | R (support only) | F | R | X | X |
| Billing & Subscription | R (support only) | F | X | X | X |
| Products & Catalog | X | F | F | R | R |
| Categories/Brands/Collections | X | F | F | R | R |
| Inventory & Stock | X | F | F | X | F |
| Suppliers & Purchase Orders | X | F | F | X | F |
| Orders (Online) | X | F | F | W (create/update status) | W (fulfillment only) |
| POS (Walk-in) | X | F | F | F | X |
| Customers / CRM | X | F | F | R (own interactions) | X |
| Messaging Center | X | F | F | W | X |
| Marketing & Campaigns | X | F | C (default: F) | X | X |
| Landing Pages / Storefront | X | F | C (default: W) | X | X |
| Analytics & Reports | X | F | F (branch-scoped) | X | X |
| AI Features | X | F | C (default: W) | X | X |
| Notifications (own) | F | F | F | F | F |
| User & Role Management | X (platform users only) | F | W (within branch, cannot create Managers) | X | X |
| Platform Administration | F | X | X | X | X |

**4.4 Access restriction rules** — Managers cannot create/promote to Manager or Store Owner (Store Owner only). Sales Employee refund cap default **$100 equivalent**, above requires Manager/Owner approval. Warehouse Employee never sees customer PII in fulfillment views (shipping label data only). Platform Admin access to merchant data is read-only by default, restricted to support necessity.

**4.5 Admin impersonation** — Time-boxed (default **30 min**, extendable with re-justification); fully audit-logged (admin identity, target, timestamp, actions); persistent UI banner while impersonating; cannot change billing/payment details or bulk-export customer PII.

### 5. Complete Business Workflow

**5.1 End-to-end lifecycle:** Store Registration → Onboarding (business profile, branding, currency, timezone) → Store Setup (branches, staff invites, payment methods, tax) → Products (catalog, categories, brands, variants) → Inventory (stock, suppliers, POs) → Customers (auto-created via orders, CRM enrichment, segmentation) → Orders (online + POS, fulfillment, refunds) → Marketing (audience from CRM segments + catalog) → Campaigns (scheduled, sent, tracked) → Analytics (sales/campaign/inventory/customer dashboards) → AI (cross-cutting: content generation, forecasting, recommendations feed back into every stage) → Business Growth (repeat purchase, retention, branch expansion).

Key rule: a Store isn't eligible to accept live orders until it has at least one configured payment method (§11.2). AI is not a separate final stage but cross-cutting — it writes product content at the Products stage, forecasts stock at the Inventory stage, generates campaign creative at Marketing, and surfaces proactive recommendations at every stage via the AI Store Assistant.

**5.3 Cross-module interactions**

| Trigger | Source | Effect | Target |
|---|---|---|---|
| Order placed | Orders/POS | Stock decremented; customer profile updated | Inventory, CRM |
| Stock falls below threshold | Inventory | Low-stock notification; AI may suggest pausing related campaigns | Notifications, AI, Marketing |
| Campaign launched | Marketing | Real-time progress notification; analytics tracking begins | Notifications, Analytics |
| Customer inactive 60+ days | CRM | Reclassified "Inactive"; may trigger win-back campaign suggestion | AI, Marketing |
| Purchase Order received | Suppliers | Inventory stock increased; transaction logged | Inventory |
| Refund processed | Orders | Stock optionally restocked; customer LTV recalculated | Inventory, CRM, Analytics |

---

## Part II — Product Specification

### 6. Product Modules

Each module below follows: Purpose · Entities · Business Rules (selected) · Permissions · Notable Edge Cases.

#### 6.1 Authentication Module
**Purpose:** Securely identify/authenticate every user and manage account lifecycle.
**Entities:** `User`, `Session`, `OtpCode`, `RecoveryCode`, `SocialAccount`, `LoginAttempt`.
**Business rules:** Email verified before a Store Owner can accept live payments. Phone OTP required before SMS/WhatsApp notifications. **2FA mandatory for Store Owners** once the store has processed its first live payment (optional for Managers/Employees). Recovery codes regenerate on 2FA setup (invalidating previous ones). 5 failed logins in 15 min → 15-min lockout + email alert.
**Validation:** Password ≥8 chars, 1 number + 1 letter. Email RFC format, unique per platform (not per store). Phone validated E.164 before OTP. OTP: 6 digits, expires 10 min, single-use.
**Edge cases:** Social login with an email already registered via password → prompt to link accounts (no duplicate). OTP requests rate-limited to 1/60s per phone number. Account deletion blocked while Stores are owned/unresolved.

#### 6.2 Store Management Module
**Purpose:** Core identity, branding, and configuration of each Store (and branches).
**Entities:** `Store`, `Branch`, `Branding`, `SubscriptionPlan`, `StoreSettings`, `SocialAccountLink`.
**Business rules:** A Store must always have ≥1 active Branch (last one can't be deleted, only deactivated via full store closure). Currency/timezone set at Store level, inherited by Branches; changing currency after transactions exist requires explicit confirmation and never retroactively converts historical figures. Subscription downgrades that would exceed the new plan's limits (branch/staff count) are blocked until usage is brought within limits.
**Permissions:** Store Owner full control; Manager read-only on Store profile, can update Branch operational settings (hours, contact) if granted.
**Edge cases:** Deleting a Branch with open (unfulfilled) Orders is blocked with an explicit error listing the blocking orders.

#### 6.3 Products Module (Categories, Brands, Collections, Variants)
**Purpose:** Central catalog management for all sellable items.
**Entities:** `Product`, `Category`, `Brand`, `Collection`, `Tag`, `ProductVariant`, `ProductImage`.
**Relationships:** A Product belongs to one Category, optionally one Brand, and many Collections/Tags. A Product has many ProductVariants (e.g. Black/M, White/XL), each with its own SKU, barcode, optional price override, cost, and stock count (stock lives in Inventory module, 1:1 per variant). A Product has many ProductImages (product-level or color-specific).
**Business rules:** A Product cannot be Active without ≥1 Variant carrying a price and valid SKU. SKU unique within a Store (not globally). Deleting a Category with assigned Products is blocked; merchant must reassign or the system offers "Uncategorized." Archiving a Product hides it from storefront but preserves historical Order line-item references (soft-delete pattern). Draft status is never visible on storefront regardless of stock. Discount price must always be < base price (rejected otherwise).
**Validation:** Title 3–150 chars. Price positive, ≤2 decimals. SKU alphanumeric 3–40 chars, unique/store. ≥1 image required before Draft→Active.
**Permissions:** Owner/Manager full CRUD. Sales/Warehouse Employee read-only, no price/description edit.
**Edge cases:** Bulk CSV import with a duplicate SKU → row flagged/skipped, rest proceeds (partial import + downloadable error report). A Variant hitting 0 stock while featured in an active Campaign is NOT auto-removed, just flagged "sold out — review." Manual "merge products" tool reconciles accidental double-entries and reassigns historical order references.

#### 6.4 Inventory Module
**Purpose:** Track/manage stock levels per variant across branches; manage the supply chain that replenishes it.
**Entities:** `StockLevel` (per Variant, per Branch), `InventoryAdjustment`, `InventoryTransaction`, `LowStockAlert`.
**Business rules:** Stock cannot go negative under normal sales flow (blocked at checkout/POS). Every stock change is attributable to an `InventoryTransaction` type: `sale`, `return`, `manual_adjustment`, `purchase_order_receipt`, `transfer`. Low-stock threshold defaults to **5 units/variant**, configurable globally or per-product. "Out of Stock" auto-applies at 0 and auto-clears when stock > 0 again (manual override possible for pre-order scenarios). Inter-branch transfers create two linked transactions (`transfer_out` / `transfer_in`), each branch's history independently auditable.
**Concurrency:** Two POS terminals selling the last unit simultaneously → row-level locking/optimistic concurrency on `StockLevel`; the second transaction is rejected in real time ("no longer available").
**Permissions:** Owner/Manager full access incl. manual adjustments. Warehouse Employee full access to adjustments/PO receiving. Sales Employee read-only stock lookup.
**Edge cases:** Partial PO receipt (80 of 100) keeps PO "Partially Received" until the remainder arrives or is manually closed. Damaged returns can be marked "damaged — do not restock" (zero stock impact + manual_adjustment note).

#### 6.5 Suppliers & Purchase Orders Module
**Purpose:** Manage supply chain — who merchants buy from and what/when they've ordered.
**Entities:** `Supplier`, `PurchaseOrder`, `PurchaseOrderLineItem`.
**Business rules:** Once a PO is marked "Sent," line items lock (qty/cost can't be edited — only cancel + re-create) to preserve an accurate ordering record. Cancelling a partially-received PO voids only the outstanding/unreceived portion. Suppliers with existing POs can't be hard-deleted, only archived.
**Edge cases:** Supplier sends more units than ordered — receiving screen allows recording actual received qty with a merchant-review flag. If a PO line item's product is deleted from the catalog, the line item retains a name/SKU snapshot so historical POs stay legible.

#### 6.6 Orders & POS Module
**Purpose:** Manage the full sale lifecycle — online or in-person — from creation through fulfillment, payment, and refund.
**Entities:** `Order`, `OrderLineItem`, `OrderStatusHistory`, `Payment`, `Refund`, `Coupon`, `Invoice`.
**Order status pipeline:**

| Status | Meaning | Who sets it |
|---|---|---|
| Pending | Placed, payment not yet confirmed | System (checkout) |
| Processing | Payment confirmed, awaiting fulfillment | System (webhook) / Staff |
| Fulfilled | Handed over (POS) or shipped (online) | Staff |
| Cancelled | Voided before fulfillment | Staff (with permission) |
| Refunded | Fully/partially refunded post-fulfillment | Staff (with refund permission) |

**Business rules:** Stock decrements at `Processing` for online orders (payment confirmed), or immediately at sale completion for POS — **never at Pending**, to avoid holding stock hostage to abandoned carts. A Coupon cannot combine with another Coupon in the same order (no stacking) unless explicitly flagged "stackable." Refunds cannot exceed the original payment amount (cumulative tracking). A refund auto-triggers a `return` InventoryTransaction restoring stock unless staff explicitly marks the item damaged/non-restockable. Orders placed via POS attribute to the Branch + staff member who processed them. Taxes calculated at the Branch's rate **at time of sale**, never retroactively recalculated if rates change later.
**Validation:** Order requires ≥1 line item. Refund amount > 0 and ≤ remaining refundable balance.
**Permissions:** Owner/Manager unrestricted refunds. Sales Employee creates POS orders + refunds up to threshold (default $100), above routed to Manager approval. Warehouse Employee: fulfillment status only, no refund/pricing access.
**Edge cases:** Refund on a deleted-from-catalog item still processes (line item snapshots name/price/SKU at sale time). Payment webhook for a Pending order arriving after customer abandonment still transitions the order correctly (state driven by webhook, not client-side state). Attempted oversell at POS blocked in real time with "insufficient stock."

#### 6.7 Customers / CRM Module
**Purpose:** Maintain a complete profile of every customer, purchase history, and engagement segment.
**Entities:** `Customer`, `CustomerAddress`, `CustomerNote`, `CustomerSegmentAssignment`.
**Segments (default definitions):**

| Segment | Definition |
|---|---|
| New | First purchase within last 30 days, fewer than 2 total orders |
| Frequent | 3+ orders within last 12 months |
| VIP | LTV in top 10% of the store's customer base, or manually tagged |
| Inactive | No purchase in last 90 days, having purchased at least once before |

**Business rules:** Segment recalculated nightly via scheduled job. A manually-tagged VIP customer keeps that tag regardless of the automatic LTV-percentile calc, until manually removed. LTV = sum of all non-refunded Order totals. Deleting a customer profile (privacy/GDPR-style request) **anonymizes rather than deletes** associated Orders (preserving financial/tax records).
**Permissions:** Owner/Manager full access. Sales Employee read-only profile + notes, no full purchase-value analytics. Warehouse Employee: no access (PII-restricted).
**Edge cases:** A walk-in customer with no contact info → anonymous/guest order recorded, no profile created; if they later provide contact info, no automatic merge occurs (manual merge tool for Managers).

#### 6.8 Marketing & Campaigns Module
**Purpose:** Plan, create, target, schedule, and measure promotional campaigns.
**Entities:** `Campaign`, `CampaignAudience`, `PromoCode`, `CampaignSchedule`, `CampaignBudget`.
**Campaign types:** Product Campaign, Seasonal Campaign, Flash Sale, Discount Campaign.
**Business rules:** A Flash Sale requires a defined end time (max duration configurable, default **7 days**) — can't run indefinitely. Once "Scheduled"/"Active," core targeting/content locks (can still pause/cancel) to preserve reporting integrity. A Campaign can't target a segment resulting in zero eligible recipients (warned before scheduling). Budget is a **soft cap** for ad-spend tracking — the platform surfaces spend-vs-budget but doesn't enforce hard cutoffs itself.
**Validation:** Campaign name 3–100 chars. Schedule start must be in the future at creation. Promo code alphanumeric 3–20 chars, unique per store, case-insensitive.
**Permissions:** Owner full access. Manager full by default, configurable to require Owner approval above a budget threshold. Sales/Warehouse: no access.
**Edge cases:** A campaign scheduled to promote a Product that goes out of stock before send time still sends (doesn't silently fail), but the AI Store Assistant flags it for manual intervention. Two simultaneous campaigns targeting overlapping audiences with conflicting discounts resolve deterministically via Campaign Priority rules (§11.7 / R-CAMP-04).

#### 6.9 Landing Pages & Public Storefront Module
**Purpose:** Give merchants a customer-facing storefront and campaign-specific landing pages without needing a web developer.
**Entities:** `Storefront`, `LandingPage`, `LandingPageTemplate`, `Cart`, `CheckoutSession`, `SEOConfig`, `CustomDomain`.
**Business rules:** A Landing Page tied to a time-bound Campaign auto-transitions to "Expired"/unpublished when the campaign ends. Custom domains require DNS verification (TXT record) before going live; default FashionFlow subdomain works meanwhile. The Public Storefront can't go live until the Store has ≥1 Active product, a configured payment method, and completed Terms & Privacy pages (minimum completeness gate).
**Permissions:** Owner full access. Manager configurable (default: can edit content, cannot change domain/SEO/legal pages). Employees: no access.
**Edge cases:** Customer adds item to cart, variant sells out via POS before checkout completes → checkout re-validates stock at payment time, blocks with "no longer available."

#### 6.10 Messaging Center Module
**Purpose:** Unify all customer communication (order-related + marketing) into a single inbox for staff.
**Entities:** `Conversation`, `Message`, `InternalNote`, `QuickReplyTemplate`. Channels: WhatsApp, Email.
**Business rules:** Order-related system messages (e.g., shipping confirmations) appear in the same Conversation thread as customer-initiated messages, visually distinguished as system-generated. A Conversation marked "Resolved" reopens automatically on new incoming messages. Internal Notes are never visible to the customer under any channel.
**Permissions:** Owner/Manager/Marketing-permitted roles full access. Sales Employee: access limited to conversations tied to their own processed orders (configurable to full). Warehouse: no access.
**Edge cases:** Customer replies on WhatsApp after a marketing message they weren't previously in conversation with → system creates a new Conversation thread tied to their Customer profile automatically.

#### 6.11 Notifications Module
**Purpose:** Deliver timely, relevant alerts to the right user through the right channel.
**Entities:** `NotificationEvent`, `NotificationPreference`, `NotificationDelivery`.
Full event catalog is in Chapter 9 below. Users can manage their own channel preferences per event type but cannot fully disable account-security-critical notifications (e.g., new device login).

#### 6.12 Payments & Wallet Module
**Purpose:** Process customer payments securely; give merchants visibility into available balance and payout schedule.
**Entities:** `PaymentMethod` (merchant-configured gateway), `Transaction`, `Payout`, `WalletBalance`.
**Business rules:** Wallet balance = net of platform fees, refunds, pending holds (gross sales − fees − refunds = available balance) — always derived from the transaction ledger, never a mutable stored field. Payouts follow a configurable schedule (default **weekly**) and require a verified payout destination before the first payout releases. A refund issued against an already-paid-out Transaction is deducted from the **next** payout rather than reversing the historical payout record.
**Permissions:** Store Owner only — full access. Manager/Employees: no access to payment config or wallet balance unless explicitly delegated.
**Edge cases:** Payment gateway webhook confirms payment after the customer's Order auto-cancelled on timeout → system reconciles by re-opening the Order rather than leaving it orphaned.

#### 6.13 Reports & Analytics Module
**Purpose:** Aggregate data across every module into actionable dashboards and exportable reports (full dashboard detail in Chapter 8).
**Entities:** `ReportDefinition`, `ReportExport`, `DashboardWidget`, `MetricSnapshot` (pre-aggregated for performance).
**Business rules:** Metric snapshots refresh on a defined cadence (real-time counters for "today"; hourly aggregation for historical trend charts) to balance freshness vs. system load. Custom date ranges capped at **24 months** in a single query (performance guardrail).
**Permissions:** Owner full access to all reports. Manager: branch-scoped access. Employees: no access.
**Edge cases:** A report spanning a currency change shows figures in the original transaction currency per period, with a note, rather than a misleading blended conversion.

#### 6.14 Settings & Administration Module
**Purpose:** Store-level operational configuration and platform-level administration.
**Store-level entities:** `TaxRule`, `ShippingRule`, `RefundPolicy`, `StaffPermissionProfile`. Screens: Tax Settings, Shipping Settings, Refund Policy Editor, Staff & Roles.
**Platform-level entities:** `PlatformSubscriptionPlan`, `StoreSuspension`, `SupportTicket`, `PlatformAuditLog`. Screens: Store Directory, Subscription Plan Manager, Suspension Tool, Support Ticket Queue.
**Business rules:** Suspending a store unpublishes the storefront/blocks new orders but retains all data. Changes to a `StaffPermissionProfile` retroactively apply to every staff member currently assigned it. Tax rules support multiple rates with a defined precedence order. Every Platform Admin action is logged in an immutable, self-referential `PlatformAuditLog`.

### 7. AI Features

FashionFlow AI's AI module is a first-class, cross-cutting capability — not a bolt-on "AI tab."

| Feature | Inputs | Outputs | Notes |
|---|---|---|---|
| **AI Product Writer** | Product image(s), category, brand, manual attributes | Title, long description, SEO keywords, tags, meta description | Falls back to manual entry on failure; never auto-publishes |
| **AI Fashion Designer** | Existing clothing image, blank template, or text prompt | 3–4 print/pattern/palette concepts, seasonal collection concepts | Concepts only, not manufacturing-ready; declines copyrighted-character/brand requests with alternative-phrasing suggestions |
| **AI Campaign Generator** | Product/collection, channel (FB/IG/WhatsApp/Email), goal, tone | Channel-specific ad copy, captions, promotional messages | Generic voice until sufficient usage to learn brand voice (roadmap); no ad-policy-compliance guarantee |
| **AI Store Assistant** | Natural-language question + live Sales/Inventory/Campaign/Customer analytics | Grounded answer with reasoning, one-click "create campaign" action | Never fabricates figures; never acts without explicit confirmation |
| **AI Customer Insights** | Purchase history, RFM data, campaign engagement | Churn risk score, repeat-purchase probability, value tier, demand signals, best campaign timing | Refreshed on schedule, timestamped; "Insufficient data" label if <2 orders |
| **AI Inventory Forecasting** | Sales velocity/variant, seasonality, stock, supplier lead time | Suggested reorder point/qty, forecasted stockout date | Needs ≥60 days sales history/variant; new products use category-level average; one-click "apply to PO" |
| **AI Recommendation Engine** | Purchase co-occurrence, browsing behavior, attribute similarity | "Customers also bought" sets, campaign targeting sets | Cold-start falls back to attribute similarity, then merchant-curated "Featured Products" |

**Cross-cutting rules (§7.8):** All AI content is visually labeled until human-reviewed. No AI feature auto-executes a business-impacting action (publish/send/charge/discount) — a human always confirms. All generation runs **asynchronously via background jobs** (queue-based). Every AI request is logged as an `AIGenerationJob` → `AIGenerationResult` pair (fields: `feature`, `input_payload`, `status`, `cost_units`, `tokens_used`, `model_version`) — this backs full audit, retry, and per-store-plan rate-limiting/quota metering.

### 8. Analytics

Beyond the KPIs in §1.6:

- **Sales:** Revenue (net of refunds), Orders, Profit (revenue − COGS), Growth rate — filterable by Branch/Channel/date range; surfaces best/worst day-of-week and peak sales hours.
- **Products:** Top-selling table, Slow-moving products (sell-through below configurable threshold, feeds AI Store Assistant), Inventory value (cost-basis by Branch/Category).
- **Customers:** LTV histogram with segment overlay, Retention rate, Repeat purchase rate.
- **Campaigns:** ROI (attributed revenue / ad spend + discount cost), Conversion rate, Revenue attribution (last-touch, **7-day default attribution window**).
- **Traffic (Storefront):** Visitors, device breakdown, traffic sources (direct/social/search/campaign-link), full conversion funnel (visit → product view → cart → checkout → order) with per-stage drop-off.
- **Financial/Operational:** Wallet balance trend, fees paid, payout history, tax collected, staff productivity, average fulfillment time.
- All dashboards: date-range + comparison toggle, Branch filter, CSV/PDF export; real-time "today" counters, hourly aggregation for trend charts.

### 9. Notifications — Full Catalog

| Event | Channels | Priority | Configurable |
|---|---|---|---|
| New order placed | In-app, Email, WhatsApp (real-time via Reverb) | High | Yes |
| Payment failed | In-app, Email | High | No (financial-critical) |
| Low stock alert | In-app, Email | Medium | Yes |
| Out of stock | In-app, Email | Medium | Yes |
| Purchase order received | In-app | Low | Yes |
| New customer message | In-app, Web Push (real-time) | High | Yes |
| Campaign sent confirmation | In-app, Email | Medium | Yes |
| Campaign performance summary | Email | Low | Yes |
| Refund processed | Email (customer), In-app (staff) | Medium | Partially (customer notice not disableable) |
| New device login | Email | High | No (security-critical) |
| Password/2FA changed | Email | High | No (security-critical) |
| Subscription renewal reminder | Email, In-app | Medium | Yes |
| Payout sent/failed | Email, In-app | High | No (financial-critical) |
| Store suspended/reinstated | Email, In-app | High | No |
| AI generation completed | In-app (real-time) | Low | Yes |

Channels: In-app (Notification Center, real-time via **Laravel Reverb**), Email (transactional), WhatsApp, Web Push. Security/financial-critical events can't be fully disabled, though channel choice may be constrained to guarantee ≥1 reliable channel stays active.

### 10. Integrations

1. **Google OAuth** — signup/login (account-linking by verified email on duplicate).
2. **Facebook OAuth** — login; same Meta account also enables ad integration.
3. **WhatsApp** — order confirmations, shipping updates, opted-in marketing; requires OTP phone verification on the store's business number; replies flow into the unified Messaging Center.
4. **Email** — universal transactional fallback + marketing (transactional vs. promotional consent are distinct).
5. **Payment Gateway** (generic/pluggable) — card-present POS support; platform never stores raw card data, only gateway tokens/references.
6. **AWS S3** — product images, logos, private assets/exported reports via time-limited signed URLs.
7. **Google Sheets** — bulk product import/export, inventory reconciliation.
8. **Meta Pixel** — page view/add-to-cart/purchase events relayed to the merchant's Meta Ads account, feeding Campaign ROI.
9. **Google Tag Manager** — merchant-supplied GTM container ID for custom tag management.
10. **Microsoft Clarity** — session replay/heatmaps (external dashboard).

### 11. Business Rules (High-Level)

High-level module business rules are documented inline under each module in Chapter 6; the exhaustive, numbered rule catalog (R-XXX-##) lives in Chapter 21 (Business Rules Bible).

### 12. User Flows

Narrative, role-based user flows elaborating the personas (Ch. 3) and business workflow (Ch. 5) — not reproduced here; see the source PDF.

### 13. Non-Functional Requirements

**Performance (P95 unless noted):**
- Storefront page load: **<2.5s** (standard broadband)
- Dashboard/report load: **<3s** (pre-aggregated snapshots)
- POS transaction completion: **<1s** server response (stock check + order creation)
- AI Product Writer/Campaign copy generation: **<15s** typical, async beyond that
- AI Fashion Designer generation: **<60s** typical, async
- Real-time notification delivery (Reverb): **<2s** event→client

**Availability:** **99.9% monthly uptime**, excluding scheduled maintenance (≥48h advance notice for customer-facing impact). Checkout/POS/payment are prioritized above AI/Analytics in incident severity.

**Scalability:** Multi-tenant isolation via queue-based background jobs (Horizon) so one merchant's flash-sale spike doesn't degrade others.

**Security:** TLS in transit; no raw payment data stored (gateway tokens only); RBAC enforced at the API/service layer (not UI); admin impersonation time-boxed + audit-logged; regular dependency/vulnerability scanning in CI/CD. PCI/GDPR acronyms aren't used verbatim, but PCI-equivalent tokenization and GDPR-equivalent right-to-erasure are both functionally specified (R-CUST-05).

**Accessibility:** WCAG 2.1 AA target for storefront + core dashboards.

**Localization:** English + Arabic at launch, full RTL for Arabic; all strings externalized; currency/date/number formatting per store locale.

**Auditability:** Audit logs immutable, timestamped, attributed; retained **24 months default**, configurable up to **10 years for Enterprise**.

**Monitoring:** Sentry (APM/errors), Laravel Horizon (queue/job health), Laravel Pulse (request latency/memory/DB query time); structured logs with correlation IDs.

**Disaster Recovery:** Automated, regularly tested backups; **RPO ≤24 hours**; RTO defined in an ops runbook (not numerically fixed in the PRD, but required to exist and be periodically tested).

### 14. Future Roadmap

- **V2:** Loyalty points/rewards tied to segmentation; A/B testing for campaigns/landing pages; supplier portal for PO confirmation; digest-mode (daily/weekly) email notifications.
- **V3:** BOPIS (buy-online-pickup-in-branch); loyalty-linked installment/layaway plans; natural-language analytics querying via Store Assistant; full visual theme customization.
- **Enterprise:** Custom roles beyond the 4 base roles with a granular permission builder; configurable multi-step approval workflows; extended audit retention + compliance export tooling; SSO (SAML/OIDC).
- **AI Roadmap:** Brand-voice learning for Campaign Generator/Product Writer; automated AI-suggested reorder execution (approval-in-loop); AI-assisted customer-service reply drafting; predictive segment-transition modeling.
- **Mobile:** Native app for Owners/Managers; native tablet/handheld POS; push-notification parity.
- **Marketplace:** Opt-in multi-merchant discovery surface; cross-store promo placements + marketplace-level analytics.
- **API Platform:** Public REST API, webhooks (order created, stock changed, campaign sent), developer docs + sandbox.

---

## Part III — Domain & Engineering Reference

### 15. Domain Model

**Multi-tenancy / scoping model (§15.4 "Store Boundary")** — **Shared database, shared schema.** Every entity is scoped to a `Store` via a `store_id` column; the only exceptions are platform-level entities (`PlatformSubscriptionPlan`, `PlatformAuditLog`, `SupportTicket`) and `User` records that are Platform Admins. Hard architectural rules stated verbatim in the PRD:

> "Every query on a store-scoped entity must be filtered by `store_id` at the **service/repository layer**, not left to controllers or callers."
> "**Cross-tenant data leakage is a P0 defect regardless of intent.**"

A `User` who is a Store Owner may own multiple Stores; the "active store context" is set **per session** and drives all subsequent scoping. Any staff access attempt against a Store they don't belong to is rejected at the service layer with **zero data disclosure**, even in error message content (R-PERM-04).

Cross-aggregate consistency (e.g., decrementing Inventory when an Order is placed) is handled through **domain events**, not direct cross-aggregate writes (see Ch. 18) — the intended integration pattern engineers should follow. Atomic single-transaction guarantees apply within a single aggregate (e.g., Order creation: stock decrement + wallet transaction + status change are atomic).

**Explicit aggregate roots** (own their consistency boundary): `Store`, `Product`, `Order`, `PurchaseOrder`, `Customer`, `Campaign`, `Conversation`, `User`.

### 16. Core Entities & Definitions

Per-module entities are listed in each Chapter 6 subsection. Cross-cutting/global entities not owned by a single module:

- **AI layer:** `AIGenerationJob` → `AIGenerationResult` — every AI request across all 7 features logged with tokens/cost/model_version (audit + retry + quota metering).
- **Platform-level (not store-scoped):** `PlatformSubscriptionPlan`, `StoreSuspension`, `SupportTicket`, `PlatformAuditLog`.
- **Store-level settings:** `TaxRule`, `ShippingRule`, `RefundPolicy`, `StaffPermissionProfile`.
- **Financial:** `WalletBalance`, `Transaction`, `Payout`, `PaymentMethod`, `Invoice` (1:1 off `Order`).

### 17. State Machines

1. **Order:** `draft → pending → paid → preparing → shipping → delivered → refunded → archived`; `cancelled` from draft/pending only; partial refunds stay in-state (`refunded_amount` increments); `paid → pending` and any reversal out of `refunded` are disallowed.
2. **Campaign:** `draft → scheduled → active ⇄ paused → completed → archived`; `cancelled` from draft/scheduled/active/paused. Content locks at `scheduled`.
3. **Product:** `draft → active ⇄ hidden → archived → (manual) → draft`. Hard delete forbidden if referenced by history; `archived → active` must pass back through `draft`.
4. **PurchaseOrder:** `draft → sent → partially_received ⇄ received → closed`; `cancelled` from any pre-received state. Line items lock once `sent`.
5. **Payment:** `pending → authorized → captured` (terminal); `failed`; `voided` (pre-capture only).
6. **Refund:** `requested → (pending_approval if over threshold) → processing → completed/failed`; `pending_approval → rejected`. `failed` is retryable as a new attempt.
7. **Customer Segment:** `new → frequent → vip → inactive` → (win-back) → appropriate segment; nightly recalculation; manual VIP flag is sticky (job can't demote).
8. **User Account:** `pending_verification → active → {locked/suspended/deleted} → active`; `locked` auto-unlocks after cooldown, `suspended` requires Platform Admin.
9. **Store:** `trial → active → past_due → suspended → closed` (or `active → suspended` directly via admin action); `past_due` grace default **7 days**.

### 18. Module Interactions & Event Chains

Named domain events (PascalCase convention, each carries `store_id` + entity IDs + timestamp), the intended queued/idempotent event-driven integration pattern between aggregates:

`OrderPaid`, `RefundProcessed`, `StockDepleted`, `CampaignActivated`, `CustomerCreated`, `ProductPublished`, `PurchaseOrderReceived`, `AIGenerationCompleted`.

Consumers must be idempotent (at-least-once delivery). See §5.3 above for the cross-module trigger table.

### 19. User Stories

Role-based user stories elaborating the personas/flows already captured in Chapters 3, 5, and 6 — not reproduced here; see the source PDF.

### 20. Complete Business Scenarios

Narrative end-to-end scenarios (e.g., a GDPR-equivalent customer-data-erasure walkthrough, R-CUST-05) illustrating the rules already captured structurally in Chapters 6 and 21 — not reproduced here; see the source PDF.

### 21. Business Rules Bible (selected, non-obvious, load-bearing rules)

- **No silent cascades:** archiving a Product referenced by an *active* Campaign does **not** auto-cancel it — emits a `campaign_at_risk` event for manual merchant review (R-PROD-02).
- Sold-out Products stay visible with a "Sold Out" badge rather than auto-hiding (R-PROD-06).
- Variant `cost` edits apply only to *future* inventory movements — historical `InventoryTransaction` rows retain the cost at time of creation (R-VAR-05).
- Category renames are **not versioned** — historical reports show the *current* name, unlike Product/Variant which snapshot at time of sale — a deliberate asymmetry (R-CAT-05).
- Shared inventory pool mode is a one-way toggle; disabling requires manual reconciliation, no auto-split (R-INV-06). `low_stock_threshold` defaults to **5**, per-variant configurable.
- Stock decrements **never** happen at `pending` — only at `paid` (online) or atomically at POS sale completion (R-ORDER-04).
- Tax rate and currency are **snapshotted onto the Order** at creation/payment; later Store config changes never retroactively affect historical Orders (R-ORDER-08/09).
- Discount stacking: only ONE discount source applies by default; even when `stackable`, a PromoCode/Campaign can combine with a Product's base discount price but never with each other (R-DISC-01).
- Full refund decrements a coupon's `current_uses` (returns to pool); partial refund does **not** (R-DISC-06).
- Campaign priority ties resolve: higher `priority` wins → more specific audience wins → most recently created wins (R-CAMP-04). Budget exhaustion auto-completes the campaign; the platform never directly cuts ad-network spend — a soft, merchant-visible cap (R-CAMP-03).
- Manual VIP tag persists until explicitly cleared — nightly job cannot demote (R-CUST-04). Anonymizing a customer holding loyalty points forfeits them (R-CUST-06).
- Refund cumulative limit enforced **at DB constraint level**, not just app logic (R-REFUND-02). Refund after payout already sent deducts from the *next* payout — historical payout never modified (R-REFUND-07).
- Wallet balance is never a mutable field — always derived as the sum of the `WalletTransaction` ledger (R-FIN-01).
- Subscription downgrade blocked by usage — system must show the specific list of what to reduce first (R-STORE-03). Store suspension gives in-flight POS transactions a **15-minute grace window** to complete (R-STORE-05). Store closure requires typing "CLOSE" to confirm (R-STORE-06).
- Even during impersonation, a Platform Admin **cannot** change billing/payment credentials or bulk-export customer PII (R-PERM-05).
- Financial data hard-delete is always rejected — platform default retention is **10 years** (R-DATA-03). Soft-delete grace/undelete window defaults to **30 days** (R-DATA-02).
- **Rule precedence when rules conflict** (§21.17): (1) Safety/Compliance rules override everything → (2) explicit merchant configuration (e.g., `allow_backorder=true`) → (3) store-level defaults → (4) platform defaults. Any perceived conflict must be resolved by documented product decision, never engineering discretion.

### 22. Future AI Vision

Brand-voice learning for the Campaign Generator/Product Writer (learns a store's tone from accepted vs. edited generations); automated AI-suggested reorder execution with human approval-in-loop; AI-assisted customer-service reply drafting inside the Messaging Center; predictive customer-segment-transition modeling (forecasting *when* a customer will move segments, not just their current one).
