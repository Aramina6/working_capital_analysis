# Working Capital — Finance Primer & Decision Frameworks

**Context:** Global manufacturing with commodity intensity — including **aluminium (aluminum) smelting / fabrication** and **power generation**  
**Style:** Structured decision frameworks (issue tree → drivers → levers → targets)

---

## 1. Definitions (full forms)

| Abbreviation | Full form | Definition |
|--------------|-----------|-------------------------------------|
| **WC** | Working Capital | Money tied up in day-to-day operations (stock, customer invoices unpaid, minus what you still owe suppliers). |
| **NWC** | Net Working Capital | The usual operating measure: **Inventory + Accounts Receivable − Accounts Payable**. Cash “stuck” in the business cycle. |
| **CCC** | Cash Conversion Cycle | How many **days** cash is locked from buying inputs until customers pay you. Shorter = cash returns faster. |
| **DIO** | Days Inventory Outstanding | Average **days** inventory sits before it is sold (or consumed as cost of goods). |
| **DSO** | Days Sales Outstanding | Average **days** after a sale until the customer **pays**. |
| **DPO** | Days Payable Outstanding | Average **days** you take to **pay suppliers**. |
| **AR** | Accounts Receivable | Money **customers owe you** (invoices outstanding). |
| **AP** | Accounts Payable | Money **you owe suppliers** (bills outstanding). |
| **RM** | Raw Materials | Inputs not yet used in production (e.g. alumina, coal, fuel oil). |
| **WIP** | Work-in-Progress (Work in Process) | Half-finished production (e.g. metal in potlines, unit mid-overhaul). |
| **FG** | Finished Goods | Completed product ready to ship (ingots, billets, power not typically “FG”—see power section). |
| **COGS** | Cost of Goods Sold | Cost of what was sold in the period (used in inventory and payable day metrics). |
| **SCF** | Supply Chain Finance | Bank/fintech program that pays suppliers early while the buyer still pays on longer terms — improves buyer Days Payable Outstanding without starving suppliers. |
| **FCF** | Free Cash Flow | Cash left after operations and investments — improved when Net Working Capital falls. |
| **LTM** | Last Twelve Months | Trailing 12-month window for ratios (e.g. Net Working Capital % of revenue). |
| **CapEx** | Capital Expenditure | Money spent on long-lived assets (plants, turbines) — *not* working capital, but competes for the same cash. |
| **CFO / FP&A / BU** | Chief Financial Officer / Financial Planning & Analysis / Business Unit | Finance leadership, planning team, and operating divisions. |
| **BRD** | Business Requirements Document | Formal statement of why the program exists, who owns it, metrics, and timeline. |

---

## 2. Program targets — written in full form

| Metric (full form) | Direction | Illustrative target | Business meaning |
|--------------------|-----------|---------------------|------------------|
| **Net Working Capital** | **Reduce** | $2.40 billion → **$1.95 billion** (−**$450 million**) | Free nearly half a billion dollars of cash previously trapped in stock and receivables (net of payables). |
| **Cash Conversion Cycle** (days) | **Shorten** | **≤ 58 days** | Cash returns from operations in under two months on average. |
| **Days Inventory Outstanding** | **Reduce** | Safer lean inventory | Stock turns faster without chronic stockouts of critical materials. |
| **Days Sales Outstanding** | **Reduce** | Faster collect | Customers pay sooner; fewer disputed or aged invoices. |
| **Days Payable Outstanding** | **↑ Careful extend** | With **Supply Chain Finance** / supplier health | Pay later where fair, or use Supply Chain Finance so suppliers still get paid promptly. |
| **Net Working Capital as % of revenue** | **Reduce** | Even if revenue softens | Intensity of cash use falls so a weaker top line does not choke liquidity. |

**North star:** Reduce structural Net Working Capital and shorten the Cash Conversion Cycle — not grow working capital for its own sake.

---

## 3. What is working capital?

Imagine the company as a pipeline:

```
  BUY INPUTS  →  MAKE / STORE  →  SELL ON CREDIT  →  COLLECT CASH
      ↑                                                    |
      |______________ pay suppliers later _________________|
```

