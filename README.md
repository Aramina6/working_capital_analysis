# Working Capital Excellence

Structured program to **measure, diagnose, and reduce Net Working Capital** for a global industrial business — with deep composition models for **aluminium manufacturing** and **power generation**, and a five-year view when revenue may soften.

**North star:** free trapped cash by **reducing Net Working Capital** and **shortening the Cash Conversion Cycle**, while protecting reliability and strategic suppliers.

---

## Program targets (full forms)

| Metric (full form) | Direction | Illustrative target | Meaning |
|--------------------|-----------|---------------------|---------|
| **Net Working Capital** | **Reduce** | $2.40 billion → **$1.95 billion (−$450 million)** | Cash freed from operations |
| **Cash Conversion Cycle** (days) | **Shorten** | **≤ 58 days** | Fewer days cash is locked in the cycle |
| **Days Inventory Outstanding** | **Reduce** | Safer lean inventory | Stock turns faster without chronic stockouts |
| **Days Sales Outstanding** | **Reduce** | Faster collection | Customers / offtakers pay sooner |
| **Days Payable Outstanding** | **↑ Careful extend** | With **Supply Chain Finance** and supplier health | Fair longer terms or bank-funded early pay for suppliers |
| **Net Working Capital as % of revenue** | **Reduce** | Even if revenue softens | Capital intensity falls when the top line is under pressure |

---

## Abbreviation guide

| Short | Full form |
|-------|-----------|
| NWC | Net Working Capital |
| CCC | Cash Conversion Cycle |
| DIO | Days Inventory Outstanding |
| DSO | Days Sales Outstanding |
| DPO | Days Payable Outstanding |
| AR | Accounts Receivable |
| AP | Accounts Payable |
| SCF | Supply Chain Finance |
| COGS | Cost of Goods Sold |
| RM / WIP / FG | Raw Materials / Work-in-Progress / Finished Goods |
| FCF | Free Cash Flow |
| BRD | Business Requirements Document |
| FP&A | Financial Planning & Analysis |

---

## Core formula

```
Net Working Capital  =  Inventory  +  Accounts Receivable  −  Accounts Payable

Cash Conversion Cycle (days)
  = Days Inventory Outstanding
    + Days Sales Outstanding
    − Days Payable Outstanding
```

| Piece | Plain English |
|-------|----------------|
| **Inventory** | Materials and products (or fuel and spares) you already funded |
| **Accounts Receivable** | Invoices customers or offtakers have not paid yet |
| **Accounts Payable** | Bills you have not paid suppliers yet (helps cash) |

Full primer with examples and industry composition: [`docs/working-capital-finance-primer.md`](docs/working-capital-finance-primer.md)

---

## Decision frameworks

### 1. Issue tree — where cash is trapped

```
Reduce Net Working Capital
├── Inventory (Raw materials, Work-in-progress, Finished goods / Fuel & spares)
├── Accounts Receivable (terms, disputes, credit, unbilled)
└── Accounts Payable (terms, payment calendar, Supply Chain Finance)
```

### 2. Value tree — how cash returns to Free Cash Flow

```
Free Cash Flow
└── Reduction in Net Working Capital
    ├── Lower Days Inventory Outstanding
    ├── Lower Days Sales Outstanding
    └── Higher Days Payable Outstanding (with guardrails)
```

### 3. Prioritize — Impact × Effort × Risk

Ship first: high cash impact, low reliability risk (e.g. invoice quality → Days Sales Outstanding).  
Pilot next: cover-day policy, payment terms.  
Protect always: stockout / forced-outage floors and strategic supplier health.

### 4. Dual scorecard under soft revenue

Track **Net Working Capital in dollars** and **Net Working Capital as % of revenue**. If sales fall and policy is static, the percentage often worsens first.

---

## Industry composition at a glance

| | **Aluminium** | **Power plant** |
|--|---------------|-----------------|
| Inventory heavy in | Alumina, anodes, metal work-in-progress, finished metal, logistics | Fuel, chemicals, **strategic spares**, outage work-in-progress |
| Receivables heavy in | Industrial / export trade | Offtakers, utilities, power purchase agreements, unbilled energy |
| Typical #1 cash issue | Commodity price × inventory cover | Slow offtaker collections |
| Finished goods | High (sellable metal) | Low (electricity is not stored as warehouse stock) |

---

## Why this analysis · how often

| Why | How often |
|-----|-----------|
| Cash trapped in operations and commodities | **Daily** — receivable and critical stock / fuel alerts |
| Soft multi-year revenue risk | **Weekly** — Cash Conversion Cycle flash |
| Need one language across finance and operations | **Monthly** — full Net Working Capital pack |
| Board capital allocation | **Quarterly** — scenarios and cash released |
| Policy reset | **Annually** — terms, cover days, spares classes |

---

## End-to-end solution (GitHub Pages)

| Live page | URL path | Purpose |
|-----------|----------|---------|
| **Solution hub** | `/` | Entry point to the full program |
| **Solution deck** | `/solution/` | Executive steering slides |
| **Executive dashboard** | `/dashboard/` | Interactive Net Working Capital scorecard |
| **BRD / primer / playbook** | `/docs/…` | Governance and method documents |

**Hosted site:** https://aramina6.github.io/working_capital_analysis/

### Program materials

| Material | Purpose |
|----------|---------|
| [Solution deck](solution/index.html) | SCR, issue tree, baseline, initiatives, roadmap, ask |
| [Executive dashboard](dashboard/index.html) | Interactive scorecard |
| [Business Requirements Document](docs/BRD.md) | Stakeholders, responsibility matrix, metrics, timeline |
| [Finance primer & frameworks](docs/working-capital-finance-primer.md) | Full forms, formulas, aluminium & power composition |
| [Analysis methodology](docs/analysis-methodology.md) | Diagnostics and cadence |
| [End-to-end analyst playbook](docs/e2e-analyst-playbook.md) | Discovery through embed |
| [Illustrative metrics data](data/sample_kpis.json) | Sample numbers for the dashboard |

### Local preview

Serve the project folder over HTTP, then open `/` (hub), `/solution/` (slides), or `/dashboard/` (scorecard).

---

## Team (summary)

Chief Financial Officer (sponsor) · Business Analyst lead · Financial Planning & Analysis · Treasury · Operations / Inventory · Credit & Accounts Receivable · Procurement · Commodity / energy risk · Data engineering  

Full responsibility matrix: [Business Requirements Document](docs/BRD.md).
