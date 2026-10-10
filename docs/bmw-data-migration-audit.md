# BMW Data — WordPress → Next.js migration audit

**Snapshot of source:** 10 October 2026 (pages last modified 9 October 2026)
**Destination:** `/bmw-data` (`src/data/bmw-data.ts` → `src/components/bmw/BMWDashboard.tsx`)
**Re-verify:** `node scripts/validate-bmw-data.mjs --live` (or `<dir>` of saved `bmw-data-YYYY.html` snapshots)

## Sources inspected

| Source | Result |
|---|---|
| https://mvdiabetes.com/bmw-data-2021/ … /bmw-data-2026/ (6 pages) | HTTP 200. Each has 3 tables: Royapuram, Adyar, Velachery. |
| `wp-json/wp/v2/media?search=bmw` | Exactly 2 BMW files: `bmw-report2021.xls`, `bmw-report2022.xls` |
| `wp-content/uploads/2023/05/bmw-report2021.xls` | 200. Sheets: Royapuram, Adyar, Velachery. Jan–Dec 2021. Identical to the web page. |
| `wp-content/uploads/2023/05/bmw-report2022.xls` | 200. Last saved 20 Apr 2022. Jan–Mar 2022 only; Apr–Dec blank. |
| `36234_2_BIO-MEDICAL.xlsx` (secondary cross-check) | **Not available** in this environment, so it was not used. |

Global WordPress content excluded as not part of the BMW report: the NABH / tele-consultation banner, the Trustindex Google-review widget, and the WordPress meta descriptions (they describe "BMW" cars and the automotive industry).

## Audit by year

"Records" are location-months with published figures. "Missing" is location-months inside the reporting window with no published figures.

| Year | Source records verified | Preserved from old site | New records | Missing items | Status |
|---|---:|---:|---:|---:|---|
| 2021 | 36 | 36 | 0 | 0 | Complete: 3 locations × 12 months |
| 2022 | 18 | 9 | 9 | 18 | Partial: Royapuram 12/12; Adyar and Velachery Jan–Mar only |
| 2023 | 12 | 0 | 12 | 24 | Royapuram only |
| 2024 | 12 | 0 | 12 | 24 | Royapuram only; published total discrepancy |
| 2025 | 12 | 0 | 12 | 24 | Royapuram only |
| 2026 (to September) | 9 | 0 | 9 | 18 | In progress: Royapuram Jan–Sep. Oct–Dec not yet reported. |
| **Total** | **99** | **45** | **54** | **108** | |

Validator result (live source): 99/99 records matched, 436 cells compared (396 monthly values + 40 published-total cells), 0 mismatches. Browser check: all 594 rendered table cells (99 rows × 6 columns) match the dataset.

## Historical data preserved

All 45 location-months in the previous dataset (2021, and Jan–Mar 2022) are carried over with identical values; none were changed or lost. The old dataset's blank Royapuram Apr–Dec 2022 rows are now filled from the live 2022 page.

## Discrepancies (retained, not corrected)

| # | Where | Issue | Resolution |
|---|---|---|---|
| 1 | 2022 Royapuram, published Total row | Prints 1416 / 1295 / 349 / 0. The Jan–Dec monthly sum is 1902 / 1681 / 492 / 0. Yellow and Red equal the Apr–Dec sum; Apr–Dec Blue sums to 350. | Monthly figures shown as published. The calculated total and the published total are both shown, and the difference is flagged. |
| 2 | 2024 Royapuram, published Total row | Red 1980 vs monthly sum 1960 (+20); Blue 341 vs 350 (−9). Yellow and White match. | Same as above. |
| 3 | 2022 Royapuram White Bin, Jan–Mar | Blank in `bmw-report2022.xls`; 0 on the live page | Live page (primary source) value 0 kept; noted on the records. |
| 4 | Old site 2022 Royapuram totals | The old site showed 486 / 386 / 142 (the XLS Jan–Mar total) | Replaced by the calculated Jan–Dec total, with the published total alongside. |
| 5 | 2023–2026 Adyar and Velachery tables | The pages contain copies of the 2022 tables (headed "January 2022 to December 2022"), hidden on desktop, tablet and mobile (`elementor-hidden-*`) | Treated as not published. Not migrated as 2023–2026 data. |
| 6 | 2023–2026 "Download here" button | Links to `bmw-report2022.xls`, which holds no data for those years | No download offered for 2023–2026; the page states that no report was published. |

## Report links

| Report | Original URL | New location | Coverage |
|---|---|---|---|
| 2021 Biomedical Waste Report (XLS, 35 KB) | `/wp-content/uploads/2023/05/bmw-report2021.xls` | `/reports/bmw/bmw-report2021.xls` | Jan–Dec 2021, 3 locations |
| 2022 Biomedical Waste Report (XLS, 39 KB) | `/wp-content/uploads/2023/05/bmw-report2022.xls` | `/reports/bmw/bmw-report2022.xls` | Jan–Mar 2022, 3 locations |

The copies are byte-identical (SHA-256 `7b69795e…283f` and `67cc342c…3860`). The old `wp-content` paths 308-redirect to the new copies.

### Year data files (CSV)

`/bmw-data/download/2021` … `/2026` serve `mv-diabetes-bmw-data-YYYY.csv`, built at build time from `src/data/bmw-data.ts` (`src/data/bmw-csv.ts`). Each file says in its header that it is compiled from the published figures, not an original report. Blank cells mean not reported; published totals are included and marked "Matches" or "Differs" against the calculated totals. All 520 cells were checked against the WordPress source extraction, with 0 mismatches. These files are the only download for 2023–2026, because no original report file exists for those years.

## Redirects

`/bmw-data-2021` … `/bmw-data-2026` → `/bmw-data?year=YYYY` (308). The dashboard opens the matching year.
