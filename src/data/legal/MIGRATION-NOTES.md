# FAQ & legal pages — migration notes

Internal notes for the developer/content team. **Not shown on the public site.**

Content was extracted by `scripts/extract-legal-pages.mjs` from each WordPress
page's REST `content.rendered`, then rendered from `src/data/legal/*.json`.
Wording is reproduced as published. The issues below are source defects that
were deliberately **not** rewritten, because fixing them would mean inventing
content. Each needs a decision from whoever owns the source copy.

---

## 1. Terms & Conditions — content exists but does not render publicly

**Status: resolved for the new site, unresolved on WordPress.**

`https://mvdiabetes.com/terms-and-condition/` renders a store placeholder:

> Great things are on the horizon — Something big is brewing! Our store is in
> the works and will be launching soon!

The page itself (WP page ID 3) still holds the full Terms & Conditions
document — 11,144 characters covering Cookies, License, Hyperlinking to our
Content, iFrames, Content Liability, Reservation of Rights, Removal of links
from our website, and Disclaimer. It is retrievable at:

```
https://mvdiabetes.com/wp-json/wp/v2/pages/3
```

That document is what `/terms-and-condition` now publishes. **No legal text was
invented.** The WordPress page is still misconfigured and will keep showing the
placeholder to anyone visiting the old URL.

---

## 2. FAQ — incomplete phone number

In *"How can I make an appointment at M.V. Diabetes Hospital?"* the source reads:

> – Call our hospital at during working hours.

The number is missing in the source. It has been left missing rather than
filled in from elsewhere on the site.

---

## 3. FAQ — unfilled email placeholder

The same answer contains a literal editing placeholder:

> – Send an email to [insert email address] with your contact information…

Preserved verbatim. It should be replaced with a real address at source.

---

## 4. FAQ — obsolete `.html` URLs used as link text

Three answers print `https://www.mvdiabetes.com/contact.html`, and one prints
`https://www.mvdiabetes.com.` (with a trailing full stop inside the link).
`contact.html` no longer resolves.

Handling: the **visible text is preserved exactly as published**, while the
link targets were remapped to routes this site serves, so the links work:

| Source href | Now points to |
| --- | --- |
| `https://www.mvdiabetes.com/contact.html` | `/contact` |
| `https://www.mvdiabetes.com.` | `/` |
| `https://mvdiabetes.com/appointment/` | `/appointment` |
| `https://mvdiabetes.com/` | `/` |

---

## 5. FAQ — broken sentence around a link

In *"How can I access more information about M.V. Diabetes Hospital?"* the
source markup closes the anchor before `.html`, producing:

> …visit our official website at https://www.mvdiabetes.com/contact.html our
> website provides detailed information about…

The missing sentence break is in the source. Preserved as published.

---

## 6. Superseded in-site pages removed

`/privacy` and `/terms` previously carried hand-written policy text that was
**not** from the source, including a `Last updated:` line generated from
`new Date()` — i.e. a date that changed on every render. Both routes were
deleted and now redirect to `/privacy-policy` and `/terms-and-condition`, which
publish the actual source documents. No last-updated date is displayed, because
none of the source documents carries one.
