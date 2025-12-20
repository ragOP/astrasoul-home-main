import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

/**
 * ULTRA PREMIUM 2-Year Kundali Landing (Mobile-first)
 * ✅ Full single-file React JSX
 * ✅ Form removed ✅ (replaced with Order/WhatsApp section)
 * ✅ HERO top area now has content (no empty panel)
 * ✅ Reveal cards centered (pic 2 fix)
 *
 * Install:
 *   npm i framer-motion
 */

const easeOut = [0.16, 1, 0.3, 1];

const TwoYearHoroscopePremium = () => {
  const pageRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: undefined });
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 25,
    mass: 0.35,
  });

  const [active, setActive] = useState("home");

  const IMAGES = useMemo(
    () => ({
      hero:
        "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=1800&q=80",
      cosmicHands:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80",
      candle:
        "https://images.unsplash.com/photo-1506111583091-bb5a2a90a2fd?auto=format&fit=crop&w=1600&q=80",
      journal:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=80",
      personSilhouette:
        "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1600&q=80",
      constellation:
        "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1600&q=80",

      // Premium signature pics (replace with your real ones anytime)
      sig1:
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1600&q=80",
      sig2:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1600&q=80",
      sig3:
        "https://images.unsplash.com/photo-1516542076529-1ea3854896f2?auto=format&fit=crop&w=1600&q=80",
      sig4:
        "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1600&q=80",
    }),
    []
  );

  useEffect(() => {
    const ids = ["home", "problem", "reveal", "signatures", "preview", "order"];
    const elMap = ids
      .map((id) => ({ id, el: document.getElementById(id) }))
      .filter((x) => x.el);

    const onScroll = () => {
      const y = window.scrollY || 0;
      let best = "home";
      let bestDist = Infinity;

      elMap.forEach(({ id, el }) => {
        const rect = el.getBoundingClientRect();
        const top = rect.top + y;
        const dist = Math.abs(top - y - 140);
        if (dist < bestDist) {
          bestDist = dist;
          best = id;
        }
      });

      setActive(best);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const heroParallaxY = useTransform(scrollYProgress, [0, 0.25], [0, 85]);
  const heroGlow = useTransform(scrollYProgress, [0, 0.2], [1, 0.65]);

  return (
    <div ref={pageRef} className="wrap">
      {/* ===== Top Progress Bar ===== */}
      <motion.div className="topProgress" style={{ scaleX: progress }} />

      {/* ===== Sticky Header ===== */}
      <header className="header">
        <div className="headerInner">
          <a className="brand" href="#home" aria-label="Go to top">
            <span className="brandMark" />
            <span className="brandText">
              <span className="brandName">Kundali</span>
              <span className="brandSub">2-Year Report</span>
            </span>
          </a>

          <nav className="nav">
            <a className={active === "problem" ? "navLink active" : "navLink"} href="#problem">
              Fear
            </a>
            <a className={active === "reveal" ? "navLink active" : "navLink"} href="#reveal">
              Inside
            </a>
            <a className={active === "signatures" ? "navLink active" : "navLink"} href="#signatures">
              Signatures
            </a>
            <a className={active === "preview" ? "navLink active" : "navLink"} href="#preview">
              Preview
            </a>
            <a className={active === "order" ? "navLink active" : "navLink"} href="#order">
              Start
            </a>
          </nav>

          <a className="headerCta" href="#order">
            Reveal 24 Months
            <span className="headerCtaGlow" />
          </a>
        </div>
      </header>

      {/* ===== Background FX ===== */}
      <Stars />
      <Aurora />

      {/* ===== HERO ===== */}
      <section id="home" className="hero">
        <motion.div className="heroMedia" style={{ y: heroParallaxY }}>
          <img className="heroImg" src={IMAGES.hero} alt="Cosmic night sky background" />
          <div className="heroOverlay" />
          <motion.div className="heroBloom" style={{ opacity: heroGlow }} />

          {/* Top “panel” now has content (so it doesn’t look empty) */}
          <div className="heroTopPanel" aria-hidden="false">
            <div className="heroTopPanelStars" />
            <div className="heroPanelInner">
              <div className="heroPanelHead">
                <div className="heroPanelTitle">Today’s Snapshot</div>
                <div className="heroPanelPill">24-month timing</div>
              </div>

              <div className="heroPanelGrid">
                <PanelCard
                  k="Best Window"
                  v="Next 30–45 days"
                  hint="Action phase"
                  icon="✦"
                />
                <PanelCard
                  k="Caution"
                  v="Short risk phase"
                  hint="Avoid big moves"
                  icon="⚠"
                />
                <PanelCard
                  k="Love"
                  v="Turning point"
                  hint="Clarity incoming"
                  icon="♡"
                />
                <PanelCard
                  k="Money"
                  v="Growth period"
                  hint="Stabilizing"
                  icon="₹"
                />
              </div>

              <div className="heroPanelFooter">
                <span className="hpDot" />
                <span className="hpText">Your report shows exact months + remedies (no generic copy-paste).</span>
              </div>
            </div>
          </div>

          {/* bottom curve plate */}
          <div className="heroBottomPlate" aria-hidden="true" />
        </motion.div>

        <div className="heroContent">
          <motion.div
            className="heroCard"
            initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: easeOut }}
          >
            <div className="pillRow">
              <span className="pill">WhatsApp Private Delivery</span>
              <span className="pill">100% Personalised</span>
              <span className="pill">No copy-paste</span>
            </div>

            <h1 className="h1">
              Your next <span className="accent">24 months</span> —
              <br />
              mapped with <span className="accent2">timing windows.</span>
            </h1>

            <p className="sub">
              Month-by-month phases: when to push, pause, avoid risk, or act — based on your chart timing.
            </p>

            <div className="heroActions">
              <a className="cta" href="#order">
                Reveal My Next 24 Months
                <span className="ctaShine" />
              </a>
              <a className="cta ghost" href="#reveal">
                See What’s Inside
              </a>
            </div>

            <div className="trustRow">
              <TrustItem title="WhatsApp Summary" desc="Fast + private" />
              <TrustItem title="20–35 Page PDF" desc="Deep detail" />
              <TrustItem title="Timing Windows" desc="Act / avoid" />
              <TrustItem title="Trusted" desc="High satisfaction" />
            </div>

            <div className="micro">
              <span className="microDot" />
              <span>Astrology is guidance. You choose actions.</span>
            </div>
          </motion.div>

          <motion.div
            className="heroSide"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: easeOut }}
          >
            <div className="miniFrame">
              <img src={IMAGES.constellation} alt="Constellations" />
              <div className="miniShade" />
              <div className="miniText">
                <div className="miniTitle">Month-by-Month Timeline</div>
                <div className="miniSub">24 months • exact windows</div>
              </div>
            </div>

            <div className="miniGrid">
              <MiniStat k="Breakthrough windows" v="Mapped" />
              <MiniStat k="Danger months" v="Flagged" />
              <MiniStat k="Love turning points" v="Timed" />
              <MiniStat k="Money periods" v="Planned" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== PROBLEM ===== */}
      <section id="problem" className="section sectionDark">
        <SectionHead
          eyebrow="The real problem"
          title="Is timing the missing piece?"
          desc="Most regrets happen when we act too early… or too late."
        />

        <div className="fearGrid">
          {[
            "You feel stuck — but you don’t know what to do next.",
            "You miss opportunities because you didn’t move at the right time.",
            "Love feels confusing: on/off, unclear, repeating patterns.",
            "Money or career swings feel random.",
            "You sense a big change coming, but can’t read the signs.",
            "You want clarity before you take a major step.",
          ].map((t, i) => (
            <motion.div
              key={i}
              className="fearCard"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: easeOut }}
            >
              <span className="fearDot" />
              <p>{t}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="soulLine"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <div className="soulTitle">Clarity reduces mistakes.</div>
          <div className="soulText">
            You don’t need more motivation. You need <b>timing.</b>
          </div>
        </motion.div>

        <div className="centerCta">
          <a className="cta" href="#order">
            Yes — Show My Timing
            <span className="ctaShine" />
          </a>
        </div>
      </section>

      {/* ===== REVEALS ===== */}
      <section id="reveal" className="section">
        <SectionHead
          eyebrow="What you get"
          title="Your 24-month roadmap"
          desc="Clear phases, clear windows, clear action."
        />

        <div className="revealLayout">
          <motion.div
            className="revealPoster"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: easeOut }}
          >
            <img src={IMAGES.cosmicHands} alt="Mystic hands under stars" />
            <div className="posterShade" />
            <div className="posterBadge">24-Month Roadmap</div>
            <div className="posterBottom">
              <div className="posterTitle">Timing beats effort.</div>
              <div className="posterSub">Know when to push • when to pause</div>
            </div>
          </motion.div>

          <div className="revealCards">
            <RevealCard
              icon="🗓️"
              title="Month-by-Month Timeline"
              points={["When life opens", "When it slows", "Best action windows", "Risk months"]}
            />
            <RevealCard
              icon="❤️"
              title="Love Phases"
              points={["Turning points", "Commitment windows", "Conflict months", "Healing cycles"]}
            />
            <RevealCard
              icon="💼"
              title="Career & Money"
              points={["Growth periods", "Switch timing", "High luck months", "Avoid months"]}
            />
            <RevealCard
              icon="🧿"
              title="Patterns & Blocks"
              points={["Repeating mistakes", "Why it repeats", "What to change", "What to avoid"]}
            />
            <RevealCard
              icon="⏳"
              title="Destiny Windows"
              points={["When destiny dominates", "When you can rewrite", "Best timing"]}
            />
            <RevealCard
              icon="🔑"
              title="Simple Remedies"
              points={["Practical steps", "No drama", "Easy routines", "Personalized suggestions"]}
            />
          </div>
        </div>

        <div className="centerCta">
          <a className="cta" href="#preview">
            Show The Preview
            <span className="ctaShine" />
          </a>
        </div>
      </section>

      {/* ===== PREMIUM SIGNATURES ===== */}
      <section id="signatures" className="section sectionDark">
        <SectionHead
          eyebrow="Bonus add-on"
          title="Premium Signature Designs"
          desc="Optional add-on with your report."
        />

        <div className="sigLayout">
          <motion.div
            className="sigPoster"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: easeOut }}
          >
            <img src={IMAGES.sig2} alt="Premium signature style sample" />
            <div className="posterShade" />
            <div className="posterBadge">Premium Signatures</div>
            <div className="posterBottom">
              <div className="posterTitle">Identity, refined.</div>
              <div className="posterSub">Clean • bold • professional</div>
            </div>
          </motion.div>

          <div className="sigRight">
            <div className="sigGrid">
              {[IMAGES.sig1, IMAGES.sig3, IMAGES.sig4].map((src, i) => (
                <motion.div
                  key={i}
                  className="sigTile"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                  transition={{ duration: 0.7, delay: i * 0.06, ease: easeOut }}
                >
                  <img src={src} alt={`Signature example ${i + 1}`} />
                  <div className="sigTileShade" />
                  <div className="sigTileText">
                    <div className="sigTileTitle">
                      {i === 0 ? "Minimal" : i === 1 ? "Premium" : "Bold"}
                    </div>
                    <div className="sigTileSub">High-quality design</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="sigBullets"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeOut }}
            >
              <div className="sigBulletsTitle">What you get</div>
              <ul className="sigList">
                <li>3 premium signature options</li>
                <li>Practice sheet (PDF)</li>
                <li>Signature tutorial guide</li>
                <li>Delivered on WhatsApp / Email</li>
              </ul>

              <div className="centerCta leftCta">
                <a className="cta" href="#order">
                  Add Signature Pack
                  <span className="ctaShine" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== PREVIEW ===== */}
      <section id="preview" className="section">
        <SectionHead
          eyebrow="Preview"
          title="What you’ll discover"
          desc="Small glimpse of the clarity you get."
        />

        <div className="previewGrid">
          {[
            "Your most important months (next 24)",
            "Best window for a big decision",
            "Love turning point timing",
            "Career growth window",
            "Risk months to avoid",
            "Luck peaks (short windows)",
            "Pattern that keeps repeating",
            "Your next “reset” phase",
          ].map((t, i) => (
            <motion.div
              key={i}
              className="previewChip"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: easeOut }}
            >
              <span className="chipIcon">✦</span>
              <span>{t}</span>
            </motion.div>
          ))}
        </div>

        <div className="centerCta">
          <a className="cta" href="#order">
            Get My 2-Year Report
            <span className="ctaShine" />
          </a>
        </div>
      </section>

      {/* ===== ORDER ===== */}
      <section id="order" className="section sectionDark">
        <SectionHead
          eyebrow="Start now"
          title="Unlock your 2-Year Kundali Report"
          desc="Tap below to start on WhatsApp (fast + private)."
        />

        <div className="orderWrap">
          <motion.div
            className="orderMedia"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <img src={IMAGES.journal} alt="Notebook and pen" />
            <div className="orderMediaShade" />
            <div className="orderMediaText">
              <div className="orderMediaTitle">Private Delivery</div>
              <div className="orderMediaSub">WhatsApp summary + PDF</div>
            </div>
          </motion.div>

          <motion.div
            className="orderCard"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <div className="priceTop">
              <div className="priceTitle">2-Year Report</div>
              <div className="priceBadge">24–48 hrs delivery</div>
            </div>

            <div className="priceRow">
              <div className="priceNow">₹499</div>
              <div className="priceWas">₹1999</div>
              <div className="priceOff">75% OFF</div>
            </div>

            <div className="priceNote">
              Includes: month-by-month timeline • love/career/money windows • remedies
            </div>

            <div className="orderList">
              <OrderLine k="PDF Report" v="20–35 pages" />
              <OrderLine k="WhatsApp Summary" v="Yes" />
              <OrderLine k="Personalised" v="100%" />
              <OrderLine k="Bonus" v="Signature pack (optional)" />
            </div>

            {/* Replace this with your real WhatsApp / checkout link */}
            <a
              className="cta ctaFull"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                // window.location.href = "https://wa.me/<number>?text=<encoded>";
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Start on WhatsApp
              <span className="ctaShine" />
            </a>

            <div className="finePrint">
              Disclaimer: Astrology is guidance, not fixed fate. You control your actions.
            </div>
          </motion.div>
        </div>

        <div className="footerNote">
          <div className="footerImg">
            <img src={IMAGES.personSilhouette} alt="Silhouette" />
            <div className="footerShade" />
          </div>
          <div className="footerText">
            <div className="footerTitle">One report. Two years of clarity.</div>
            <div className="footerSub">Make better decisions by knowing your timing windows.</div>
          </div>
        </div>
      </section>

      <style>{css}</style>
    </div>
  );
};