- You **spend or commit cash early** (materials, energy, payroll in production).
- You **get cash late** (customers often pay in 30–90 days).
- Suppliers may **finance part of the gap** if you pay them later.

**Net Working Capital** is roughly:  
*“How much of our own money is sitting in that pipeline right now?”*

| Piece | Role | Cash effect |
|-------|------|-------------|
| **Inventory** | Materials and products waiting | Uses cash (you already paid or booked cost) |
| **Accounts Receivable** | Unpaid customer invoices | Uses cash (sale done, cash not in bank) |
| **Accounts Payable** | Unpaid supplier invoices | **Frees** cash temporarily (you use the goods before paying) |

```
Net Working Capital  =  Inventory  +  Accounts Receivable  −  Accounts Payable
```

**Example (simple numbers):**

| Item | Amount |
|------|--------:|
| Inventory | $100 |
| Accounts Receivable | $80 |
| Accounts Payable | $40 |
| **Net Working Capital** | **$140** |

If you cut inventory to $70 and collect so receivables fall to $60, Net Working Capital becomes $90 — **$50 cash released** (all else equal).

---

## 4. Core formulas (with full names)

### 4.1 Stock of capital (balance sheet view)

```
Net Working Capital (NWC)
  = Inventory + Accounts Receivable − Accounts Payable
```

Sometimes analysts use a broader definition (include cash, short-term debt). **This program uses the operating definition above** so levers map cleanly to operations, sales credit, and procurement.

### 4.2 Speed of capital (days view)

```
Days Inventory Outstanding (DIO)
  = (Average Inventory ÷ Cost of Goods Sold) × 365

Days Sales Outstanding (DSO)
  = (Average Accounts Receivable ÷ Revenue) × 365

Days Payable Outstanding (DPO)
  = (Average Accounts Payable ÷ Cost of Goods Sold) × 365

Cash Conversion Cycle (CCC)
  = Days Inventory Outstanding
    + Days Sales Outstanding
    − Days Payable Outstanding
```

**How to read Cash Conversion Cycle**

| CCC | Interpretation |
|-----|----------------|
| High (e.g. 80+ days) | Cash stays trapped a long time |
| Falling toward 58 days | Operations convert inputs to cash faster |
| Negative (rare in heavy industry) | Suppliers finance the cycle more than customers delay |

### 4.3 Intensity (when revenue softens)

```
Net Working Capital % of revenue
  = Net Working Capital ÷ Last Twelve Months Revenue
```

If revenue falls but Net Working Capital stays flat, this **percentage rises** — a red flag. The program manages **both dollars and percentage**.

### 4.4 Cash released (program scorecard)

```
Cash released ≈ Prior Net Working Capital − Current Net Working Capital
                (± foreign exchange, write-offs, acquisitions)
```

---

## 5. Issue tree — where cash is trapped

```
                    Reduce Net Working Capital
                              |
        ┌─────────────────────┼─────────────────────┐
        ▼                     ▼                     ▼
   Inventory $              Receivables $         Payables $
   (reduce safely)          (collect faster)      (extend carefully)
        |                     |                     |
   ┌────┼────┐           ┌────┼────┐           ┌────┼────┐
   RM  WIP  FG         Terms Disputes        Terms  SCF
   cover slow  aging    credit past-due      calendar supplier
   days movers                                discipline health
```

**Governing idea (MECE levers):** every dollar of Net Working Capital sits in **Inventory**, **Receivables**, or is offset by **Payables**. No third bucket in the operating definition.

---

## 6. Composition of working capital — manufacturing (aluminium)

Aluminium (primary + semi-fabrication) is **energy- and commodity-intensive**. Working capital is dominated by **physical inventory at high unit value** and **export / industrial receivables**.

### 6.1 Typical composition (illustrative shares of gross operating WC assets)

