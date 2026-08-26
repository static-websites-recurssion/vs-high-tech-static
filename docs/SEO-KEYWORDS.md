# SEO keyword map & implementation notes

**Site:** https://www.vshitechsecurityforms.com
**Last reviewed:** 2026-08-16

The machine-readable version of this map lives in `src/lib/keywords.ts` and is
wired straight into page metadata — this document is the reasoning behind it.

---

## 1. How the map is structured

| Tier | What it is | Realistic timeline | Where it lives |
|---|---|---|---|
| **Brand** | Navigational. Must be owned outright. | Immediate | Home, About |
| **Head** | Short, high-volume, national ("security printing company") | 12–24 months | Home, Services |
| **Geo** | Head terms × city/state. **The fastest realistic wins.** | 3–9 months | Home, Contact, Infrastructure |
| **Product** | Mid-tail commercial intent, one cluster per product page | 6–12 months | `/products/*` |
| **Feature** | Technical security-print vocabulary. Builds topical authority. | 6–12 months | `/technology/*` |
| **Buyer** | Long-tail tender/procurement. **Highest conversion, lowest volume.** | 3–6 months | Certifications, Downloads, FAQ |
| **Info** | Informational, top-of-funnel | 3–9 months | FAQ, Knowledge |

**Governing rule:** one primary keyword per page, 6–12 supporting secondaries.
No phrase is the primary on two pages, so pages never compete with each other.

---

## 2. Brand cluster (own these outright)

`V.S. Hitech Security Forms` · `VS Hitech Security Forms Pvt Ltd` · `VS Hitech` ·
`vshitech` · `V S Hitech security printing` · `VS Hitech Hyderabad` ·
`VS Hitech Vijayawada`

> **Action outside the codebase:** claim and verify the Google Business Profile
> for both plants. Brand + geo queries are won in the local pack, not in the
> blue links, and no amount of on-page work substitutes for it.

---

## 3. Head terms (national, competitive)

`security printing` · `security printing company` · `security printing press` ·
`security printers in India` · `confidential printing services` ·
`security forms printing` · `secure document printing` ·
`anti-counterfeit printing` · `government printing press`

These are a long game. Do not expect page-one on "security printing company"
without sustained link acquisition.

## 4. Geo terms (the realistic near-term wins)

`security printing company in Hyderabad` · `security printing press Hyderabad` ·
`printing press in Kukatpally` · `security printers Vijayawada` ·
`security printing Bangalore` · `security printing company in Telangana` ·
`security printing company in Andhra Pradesh` · `confidential printing Hyderabad` ·
`printing press ALEAP Industrial Estate` · `security printers near JNTU Hyderabad`

Supported in markup by two `LocalBusiness` nodes (Hyderabad, Vijayawada) with
real addresses, phone numbers and GST IDs.

---

## 5. Product clusters — one page each

| Page | Primary keyword | Key secondaries |
|---|---|---|
| `/products/question-papers` | question paper printing | confidential question paper printing, exam paper printing services, secure examination printing India, leak proof question paper printing |
| `/products/omr-sheets` | OMR sheet printing | OMR sheet manufacturers, OMR answer sheet printing, entrance exam OMR sheets, OMR sheet printing price |
| `/products/answer-booklets` | answer booklet printing | answer script printing, numbered answer booklets, QCA booklet printing, barcoded answer booklets |
| `/products/certificates` | degree certificate printing | university certificate printing, convocation certificate printing, marks memo printing, hologram certificate printing |
| `/products/cheque-books` | cheque book printing | MICR cheque printing, cheque printing on security paper, CTS cheque printing |
| `/products/pass-books` | passbook printing | pattadar passbook printing, annual report printing, register and passbook printers |
| `/products/carbonless-forms` | carbonless forms printing | NCR forms printing, computer stationery printing, continuous stationery manufacturers |
| `/products/variable-data` | variable data printing | barcode printing services, QR code printing services, hall ticket printing, data matrix printing |
| `/products/thermal-sticker` | thermal paper roll manufacturers | sticker printing, self adhesive label printing, TIMS rolls printing |
| `/products/dividend-warrants` | dividend warrant printing | event ticket printing, gate pass printing, admission card printing |
| `/products/book-works` | book printing services | textbook printing, training manual printing, perfect binding book printing |

## 6. Feature cluster (topical authority — `/technology/*`)

`guilloche design printing` · `microtext printing` · `micro line printing` ·
`UV invisible logo printing` · `watermark security paper` ·
`copy void pantograph printing` · `thermochromic ink printing` ·
`hologram stamping services` · `fluorescent border printing` ·
`security ink printing` · `tamper proof document printing` ·
`hot foil stamping printing` · `MICR E-13B encoding` ·
`sequential numbering printing` · `relief background printing` ·
`mirror text security printing`

Low individual volume, but collectively they are what makes Google treat the
site as an authority on security printing rather than a generic print shop.

## 7. Buyer / procurement cluster (highest conversion)

