import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

/**
 * ULTRA PREMIUM 2-Year Horoscope Landing (Mobile-first)
 * ✅ Full single-file React JSX
 * ✅ Premium theme (dark cosmic + glass + gold accents)
 * ✅ Sticky Header + progress bar
 * ✅ Free internet placeholder images (Unsplash) so you can SEE it
 * ✅ Lots of animations (Framer Motion)
 *
 * Install:
 *   npm i framer-motion
 */

const easeOut = [0.16, 1, 0.3, 1];

const TwoYearHoroscopePremium = () => {
  const pageRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: undefined });
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 25, mass: 0.35 });

  const [active, setActive] = useState("home");

  // ---- FREE INTERNET IMAGES (Unsplash) ----
  // Change the `sig=` numbers to get different images.
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
    }),
    []
  );

  // ---- Subtle "active section" detection for header highlight (mobile-friendly) ----
  useEffect(() => {
    const ids = ["home", "problem", "reveal", "truth", "process", "preview", "form"];
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
        const dist = Math.abs(top - y - 140); // header offset
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

  const heroParallaxY = useTransform(scrollYProgress, [0, 0.25], [0, 120]);
  const heroGlow = useTransform(scrollYProgress, [0, 0.2], [1, 0.6]);

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
            <a className={active === "preview" ? "navLink active" : "navLink"} href="#preview">
              Preview
            </a>
            <a className={active === "form" ? "navLink active" : "navLink"} href="#form">
              Start
            </a>
          </nav>

          <a className="headerCta" href="#form">
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
              What if the next <span className="accent">2 years</span> change your life…
              <br />
              and you walk into them <span className="accent2">blind?</span>
            </h1>

            <p className="sub">
              Your chart already knows which months bring breakthroughs, heartbreaks, losses, blessings,
              opportunities, or tests.
              <br />
              <b>Do you?</b>
            </p>

            <div className="heroActions">
              <a className="cta" href="#form">
                Reveal My Next 24 Months Now
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
              <TrustItem title="100k+ Reports" desc="Trusted" />
            </div>

            <div className="micro">
              <span className="microDot" />
              <span>Astrology is guidance. You choose the actions.</span>
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
              <MiniStat k="Money periods" v="Predictive" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== PROBLEM ===== */}
      <section id="problem" className="section sectionDark">
        <SectionHead
          eyebrow="The real problem"
          title="Are these fears secretly eating you alive?"
          desc="It’s not overthinking. It’s your intuition asking for timing."
        />

        <div className="fearGrid">
          {[
            "What if you stay stuck for 2 years… just because you didn’t know the right time to act?",
            "What if you miss the ONE opportunity written in your chart?",
            "What if the person you’re waiting for… is never meant for you?",
            "Why do you keep repeating the same mistakes in love, money, career?",
            "What if your breakthrough phase is coming… but you take the wrong path?",
            "What if a tough phase is coming and you’re completely unprepared for it?",
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
          <div className="soulTitle">Your doubt is not random.</div>
          <div className="soulText">
            Your anxiety is not weakness. Your fear is a signal:
            <b> “You need clarity.”</b>
          </div>
        </motion.div>

        <div className="centerCta">
          <a className="cta" href="#form">
            Yes — Reveal My Timing
            <span className="ctaShine" />
          </a>
        </div>
      </section>

      {/* ===== REVEALS ===== */}
      <section id="reveal" className="section">
        <SectionHead
          eyebrow="What you get"
          title="Your next 24 months… mapped in shocking detail."
          desc="Every phase has a window. Every blessing has timing. Every downfall has a warning."
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
              <div className="posterTitle">Timing beats talent.</div>
              <div className="posterSub">Know when to push • when to pause</div>
            </div>
          </motion.div>

          <div className="revealCards">
            <RevealCard
              icon="🔥"
              title="Month-by-Month Timeline (24 Months)"
              points={[
                "When your life opens up",
                "When it slows down",
                "When to take big steps",
                "When to avoid risk",
                "When emotions weaken or strengthen",
              ]}
            />
            <RevealCard
              icon="❤️"
              title="Love, Breakups & Marriage Phases"
              points={[
                "New relationship timing",
                "Breakup danger months",
                "Commitment windows",
                "Intimacy + healing cycles",
                "“Will they come back?” phases",
              ]}
            />
            <RevealCard
              icon="💼"
              title="Career, Money & Success Periods"
              points={[
                "Job change timing",
                "Promotion periods",
                "Business growth months",
                "Financial breakthroughs",
                "Months to avoid major risks",
              ]}
            />
            <RevealCard
              icon="🧿"
              title="Karmic Challenges & Repeating Patterns"
              points={[
                "Why you keep choosing wrong people",
                "Why career blocks repeat",
                "What karmic debts must be resolved",
                "The 1 thing you’re ignoring",
              ]}
            />
            <RevealCard
              icon="⏳"
              title="Prarabdha & Destiny Windows"
              points={[
                "Phases where destiny controls outcomes",
                "Phases where you can rewrite fate",
              ]}
            />
            <RevealCard
              icon="🔑"
              title="Remedies (Simple, Potent, No Drama)"
              points={[
                "For marriage blocks",
                "For career delays",
                "For health dips",
                "For emotional instability",
                "For bad luck cycles",
              ]}
            />
          </div>
        </div>

        <div className="centerCta">
          <a className="cta" href="#preview">
            Show Me The Preview
            <span className="ctaShine" />
          </a>
        </div>
      </section>

      {/* ===== DARK TRUTH ===== */}
      <section id="truth" className="section sectionDark">
        <SectionHead
          eyebrow="The truth"
          title="Your life is not stuck. Your timing is."
          desc="Most people don’t fail because they’re weak. They fail because they act at the wrong time."
        />

        <div className="truthWrap">
          <motion.div
            className="truthCard"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <ul className="truthList">
              <li>Fighting for love in a period meant for separation</li>
              <li>Starting a business in a period meant for rest</li>
              <li>Waiting for marriage in a phase meant for career</li>
              <li>Quitting a job in a month meant for success</li>
            </ul>
            <div className="truthLine">
              When timing is against you — even the right decisions feel wrong.
            </div>
            <div className="truthLine strong">
              When timing aligns — a small move changes everything.
            </div>
          </motion.div>

          <motion.div
            className="truthMedia"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <img src={IMAGES.candle} alt="Candlelight ambience" />
            <div className="truthMediaShade" />
            <div className="truthTag">Exact windows • yours</div>
          </motion.div>
        </div>

        <div className="centerCta">
          <a className="cta" href="#form">
            Unlock My Timing Now
            <span className="ctaShine" />
          </a>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section id="process" className="section">
        <SectionHead
          eyebrow="Trust"
          title="How your 2-Year Report is actually made"
          desc="No copy-paste nonsense. Layered analysis with clear timing windows."
        />

        <div className="steps">
          <Step
            n="1"
            title="You share birth details"
            desc="DOB, time, place + your current concern."
          />
          <Step
            n="2"
            title="We analyse in 3 layers"
            desc="Birth chart + dasha system + transits for 24 months."
          />
          <Step
            n="3"
            title="You receive the report"
            desc="20–35 page PDF + WhatsApp summary within 24–48 hours."
          />
        </div>

        <motion.div
          className="proofBar"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <div className="proofTitle">Delivery promise</div>
          <div className="proofText">Private • secure • no data stored</div>
          <a className="proofCta" href="#form">
            Start
          </a>
        </motion.div>
      </section>

      {/* ===== PREVIEW ===== */}
      <section id="preview" className="section sectionDark">
        <SectionHead
          eyebrow="Hard proof"
          title="A small preview of what you’ll discover"
          desc="The kind of clarity that stops bad decisions before they happen."
        />

        <div className="previewGrid">
          {[
            "The 3 most dangerous months of your next 2 years",
            "The exact window where your love life turns",
            "The month you must NOT take big decisions",
            "The month where destiny gives you a second chance",
            "Your luckiest 40 days",
            "Your health vulnerability periods",
            "Your karmic lesson for the next 2 years",
            "Months to avoid risk (money/career)",
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
          <a className="cta" href="#form">
            Get My 2-Year Report
            <span className="ctaShine" />
          </a>
        </div>
      </section>

      {/* ===== FORM ===== */}
      <section id="form" className="section">
        <SectionHead
          eyebrow="Start now"
          title="Reveal your personalised 24-month roadmap"
          desc="Fill the details below. We’ll generate your report with precise timing windows."
        />

        <div className="formWrap">
          <motion.div
            className="formSide"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <img src={IMAGES.journal} alt="Notebook and pen" />
            <div className="formSideShade" />
            <div className="formSideText">
              <div className="formSideTitle">Private on WhatsApp</div>
              <div className="formSideSub">No spam • no data stored</div>
            </div>
          </motion.div>

          <motion.form
            className="form"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
            onSubmit={(e) => {
              e.preventDefault();
              // You can wire this to your backend.
              // For now, we just scroll to top / show a toast in your app if you want.
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="fieldRow">
              <div className="field">
                <label>Full Name</label>
                <input placeholder="Your name" required />
              </div>
              <div className="field">
                <label>WhatsApp</label>
                <input placeholder="+91…" inputMode="tel" required />
              </div>
            </div>

            <div className="fieldRow">
              <div className="field">
                <label>Date of Birth</label>
                <input placeholder="DD/MM/YYYY" required />
              </div>
              <div className="field">
                <label>Birth Time</label>
                <input placeholder="HH:MM (if known)" />
              </div>
            </div>

            <div className="fieldRow">
              <div className="field">
                <label>Birth Place</label>
                <input placeholder="City, State" required />
              </div>
              <div className="field">
                <label>Email</label>
                <input placeholder="you@email.com" type="email" required />
              </div>
            </div>

            <div className="field">
              <label>Main Concern</label>
              <textarea placeholder="Love / marriage / career / money / health… (write 1–2 lines)" rows={4} required />
            </div>

            <button className="cta ctaFull" type="submit">
              Submit & Reveal My 24 Months
              <span className="ctaShine" />
            </button>

            <div className="finePrint">
              Disclaimer: Astrology is guidance, not fixed fate. You control your actions. We provide clarity & timing.
            </div>
          </motion.form>
        </div>

        <div className="footerNote">
          <div className="footerImg">
            <img src={IMAGES.personSilhouette} alt="Silhouette" />
            <div className="footerShade" />
          </div>
          <div className="footerText">
            <div className="footerTitle">One report. Two years of answers.</div>
            <div className="footerSub">
              The only purchase that protects your future decisions — by fixing timing.
            </div>
          </div>
        </div>
      </section>

      {/* ===== CSS ===== */}
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
    <ul className="revealList">
      {points.map((p, i) => (
        <li key={i}>{p}</li>
      ))}
    </ul>
  </motion.div>
);

const Step = ({ n, title, desc }) => (
  <motion.div
    className="step"
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: easeOut }}
  >
    <div className="stepNum">{n}</div>
    <div className="stepBody">
      <div className="stepTitle">{title}</div>
      <div className="stepDesc">{desc}</div>
    </div>
  </motion.div>
);

const Stars = () => {
  // Lightweight starfield using CSS + random dots
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
    --card:#0b1022cc;
    --card2:#0a0f1f99;
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
  .stars{
    position:fixed; inset:0; pointer-events:none; z-index:0;
  }
  .star{
    position:absolute;
    border-radius:999px;
    background: rgba(255,255,255,.95);
    box-shadow: 0 0 14px rgba(255,255,255,.25);
    animation: tw 4.8s ease-in-out infinite;
  }
  @keyframes tw{
    0%,100%{transform:scale(1); opacity:var(--o, .3)}
    50%{transform:scale(1.7); opacity:1}
  }

  .aurora{
    position:fixed; inset:0; pointer-events:none; z-index:0;
    opacity:.9;
  }
  .aurora .a{
    position:absolute;
    width: 520px; height: 520px;
    border-radius: 999px;
    filter: blur(60px);
    opacity:.42;
    animation: drift 10s ease-in-out infinite;
  }
  .a1{
    left:-140px; top: 140px;
    background: radial-gradient(circle at 30% 30%, rgba(184,140,255,.55), transparent 65%);
  }
  .a2{
    right:-160px; top: 60px;
    background: radial-gradient(circle at 30% 30%, rgba(109,228,255,.50), transparent 65%);
    animation-delay: -3s;
  }
  .a3{
    left: 20%; bottom: -260px;
    background: radial-gradient(circle at 30% 30%, rgba(246,215,125,.35), transparent 65%);
    animation-delay: -6s;
  }
  @keyframes drift{
    0%,100%{transform: translate3d(0,0,0) scale(1)}
    50%{transform: translate3d(40px,-26px,0) scale(1.06)}
  }

  /* HERO */
  .hero{
    position:relative;
    z-index:1;
    padding: 22px 14px 34px;
    max-width:1120px;
    margin: 0 auto;
  }

  .heroMedia{
    position:absolute;
    inset: 0;
    height: 540px;
    overflow:hidden;
    border-radius: 26px;
    border: 1px solid rgba(255,255,255,.08);
    box-shadow: var(--shadow);
  }
  .heroImg{
    width:100%;
    height:100%;
    object-fit: cover;
    transform: scale(1.02);
    filter: saturate(1.15) contrast(1.05);
  }
  .heroOverlay{
    position:absolute; inset:0;
    background:
      radial-gradient(600px 360px at 20% 20%, rgba(184,140,255,.26), transparent 62%),
      radial-gradient(700px 420px at 80% 15%, rgba(109,228,255,.20), transparent 65%),
      linear-gradient(180deg, rgba(0,0,0,.70), rgba(0,0,0,.60), rgba(5,7,18,.95));
  }
  .heroBloom{
    position:absolute; inset:-40px;
    background:
      radial-gradient(260px 160px at 20% 30%, rgba(246,215,125,.22), transparent 70%),
      radial-gradient(240px 160px at 75% 35%, rgba(184,140,255,.22), transparent 70%);
    filter: blur(8px);
    pointer-events:none;
  }

  .heroContent{
    position:relative;
    z-index:2;
    padding-top: 18px;
    display:grid;
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .heroCard{
    margin-top: 210px; /* mobile: pushes card below the top visuals */
    background: linear-gradient(180deg, rgba(12,16,34,.78), rgba(10,14,31,.62));
    border: 1px solid rgba(255,255,255,.12);
    border-radius: var(--radius);
    padding: 16px 14px;
    box-shadow: var(--shadow2);
    backdrop-filter: blur(16px);
  }

  .pillRow{
    display:flex; flex-wrap:wrap; gap:8px;
    margin-bottom: 10px;
  }
  .pill{
    font-size:12px;
    color: rgba(255,255,255,.88);
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
  .sub b{color: rgba(255,255,255,.92)}

  .heroActions{
    display:flex;
    flex-direction: column;
    gap:10px;
    margin-top: 14px;
  }

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
  .trustDesc{font-size:12px; color: var(--muted2); margin-top:3px}

  .micro{
    margin-top: 12px;
    display:flex;
    align-items:center;
    gap:10px;
    font-size:12px;
    color: var(--muted2);
  }
  .microDot{
    width:7px; height:7px; border-radius:999px;
    background: linear-gradient(90deg, rgba(246,215,125,.95), rgba(109,228,255,.95));
    box-shadow: 0 0 18px rgba(246,215,125,.25);
  }

  .heroSide{
    display:none;
  }
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
  .miniShade{
    position:absolute; inset:0;
    background: linear-gradient(180deg, rgba(0,0,0,.15), rgba(0,0,0,.75));
  }
  .miniText{
    position:absolute; left:12px; bottom:12px;
  }
  .miniTitle{font-weight:950}
  .miniSub{font-size:12px; color: var(--muted); margin-top:2px}

  .miniGrid{
    margin-top: 10px;
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap:10px;
  }
  .miniStat{
    padding: 12px 12px;
    border-radius: 18px;
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.04);
  }
  .miniK{font-size:12px; color: var(--muted)}
  .miniV{font-size:16px; font-weight:950; margin-top:4px}

  @media(min-width: 980px){
    .hero{padding: 28px 16px 40px}
    .heroMedia{height: 560px}
    .heroContent{
      grid-template-columns: 1.1fr .9fr;
      align-items: start;
      gap: 16px;
    }
    .heroCard{margin-top: 240px; padding: 18px 16px}
    .h1{font-size: 44px}
    .sub{font-size: 15.5px}
    .heroActions{flex-direction: row}
    .heroSide{display:block; margin-top: 240px}
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
  .sectionHead{
    margin-bottom: 18px;
  }
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
    color: var(--muted);
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
  .soulText{margin-top:6px; color: var(--muted); font-size: 14.2px; line-height:1.55}
  .soulText b{color: rgba(255,255,255,.92)}

  .centerCta{
    margin-top: 18px;
    display:flex;
    justify-content:center;
  }

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
  .posterShade{
    position:absolute; inset:0;
    background: linear-gradient(180deg, rgba(0,0,0,.20), rgba(0,0,0,.78));
  }
  .posterBadge{
    position:absolute; left:12px; top:12px;
    font-weight:900; font-size:12px;
    padding: 8px 10px;
    border-radius: 999px;
    color: rgba(0,0,0,.92);
    background: linear-gradient(90deg, rgba(246,215,125,.96), rgba(109,228,255,.85));
  }
  .posterBottom{
    position:absolute; left:12px; right:12px; bottom:12px;
  }
  .posterTitle{font-weight:950; font-size:16px}
  .posterSub{margin-top:4px; font-size:12.5px; color: var(--muted)}

  .revealCards{
    display:grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }
  .revealCard{
    padding: 14px 14px;
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.04);
  }
  .revealTop{
    display:flex; align-items:flex-start; gap:10px;
  }
  .revealIcon{
    width:36px; height:36px; border-radius: 14px;
    display:flex; align-items:center; justify-content:center;
    background: rgba(255,255,255,.06);
    border: 1px solid rgba(255,255,255,.10);
    font-size: 16px;
  }
  .revealTitle{
    font-weight:950;
    letter-spacing: -.2px;
    line-height:1.2;
  }
  .revealList{
    margin: 10px 0 0;
    padding: 0 0 0 18px;
    color: var(--muted);
    font-size: 13.8px;
    line-height:1.6;
  }
  .revealList li{margin: 6px 0}
  @media(min-width: 980px){
    .revealLayout{grid-template-columns: .9fr 1.1fr; gap: 16px}
    .revealPoster{height: 540px}
    .revealCards{grid-template-columns: 1fr 1fr}
  }

  /* Truth */
  .truthWrap{
    display:grid;
    grid-template-columns: 1fr;
    gap: 12px;
    margin-top: 14px;
  }
  .truthCard{
    border-radius: var(--radius);
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.04);
    padding: 14px 14px;
  }
  .truthList{
    margin:0;
    padding: 0 0 0 18px;
    color: rgba(255,255,255,.86);
    font-size: 14.2px;
    line-height: 1.6;
  }
  .truthList li{margin: 8px 0}
  .truthLine{
    margin-top: 12px;
    color: var(--muted);
    font-size: 14px;
    line-height:1.55;
  }
  .truthLine.strong{
    color: rgba(255,255,255,.92);
    font-weight:900;
  }
  .truthMedia{
    position:relative;
    border-radius: var(--radius);
    border: 1px solid rgba(255,255,255,.10);
    overflow:hidden;
    height: 220px;
  }
  .truthMedia img{width:100%; height:100%; object-fit:cover; filter: saturate(1.08)}
  .truthMediaShade{
    position:absolute; inset:0;
    background: linear-gradient(180deg, rgba(0,0,0,.18), rgba(0,0,0,.78));
  }
  .truthTag{
    position:absolute; left:12px; bottom:12px;
    padding: 8px 10px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 900;
    border: 1px solid rgba(255,255,255,.12);
    background: rgba(255,255,255,.06);
  }
  @media(min-width: 980px){
    .truthWrap{grid-template-columns: 1.1fr .9fr; gap: 16px}
    .truthMedia{height: 100%}
  }

  /* Steps */
  .steps{
    display:grid;
    grid-template-columns: 1fr;
    gap: 10px;
    margin-top: 14px;
  }
  .step{
    display:flex;
    gap: 12px;
    padding: 14px 14px;
    border-radius: 22px;
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.04);
  }
  .stepNum{
    width: 40px; height: 40px;
    border-radius: 16px;
    display:flex; align-items:center; justify-content:center;
    font-weight: 950;
    color: rgba(0,0,0,.92);
    background: linear-gradient(90deg, rgba(246,215,125,.95), rgba(184,140,255,.90));
  }
  .stepTitle{font-weight: 950}
  .stepDesc{margin-top: 4px; color: var(--muted); font-size: 14px; line-height:1.55}
  @media(min-width: 980px){
    .steps{grid-template-columns: 1fr 1fr 1fr}
  }

  .proofBar{
    margin-top: 14px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap: 10px;
    padding: 14px 14px;
    border-radius: 22px;
    border: 1px solid rgba(255,255,255,.10);
    background: linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.03));
  }
  .proofTitle{font-weight:950}
  .proofText{color: var(--muted); font-size: 13.5px}
  .proofCta{
    text-decoration:none;
    font-weight: 950;
    color: rgba(0,0,0,.92);
    padding: 10px 12px;
    border-radius: 999px;
    background: linear-gradient(90deg, rgba(109,228,255,.85), rgba(246,215,125,.95));
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

  /* Form */
  .formWrap{
    display:grid;
    grid-template-columns: 1fr;
    gap: 12px;
    margin-top: 14px;
  }
  .formSide{
    position:relative;
    overflow:hidden;
    border-radius: var(--radius);
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.03);
    height: 220px;
  }
  .formSide img{width:100%; height:100%; object-fit:cover}
  .formSideShade{
    position:absolute; inset:0;
    background: linear-gradient(180deg, rgba(0,0,0,.10), rgba(0,0,0,.78));
  }
  .formSideText{
    position:absolute; left:12px; bottom:12px; right:12px;
  }
  .formSideTitle{font-weight:950; font-size:16px}
  .formSideSub{margin-top:4px; color: var(--muted); font-size:12.5px}

  .form{
    border-radius: var(--radius);
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.04);
    padding: 14px 14px;
  }
  .fieldRow{
    display:grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }
  .field{margin-top: 10px}
  label{
    display:block;
    font-size: 12px;
    letter-spacing:.08em;
    text-transform:uppercase;
    color: rgba(255,255,255,.68);
    margin-bottom: 8px;
  }
  input, textarea{
    width:100%;
    border-radius: 16px;
    border: 1px solid rgba(255,255,255,.12);
    background: rgba(10,14,31,.55);
    color: rgba(255,255,255,.92);
    padding: 12px 12px;
    outline:none;
    font-size: 14.5px;
  }
  input::placeholder, textarea::placeholder{color: rgba(255,255,255,.46)}
  input:focus, textarea:focus{
    border-color: rgba(246,215,125,.35);
    box-shadow: 0 0 0 6px rgba(246,215,125,.08);
  }

  .ctaFull{width:100%; margin-top: 12px}
  .finePrint{
    margin-top: 10px;
    color: rgba(255,255,255,.56);
    font-size: 12.5px;
    line-height: 1.55;
  }

  @media(min-width: 980px){
    .formWrap{grid-template-columns: .9fr 1.1fr; gap: 16px}
    .fieldRow{grid-template-columns: 1fr 1fr}
    .formSide{height: 100%}
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
  .footerImg{
    position:relative;
    height: 160px;
  }
  .footerImg img{width:100%; height:100%; object-fit:cover; filter:saturate(1.08)}
  .footerShade{
    position:absolute; inset:0;
    background: linear-gradient(180deg, rgba(0,0,0,.15), rgba(0,0,0,.80));
  }
  .footerText{
    padding: 14px 14px;
  }
  .footerTitle{
    font-weight: 950;
    font-size: 16px;
  }
  .footerSub{
    margin-top: 6px;
    color: var(--muted);
    font-size: 13.8px;
    line-height: 1.55;
  }
  @media(min-width: 980px){
    .footerNote{grid-template-columns: .7fr 1.3fr}
    .footerImg{height: 100%}
  }
`;

export default TwoYearHoroscopePremium;
