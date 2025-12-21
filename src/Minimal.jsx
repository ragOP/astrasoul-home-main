import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * AUTO INSURANCE LANDER (ONE PAGE) — WHITE / MINIMAL / MOBILE-FIRST
 * Goal: CTA → Redirect (YES/NO + header button)
 * No libs. Pure React + CSS.
 */

const REDIRECT_URL = "https://your-tracking-link.com";

/** set a "live closes" deadline (local browser time) */
const DEADLINE = new Date("2025-12-21T17:00:00"); // change if needed

export default function AutoInsuranceLander() {
  const [region, setRegion] = useState({ state: "your state", city: "" });
  const [countdown, setCountdown] = useState("");
  const [livePulse, setLivePulse] = useState(true);

  const heroCardRef = useRef(null);
  const reviewWrapRef = useRef(null);

  const go = () => {
    window.location.href = REDIRECT_URL;
  };

  // ---- State detection (safe fallback) ----
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        const st = data?.region || data?.region_code || data?.region_name;
        const ct = data?.city;
        if (!mounted) return;
        setRegion({
          state: st ? String(st) : "your state",
          city: ct ? String(ct) : "",
        });
      } catch {
        // ignore, keep fallback
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  // ---- Countdown / live pulse ----
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const ms = DEADLINE.getTime() - now.getTime();

      setLivePulse((p) => !p);

      if (isNaN(ms)) {
        setCountdown("");
        return;
      }

      if (ms <= 0) {
        setCountdown("Ends soon");
        return;
      }

      const totalSec = Math.floor(ms / 1000);
      const h = Math.floor(totalSec / 3600);
      const m = Math.floor((totalSec % 3600) / 60);
      const s = totalSec % 60;

      if (h >= 24) {
        const d = Math.floor(h / 24);
        const hh = h % 24;
        setCountdown(`${d}d ${hh}h ${m}m`);
      } else {
        setCountdown(`${h}h ${m}m ${s}s`);
      }
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // ---- 3D tilt helper ----
  const bindTilt = (el, strength = 10) => {
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;

      const px = (x / r.width - 0.5) * 2; // -1..1
      const py = (y / r.height - 0.5) * 2;

      el.style.setProperty("--rx", `${(-py * strength).toFixed(2)}deg`);
      el.style.setProperty("--ry", `${(px * strength).toFixed(2)}deg`);
      el.style.setProperty("--mx", `${x.toFixed(0)}px`);
      el.style.setProperty("--my", `${y.toFixed(0)}px`);
      el.classList.add("is-tilting");
    };
    const onLeave = () => {
      el.style.setProperty("--rx", `0deg`);
      el.style.setProperty("--ry", `0deg`);
      el.classList.remove("is-tilting");
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  };

  useEffect(() => {
    const cleanupA = bindTilt(heroCardRef.current, 9);
    const cleanupB = bindTilt(reviewWrapRef.current, 6);
    return () => {
      if (cleanupA) cleanupA();
      if (cleanupB) cleanupB();
    };
  }, []);

  const headline = useMemo(() => {
    // keep it simple + conversion-forward
    return `See if ${region.state} drivers can save today`;
  }, [region.state]);

  return (
    <div className="AQPage">
      {/* ===== TOP BAR ===== */}
      <header className="AQHeader">
        <div className="AQBrand" onClick={go} role="button" tabIndex={0}>
          <div className="AQFlag" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="AQBrandText">
            <div className="AQBrandName">QuoteDiscount</div>
            <div className="AQBrandSub">USA</div>
          </div>
        </div>

        <button className="AQHeaderBtn" onClick={go}>
          Get Quote
        </button>
      </header>

      {/* ===== LIVE STRIP ===== */}
      <section className="AQLive">
        <div className="AQLiveInner">
          <div className={`AQLiveDot ${livePulse ? "on" : ""}`} />
          <div className="AQLiveText">
            <strong>LIVE:</strong>{" "}
            <span className="muted">
              Program closes{" "}
              <span className="AQLiveTime">
                {countdown ? `in ${countdown}` : "soon"}
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* ===== MAIN ===== */}
      <main className="AQMain">
        {/* HERO HEADLINE */}
        <section className="AQHero">
          <h1 className="AQH1">{headline}</h1>
          <p className="AQSub">
            Fast check. No paperwork. Compare nearby offers.
          </p>
        </section>

        {/* QUESTION CARD */}
        <section className="AQCardWrap">
          <div className="AQCard" ref={heroCardRef}>
            <div className="AQCardTop">
              <div className="AQBadge">30-second check</div>
              <div className="AQMiniStat">
                <span className="k">Today:</span>{" "}
                <span className="v">Rates updated</span>
              </div>
            </div>

            <div className="AQQuestion">
              Are you currently insured?
              <div className="AQQuestionHint">
                We’ll show options based on {region.city ? region.city : "your area"}.
              </div>
            </div>

            <div className="AQBtns">
              <button className="AQBtn primary shimmer" onClick={go}>
                YES — Show My Options
              </button>
              <button className="AQBtn ghost" onClick={go}>
                NO — Continue
              </button>
            </div>

            <div className="AQFine">
              Free • No obligation • Secure redirect
            </div>

            <div className="AQTrustRow" aria-label="Trust markers">
              <div className="AQTrustItem">
                <div className="n">1 min</div>
                <div className="l">Avg time</div>
              </div>
              <div className="AQTrustItem">
                <div className="n">$19/mo</div>
                <div className="l">From</div>
              </div>
              <div className="AQTrustItem">
                <div className="n">30+</div>
                <div className="l">Partners</div>
              </div>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="AQReviews">
          <div className="AQSectionHead">
            <h2>Real driver feedback</h2>
            <p className="AQSectionSub">Short stories. Straight results.</p>
          </div>

          <div className="AQReviewGrid tiltWrap" ref={reviewWrapRef}>
            <article className="AQReview">
              <div className="AQAvatar" aria-hidden="true">
                JM
              </div>
              <div className="AQReviewBody">
                <p className="AQQuote">
                  “I thought my rate was fine. This showed a cheaper option in under a
                  minute.”
                </p>
                <div className="AQMeta">
                  <span className="name">Julia M.</span>
                  <span className="sep">•</span>
                  <span className="loc">{region.state}</span>
                </div>
              </div>
            </article>

            <article className="AQReview">
              <div className="AQAvatar alt" aria-hidden="true">
                DK
              </div>
              <div className="AQReviewBody">
                <p className="AQQuote">
                  “No calls, no pressure. I just picked the offer and moved on.”
                </p>
                <div className="AQMeta">
                  <span className="name">Daniel K.</span>
                  <span className="sep">•</span>
                  <span className="loc">USA</span>
                </div>
              </div>
            </article>

            <article className="AQReview">
              <div className="AQAvatar alt2" aria-hidden="true">
                ST
              </div>
              <div className="AQReviewBody">
                <p className="AQQuote">
                  “Same coverage. Lower price. Wish I checked sooner.”
                </p>
                <div className="AQMeta">
                  <span className="name">Samantha T.</span>
                  <span className="sep">•</span>
                  <span className="loc">USA</span>
                </div>
              </div>
            </article>
          </div>

          {/* FINAL CTA (minimal) */}
          <div className="AQFinal">
            <button className="AQBtn primary shimmer big" onClick={go}>
              Check My Rate Now
            </button>
            <div className="AQFine center">
              Results vary by driver profile and location.
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="AQFooter">
          <p>
            This site is an independent marketing partner and is not affiliated with
            any government entity or insurer. Savings not guaranteed. Offers vary.
          </p>
        </footer>
      </main>

      <style>{`
        :root{
          --bg:#ffffff;
          --ink:#0b1220;
          --muted:#5b677a;
          --line:#e7edf5;
          --soft:#f6f8fb;

          --blue:#2b6cff;
          --blue2:#1f55d9;

          --btn:#3b82f6;
          --btn2:#2563eb;

          --shadow: 0 18px 40px rgba(15, 23, 42, .08);
          --shadow2: 0 10px 22px rgba(15, 23, 42, .10);
          --r-xl: 18px;
          --r-lg: 16px;
          --r-md: 14px;

          --rx: 0deg;
          --ry: 0deg;
          --mx: 50%;
          --my: 50%;
        }

        *{ box-sizing:border-box; }
        html, body { height: 100%; }
        body{
          margin:0;
          background: var(--bg);
          color: var(--ink);
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
        }

        .AQPage{
          min-height:100%;
          background:#fff;
        }

        /* Header */
        .AQHeader{
          position: sticky;
          top:0;
          z-index:20;
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding: 12px 14px;
          background:#fff;
          border-bottom: 1px solid var(--line);
        }

        .AQBrand{
          display:flex;
          align-items:center;
          gap:10px;
          cursor:pointer;
          user-select:none;
        }

        .AQFlag{
          width: 34px;
          height: 26px;
          border: 1px solid var(--line);
          border-radius: 6px;
          overflow:hidden;
          display:grid;
          grid-template-rows: 1fr 1fr 1fr;
          background:#fff;
        }
        .AQFlag span:nth-child(1){ background:#e11d48; }
        .AQFlag span:nth-child(2){ background:#ffffff; }
        .AQFlag span:nth-child(3){ background:#1d4ed8; }

        .AQBrandText{ line-height:1; }
        .AQBrandName{
          font-weight: 900;
          letter-spacing: .2px;
          font-size: 14px;
        }
        .AQBrandSub{
          margin-top: 2px;
          font-weight: 800;
          font-size: 12px;
          color: var(--muted);
          letter-spacing: .4px;
        }

        .AQHeaderBtn{
          border: 1px solid var(--line);
          background: #fff;
          color: var(--ink);
          font-weight: 800;
          padding: 10px 12px;
          border-radius: 999px;
          cursor:pointer;
          box-shadow: 0 8px 20px rgba(15, 23, 42, .06);
          transition: transform .15s ease, box-shadow .15s ease;
        }
        .AQHeaderBtn:active{ transform: translateY(1px); }
        .AQHeaderBtn:hover{ box-shadow: 0 12px 24px rgba(15, 23, 42, .10); }

        /* Live strip */
        .AQLive{
          padding: 10px 14px;
          border-bottom: 1px solid var(--line);
          background: #fff;
        }
        .AQLiveInner{
          max-width: 560px;
          margin: 0 auto;
          display:flex;
          align-items:center;
          gap:10px;
          justify-content:center;
        }
        .AQLiveDot{
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: #94a3b8;
          box-shadow: none;
          transition: background .2s ease, box-shadow .2s ease;
        }
        .AQLiveDot.on{
          background: #ef4444;
          box-shadow: 0 0 0 6px rgba(239,68,68,.12);
        }
        .AQLiveText{
          font-size: 12px;
          letter-spacing:.2px;
        }
        .AQLiveText strong{ font-weight: 900; }
        .AQLiveTime{
          font-weight: 900;
          color: #111827;
        }
        .muted{ color: var(--muted); }

        /* Main container */
        .AQMain{
          max-width: 560px;
          margin: 0 auto;
          padding: 16px 14px 26px;
        }

        /* Hero (simple) */
        .AQHero{
          padding: 14px 2px 10px;
          text-align:center;
        }
        .AQH1{
          margin: 8px 0 8px;
          font-size: 30px;
          line-height: 1.12;
          letter-spacing: -0.6px;
          font-weight: 950;
        }
        .AQSub{
          margin: 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.35;
        }

        /* Card */
        .AQCardWrap{
          padding: 14px 0 18px;
        }

        .AQCard{
          background: #fff;
          border: 1px solid var(--line);
          border-radius: var(--r-xl);
          padding: 14px;
          box-shadow: var(--shadow);
          transform-style: preserve-3d;
          transform: perspective(900px) rotateX(var(--rx)) rotateY(var(--ry));
          transition: transform .18s ease, box-shadow .18s ease;
          position: relative;
          overflow:hidden;
        }

        /* subtle spotlight while tilting */
        .AQCard::before{
          content:"";
          position:absolute;
          inset:-1px;
          background: radial-gradient(220px 160px at var(--mx) var(--my), rgba(59,130,246,.14), rgba(59,130,246,0) 60%);
          opacity: 0;
          transition: opacity .18s ease;
          pointer-events:none;
        }
        .AQCard.is-tilting::before{ opacity: 1; }
        .AQCard:hover{ box-shadow: 0 22px 60px rgba(15, 23, 42, .12); }

        .AQCardTop{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap: 10px;
          margin-bottom: 12px;
        }

        .AQBadge{
          font-size: 12px;
          font-weight: 900;
          padding: 7px 10px;
          border-radius: 999px;
          border: 1px solid var(--line);
          background: var(--soft);
        }

        .AQMiniStat{
          font-size: 12px;
          color: var(--muted);
          display:flex;
          gap:6px;
          align-items:baseline;
          white-space: nowrap;
        }
        .AQMiniStat .k{ font-weight: 800; color: var(--ink); }
        .AQMiniStat .v{ font-weight: 700; }

        .AQQuestion{
          font-size: 18px;
          font-weight: 950;
          letter-spacing: -0.2px;
          text-align:center;
          margin: 8px 0 10px;
        }
        .AQQuestionHint{
          margin-top: 6px;
          font-size: 12px;
          font-weight: 700;
          color: var(--muted);
        }

        .AQBtns{
          display:grid;
          gap: 10px;
          margin-top: 12px;
        }

        .AQBtn{
          width:100%;
          border-radius: 14px;
          padding: 14px 14px;
          font-weight: 950;
          letter-spacing: .3px;
          cursor:pointer;
          border: 1px solid var(--line);
          background:#fff;
          color: var(--ink);
          box-shadow: var(--shadow2);
          position: relative;
          overflow:hidden;
          transform: translateZ(18px);
          transition: transform .15s ease, box-shadow .15s ease, border-color .15s ease;
          -webkit-tap-highlight-color: transparent;
        }
        .AQBtn:active{ transform: translateZ(18px) translateY(1px); }
        .AQBtn:hover{ box-shadow: 0 16px 34px rgba(15, 23, 42, .12); }

        .AQBtn.primary{
          background: linear-gradient(180deg, var(--btn), var(--btn2));
          color:#fff;
          border-color: rgba(37,99,235,.25);
        }

        .AQBtn.ghost{
          background:#fff;
          border-color: var(--line);
          color: var(--ink);
        }

        /* Better shimmer (subtle, always-on, stronger on hover) */
        .shimmer::after{
          content:"";
          position:absolute;
          top:-40%;
          left:-60%;
          width: 60%;
          height: 180%;
          background: linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,.55), rgba(255,255,255,0));
          transform: rotate(18deg);
          animation: AQShimmer 2.8s ease-in-out infinite;
          opacity: .55;
          pointer-events:none;
        }
        .ghost.shimmer::after{ opacity: .22; }
        .AQBtn:hover.shimmer::after{ opacity: .9; }

        @keyframes AQShimmer{
          0%{ transform: translateX(-20%) rotate(18deg); }
          55%{ transform: translateX(240%) rotate(18deg); }
          100%{ transform: translateX(240%) rotate(18deg); }
        }

        .AQFine{
          margin-top: 10px;
          font-size: 12px;
          color: var(--muted);
          text-align:center;
        }
        .AQFine.center{ margin-top: 12px; }

        .AQTrustRow{
          margin-top: 14px;
          display:grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }
        .AQTrustItem{
          background: var(--soft);
          border: 1px solid var(--line);
          border-radius: 14px;
          padding: 10px 10px;
          text-align:center;
          transform: translateZ(10px);
        }
        .AQTrustItem .n{
          font-weight: 950;
          letter-spacing: -.2px;
        }
        .AQTrustItem .l{
          margin-top: 2px;
          font-size: 12px;
          color: var(--muted);
          font-weight: 700;
        }

        /* Reviews */
        .AQReviews{
          padding: 10px 0 0;
        }
        .AQSectionHead{
          text-align:center;
          padding: 6px 0 10px;
        }
        .AQSectionHead h2{
          margin:0;
          font-size: 18px;
          font-weight: 950;
          letter-spacing: -0.2px;
        }
        .AQSectionSub{
          margin: 6px 0 0;
          font-size: 12px;
          color: var(--muted);
          font-weight: 700;
        }

        .AQReviewGrid{
          margin-top: 10px;
          display:grid;
          gap: 10px;
          transform-style: preserve-3d;
          transform: perspective(900px) rotateX(var(--rx)) rotateY(var(--ry));
          transition: transform .18s ease;
        }

        .AQReview{
          display:flex;
          gap: 12px;
          align-items:flex-start;
          background:#fff;
          border: 1px solid var(--line);
          border-radius: var(--r-lg);
          padding: 12px;
          box-shadow: 0 14px 36px rgba(15, 23, 42, .08);
          position: relative;
          overflow:hidden;
        }
        .AQReview::before{
          content:"";
          position:absolute;
          inset:-1px;
          background: radial-gradient(220px 150px at var(--mx) var(--my), rgba(37,99,235,.10), rgba(37,99,235,0) 60%);
          opacity: 0;
          transition: opacity .18s ease;
          pointer-events:none;
        }
        .AQReviewGrid.is-tilting .AQReview::before{ opacity: 1; }

        .AQAvatar{
          width: 42px;
          height: 42px;
          border-radius: 999px;
          display:grid;
          place-items:center;
          font-weight: 950;
          color:#fff;
          background: linear-gradient(180deg, #111827, #334155);
          flex: 0 0 auto;
          box-shadow: 0 10px 22px rgba(15, 23, 42, .12);
          transform: translateZ(18px);
        }
        .AQAvatar.alt{ background: linear-gradient(180deg, #1d4ed8, #2563eb); }
        .AQAvatar.alt2{ background: linear-gradient(180deg, #0f766e, #14b8a6); }

        .AQReviewBody{ flex:1; }
        .AQQuote{
          margin:0;
          font-size: 13px;
          line-height: 1.45;
          color: #111827;
          font-weight: 750;
        }
        .AQMeta{
          margin-top: 8px;
          display:flex;
          gap: 8px;
          align-items:center;
          font-size: 12px;
          color: var(--muted);
          font-weight: 800;
        }
        .AQMeta .sep{ opacity: .5; }

        .AQFinal{
          margin-top: 14px;
          padding-top: 8px;
          text-align:center;
        }
        .AQBtn.big{
          padding: 15px 14px;
          border-radius: 16px;
          font-size: 15px;
        }

        .AQFooter{
          margin-top: 16px;
          padding: 14px 0 0;
          border-top: 1px solid var(--line);
          text-align:center;
          color: var(--muted);
          font-size: 11px;
          line-height: 1.35;
        }
        .AQFooter p{ margin: 10px 0 0; }

        /* Desktop tweaks but still minimal */
        @media (min-width: 520px){
          .AQMain{ padding: 18px 14px 28px; }
          .AQH1{ font-size: 34px; }
          .AQReviewGrid{ grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