`ISO 27001 certified printing press` · `ISO certified security printer India` ·
`security printer for government tenders` ·
`confidential printing vendor registration` · `security printing empanelment` ·
`exam paper printing tender` · `university exam printing partner` ·
`bulk security printing supplier India` · `security printing quotation`

## 8. Informational cluster (FAQ / knowledge)

`what is security printing` · `what is variable data printing` ·
`how to prevent question paper leakage` ·
`types of security features in printing` · `hologram vs UV ink` ·
`what does ISO 27001 mean for printing` · `OMR sheet scanning accuracy`

---

## 9. Page → primary keyword assignment (no cannibalisation)

| Route | Primary keyword |
|---|---|
| `/` | security printing company in Hyderabad |
| `/services` | security printing services |
| `/about` | security printing company profile |
| `/industries` | security printing for education / government / corporate |
| `/certifications` | ISO 27001 certified printing press |
| `/infrastructure` | security printing infrastructure |
| `/contact` | security printing quote Hyderabad |
| `/clients` | security printing clients India |
| `/careers` | printing press jobs Hyderabad |
| `/knowledge/faq` | security printing FAQ |
| `/knowledge/downloads` | ISO certificate download security printer |
| `/technology` | security printing technology |
| `/technology/machinery` | web offset printing machines |
| `/technology/security-features` | document security features |
| `/technology/variable-data` | variable data printing services |
| `/technology/prepress` | prepress services India |
| `/technology/quality-control` | print quality control process |
| `/technology/testing` | in-house paper testing lab |
| `/technology/security-environment` | secure printing environment |
| `/sectors/education` | examination printing services India |
| `/sectors/government` | government confidential printing |
| `/sectors/corporate` | corporate printing services |
| `/about/why-us` | best security printing company India |
| `/about/management` | security printing company directors |
| `/about/certifications` | NABCB accredited printing company |
| `/about/infrastructure` | printing press capacity India |
| `/about/csr` | CSR printing company India |
| `/products/*` | see §5 |

---

## 10. Deliberate exclusions

- **Banking / cheque clearing terms** beyond cheque-book printing. The banking
  sector page was retired; do not resurrect that cluster without RBI-approved
  printer status to back the claims.
- **Currency, passport, stamp paper, PAN/Aadhaar printing.** High-volume terms,
  but ranking for work you cannot legally take is wasted traffic and damages
  trust signals when buyers bounce.
- **Price-comparison terms** ("cheapest printing press"). Wrong buyer for a
  four-ISO confidential printer.

---

## 11. What is implemented in code

Every indexable page (38 of them) ships:

- a unique `<title>` (49–65 chars) and unique meta description (138–158 chars)
- a self-referencing `<link rel="canonical">`
- a page-specific `keywords` cluster from `src/lib/keywords.ts`
- Open Graph + Twitter card tags and a 1200×630 preview image
- JSON-LD: a site-wide `Organization` + `WebSite` + two `LocalBusiness` nodes,
  plus page-level `WebPage`/`BreadcrumbList`/`Service`/`ItemList`/`FAQPage`
- exactly one `<h1>`

Non-indexable legacy URLs (`/products`, `/sectors`, `/sectors/banking`,
`/sectors/*`, `/contact/locations`) ship `noindex, follow`, a canonical pointing
at the live page, and a 301 in `vercel.json` / `netlify.toml` / `nginx.conf`.

---

## 12. Work that cannot be done in the repo

Ranking is not only on-page. In rough priority order:

1. **Google Business Profile** for the Hyderabad and Vijayawada plants —
   verified, categorised as *Commercial printer* / *Printing equipment supplier*,
   with real photos. This is the single highest-leverage action available.
2. **Search Console + Bing Webmaster Tools.** Verify both properties, then set
   `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` / `NEXT_PUBLIC_BING_SITE_VERIFICATION`
   (already read by `src/app/layout.tsx`) and submit `/sitemap.xml`.
3. **Directory citations with identical NAP** (name/address/phone): IndiaMART,
   TradeIndia, Justdial, Sulekha, ExportersIndia. Consistency matters more than
   volume — any mismatch dilutes the local signal.
4. **Blog content.** `src/lib/blog-posts.ts` holds seven drafted post titles with
   no route rendering them; `/knowledge/blog` currently 301s to the FAQ. Those
   seven titles map cleanly onto the informational cluster in §8 and are the
   obvious next build.
5. **Backlinks** from university and government tender listings, industry bodies
   (AIFMP), and local business associations.

---

## 13. Re-checking the implementation

`npm run build` then audit `out/`:

```bash
# unique titles/descriptions, canonicals, schema coverage, sitemap parity
grep -o '<title>[^<]*</title>' out/**/*.html | sort | uniq -d   # should be empty
grep -c '<url>' out/sitemap.xml                                 # 38
```

Validate structured data at https://search.google.com/test/rich-results and
https://validator.schema.org against a deployed URL.
