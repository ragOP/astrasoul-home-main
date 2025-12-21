import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * AUTO INSURANCE LANDER (ONE PAGE)
 * Goal: CTA → Redirect
 * Mobile-first, fast, clean
 * ✅ Better card effects (3D tilt + hover lift + glossy sheen)
 * ✅ Better shimmer on buttons (animated sweep + glow + press feedback)
 * ✅ Better review section (rating, avatar, verified badge, carousel-on-mobile feel)
 */

const REDIRECT_URL = "https://your-tracking-link.com";

const AutoInsuranceLander = () => {
  const go = () => {
    window.location.href = REDIRECT_URL;
  };

  // ------- 3D tilt for cards (lightweight, no libs) -------
  const useTilt = () => {
    const ref = useRef(null);

    useEffect(() => {
      const el = ref.current;
      if (!el) return;

      let raf = 0;

      const onMove = (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // normalize -1..1
        const nx = (x / rect.width) * 2 - 1;
        const ny = (y / rect.height) * 2 - 1;

        const rx = (-ny * 8).toFixed(2);
        const ry = (nx * 10).toFixed(2);

        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          el.style.setProperty("--rx", `${rx}deg`);
          el.style.setProperty("--ry", `${ry}deg`);
          el.style.setProperty("--mx", `${(x / rect.width) * 100}%`);
          el.style.setProperty("--my", `${(y / rect.height) * 100}%`);
          el.classList.add("tilting");
        });
      };

      const onLeave = () => {
        cancelAnimationFrame(raf);
        el.classList.remove("tilting");
        el.style.setProperty("--rx", `0deg`);
        el.style.setProperty("--ry", `0deg`);
        el.style.setProperty("--mx", `50%`);
        el.style.setProperty("--my", `35%`);
      };

      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);

      return () => {
        cancelAnimationFrame(raf);
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      };
    }, []);

    return ref;
  };

  const WhyCard = ({ title, desc, icon }) => {
    const tiltRef = useTilt();
    return (
      <div className="card3d whyCard" ref={tiltRef} role="group">
        <div className="cardTop">
          <div className="ic">{icon}</div>
          <h3>{title}</h3>
        </div>
        <p>{desc}</p>
        <div className="cardEdge" />
      </div>
    );
  };

  const ReviewCard = ({ quote, name, state, saved, rating }) => {
    const tiltRef = useTilt();
    const initials = useMemo(() => {
      const parts = String(name || "").trim().split(/\s+/);
      const a = parts[0]?.[0] || "U";
      const b = parts[1]?.[0] || "";
      return (a + b).toUpperCase();
    }, [name]);

    return (
      <div className="card3d reviewCard" ref={tiltRef}>
        <div className="reviewHead">
          <div className="avatar" aria-hidden>
            <span>{initials}</span>
          </div>
          <div className="reviewMeta">
            <div className="nameRow">
              <strong className="reviewName">{name}</strong>
              <span className="verified" title="Verified user">
                ✓ Verified
              </span>
            </div>
            <div className="subRow">
              <span className="loc">{state}</span>
              <span className="dot">•</span>
              <span className="saveTag">Saved {saved}</span>
            </div>
          </div>
          <div className="rating" aria-label={`${rating} out of 5`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={i < rating ? "star on" : "star"}>
                ★
              </span>
            ))}
          </div>
        </div>

        <div className="reviewBody">
          <span className="quoteMark">“</span>
          <p>{quote}</p>
        </div>

        <div className="reviewFoot">
          <span className="miniBadge">Fast match</span>
          <span className="miniBadge">No paperwork</span>
          <span className="miniBadge">No pressure</span>
        </div>

        <div className="cardEdge" />
      </div>
    );
  };

  return (
    <div className="page">
      {/* ===== HEADER ===== */}
      <header className="header">
        <div className="logo">
          <span className="logoMark" aria-hidden />
          AutoQuote
        </div>

        <button className="btn cta headerCta" onClick={go}>
          <span className="btnGlow" aria-hidden />
          <span className="btnShimmer" aria-hidden />
          <span className="btnText">Get My Quote</span>
        </button>
      </header>

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="heroBg" aria-hidden />
        <div className="heroInner">
          <span className="pill">
            <span className="pillDot" aria-hidden />
            Trusted by 60,000+ Drivers
          </span>

          <h1>
            Save up to <span>$710</span>
            <br />
            on Your Auto Insurance
          </h1>

          <p className="sub">
            Compare rates from top insurers in your state.
            <br />
            Takes less than 60 seconds. No paperwork.
          </p>

          <div className="heroCtas">
            <button className="btn cta ctaMain" onClick={go}>
              <span className="btnGlow" aria-hidden />
              <span className="btnShimmer" aria-hidden />
              <span className="btnText">Check My Savings →</span>
            </button>

            <button className="btn ghost" onClick={go}>
              <span className="btnText">See Today’s Rates</span>
            </button>
          </div>

          <p className="micro">Free • No obligation • Secure</p>

          <div className="heroMiniTrust">
            <div className="mini">
              <strong>$19/mo</strong>
              <span>Plans from</span>
            </div>
            <div className="mini">
              <strong>30+</strong>
              <span>Partners</span>
            </div>
            <div className="mini">
              <strong>~1 min</strong>
              <span>Average time</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST STRIP ===== */}
      <section className="trust">
        <div className="trustItem cardSoft">
          <strong>$19/month</strong>
          <span>Plans from</span>
        </div>
        <div className="trustItem cardSoft">
          <strong>30+</strong>
          <span>Insurance partners</span>
        </div>
        <div className="trustItem cardSoft">
          <strong>1 min</strong>
          <span>Average time</span>
        </div>
      </section>

      {/* ===== WHY ===== */}
      <section className="why">
        <div className="sectionHead">
          <h2>Why drivers switch today</h2>
          <p className="sectionSub">
            Quick comparison. Clear savings. You stay in control.
          </p>
        </div>

        <div className="whyGrid">
          <WhyCard
            title="Rates change daily"
            desc="Most drivers overpay simply because they haven’t checked new rates recently."
            icon="⚡"
          />
          <WhyCard
            title="Same coverage, lower cost"
            desc="Many users save without changing coverage or insurer quality."
            icon="🛡️"
          />
          <WhyCard
            title="No agents calling"
            desc="You choose. No pressure. No spam. Just options you can compare."
            icon="🤝"
          />
        </div>
      </section>

      {/* ===== SOCIAL PROOF ===== */}
      <section className="proof">
        <div className="sectionHead">
          <h2>What drivers are saying</h2>
          <p className="sectionSub">
            Recent feedback from real shoppers comparing rates.
          </p>
        </div>

        <div className="reviewRow" aria-label="Reviews">
          <ReviewCard
            quote="Saved $640 a year in under 2 minutes. I wish I did this earlier."
            name="Michael"
            state="TX"
            saved="$640/yr"
            rating={5}
          />
          <ReviewCard
            quote="Didn’t realize how much I was overpaying. Found a better option fast."
            name="Sarah"
            state="FL"
            saved="$52/mo"
            rating={5}
          />
          <ReviewCard
            quote="Same coverage. Way cheaper. The comparison was super easy."
            name="Daniel"
            state="CA"
            saved="$710/yr"
            rating={4}
          />
        </div>

        <div className="proofStats">
          <div className="statCard">
            <div className="statNum">4.8/5</div>
            <div className="statLabel">Average rating</div>
          </div>
          <div className="statCard">
            <div className="statNum">60s</div>
            <div className="statLabel">Typical completion</div>
          </div>
          <div className="statCard">
            <div className="statNum">Secure</div>
            <div className="statLabel">Encrypted redirects</div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="final">
        <div className="finalInner cardSoftLift">
          <h2>See what you could save today</h2>
          <p className="finalSub">
            Rates depend on your location, driving history, and current policy.
          </p>

          <button className="btn cta ctaMain big" onClick={go}>
            <span className="btnGlow" aria-hidden />
            <span className="btnShimmer" aria-hidden />
            <span className="btnText">Get My Free Quote →</span>
          </button>

          <div className="finalBadges">
            <span className="badge">No signup required</span>
            <span className="badge">Takes ~60 seconds</span>
            <span className="badge">No obligation</span>
          </div>

          <p className="micro">No signup required • Takes 60 seconds</p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <p>
          This site is not affiliated with any government entity or insurer.
          Savings not guaranteed. Results vary.
        </p>
      </footer>

      {/* ===== CSS ===== */}
      <style>{`
        * { box-sizing: border-box; }
        html, body { height: 100%; }
        body {
          margin: 0;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto;
          background: radial-gradient(1200px 600px at 20% -10%, rgba(37, 99, 235, .12), transparent 60%),
                      radial-gradient(900px 500px at 80% 0%, rgba(16, 185, 129, .10), transparent 55%),
                      #f8fafc;
          color: #0f172a;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .page {
          max-width: 920px;
          margin: 0 auto;
        }

        /* ===== Buttons (shimmer + glow) ===== */
        .btn{
          position: relative;
          border: 0;
          cursor: pointer;
          border-radius: 999px;
          font-weight: 900;
          letter-spacing: .2px;
          transition: transform .12s ease, filter .2s ease, box-shadow .25s ease;
          outline: none;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
        }
        .btn:active{ transform: translateY(1px) scale(.99); }

        .btnText{ position: relative; z-index: 3; display: inline-flex; align-items: center; gap: 8px; }

        .btnGlow{
          position: absolute; inset: -2px;
          border-radius: 999px;
          z-index: 1;
          filter: blur(10px);
          opacity: .55;
          transition: opacity .25s ease, filter .25s ease;
          background: radial-gradient(60% 80% at 30% 20%, rgba(255,255,255,.55), transparent 55%),
                      radial-gradient(60% 80% at 70% 70%, rgba(255,255,255,.28), transparent 60%);
          pointer-events: none;
        }

        .btnShimmer{
          position: absolute; inset: 0;
          border-radius: 999px;
          z-index: 2;
          overflow: hidden;
          pointer-events: none;
        }
        .btnShimmer::before{
          content:"";
          position: absolute;
          top: -120%;
          left: -40%;
          width: 60%;
          height: 340%;
          transform: rotate(25deg);
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.55), transparent);
          animation: shimmer 2.2s linear infinite;
          opacity: .75;
        }

        @keyframes shimmer{
          0%{ transform: translateX(-140%) rotate(25deg); }
          100%{ transform: translateX(260%) rotate(25deg); }
        }

        .btn.cta{
          padding: 12px 14px;
          color: #fff;
          box-shadow: 0 18px 40px rgba(2,6,23,.18);
        }
        .btn.cta:hover{
          transform: translateY(-1px);
          filter: saturate(1.05);
          box-shadow: 0 22px 55px rgba(2,6,23,.22);
        }
        .btn.cta:hover .btnGlow{ opacity: .75; filter: blur(14px); }

        .btn.ghost{
          padding: 12px 14px;
          background: rgba(255,255,255,.85);
          color: #0f172a;
          border: 1px solid rgba(148,163,184,.45);
          box-shadow: 0 12px 30px rgba(2,6,23,.10);
        }
        .btn.ghost:hover{
          transform: translateY(-1px);
          box-shadow: 0 18px 40px rgba(2,6,23,.14);
        }

        /* Header */
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 14px;
          background: rgba(255,255,255,.85);
          backdrop-filter: blur(10px);
          position: sticky;
          top: 0;
          z-index: 10;
          border-bottom: 1px solid rgba(226,232,240,.9);
        }

        .logo {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-weight: 1000;
          font-size: 18px;
          letter-spacing: .3px;
        }
        .logoMark{
          width: 14px; height: 14px;
          border-radius: 5px;
          background: linear-gradient(135deg, #2563eb, #16a34a);
          box-shadow: 0 10px 22px rgba(37,99,235,.22);
        }

        .headerCta{
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          padding: 10px 14px;
          font-size: 14px;
        }

        /* Hero */
        .hero{
          position: relative;
          padding: 44px 14px 26px;
          text-align: center;
          overflow: hidden;
          border-bottom-left-radius: 28px;
          border-bottom-right-radius: 28px;
        }
        .heroBg{
          position:absolute; inset:0;
          background:
            radial-gradient(900px 500px at 20% 10%, rgba(37,99,235,.16), transparent 60%),
            radial-gradient(900px 500px at 80% 30%, rgba(16,185,129,.12), transparent 58%),
            linear-gradient(180deg, rgba(255,255,255,.92), rgba(241,245,249,.95));
          border-bottom: 1px solid rgba(226,232,240,.9);
        }
        .heroInner{ position: relative; z-index: 1; }

        .pill{
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(224,231,255,.9);
          color: #1e40af;
          padding: 7px 12px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 900;
          margin-bottom: 14px;
          box-shadow: 0 14px 30px rgba(2,6,23,.08);
          border: 1px solid rgba(37,99,235,.18);
        }
        .pillDot{
          width: 8px; height: 8px;
          border-radius: 999px;
          background: #2563eb;
          box-shadow: 0 0 0 6px rgba(37,99,235,.12);
        }

        .hero h1{
          font-size: 34px;
          line-height: 1.06;
          margin: 0;
          font-weight: 1000;
          letter-spacing: -0.6px;
        }
        .hero h1 span{
          background: linear-gradient(135deg, #2563eb, #16a34a);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .sub{
          margin-top: 12px;
          font-size: 15px;
          color: #475569;
          line-height: 1.45;
        }

        .heroCtas{
          display: flex;
          gap: 10px;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          margin-top: 18px;
        }

        .ctaMain{
          background: linear-gradient(135deg, #16a34a, #059669);
          padding: 16px 22px;
          font-size: 16px;
        }
        .ctaMain.big{
          font-size: 18px;
          padding: 18px 26px;
        }

        .micro{
          margin-top: 10px;
          font-size: 12px;
          color: #64748b;
        }

        .heroMiniTrust{
          margin-top: 18px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }
        .mini{
          padding: 12px 10px;
          border-radius: 16px;
          background: rgba(255,255,255,.7);
          border: 1px solid rgba(226,232,240,.9);
          box-shadow: 0 18px 40px rgba(2,6,23,.08);
        }
        .mini strong{ display:block; font-size: 14px; font-weight: 1000; }
        .mini span{ font-size: 11px; color: #64748b; }

        /* Trust strip */
        .trust{
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          padding: 18px 14px 26px;
          background: transparent;
        }

        .cardSoft{
          background: rgba(255,255,255,.78);
          border: 1px solid rgba(226,232,240,.9);
          border-radius: 16px;
          padding: 14px 12px;
          text-align: center;
          box-shadow: 0 18px 40px rgba(2,6,23,.08);
        }
        .trustItem strong{ display:block; font-size: 18px; }
        .trustItem span{ font-size: 12px; color: #64748b; }

        /* Sections */
        .why, .proof, .final{ padding: 38px 14px; }
        .sectionHead{ text-align:center; margin-bottom: 18px; }
        .sectionHead h2{
          font-size: 24px;
          margin: 0;
          letter-spacing: -.3px;
        }
        .sectionSub{
          margin: 8px auto 0;
          max-width: 540px;
          font-size: 13px;
          color: #64748b;
          line-height: 1.45;
        }

        /* ===== 3D card base ===== */
        .card3d{
          --rx: 0deg;
          --ry: 0deg;
          --mx: 50%;
          --my: 35%;
          position: relative;
          border-radius: 18px;
          background: rgba(255,255,255,.84);
          border: 1px solid rgba(226,232,240,.9);
          box-shadow: 0 18px 45px rgba(2,6,23,.10);
          transform-style: preserve-3d;
          transform: perspective(900px) rotateX(var(--rx)) rotateY(var(--ry));
          transition: transform .18s ease, box-shadow .25s ease, border-color .25s ease;
          overflow: hidden;
          will-change: transform;
        }
        .card3d::before{
          content:"";
          position:absolute; inset:0;
          background:
            radial-gradient(420px 220px at var(--mx) var(--my), rgba(37,99,235,.18), transparent 55%),
            radial-gradient(380px 220px at calc(var(--mx) + 20%) calc(var(--my) + 10%), rgba(16,185,129,.14), transparent 58%);
          opacity: .9;
          pointer-events:none;
          transform: translateZ(0);
        }
        .card3d::after{
          content:"";
          position:absolute; inset:-40%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.55), transparent);
          transform: rotate(25deg);
          opacity: 0;
          transition: opacity .25s ease;
          pointer-events:none;
        }
        .card3d:hover{
          box-shadow: 0 26px 70px rgba(2,6,23,.16);
          border-color: rgba(148,163,184,.65);
        }
        .card3d:hover::after{ opacity: .45; }
        .card3d.tilting::after{ opacity: .55; }

        .cardEdge{
          position:absolute; inset:auto 0 0 0;
          height: 10px;
          background: linear-gradient(90deg, rgba(37,99,235,.25), rgba(16,185,129,.25));
          filter: blur(10px);
          opacity: .6;
          pointer-events:none;
        }

        /* Why grid */
        .whyGrid{
          display:grid;
          gap: 12px;
        }
        .whyCard{
          padding: 16px;
          text-align: left;
        }
        .whyCard .cardTop{
          display:flex;
          align-items:center;
          gap: 10px;
          transform: translateZ(18px);
          position: relative;
          z-index: 2;
        }
        .whyCard .ic{
          width: 38px; height: 38px;
          border-radius: 14px;
          display:flex; align-items:center; justify-content:center;
          background: rgba(255,255,255,.7);
          border: 1px solid rgba(226,232,240,.9);
          box-shadow: 0 14px 30px rgba(2,6,23,.10);
          font-size: 18px;
        }
        .whyCard h3{
          margin: 0;
          font-size: 16px;
          font-weight: 1000;
          letter-spacing: -.2px;
        }
        .whyCard p{
          margin: 10px 0 0;
          color: #475569;
          font-size: 13px;
          line-height: 1.45;
          position: relative;
          z-index: 2;
          transform: translateZ(12px);
        }

        /* Proof */
        .proof{
          background: linear-gradient(180deg, rgba(241,245,249,.9), rgba(248,250,252,1));
          border-top: 1px solid rgba(226,232,240,.9);
          border-bottom: 1px solid rgba(226,232,240,.9);
        }

        .reviewRow{
          display: grid;
          gap: 12px;
        }

        .reviewCard{
          padding: 16px;
          text-align: left;
        }

        .reviewHead{
          display:flex;
          align-items:flex-start;
          gap: 12px;
          position: relative;
          z-index: 2;
          transform: translateZ(18px);
        }
        .avatar{
          width: 42px; height: 42px;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(37,99,235,.9), rgba(16,185,129,.9));
          box-shadow: 0 18px 40px rgba(2,6,23,.18);
          display:flex; align-items:center; justify-content:center;
          color:#fff;
          font-weight: 1000;
          font-size: 13px;
          flex: 0 0 auto;
        }

        .reviewMeta{ flex: 1; min-width: 0; }
        .nameRow{
          display:flex;
          align-items:center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .reviewName{ font-size: 14px; font-weight: 1000; }
        .verified{
          font-size: 11px;
          font-weight: 900;
          color: #0f766e;
          background: rgba(20,184,166,.12);
          border: 1px solid rgba(20,184,166,.25);
          padding: 3px 8px;
          border-radius: 999px;
        }
        .subRow{
          margin-top: 4px;
          display:flex;
          align-items:center;
          gap: 8px;
          color:#64748b;
          font-size: 12px;
        }
        .dot{ opacity:.7; }
        .saveTag{
          color:#0f766e;
          font-weight: 900;
          background: rgba(16,185,129,.10);
          border: 1px solid rgba(16,185,129,.20);
          padding: 2px 8px;
          border-radius: 999px;
        }
        .rating{
          display:flex;
          align-items:center;
          gap: 2px;
          margin-left: auto;
          padding-left: 10px;
        }
        .star{
          font-size: 13px;
          color: rgba(148,163,184,.8);
          text-shadow: 0 10px 30px rgba(2,6,23,.08);
        }
        .star.on{
          color: #f59e0b;
          text-shadow: 0 10px 30px rgba(245,158,11,.18);
        }

        .reviewBody{
          margin-top: 12px;
          position: relative;
          z-index: 2;
          transform: translateZ(12px);
        }
        .quoteMark{
          position:absolute;
          top: -10px;
          left: -2px;
          font-size: 44px;
          line-height: 1;
          color: rgba(37,99,235,.18);
          font-weight: 1000;
          user-select:none;
        }
        .reviewBody p{
          margin: 0;
          padding-left: 14px;
          font-size: 13px;
          color: #0f172a;
          line-height: 1.5;
        }

        .reviewFoot{
          margin-top: 12px;
          display:flex;
          gap: 8px;
          flex-wrap: wrap;
          position: relative;
          z-index: 2;
          transform: translateZ(10px);
        }
        .miniBadge{
          font-size: 11px;
          font-weight: 900;
          color:#334155;
          background: rgba(255,255,255,.65);
          border: 1px solid rgba(226,232,240,.9);
          padding: 5px 9px;
          border-radius: 999px;
          box-shadow: 0 14px 30px rgba(2,6,23,.08);
        }

        .proofStats{
          margin-top: 14px;
          display:grid;
          gap: 10px;
          grid-template-columns: repeat(3, 1fr);
        }
        .statCard{
          border-radius: 16px;
          background: rgba(255,255,255,.75);
          border: 1px solid rgba(226,232,240,.9);
          padding: 12px;
          text-align:center;
          box-shadow: 0 18px 40px rgba(2,6,23,.08);
        }
        .statNum{
          font-weight: 1000;
          font-size: 16px;
          letter-spacing: -.2px;
        }
        .statLabel{
          margin-top: 3px;
          font-size: 11px;
          color:#64748b;
        }

        /* Final */
        .final{ background: transparent; }
        .finalInner{
          padding: 22px 16px;
          border-radius: 22px;
          text-align: center;
          background: rgba(255,255,255,.82);
          border: 1px solid rgba(226,232,240,.9);
          box-shadow: 0 24px 60px rgba(2,6,23,.12);
        }
        .cardSoftLift{
          position: relative;
          overflow: hidden;
        }
        .cardSoftLift::before{
          content:"";
          position:absolute; inset:-40%;
          background: radial-gradient(600px 300px at 20% 30%, rgba(37,99,235,.20), transparent 60%),
                      radial-gradient(600px 300px at 80% 70%, rgba(16,185,129,.16), transparent 62%);
          opacity: .9;
          pointer-events:none;
        }
        .finalInner > * { position: relative; z-index: 2; }
        .finalInner h2{
          margin: 0;
          font-size: 24px;
          letter-spacing: -.3px;
        }
        .finalSub{
          margin: 10px auto 0;
          max-width: 520px;
          color:#64748b;
          font-size: 13px;
          line-height: 1.45;
        }
        .finalBadges{
          margin-top: 12px;
          display:flex;
          gap: 8px;
          justify-content:center;
          flex-wrap: wrap;
        }
        .badge{
          font-size: 11px;
          font-weight: 900;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(15,23,42,.04);
          border: 1px solid rgba(226,232,240,.9);
          color:#334155;
        }

        /* Footer */
        .footer{
          padding: 18px 14px 24px;
          text-align: center;
          font-size: 11px;
          color: #64748b;
          border-top: 1px solid rgba(226,232,240,.9);
          background: rgba(255,255,255,.75);
          backdrop-filter: blur(10px);
          border-top-left-radius: 22px;
          border-top-right-radius: 22px;
        }

        /* Responsive */
        @media (min-width: 768px){
          .hero{ padding: 52px 18px 30px; }
          .hero h1{ font-size: 50px; }
          .ctaMain{ font-size: 17px; padding: 16px 26px; }
          .whyGrid{ grid-template-columns: repeat(3, 1fr); }
          .reviewRow{ grid-template-columns: repeat(3, 1fr); }
          .header{ padding: 14px 18px; }
          .trust{ padding: 18px 18px 28px; }
          .why, .proof, .final{ padding: 44px 18px; }
        }

        /* Mobile: make reviews feel premium (edge-to-edge swipe vibe) */
        @media (max-width: 520px){
          .reviewRow{
            grid-auto-flow: column;
            grid-auto-columns: 88%;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            padding-bottom: 6px;
          }
          .reviewRow::-webkit-scrollbar{ height: 8px; }
          .reviewRow::-webkit-scrollbar-thumb{
            background: rgba(148,163,184,.5);
            border-radius: 999px;
          }
          .reviewCard{ scroll-snap-align: center; }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce){
          .btnShimmer::before{ animation: none; }
          .card3d, .btn{ transition: none; }
        }
      `}</style>
    </div>
  );
};

export default AutoInsuranceLander;
