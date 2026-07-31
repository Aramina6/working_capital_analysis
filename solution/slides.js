(function () {
  const slides = Array.from(document.querySelectorAll(".slide"));
  const total = slides.length;
  let i = 0;

  document.querySelectorAll(".total").forEach((el) => {
    el.textContent = String(total);
  });

  function show(n) {
    i = Math.max(0, Math.min(total - 1, n));
    slides.forEach((s, idx) => s.classList.toggle("active", idx === i));
    document.getElementById("pos").textContent = i + 1 + " / " + total;
    location.hash = "slide-" + (i + 1);
  }

  function fromHash() {
    const m = (location.hash || "").match(/slide-(\d+)/);
    if (m) {
      const n = parseInt(m[1], 10) - 1;
      if (!Number.isNaN(n)) return n;
    }
    return 0;
  }

  document.getElementById("prev").addEventListener("click", () => show(i - 1));
  document.getElementById("next").addEventListener("click", () => show(i + 1));
  document.getElementById("fs").addEventListener("click", () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
      e.preventDefault();
      show(i + 1);
    } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
      e.preventDefault();
      show(i - 1);
    } else if (e.key === "Home") {
      show(0);
    } else if (e.key === "End") {
      show(total - 1);
    }
  });

  let touchX = null;
  document.getElementById("deck").addEventListener(
    "touchstart",
    (e) => {
      touchX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );
  document.getElementById("deck").addEventListener(
    "touchend",
    (e) => {
      if (touchX == null) return;
      const dx = e.changedTouches[0].screenX - touchX;
      if (Math.abs(dx) > 50) show(i + (dx < 0 ? 1 : -1));
      touchX = null;
    },
    { passive: true }
  );

  show(fromHash());
  window.addEventListener("hashchange", () => show(fromHash()));
})();