| Component | Full form / detail | Why it is large in aluminium | Lever mindset |
|-----------|--------------------|------------------------------|---------------|
| **Raw materials inventory** | Alumina, carbon anodes, fluoride baths, alloys, scrap | Global commodity prices; ocean freight; minimum smelter feed cover | Cover-day bands; dual sourcing; scrap circularity |
| **Work-in-progress** | Metal in reduction cells, cast house, rolling | Continuous process; cannot “empty” potlines casually | Throughput stability; yield; campaign planning |
| **Finished goods** | Ingots, billets, slabs, rolled coil, extrusions | Customer call-offs; LME-linked pricing; logistics to ports | Make-to-order mix; depot pooling; dead-stock scrap |
| **In-transit inventory** | Ocean / rail metal and alumina | Long global lanes | Mode design; Incoterms; hubbing |
| **Accounts Receivable** | Industrial OEMs, distributors, traders | 30–90 day terms; letter of credit vs open account | Credit policy; dispute root cause; dynamic discounting |
| **Accounts Payable** | Alumina, power contracts, anodes, logistics, MRO | Large supplier invoices; energy often contracted | Term standardization; Supply Chain Finance; payment runs |
| **(Memo) Power as input** | Prepaid energy or take-or-pay imbalances | Smelting is electricity-hungry | Contract design is strategic, not only “inventory” |

```
Aluminium NWC ≈  (RM + WIP + FG + In-transit)  +  Trade Receivables  −  Trade Payables
```

### 6.2 Aluminium-specific Cash Conversion Cycle intuition

- **Days Inventory Outstanding** often elevated because of **commodity cover** and **logistics**.
- **Days Sales Outstanding** depends on **export mix** and **trader vs. end-customer** terms.
- **Days Payable Outstanding** constrained by **strategic alumina/power** suppliers who may hold bargaining power.

**Diagnostic questions (aluminium)**

1. How many **days of alumina and anode cover** vs. policy band?  
2. What % of finished goods is **>90 / >180 days** aged?  
3. What share of receivables is **export open account** vs. secured?  
4. Are **power and alumina** terms creating avoidable prepaid or deposit drag?

---

## 7. Composition of working capital — power plant / generation

A **power plant** (thermal, hydro, renewables + hybrid) has a **different inventory shape** than discrete manufacturing: less “finished goods on a shelf,” more **fuel, spare parts (MRO), and receivables from offtakers / grids**.

### 7.1 Typical composition

| Component | Full form / detail | Role in power | Lever mindset |
|-----------|--------------------|---------------|---------------|
| **Fuel inventory** | Coal, gas in storage, oil distillate, biomass | Security of generation; price hedges in physical form | Days of burn cover; logistics; dual fuel |
| **Consumables & chemicals** | Water treatment, lubricants, reagents | Continuous ops | Min-max; vendor managed inventory |
| **MRO / strategic spares** | Turbine parts, transformers, critical long-lead items | Outage risk vs. capital stuck in spares | Criticality classes; pooling across fleet; consignment |
| **Work-in-progress (outages)** | Capital / major overhaul WIP, incomplete projects | Planned outages capitalize cost then expense or stock | Outage planning; WIP aging discipline |
| **Accounts Receivable** | Discoms / utilities, bilateral PPAs, merchant sales, capacity payments | Often the **largest** WC item in regulated markets | Billing cycle; dispute (energy accounting); late payer escalation |
| **Unbilled revenue / accrued income** | Energy delivered not yet invoiced | Timing gap month-end | Meter-to-cash automation |
| **Accounts Payable** | Fuel suppliers, O&M contractors, transmission charges, taxes on ops | Offsets fuel buys | Term design; Supply Chain Finance for O&M ecosystem |
| **Customer / regulatory deposits** (memo) | Sometimes liability-like | Can reduce Net Working Capital if structured as liabilities | Contract & regulation specific |

```
Power NWC ≈  (Fuel + MRO/Spares + Other inventory + Outage WIP)
             +  Trade & offtaker Receivables (+ unbilled)
             −  Trade Payables
```

### 7.2 Power-specific Cash Conversion Cycle intuition

