import React, { useEffect, useMemo, useRef, useState } from "react";

const WealthPage = () => {
  const iframeRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  // Your embedded app URL
  const IFRAME_SRC = "https://wealth-pathfinder-project.lovable.app";

  // Any URL that should open in normal browser (top window)
  // Add more allowed prefixes if needed
  const BREAKOUT_ALLOWLIST = useMemo(
    () => [
      "https://www.astrasoul.digital/",
      "https://astrasoul.digital/",
      "https://www.astrasoul.digital/wealth-cart",
      "https://astrasoul.digital/wealth-cart",
      // add your other destinations here if needed
    ],
    []
  );

  // Faster load: preconnect + dns-prefetch + preload iframe doc (best effort)
  useEffect(() => {
    const head = document.head;

    const add = (tag) => head.appendChild(tag);

    const mkLink = (rel, href, extra = {}) => {
      const l = document.createElement("link");
      l.rel = rel;
      l.href = href;
      Object.entries(extra).forEach(([k, v]) => (l[k] = v));
      return l;
    };

    // preconnect to iframe origin
    const iframeOrigin = new URL(IFRAME_SRC).origin;
    add(mkLink("dns-prefetch", iframeOrigin));
    add(mkLink("preconnect", iframeOrigin, { crossOrigin: "anonymous" }));

    // (Optional) If you know Lovable loads analytics/assets from their own CDN,
    // you can also preconnect those here.

    return () => {
      // no cleanup needed
    };
  }, []);

  // Breakout behavior:
  // - If Lovable uses target=_top or target=_parent => browser will navigate (good)
  // - If Lovable uses window.open => we intercept and redirect top
  // - If Lovable sends postMessage => we handle it (recommended)
  useEffect(() => {
    const onMessage = (event) => {
      // SECURITY: only accept messages from the iframe origin
      const allowedOrigin = new URL(IFRAME_SRC).origin;
      if (event.origin !== allowedOrigin) return;

      const data = event.data;

      // Support multiple possible message shapes
      // Lovable can be configured to postMessage({ type:'NAVIGATE', url:'...' })
      const url =
        (typeof data === "string" && data.startsWith("http") && data) ||
        (data && typeof data === "object" && data.url) ||
        (data && typeof data === "object" && data.href);

      if (!url || typeof url !== "string") return;

      // If the destination is in allowlist, break out and navigate top
      if (BREAKOUT_ALLOWLIST.some((p) => url.startsWith(p))) {
        window.location.assign(url);
      }
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [BREAKOUT_ALLOWLIST, IFRAME_SRC]);

  // Intercept window.open while iframe is present:
  // If Lovable uses window.open('https://www.astrasoul.digital/wealth-cart'), we redirect top.
  useEffect(() => {
    const originalOpen = window.open;

    window.open = function patchedOpen(url, target, features) {
      try {
        if (typeof url === "string" && url.startsWith("http")) {
          if (BREAKOUT_ALLOWLIST.some((p) => url.startsWith(p))) {
            window.location.assign(url);
            return null;
          }
        }
      } catch {}

      return originalOpen.call(window, url, target, features);
    };

    return () => {
      window.open = originalOpen;
    };
  }, [BREAKOUT_ALLOWLIST]);

  // UX: quick skeleton while iframe loads
  const Skeleton = () => (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0b1220",
        color: "rgba(255,255,255,0.9)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 420, padding: 16 }}>
        <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 10 }}>
          Loading…
        </div>
        <div style={{ fontSize: 14, opacity: 0.8, lineHeight: 1.4 }}>
          {/* Preparing your Wealth Pathfinder */}
        </div>
        <div
          style={{
            marginTop: 16,
            height: 10,
            width: "100%",
            borderRadius: 999,
            background: "rgba(255,255,255,0.10)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "55%",
              borderRadius: 999,
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.0), rgba(255,255,255,0.35), rgba(255,255,255,0.0))",
              animation: "bar 1.4s ease-in-out infinite",
            }}
          />
        </div>

        <style>{`
          @keyframes bar {
            0% { transform: translateX(-60%); }
            100% { transform: translateX(170%); }
          }
        `}</style>
      </div>
    </div>
  );

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      {!loaded && <Skeleton />}

      <iframe
        ref={iframeRef}
        src={IFRAME_SRC}
        title="Wealth Pathfinder"
        loading="lazy"
        fetchpriority="high"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          display: "block",
          opacity: loaded ? 1 : 0,
          transition: "opacity 200ms ease",
          background: "transparent",
        }}
        // Try to allow normal link behavior
        // NOTE: allow-top-navigation is restricted unless user-gesture; we still handle window.open + postMessage.
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
        onLoad={() => setLoaded(true)}
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default WealthPage;