/* ------------------ Components ------------------ */

const TrustItem = ({ title, desc }) => (
  <div className="trustItem">
    <div className="trustTitle">{title}</div>
    <div className="trustDesc">{desc}</div>
  </div>
);

const MiniStat = ({ k, v }) => (
  <div className="miniStat">
    <div className="miniK">{k}</div>
    <div className="miniV">{v}</div>
  </div>
);

const SectionHead = ({ eyebrow, title, desc }) => (
  <div className="sectionHead">
    <div className="eyebrow">{eyebrow}</div>
    <h2 className="h2">{title}</h2>
    <p className="desc">{desc}</p>
  </div>
);

const RevealCard = ({ icon, title, points }) => (
  <motion.div
    className="revealCard"
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
    transition={{ duration: 0.8, ease: easeOut }}
  >
    <div className="revealTop">
      <div className="revealIcon">{icon}</div>
      <div className="revealTitle">{title}</div>
    </div>

    {/* Center-aligned list (pic 2 fix) */}
    <div className="revealList">
      {points.map((p, i) => (
        <div className="revealPoint" key={i}>
          <span className="rpDot" />
          <span>{p}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

const OrderLine = ({ k, v }) => (
  <div className="orderLine">
    <span className="orderK">{k}</span>
    <span className="orderV">{v}</span>
  </div>
);

const PanelCard = ({ k, v, hint, icon }) => (
  <div className="panelCard">
    <div className="panelIcon">{icon}</div>
    <div className="panelBody">
      <div className="panelK">{k}</div>
      <div className="panelV">{v}</div>
      <div className="panelHint">{hint}</div>
    </div>
  </div>
);

const Stars = () => {
  const dots = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 65; i++) {
      arr.push({
        left: Math.random() * 100,
        top: Math.random() * 100,
        s: 1 + Math.random() * 2.4,
        o: 0.18 + Math.random() * 0.55,
        d: Math.random() * 6,
      });
    }
    return arr;
  }, []);

  return (
    <div className="stars" aria-hidden="true">
      {dots.map((d, i) => (
        <span
          key={i}
          className="star"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: `${d.s}px`,
            height: `${d.s}px`,
            opacity: d.o,
            animationDelay: `${d.d}s`,
          }}
        />
      ))}
    </div>
  );
};

