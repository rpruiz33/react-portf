"use strict";

// Aseguramos que el chunk de webpack se cargue correctamente
(window.webpackChunkmi_app = window.webpackChunkmi_app || []).push([[453], {
  6453: (e, t, n) => {
    n.r(t);
    n.d(t, {
      getCLS: () => y,
      getFCP: () => g,
      getFID: () => C,
      getLCP: () => P,
      getTTFB: () => D
    });

    let i, r, a, o;
    const u = (e, t) => ({
      name: e,
      value: t === undefined ? -1 : t,
      delta: 0,
      entries: [],
      id: "v2-" + Date.now() + "-" + Math.floor(8999999999999 * Math.random()) + 1e12
    });

    const c = (e, t) => {
      try {
        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
          if (e === "first-input" && !("PerformanceEventTiming" in window)) return;
          const n = new PerformanceObserver((entries) => entries.getEntries().map(t));
          n.observe({ type: e, buffered: true });
          return n;
        }
      } catch (e) {
        console.error('Error en PerformanceObserver:', e);
      }
    };

    const f = (e, t) => {
      const n = (i) => {
        if (i.type === "pagehide" || document.visibilityState === "hidden") {
          e(i);
          if (t) {
            document.removeEventListener("visibilitychange", n, true);
            window.removeEventListener("pagehide", n, true);
          }
        }
      };
      document.addEventListener("visibilitychange", n, true);
      window.addEventListener("pagehide", n, true);
    };

    const s = (e, t, n) => {
      let i;
      return function (r) {
        if (t.value >= 0 && (r || n)) {
          t.delta = t.value - (i || 0);
          if (t.delta || i === undefined) {
            i = t.value;
            e(t);
          }
        }
      };
    };

    const g = (e, t) => {
      let n;
      const i = u("FCP");
      const r = performance.getEntriesByName("first-contentful-paint")[0];
      const a = (entry) => {
        if (r && entry.startTime < r.startTime) {
          i.value = entry.startTime;
          i.entries.push(entry);
          if (n) n(true);
        }
      };
      const fcpObserver = c("paint", a);
      if (r || fcpObserver) {
        n = s(e, i, t);
        if (r) a(r);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            i.value = performance.now() - r.startTime;
            n(true);
          });
        });
      }
    };

    let h = false, T = -1;
    const y = (e, t) => {
      if (!h) {
        g((entry) => {
          T = entry.value;
        });
        h = true;
      }
      const n = s(e, u("CLS", 0), t);
      const v = (entry) => {
        if (!entry.hadRecentInput) {
          n(true);
        }
      };
      c("layout-shift", v);
    };

    const C = (e, t) => {
      let n;
      const v = u("FID");
      const p = (entry) => {
        v.value = entry.processingStart - entry.startTime;
        v.entries.push(entry);
        if (n) n(true);
      };
      const fidObserver = c("first-input", p);
      if (fidObserver) {
        n = s(e, v, t);
        fidObserver.disconnect();
      }
    };

    const k = {};
    const P = (e, t) => {
      let n;
      const i = u("LCP");
      const a = (entry) => {
        i.value = entry.startTime;
        i.entries.push(entry);
        if (n) n();
      };
      const lcpObserver = c("largest-contentful-paint", a);
      if (lcpObserver) {
        n = s(e, i, t);
        ["keydown", "click"].forEach((event) => {
          window.addEventListener(event, () => {
            lcpObserver.takeRecords().map(a);
            lcpObserver.disconnect();
            k[i.id] = true;
            n(true);
          }, { once: true, capture: true });
        });
      }
    };

    const D = (e) => {
      const n = u("TTFB");
      const t = () => {
        try {
          const performanceTiming = performance.timing;
          const entry = {
            entryType: "navigation",
            startTime: 0,
            responseStart: performanceTiming.responseStart,
          };
          if (n.value === undefined || n.value > performance.now()) {
            n.value = performanceTiming.responseStart - performanceTiming.navigationStart;
            n.entries.push(entry);
            e(n);
          }
        } catch (e) {
          console.error('Error en TTFB:', e);
        }
      };
      if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(t, 0);
      } else {
        document.addEventListener("DOMContentLoaded", () => setTimeout(t, 0));
      }
    };
  }
}]);
