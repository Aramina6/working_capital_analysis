/* Working Capital Executive Dashboard — loads sample KPI JSON */

const DATA_URL = "../data/sample_kpis.json";

function fmtMoney(n, digits = 0) {
  if (n == null || Number.isNaN(n)) return "—";
  const abs = Math.abs(n);
  const sign = n < 0 ? "-" : "";
  return sign + "$" + abs.toLocaleString("en-US", {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }) + "M";
}

function fmtPct(x, digits = 1) {
  return (x * 100).toFixed(digits) + "%";
}

function statusClass(s) {
  const t = (s || "").toLowerCase();
  if (t.includes("complete")) return "complete";
  if (t.includes("risk")) return "at-risk";
  return "on-track";
}

async function loadData() {
  const res = await fetch(DATA_URL);
  if (!res.ok) throw new Error("Failed to load sample_kpis.json");
  return res.json();
}

function renderHero(d) {
  const h = d.hero;
  document.getElementById("asOf").textContent = "As of " + d.meta.as_of;
  document.getElementById("nwc").textContent = fmtMoney(h.nwc);
  const nwcDrop = h.nwc_prior_year - h.nwc;
  document.getElementById("nwcDelta").textContent =
    "↓ " + fmtMoney(nwcDrop) + " YoY (improvement)";
  document.getElementById("ccc").textContent = h.ccc_days + "d";
  document.getElementById("cccDelta").textContent =
    "↓ " + (h.ccc_baseline - h.ccc_days) + "d from baseline " + h.ccc_baseline + "d";
  document.getElementById("cashRel").textContent = fmtMoney(h.cash_released_ytd);
  document.getElementById("cashTarget").textContent =
    fmtMoney(h.cash_released_ytd) + " / " + fmtMoney(h.cash_released_target) + " target · LTM rev " + fmtMoney(h.revenue_ltm);
  document.getElementById("nwcPct").textContent = fmtPct(h.nwc_pct_sales);
  const gap = h.nwc_pct_sales - h.nwc_pct_target;
  const el = document.getElementById("nwcPctTarget");
  el.textContent = "Target ≤ " + fmtPct(h.nwc_pct_target) + " · gap " + fmtPct(gap);
  el.className = "stat-delta " + (gap > 0 ? "bad" : "good");
}

function renderFrequency(d) {
  const tbody = document.querySelector("#freqTable tbody");
  tbody.innerHTML = d.frequency
    .map(
      (f) =>
        `<tr><td><strong>${f.cadence}</strong></td><td>${f.focus}</td></tr>`
    )
    .join("");
}

function renderComponents(d) {
  const c = d.components;
  document.getElementById("componentKpis").innerHTML = [
    { k: "Inventory", v: fmtMoney(c.inventory), s: "Raw materials + Work-in-progress + Finished goods + in-transit" },
    { k: "Accounts Receivable", v: fmtMoney(c.ar), s: "Money customers / offtakers still owe" },
    { k: "Accounts Payable", v: fmtMoney(c.ap), s: "Money still owed to suppliers (cash offset)" },
  ]
    .map(
      (x) =>
        `<div class="mini-kpi"><div class="k">${x.k}</div><div class="v">${x.v}</div><div class="s">${x.s}</div></div>`
    )
    .join("");

  const max = Math.max(c.dio, c.dso, c.dpo, 1);
  const rows = [
    { label: "DIO", full: "Days Inventory Outstanding", val: c.dio, cls: "dio" },
    { label: "DSO", full: "Days Sales Outstanding", val: c.dso, cls: "dso" },
    { label: "DPO", full: "Days Payable Outstanding", val: c.dpo, cls: "dpo" },
  ];
  document.getElementById("cycleBars").innerHTML = rows
    .map(
      (r) => `
      <div class="bar-row" title="${r.full}">
        <span class="label" title="${r.full}">${r.label}</span>
        <div class="bar-track"><div class="bar-fill ${r.cls}" style="width:${(r.val / max) * 100}%"></div></div>
        <span class="val">${r.val}d</span>
      </div>`
    )
    .join("");
}

function renderYearTable(d) {
  const tbody = document.querySelector("#yearTable tbody");
  tbody.innerHTML = d.five_year
    .map(
      (y) => `<tr>
      <td>${y.fy}</td>
      <td>${fmtMoney(y.revenue)}</td>
      <td>${fmtMoney(y.nwc)}</td>
      <td title="Net Working Capital % of revenue">${fmtPct(y.nwc_pct)}</td>
      <td title="Cash Conversion Cycle">${y.ccc}d</td>
      <td title="Days Inventory Outstanding">${y.dio}</td>
      <td title="Days Sales Outstanding">${y.dso}</td>
      <td title="Days Payable Outstanding">${y.dpo}</td>
    </tr>`
    )
    .join("");
}