const Aurora = () => (
  <div className="aurora" aria-hidden="true">
    <span className="a a1" />
    <span className="a a2" />
    <span className="a a3" />
  </div>
);

/* ------------------ CSS ------------------ */

const css = `
  :root{
    --bg0:#050712;
    --bg1:#070a16;
    --stroke:rgba(255,255,255,.10);
    --stroke2:rgba(255,255,255,.14);
    --text:rgba(255,255,255,.92);
    --muted:rgba(255,255,255,.72);
    --muted2:rgba(255,255,255,.56);
    --gold:#F6D77D;
    --violet:#B88CFF;
    --aqua:#6DE4FF;
    --shadow: 0 18px 50px rgba(0,0,0,.55);
    --shadow2: 0 16px 45px rgba(0,0,0,.45);
    --radius: 22px;
  }

  *{box-sizing:border-box}
  html,body{height:100%}
  body{
    margin:0;
    font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
    background: radial-gradient(900px 700px at 20% 10%, rgba(184,140,255,.20), transparent 60%),
                radial-gradient(900px 700px at 80% 0%, rgba(109,228,255,.16), transparent 55%),
                radial-gradient(1200px 900px at 50% 110%, rgba(246,215,125,.10), transparent 55%),
                linear-gradient(180deg, var(--bg0), var(--bg1));
    color:var(--text);
    overflow-x:hidden;
  }

  .wrap{position:relative; min-height:100vh}

  /* Progress */
  .topProgress{
    position:fixed; left:0; top:0; height:3px; width:100%;
    transform-origin:left;
    background: linear-gradient(90deg, rgba(184,140,255,.95), rgba(246,215,125,.95), rgba(109,228,255,.95));
    z-index:9999;
  }

  /* Header */
  .header{
    position:sticky; top:0; z-index:50;
    backdrop-filter: blur(14px);
    background: linear-gradient(180deg, rgba(7,10,22,.72), rgba(7,10,22,.40));
    border-bottom: 1px solid rgba(255,255,255,.08);
  }
  .headerInner{
    max-width:1120px;
    margin:0 auto;
    padding: 12px 14px;
    display:flex;
    align-items:center;
    gap:12px;
  }
  .brand{
    display:flex; align-items:center; gap:10px;
    text-decoration:none; color:inherit; min-width: 170px;
  }
  .brandMark{
    width:36px; height:36px; border-radius:12px;
    background:
      radial-gradient(10px 10px at 30% 30%, rgba(255,255,255,.85), transparent 60%),
      radial-gradient(12px 12px at 70% 60%, rgba(246,215,125,.85), transparent 60%),
      radial-gradient(16px 16px at 40% 80%, rgba(184,140,255,.80), transparent 60%),
      linear-gradient(135deg, rgba(109,228,255,.25), rgba(184,140,255,.18));
    border: 1px solid rgba(255,255,255,.14);
    box-shadow: 0 10px 28px rgba(0,0,0,.35);
  }
  .brandText{display:flex; flex-direction:column; line-height:1.02}
  .brandName{font-weight:900; letter-spacing:.2px}
  .brandSub{font-size:12px; color:var(--muted2); margin-top:2px}

  .nav{
    display:none;
    gap:10px;
    margin-left:auto;
    margin-right: 6px;
  }
  .navLink{
    font-size:13px;
    color: var(--muted);
    text-decoration:none;
    padding: 8px 10px;
    border-radius: 999px;
    border: 1px solid transparent;
    transition: .2s ease;
  }
  .navLink:hover{color:var(--text); border-color: rgba(255,255,255,.12)}
  .navLink.active{
    color: var(--text);
    background: rgba(255,255,255,.06);
    border-color: rgba(255,255,255,.14);
  }

  .headerCta{
    margin-left:auto;
    position:relative;
    display:inline-flex;
    align-items:center;
    justify-content:center;
    gap:8px;
    font-weight:900;
    font-size:13px;
    text-decoration:none;
    color:#0a0b10;
    padding: 10px 12px;
    border-radius: 999px;
    background: linear-gradient(90deg, rgba(246,215,125,.95), rgba(184,140,255,.90));
    box-shadow: 0 14px 32px rgba(0,0,0,.35);
    overflow:hidden;
  }
  .headerCtaGlow{
    position:absolute; inset:-30px;
    background: radial-gradient(120px 60px at 20% 40%, rgba(255,255,255,.75), transparent 60%),
                radial-gradient(120px 60px at 70% 60%, rgba(255,255,255,.55), transparent 65%);
    opacity:.35;
    filter: blur(6px);
    animation: floatGlow 4.8s ease-in-out infinite;
    pointer-events:none;
  }
  @keyframes floatGlow { 0%,100%{transform:translate3d(0,0,0)} 50%{transform:translate3d(10px, -6px, 0)} }

  @media(min-width: 900px){
    .nav{display:flex}
    .headerCta{margin-left:0}
  }

  /* Background FX */
  .stars{ position:fixed; inset:0; pointer-events:none; z-index:0; }
  .star{
    position:absolute; border-radius:999px;
    background: rgba(255,255,255,.95);
    box-shadow: 0 0 14px rgba(255,255,255,.25);
    animation: tw 4.8s ease-in-out infinite;
  }
  @keyframes tw{
    0%,100%{transform:scale(1); opacity:var(--o, .3)}
    50%{transform:scale(1.7); opacity:1}
  }

  .aurora{ position:fixed; inset:0; pointer-events:none; z-index:0; opacity:.9; }
  .aurora .a{
    position:absolute; width: 520px; height: 520px; border-radius: 999px;
    filter: blur(60px); opacity:.42;
    animation: drift 10s ease-in-out infinite;
  }
  .a1{ left:-140px; top: 140px; background: radial-gradient(circle at 30% 30%, rgba(184,140,255,.55), transparent 65%); }
  .a2{ right:-160px; top: 60px; background: radial-gradient(circle at 30% 30%, rgba(109,228,255,.50), transparent 65%); animation-delay: -3s; }
  .a3{ left: 20%; bottom: -260px; background: radial-gradient(circle at 30% 30%, rgba(246,215,125,.35), transparent 65%); animation-delay: -6s; }
  @keyframes drift{
    0%,100%{transform: translate3d(0,0,0) scale(1)}
    50%{transform: translate3d(40px,-26px,0) scale(1.06)}
  }

  /* HERO */
  .hero{
    position:relative; z-index:1;
    padding: 22px 14px 34px;
    max-width:1120px; margin: 0 auto;
  }
  .heroMedia{
    position:absolute; inset:0;
    height: 560px;
    overflow:hidden;
    border-radius: 26px;
    border: 1px solid rgba(255,255,255,.08);
    box-shadow: var(--shadow);
  }
  .heroImg{
    width:100%; height:100%;
    object-fit: cover;
    transform: scale(1.02);
    filter: saturate(1.15) contrast(1.05);
  }
  .heroOverlay{
    position:absolute; inset:0;
    background:
      radial-gradient(600px 360px at 20% 20%, rgba(184,140,255,.22), transparent 62%),
      radial-gradient(700px 420px at 80% 15%, rgba(109,228,255,.18), transparent 65%),
      linear-gradient(180deg, rgba(0,0,0,.66), rgba(0,0,0,.52), rgba(5,7,18,.92));
  }
  .heroBloom{
    position:absolute; inset:-40px;
    background:
      radial-gradient(260px 160px at 20% 30%, rgba(246,215,125,.20), transparent 70%),
      radial-gradient(240px 160px at 75% 35%, rgba(184,140,255,.20), transparent 70%);
    filter: blur(8px);
    pointer-events:none;
  }

  /* TOP PANEL with content */
  .heroTopPanel{
    position:absolute;
    left: 14px; right: 14px;
    top: 82px;
    height: 210px;
    border-radius: 24px;
    border: 1px solid rgba(255,255,255,.12);
    background: linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.03));
    box-shadow: 0 18px 55px rgba(0,0,0,.35);
    overflow:hidden;
  }
  .heroTopPanelStars{
    position:absolute; inset:0;
    background:
      radial-gradient(2px 2px at 10% 25%, rgba(255,255,255,.7), transparent 60%),
      radial-gradient(2px 2px at 26% 55%, rgba(255,255,255,.55), transparent 60%),
      radial-gradient(2px 2px at 44% 35%, rgba(255,255,255,.55), transparent 60%),
      radial-gradient(2px 2px at 70% 40%, rgba(255,255,255,.6), transparent 60%),
      radial-gradient(2px 2px at 84% 65%, rgba(255,255,255,.55), transparent 60%),
      radial-gradient(2px 2px at 92% 30%, rgba(255,255,255,.65), transparent 60%),
      linear-gradient(90deg, rgba(184,140,255,.20), rgba(109,228,255,.12), rgba(246,215,125,.10));
    opacity:.95;
  }
  .heroPanelInner{
    position:absolute; inset:0;
    padding: 14px 14px;
    display:flex;
    flex-direction:column;
    gap: 10px;
    backdrop-filter: blur(8px);
  }
  .heroPanelHead{
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap: 10px;
  }
  .heroPanelTitle{
    font-weight: 950;
    letter-spacing: -.2px;
    font-size: 14px;
    color: rgba(255,255,255,.92);
  }
  .heroPanelPill{
    font-size: 12px;
    font-weight: 900;
    padding: 8px 10px;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,.12);
    background: rgba(0,0,0,.18);
    color: rgba(255,255,255,.86);
  }
  .heroPanelGrid{
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  .panelCard{
    display:flex;
    align-items:flex-start;
    gap: 10px;
    padding: 10px 10px;
    border-radius: 18px;
    border: 1px solid rgba(255,255,255,.12);
    background: rgba(0,0,0,.18);
  }
  .panelIcon{
    width: 34px; height: 34px;
    border-radius: 14px;
    display:flex; align-items:center; justify-content:center;
    border: 1px solid rgba(255,255,255,.12);
    background: rgba(255,255,255,.06);
    font-weight: 950;
  }
  .panelK{ font-size: 12px; color: rgba(255,255,255,.76); font-weight: 900; letter-spacing:.02em; }
  .panelV{ margin-top: 2px; font-size: 13px; font-weight: 950; color: rgba(255,255,255,.92); }
  .panelHint{ margin-top: 2px; font-size: 12px; color: rgba(255,255,255,.60); }

  .heroPanelFooter{
    margin-top: 2px;
    display:flex;
    align-items:center;
    gap: 10px;
  }
  .hpDot{
    width:7px; height:7px; border-radius:999px;
    background: linear-gradient(90deg, rgba(246,215,125,.95), rgba(109,228,255,.95));
    box-shadow: 0 0 18px rgba(246,215,125,.25);
  }
  .hpText{
    font-size: 12px;
    color: rgba(255,255,255,.68);
    line-height: 1.35;
  }

  .heroBottomPlate{
    position:absolute;
    left: 14px; right: 14px;
    bottom: 18px;
    height: 86px;
    border-radius: 28px;
    border: 1px solid rgba(255,255,255,.10);
    background: radial-gradient(600px 120px at 50% 0%, rgba(255,255,255,.10), rgba(255,255,255,.03));
    opacity:.55;
  }

  .heroContent{
    position:relative; z-index:2;
    padding-top: 18px;
    display:grid;
    grid-template-columns: 1fr;
    gap: 14px;
  }

  /* moved UP a bit so hero doesn't feel empty */
  .heroCard{
    margin-top: 320px;
    background: linear-gradient(180deg, rgba(12,16,34,.78), rgba(10,14,31,.62));
    border: 1px solid rgba(255,255,255,.12);
    border-radius: var(--radius);
    padding: 16px 14px;
    box-shadow: var(--shadow2);
    backdrop-filter: blur(16px);
  }

  .pillRow{ display:flex; flex-wrap:wrap; gap:8px; margin-bottom: 10px; }
  .pill{
    font-size:12px; color: rgba(255,255,255,.88);
    padding: 7px 10px;
    border-radius:999px;
    border: 1px solid rgba(255,255,255,.12);
    background: rgba(255,255,255,.05);
  }

  .h1{
    margin: 0;
    font-size: 28px;
    line-height: 1.08;
    letter-spacing: -.4px;
    font-weight: 950;
  }
  .accent{
    background: linear-gradient(90deg, rgba(246,215,125,.95), rgba(184,140,255,.95));
    -webkit-background-clip: text;
    background-clip:text;
    color: transparent;
  }
  .accent2{
    background: linear-gradient(90deg, rgba(109,228,255,.95), rgba(184,140,255,.95));
    -webkit-background-clip: text;
    background-clip:text;
    color: transparent;
  }
  .sub{
    margin: 10px 0 0;
    color: var(--muted);
    font-size: 14.5px;
    line-height: 1.55;
  }

  .heroActions{ display:flex; flex-direction: column; gap:10px; margin-top: 14px; }

  .cta{
    position:relative;
    display:inline-flex;
    justify-content:center;
    align-items:center;
    gap:10px;
    font-weight: 950;
    letter-spacing:.2px;
    font-size: 14.5px;
    padding: 14px 14px;
    border-radius: 999px;
    text-decoration:none;
    color: #0a0b10;
    background: linear-gradient(90deg, rgba(246,215,125,.96), rgba(184,140,255,.92));
    border: 1px solid rgba(255,255,255,.10);
    box-shadow: 0 16px 40px rgba(0,0,0,.36);
    overflow:hidden;
    transform: translateZ(0);
  }
  .cta:hover{filter:brightness(1.03)}
  .cta:active{transform: translateY(1px)}

  .cta.ghost{
    background: rgba(255,255,255,.06);
    color: rgba(255,255,255,.92);
    border: 1px solid rgba(255,255,255,.14);
    box-shadow: none;
  }

  .ctaShine{
    position:absolute;
    inset:-60px -80px;
    background: radial-gradient(180px 80px at 20% 50%, rgba(255,255,255,.55), transparent 60%);
    transform: translate3d(-20px,0,0);
    opacity:.45;
    filter: blur(8px);
    animation: shine 3.6s ease-in-out infinite;
    pointer-events:none;
  }
  @keyframes shine{
    0%,100%{transform: translate3d(-30px,0,0)}
    50%{transform: translate3d(40px,-10px,0)}
  }

  .trustRow{
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap:10px;
    margin-top: 14px;
  }
  .trustItem{
    padding: 10px 10px;
    border-radius: 16px;
    background: rgba(255,255,255,.05);
    border: 1px solid rgba(255,255,255,.10);
  }
  .trustTitle{font-size:12.5px; font-weight:900}
  .trustDesc{font-size:12px; color: rgba(255,255,255,.56); margin-top:3px}

  .micro{
    margin-top: 12px;
    display:flex;
    align-items:center;
    gap:10px;
    font-size:12px;
    color: rgba(255,255,255,.56);
  }
  .microDot{
    width:7px; height:7px; border-radius:999px;
    background: linear-gradient(90deg, rgba(246,215,125,.95), rgba(109,228,255,.95));
    box-shadow: 0 0 18px rgba(246,215,125,.25);
  }

  .heroSide{ display:none; }
  .miniFrame{
    position:relative;
    overflow:hidden;
    border-radius: var(--radius);
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.03);
    box-shadow: var(--shadow2);
    height: 210px;
  }
  .miniFrame img{width:100%; height:100%; object-fit:cover; filter:saturate(1.1)}
  .miniShade{ position:absolute; inset:0; background: linear-gradient(180deg, rgba(0,0,0,.15), rgba(0,0,0,.75)); }
  .miniText{ position:absolute; left:12px; bottom:12px; }
  .miniTitle{font-weight:950}
  .miniSub{font-size:12px; color: rgba(255,255,255,.72); margin-top:2px}

  .miniGrid{ margin-top: 10px; display:grid; grid-template-columns: 1fr 1fr; gap:10px; }
  .miniStat{
    padding: 12px 12px;
    border-radius: 18px;
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.04);
  }
  .miniK{font-size:12px; color: rgba(255,255,255,.72)}
  .miniV{font-size:16px; font-weight:950; margin-top:4px}

  @media(min-width: 980px){
    .hero{padding: 28px 16px 40px}
    .heroMedia{height: 600px}
    .heroTopPanel{top: 92px; height: 240px}
    .heroContent{
      grid-template-columns: 1.1fr .9fr;
      align-items: start;
      gap: 16px;
    }
    .heroCard{margin-top: 360px; padding: 18px 16px}
    .h1{font-size: 44px}
    .sub{font-size: 15.5px}
    .heroActions{flex-direction: row}
    .heroSide{display:block; margin-top: 360px}
  }

  /* Sections */
  .section{
    position:relative;
    z-index:1;
    padding: 70px 14px;
    max-width:1120px;
    margin: 0 auto;
  }
  .sectionDark{
    background:
      radial-gradient(700px 460px at 15% 10%, rgba(184,140,255,.12), transparent 65%),
      radial-gradient(700px 460px at 85% 0%, rgba(109,228,255,.10), transparent 65%),
      linear-gradient(180deg, rgba(4,6,14,.82), rgba(4,6,14,.58));
    border-top: 1px solid rgba(255,255,255,.06);
    border-bottom: 1px solid rgba(255,255,255,.06);
  }
  .sectionHead{ margin-bottom: 18px; }
  .eyebrow{
    display:inline-flex;
    align-items:center;
    gap:8px;
    font-size:12px;
    letter-spacing:.22em;
    text-transform:uppercase;
    color: rgba(246,215,125,.9);
  }
  .h2{
    margin: 10px 0 0;
    font-size: 26px;
    line-height:1.12;
    letter-spacing: -.35px;
    font-weight: 950;
  }
  .desc{
    margin: 10px 0 0;
    color: rgba(255,255,255,.72);
    font-size: 14.5px;
    line-height: 1.6;
    max-width: 70ch;
  }
  @media(min-width: 980px){
    .h2{font-size: 36px}
    .desc{font-size: 15.5px}
  }

  /* Fear grid */
  .fearGrid{
    display:grid;
    grid-template-columns: 1fr;
    gap: 10px;
    margin-top: 16px;
  }
  .fearCard{
    position:relative;
    padding: 14px 14px 14px 14px;
    border-radius: 18px;
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.04);
    overflow:hidden;
  }
  .fearCard p{margin:0; color: rgba(255,255,255,.86); font-size: 14.2px; line-height: 1.55}
  .fearDot{
    position:absolute; left:12px; top:12px;
    width:7px; height:7px; border-radius:999px;
    background: rgba(246,215,125,.95);
    box-shadow: 0 0 18px rgba(246,215,125,.25);
    opacity:.8;
  }
  .fearCard:before{
    content:"";
    position:absolute; inset:-1px;
    background: radial-gradient(220px 80px at 20% 20%, rgba(184,140,255,.14), transparent 60%);
    opacity:.9;
    pointer-events:none;
  }
  @media(min-width: 980px){
    .fearGrid{grid-template-columns: 1fr 1fr; gap: 12px}
  }

  .soulLine{
    margin-top: 16px;
    padding: 16px 14px;
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,.12);
    background: linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.03));
  }
  .soulTitle{font-weight:950; font-size:15px}
  .soulText{margin-top:6px; color: rgba(255,255,255,.72); font-size: 14.2px; line-height:1.55}
  .centerCta{ margin-top: 18px; display:flex; justify-content:center; }
  .leftCta{ justify-content:flex-start; }

  /* Reveal layout */
  .revealLayout{
    display:grid;
    grid-template-columns: 1fr;
    gap: 14px;
    margin-top: 14px;
  }
  .revealPoster{
    position:relative;
    overflow:hidden;
    border-radius: var(--radius);
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.03);
    box-shadow: var(--shadow2);
    height: 260px;
  }
  .revealPoster img{width:100%; height:100%; object-fit:cover; filter:saturate(1.12) contrast(1.05)}
  .posterShade{ position:absolute; inset:0; background: linear-gradient(180deg, rgba(0,0,0,.20), rgba(0,0,0,.78)); }
  .posterBadge{
    position:absolute; left:12px; top:12px;
    font-weight:900; font-size:12px;
    padding: 8px 10px;
    border-radius: 999px;
    color: rgba(0,0,0,.92);
    background: linear-gradient(90deg, rgba(246,215,125,.96), rgba(109,228,255,.85));
  }
  .posterBottom{ position:absolute; left:12px; right:12px; bottom:12px; }
  .posterTitle{font-weight:950; font-size:16px}
  .posterSub{margin-top:4px; font-size:12.5px; color: rgba(255,255,255,.72)}

  .revealCards{
    display:grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }

  /* PIC 2 FIX: cards centered + text centered */
  .revealCard{
    padding: 14px 14px;
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.04);
    text-align:center;
  }
  .revealTop{
    display:flex;
    align-items:center;
    justify-content:center;
    gap:10px;
    margin-bottom: 10px;
  }
  .revealIcon{
    width:36px; height:36px; border-radius: 14px;
    display:flex; align-items:center; justify-content:center;
    background: rgba(255,255,255,.06);
    border: 1px solid rgba(255,255,255,.10);
    font-size: 16px;
    flex: 0 0 auto;
  }
  .revealTitle{
    font-weight:950;
    letter-spacing: -.2px;
    line-height:1.2;
  }
  .revealList{
    display:flex;
    flex-direction:column;
    gap: 8px;
    margin-top: 6px;
    align-items:center;
  }
  .revealPoint{
    display:flex;
    align-items:center;
    gap: 10px;
    color: rgba(255,255,255,.72);
    font-size: 13.8px;
    line-height:1.4;
  }
  .rpDot{
    width:7px; height:7px; border-radius:999px;
    background: rgba(246,215,125,.95);
    box-shadow: 0 0 16px rgba(246,215,125,.20);
    opacity:.9;
  }

  @media(min-width: 980px){
    .revealLayout{grid-template-columns: .9fr 1.1fr; gap: 16px}
    .revealPoster{height: 540px}
    .revealCards{grid-template-columns: 1fr 1fr}
    .revealCard{text-align:left}
    .revealTop{justify-content:flex-start}
    .revealList{align-items:flex-start}
  }

  /* Signatures */
  .sigLayout{
    display:grid;
    grid-template-columns: 1fr;
    gap: 14px;
    margin-top: 14px;
  }
  .sigPoster{
    position:relative;
    overflow:hidden;
    border-radius: var(--radius);
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.03);
    box-shadow: var(--shadow2);
    height: 260px;
  }
  .sigPoster img{width:100%; height:100%; object-fit:cover; filter:saturate(1.1) contrast(1.02)}
  .sigRight{display:flex; flex-direction:column; gap: 12px}
  .sigGrid{ display:grid; grid-template-columns: 1fr; gap: 10px; }
  .sigTile{
    position:relative;
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,.10);
    overflow:hidden;
    background: rgba(255,255,255,.03);
    height: 160px;
    box-shadow: 0 14px 38px rgba(0,0,0,.25);
  }
  .sigTile img{width:100%; height:100%; object-fit:cover}
  .sigTileShade{ position:absolute; inset:0; background: linear-gradient(180deg, rgba(0,0,0,.10), rgba(0,0,0,.78)); }
  .sigTileText{ position:absolute; left:12px; bottom:12px; right:12px; }
  .sigTileTitle{font-weight:950}
  .sigTileSub{margin-top:3px; font-size:12.5px; color: rgba(255,255,255,.72)}
  .sigBullets{
    padding: 14px 14px;
    border-radius: 22px;
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.04);
  }
  .sigBulletsTitle{font-weight:950; font-size:15px}
  .sigList{
    margin: 10px 0 0;
    padding: 0 0 0 18px;
    color: rgba(255,255,255,.72);
    font-size: 14px;
    line-height: 1.6;
  }
  .sigList li{margin: 6px 0}
  @media(min-width: 980px){
    .sigLayout{grid-template-columns: .9fr 1.1fr; gap: 16px}
    .sigPoster{height: 520px}
    .sigGrid{grid-template-columns: 1fr 1fr; gap: 12px}
    .sigTile{height: 180px}
  }

  /* Preview */
  .previewGrid{
    display:grid;
    grid-template-columns: 1fr;
    gap: 10px;
    margin-top: 14px;
  }
  .previewChip{
    display:flex;
    gap: 10px;
    padding: 14px 14px;
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.04);
    color: rgba(255,255,255,.88);
    font-size: 14px;
    line-height: 1.5;
  }
  .chipIcon{
    width: 28px; height: 28px;
    border-radius: 12px;
    display:flex; align-items:center; justify-content:center;
    background: rgba(255,255,255,.06);
    border: 1px solid rgba(255,255,255,.10);
    color: rgba(246,215,125,.95);
    flex: 0 0 auto;
  }
  @media(min-width: 980px){
    .previewGrid{grid-template-columns: 1fr 1fr}
  }

  /* Order */
  .orderWrap{
    display:grid;
    grid-template-columns: 1fr;
    gap: 12px;
    margin-top: 14px;
  }
  .orderMedia{
    position:relative;
    overflow:hidden;
    border-radius: var(--radius);
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.03);
    height: 220px;
  }
  .orderMedia img{width:100%; height:100%; object-fit:cover}
  .orderMediaShade{ position:absolute; inset:0; background: linear-gradient(180deg, rgba(0,0,0,.10), rgba(0,0,0,.78)); }
  .orderMediaText{ position:absolute; left:12px; bottom:12px; right:12px; }
  .orderMediaTitle{font-weight:950; font-size:16px}
  .orderMediaSub{margin-top:4px; color: rgba(255,255,255,.72); font-size:12.5px}

  .orderCard{
    border-radius: var(--radius);
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.04);
    padding: 14px 14px;
  }
  .priceTop{ display:flex; align-items:center; justify-content:space-between; gap: 10px; }
  .priceTitle{font-weight:950; font-size:16px}
  .priceBadge{
    font-size:12px; font-weight:900;
    padding: 8px 10px;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,.12);
    background: rgba(255,255,255,.06);
    color: rgba(255,255,255,.88);
  }
  .priceRow{ margin-top: 10px; display:flex; align-items:baseline; gap: 10px; flex-wrap:wrap; }
  .priceNow{
    font-weight:950;
    font-size: 30px;
    letter-spacing: -.3px;
    background: linear-gradient(90deg, rgba(246,215,125,.95), rgba(184,140,255,.95));
    -webkit-background-clip:text;
    background-clip:text;
    color:transparent;
  }
  .priceWas{ color: rgba(255,255,255,.52); text-decoration: line-through; font-weight:800; }
  .priceOff{
    font-size:12px;
    font-weight:950;
    padding: 6px 10px;
    border-radius: 999px;
    color: rgba(0,0,0,.92);
    background: linear-gradient(90deg, rgba(109,228,255,.85), rgba(246,215,125,.95));
  }
  .priceNote{ margin-top: 8px; color: rgba(255,255,255,.72); font-size: 13.8px; line-height: 1.55; }

  .orderList{ margin-top: 12px; display:flex; flex-direction:column; gap: 10px; }
  .orderLine{
    display:flex; justify-content:space-between; align-items:center; gap: 10px;
    padding: 10px 12px;
    border-radius: 16px;
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.04);
  }
  .orderK{color: rgba(255,255,255,.78); font-size: 13px; font-weight:800}
  .orderV{color: rgba(255,255,255,.92); font-size: 13px; font-weight:950}
  .ctaFull{width:100%; margin-top: 12px}
  .finePrint{ margin-top: 10px; color: rgba(255,255,255,.56); font-size: 12.5px; line-height: 1.55; }

  @media(min-width: 980px){
    .orderWrap{grid-template-columns: .9fr 1.1fr; gap: 16px}
    .orderMedia{height: 100%}
  }

  /* Footer */
  .footerNote{
    margin-top: 18px;
    border-radius: var(--radius);
    border: 1px solid rgba(255,255,255,.10);
    overflow:hidden;
    background: rgba(255,255,255,.03);
    display:grid;
    grid-template-columns: 1fr;
  }
  .footerImg{ position:relative; height: 160px; }
  .footerImg img{width:100%; height:100%; object-fit:cover; filter:saturate(1.08)}
  .footerShade{ position:absolute; inset:0; background: linear-gradient(180deg, rgba(0,0,0,.15), rgba(0,0,0,.80)); }
  .footerText{ padding: 14px 14px; }
  .footerTitle{ font-weight: 950; font-size: 16px; }
  .footerSub{ margin-top: 6px; color: rgba(255,255,255,.72); font-size: 13.8px; line-height: 1.55; }

  @media(min-width: 980px){
    .footerNote{grid-template-columns: .7fr 1.3fr}
    .footerImg{height: 100%}
  }
`;

export default TwoYearHoroscopePremium;