- **Days Inventory Outstanding** may look moderate on fuel but **strategic spares** inflate inventory dollars for years.  
- **Days Sales Outstanding** can be **structurally high** where offtakers (e.g. distribution companies) pay slowly — this is often the #1 cash issue.  
- **Days Payable Outstanding** on fuel may be short if fuel is prepaid or cash-and-carry in tight markets.

**Diagnostic questions (power)**

1. What is **receivable aging by offtaker** and concentration risk?  
2. What **days of fuel cover** vs. reliability mandate?  
3. What % of spares is **non-moving >365 days** vs. true critical insurance stock?  
4. How much cash sits in **unbilled energy** at each month-end?

---

## 8. Side-by-side: aluminium vs power working capital

| Dimension | Aluminium manufacturing | Power plant / fleet |
|-----------|-------------------------|---------------------|
| Dominant inventory | RM + metal FG + logistics | Fuel + **strategic MRO spares** |
| WIP character | Continuous process metal | Outage / project WIP |
| Finished goods | High (sellable metal shapes) | Low (electricity not warehoused) |
| Receivables | Industrial / export trade | Utility / PPA / merchant settlements |
| Typical pain point | Commodity price × cover days | **Slow offtaker collections** |
| Payable power | Strong with non-strategic vendors | Fuel suppliers may demand tight terms |
| Energy role | **Cost input** (huge) | **Product** (output) |
| Soft-revenue risk | Metal price & volume | Plant load factor, tariff, merchant price |

**Shared framework still applies:** Inventory + Receivables − Payables; improve Days Inventory Outstanding, Days Sales Outstanding; extend Days Payable Outstanding with care; watch Net Working Capital % of revenue if top line softens.

---

## 9. Value-driver tree (how initiatives create cash)

```
Free Cash Flow
   └── Operating cash
         └── Δ Net Working Capital (reduction = cash in)
               ├── Δ Inventory   ← lean, cover policy, dead stock, yield
               ├── Δ Receivables ← terms, disputes, credit, billing quality
               └── Δ Payables    ← terms, calendar, Supply Chain Finance
```

Each initiative on the program scorecard must map to **one node** of this tree and a **day metric** (Days Inventory Outstanding / Days Sales Outstanding / Days Payable Outstanding).

---

## 10. Prioritization framework (Impact × Effort × Risk)

| | High impact cash | Medium impact |
|--|------------------|---------------|
| **Low operational risk** | Do first (e.g. invoice quality → Days Sales Outstanding) | Quick wins |
| **Medium risk** | Pilot (cover-day reset; payment terms) | Sequence after pilots |
| **High risk** (stockout, supplier failure, offtaker politics) | Only with guardrails & sponsor | Avoid as first wave |

**Guardrails (non-negotiable):** critical service / generation reliability floors; strategic supplier health; regulatory compliance on billing.

---

## 11. How often to look at the numbers

| Cadence | Full-form focus |
|---------|-----------------|
| **Daily** | Accounts Receivable aging alerts; critical stock / fuel exceptions |
| **Weekly** | Cash Conversion Cycle flash; cash bridge; top overdue customers / offtakers |
| **Monthly** | Net Working Capital pack: Days Inventory Outstanding, Days Sales Outstanding, Days Payable Outstanding, Net Working Capital % of revenue |
| **Quarterly** | Board narrative; initiative return on cash; downside revenue scenario |
| **Annually** | Credit policy, payment policy, cover-day / spare policy; five-year plan |

---

## 12. One-page glossary for slides

- **Net Working Capital** — cash stuck in operations (inventory + unpaid customer invoices − unpaid supplier bills).  
- **Cash Conversion Cycle** — days that cash is stuck.  
- **Days Inventory Outstanding** — days stock sits.  
- **Days Sales Outstanding** — days to collect from customers.  
- **Days Payable Outstanding** — days to pay suppliers.  
- **Supply Chain Finance** — pay suppliers early via a bank while you keep longer terms.  
- **Program goal** — **reduce** Net Working Capital and **shorten** Cash Conversion Cycle, safely.

---

*Use with Business Requirements Document, analysis methodology, and executive dashboard. Figures in the program pack are illustrative unless labeled live actuals.*