function drawTrendChart(d) {
  const canvas = document.getElementById("trendChart");
  const ctx = canvas.getContext("2d");
  const rows = d.five_year;
  const dpr = window.devicePixelRatio || 1;
  const cssW = canvas.parentElement.clientWidth - 16;
  const cssH = 220;
  canvas.width = cssW * dpr;
  canvas.height = cssH * dpr;
  canvas.style.height = cssH + "px";
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const pad = { t: 16, r: 48, b: 32, l: 48 };
  const w = cssW - pad.l - pad.r;
  const h = cssH - pad.t - pad.b;

  const revMax = Math.max(...rows.map((r) => r.revenue)) * 1.05;
  const nwcMax = Math.max(...rows.map((r) => r.nwc)) * 1.15;
  const cccMax = Math.max(...rows.map((r) => r.ccc)) * 1.2;

  ctx.clearRect(0, 0, cssW, cssH);
  ctx.strokeStyle = "#21262d";
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = pad.t + (h * i) / 4;
    ctx.beginPath();
    ctx.moveTo(pad.l, y);
    ctx.lineTo(pad.l + w, y);
    ctx.stroke();
  }

  const xAt = (i) => pad.l + (w * i) / (rows.length - 1);
  const yRev = (v) => pad.t + h - (v / revMax) * h;
  const yNwc = (v) => pad.t + h - (v / nwcMax) * h;
  const yCcc = (v) => pad.t + h - (v / cccMax) * h;

  // Revenue area
  ctx.beginPath();
  rows.forEach((r, i) => {
    const x = xAt(i);
    const y = yRev(r.revenue);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.strokeStyle = "#6e7681";
  ctx.lineWidth = 2;
  ctx.stroke();

  // NWC line
  ctx.beginPath();
  rows.forEach((r, i) => {
    const x = xAt(i);
    const y = yNwc(r.nwc);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.strokeStyle = "#58a6ff";
  ctx.lineWidth = 2.5;
  ctx.stroke();
  rows.forEach((r, i) => {
    ctx.fillStyle = "#58a6ff";
    ctx.beginPath();
    ctx.arc(xAt(i), yNwc(r.nwc), 3.5, 0, Math.PI * 2);
    ctx.fill();
  });

  // CCC line
  ctx.beginPath();
  rows.forEach((r, i) => {
    const x = xAt(i);
    const y = yCcc(r.ccc);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.strokeStyle = "#a371f7";
  ctx.lineWidth = 2;
  ctx.setLineDash([4, 4]);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = "#8b949e";
  ctx.font = "11px IBM Plex Mono, monospace";
  rows.forEach((r, i) => {
    ctx.fillText(String(r.fy), xAt(i) - 14, cssH - 10);
  });
  ctx.fillText("Net Working Capital ↓ while revenue softens", pad.l, 12);
}

function drawScenarioChart(d) {
  const canvas = document.getElementById("scenarioChart");
  const ctx = canvas.getContext("2d");
  const rows = d.scenario_downside;
  const dpr = window.devicePixelRatio || 1;
  const cssW = canvas.parentElement.clientWidth - 16;
  const cssH = 200;
  canvas.width = cssW * dpr;
  canvas.height = cssH * dpr;
  canvas.style.height = cssH + "px";
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const pad = { t: 20, r: 16, b: 32, l: 48 };
  const w = cssW - pad.l - pad.r;
  const h = cssH - pad.t - pad.b;
  const pctMax = 0.23;
  const pctMin = 0.16;

  ctx.clearRect(0, 0, cssW, cssH);
  ctx.strokeStyle = "#21262d";
  for (let i = 0; i <= 4; i++) {
    const y = pad.t + (h * i) / 4;
    ctx.beginPath();
    ctx.moveTo(pad.l, y);
    ctx.lineTo(pad.l + w, y);
    ctx.stroke();
  }

  const xAt = (i) => pad.l + (w * i) / (rows.length - 1);
  const yPct = (p) => pad.t + h - ((p - pctMin) / (pctMax - pctMin)) * h;

  // static
  ctx.beginPath();
  rows.forEach((r, i) => {
    const x = xAt(i), y = yPct(r.nwc_pct_static);
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.strokeStyle = "#f85149";
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // optimized
  ctx.beginPath();
  rows.forEach((r, i) => {
    const x = xAt(i), y = yPct(r.nwc_pct_optimized);
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.strokeStyle = "#3fb950";
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // revenue dots scaled lightly as bars
  const revMax = Math.max(...rows.map((r) => r.revenue));
  rows.forEach((r, i) => {
    const bh = (r.revenue / revMax) * (h * 0.35);
    const x = xAt(i);
    ctx.fillStyle = "rgba(110,118,129,0.35)";
    ctx.fillRect(x - 10, pad.t + h - bh, 20, bh);
  });

  ctx.fillStyle = "#8b949e";
  ctx.font = "11px IBM Plex Mono, monospace";
  rows.forEach((r, i) => ctx.fillText(String(r.fy), xAt(i) - 14, cssH - 10));
  ctx.fillText("Net Working Capital % of revenue", pad.l, 14);
}

function renderRegions(d) {
  document.getElementById("regionCards").innerHTML = d.regions
    .map(
      (r) => `
    <div class="region-card">
      <div>
        <div class="name">${r.name}</div>
        <div class="meta">Rev ${fmtMoney(r.revenue)} · CCC ${r.ccc}d</div>
      </div>
      <div class="meta">NWC% ${fmtPct(r.nwc_pct)}</div>
      <div class="big">${fmtMoney(r.nwc)}</div>
    </div>`
    )
    .join("");
}

function renderCommodities(d) {
  const tbody = document.querySelector("#commodityTable tbody");
  tbody.innerHTML = d.commodity_families
    .map((c) => {
      const py = c.price_yoy;
      const color = py > 0.05 ? "#f85149" : py < 0 ? "#3fb950" : "#8b949e";
      const sign = py > 0 ? "+" : "";
      return `<tr>
        <td>${c.name}</td>
        <td>${fmtMoney(c.inventory)}</td>
        <td>${c.cover_days}d</td>
        <td style="color:${color}">${sign}${fmtPct(py)}</td>
      </tr>`;
    })
    .join("");
}

const KPI_FULL = {
  DSO: "Days Sales Outstanding",
  DIO: "Days Inventory Outstanding",
  DPO: "Days Payable Outstanding",
  "Inv $": "Inventory dollars",
};

function renderInitiatives(d) {
  document.getElementById("initList").innerHTML = d.initiatives
    .map((i) => {
      const sc = statusClass(i.status);
      const kpiFull = KPI_FULL[i.kpi] || i.kpi;
      return `
      <div class="init-item">
        <div class="init-top">
          <div>
            <div class="init-name">${i.id} · ${i.name}</div>
            <div class="init-meta">Owner: ${i.owner} · Metric: ${kpiFull} · Est. cash ${fmtMoney(i.cash_m)}</div>
          </div>
          <span class="status ${sc}">${i.status}</span>
        </div>
        <div class="progress"><i style="width:${Math.round(i.progress * 100)}%"></i></div>
      </div>`;
    })
    .join("");
}

function renderTeam(d) {
  document.getElementById("teamGrid").innerHTML = d.team
    .map(
      (t) => `
    <div class="team-card">
      <div class="role">${t.role}</div>
      <div class="fn">${t.function}</div>
      <div class="cad">${t.cadence}</div>
    </div>`
    )
    .join("");
}

function wireTabs() {
  const tabs = document.querySelectorAll(".tab");
  const sections = ["overview", "primer", "frameworks", "industry", "why", "trends", "scenario", "initiatives", "team", "brd"];
  const setActive = () => {
    const y = window.scrollY + 80;
    let current = "overview";
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= y) current = id;
    }
    tabs.forEach((t) => {
      t.classList.toggle("active", t.getAttribute("href") === "#" + current);
    });
  };
  window.addEventListener("scroll", setActive, { passive: true });
}

async function main() {
  try {
    const data = await loadData();
    renderHero(data);
    renderFrequency(data);
    renderComponents(data);
    renderYearTable(data);
    drawTrendChart(data);
    drawScenarioChart(data);
    renderRegions(data);
    renderCommodities(data);
    renderInitiatives(data);
    renderTeam(data);
    wireTabs();
    window.addEventListener("resize", () => {
      drawTrendChart(data);
      drawScenarioChart(data);
    });
  } catch (err) {
    console.error(err);
    document.querySelector(".page").insertAdjacentHTML(
      "afterbegin",
      `<div class="panel" style="border-color:#f85149;color:#f85149">
        Failed to load metrics data. Open this scorecard via a local web server so
        sample key performance indicators can load. ${err.message}
      </div>`
    );
  }
}

main();
