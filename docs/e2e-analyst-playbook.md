# End-to-End Business Analyst Playbook  
## Working Capital Optimization Program

This playbook is the operating manual for the BA role from discovery through dashboard adoption.

---

## Phase A — Discovery (Week 1–2)

### Objectives
- Confirm that the business goal is **reduce NWC / CCC** (not grow WC).
- Map stakeholders and decision rights.
- Inventory systems and report inventory (“shadow spreadsheets”).

### BA activities
1. Interview CFO, Treasury, FP&A, Ops, Procurement, Credit (30–45 min each).
2. Capture pain: close delays, surprise inventory, past-due spikes, commodity pre-buys.
3. Draft RACI (see BRD §7).
4. List “decisions this dashboard must support.”

### Exit criteria
- [ ] Problem statement signed
- [ ] Stakeholder map complete
- [ ] Data source inventory complete

---

## Phase B — Define (Week 2–3)

### BA activities
1. Finalize KPI dictionary (NWC, DIO, DSO, DPO, CCC, NWC%).
2. Agree exclusions (e.g., intercompany, non-trade AR).
3. Set program targets and service-level guardrails.
4. Publish BRD for steering approval.

### Artifacts
- `docs/BRD.md`
- KPI dictionary table
- Timeline & milestones

---

## Phase C — Data & baseline (Week 3–6)

### BA activities
1. Spec extracts with Data Engineering (grain: month × region × BU × commodity family).
2. Reconcile sample months to GL (±1% or documented breaks).
3. Build 5-year baseline series.
4. Run first diagnostic waterfalls (price / volume / terms).
5. Model downside revenue scenarios (−5% / −10% path).

### Quality checklist
- [ ] Inventory ties to subledger
- [ ] AR aging rolls to GL AR
- [ ] AP trade-only filter applied
- [ ] Commodity cover days available for top materials

---

## Phase D — Dashboard & narrative (Week 5–8)

### BA activities
1. Ship GitHub-stats-style executive dashboard (`/dashboard`).
2. Write monthly narrative template (what moved, why, so what, now what).
3. Train FP&A and Treasury on filters and definitions.
4. Collect feedback; freeze v1 metrics.

### Dashboard must show
- Hero KPIs: NWC, CCC, cash released, NWC% sales
- Trend: 5-year NWC vs revenue
- Levers: DIO / DSO / DPO breakdown
- Scenario: softer revenue path
- Program: initiatives + team collaboration snapshot

---

## Phase E — Insight to action (Week 8–14)

### BA activities
1. Facilitate prioritization workshop (Impact × Effort × Risk).
2. Assign owners per lever (Ops / Credit / Procurement).
3. Define measurement plan for each initiative (baseline → target → actual).
4. Stand up weekly exception stand-up.

### Example first-wave initiatives
| Initiative | Owner | Est. cash | KPI |
|------------|-------|-----------|-----|
| Top-50 past-due blitz | Credit | $80M | DSO, past-due % |
| FG >180d disposition | Ops | $120M | DIO, dead stock |
| Standardize payment terms + SCF | Procurement/Treasury | $100M | DPO |
| Commodity cover-day policy | Commodity + Ops | $90M | Inv $, cover days |

---

## Phase F — Embed (Month 4–12)

### BA activities
1. Fold WC metrics into BU monthly business reviews.
2. Align incentives (cash / CCC component where appropriate).
3. Quarterly steering: cash released vs. plan; risk incidents.
4. Refresh 5-year plan assumptions annually.

### Success definition
- Trajectory to **−$450M NWC** and **CCC ≤ 58 days** (illustrative targets in BRD)
- No sustained breach of critical service-level floors
- Dashboard used in monthly ritual (not a one-off deck)

---

## Monthly BA calendar

| Week | Focus |
|------|--------|
| W1 | Close support; flash NWC vs. forecast |
| W2 | Full pack + dashboard refresh; RCA |
| W3 | Initiative deep-dives; unblock owners |
| W4 | Pre-close outlook; risk flags for Treasury |

---

## Collaboration touchpoints

```
┌─────────────┐   weekly    ┌──────────────┐
│ Credit / AR │◄───────────►│ BA Lead      │
└─────────────┘             └──────┬───────┘
                                   │ monthly pack
┌─────────────┐   weekly    ┌──────▼───────┐   quarterly
│ Inventory   │◄───────────►│ FP&A         │◄──────────► CFO / Board
└─────────────┘             └──────┬───────┘
                                   │
┌─────────────┐   biweekly  ┌──────▼───────┐
│ Procurement │◄───────────►│ Treasury     │
└─────────────┘             └──────────────┘
```

---

## Deliverable checklist

| Deliverable | Location |
|-------------|----------|
| Business Requirements Document | `docs/BRD.md` |
| Finance primer (full forms, aluminium & power) | `docs/working-capital-finance-primer.md` |
| Methodology | `docs/analysis-methodology.md` |
| This playbook | `docs/e2e-analyst-playbook.md` |
| Sample metrics | `data/sample_kpis.json` |
| Executive scorecard | `dashboard/index.html` |
| Program overview | `README.md` |

**Communication rule:** In board and steering materials prefer **full forms** (Net Working Capital, Cash Conversion Cycle, Days Inventory Outstanding, Days Sales Outstanding, Days Payable Outstanding, Supply Chain Finance). Abbreviations only after first use.

---

*BA Lead owns this playbook versioning. Update after each phase gate.*
