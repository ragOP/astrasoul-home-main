import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll, AnimatePresence } from "framer-motion";

/**
 * UNIQUE MOBILE-FIRST PREMIUM LANDER (ROYAL + LUXURY + MYSTIC)
 * Goals from you:
 * 1) Hero that feels NOT usual → interactive "Destiny Dial" + swipeable month windows + cinematic reveal
 * 2) Explain clearly what you are selling → "What you get" + deliverables + sample tiles
 * 3) Tabular before/after → mobile-friendly table + desktop table
 *
 * Install:
 *   npm i framer-motion
 *
 * Drop this component anywhere (Next.js / CRA / Vite).
 */

const ease = [0.16, 1, 0.3, 1];

export default function Unique2YearHoroscopeLander() {
  const IMAGES = useMemo(
    () => ({
      hero: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=2400&q=80",
      texture: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=2400&q=80",
      journal: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=2400&q=80",
      candle: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=2400&q=80",
    }),
    []
  );

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 24, mass: 0.35 });

  // "Destiny Dial" (unique hero interaction)
  const dial = useMotionValue(0); // -1..+1
  const dialSpring = useSpring(dial, { stiffness: 220, damping: 26, mass: 0.35 });
  const dialRotate = useTransform(dialSpring, [-1, 1], [-28, 28]);
  const dialGlow = useTransform(dialSpring, [-1, 0, 1], [0.2, 0.6, 0.22]);

  // Unique "month windows" demo
  const windows = useMemo(
    () => [
      { label: "Window A", title: "Momentum window", sub: "best time to act", tone: "gold" },
      { label: "Window B", title: "Risk window", sub: "avoid big decisions", tone: "rose" },
      { label: "Window C", title: "Love turning point", sub: "clarity arrives", tone: "violet" },
      { label: "Window D", title: "Money window", sub: "growth potential", tone: "gold" },
      { label: "Window E", title: "Slow phase", sub: "rest & plan", tone: "slate" },
    ],
    []
  );
  const [activeWin, setActiveWin] = useState(0);

  // auto-play demo (subtle, premium)
  useEffect(() => {
    const t = setInterval(() => setActiveWin((p) => (p + 1) % windows.length), 3800);
    return () => clearInterval(t);
  }, [windows.length]);

  // CTA magnetic micro-interaction
  const ctaRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const mxs = useSpring(mx, { stiffness: 220, damping: 18, mass: 0.25 });
  const mys = useSpring(my, { stiffness: 220, damping: 18, mass: 0.25 });

  function onMoveMagnetic(e) {
    const el = ctaRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    mx.set(dx * 0.08);
    my.set(dy * 0.08);
  }
  function onLeaveMagnetic() {
    mx.set(0);
    my.set(0);
  }

  // FAQ
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <div className="wrap">
      <motion.div className="topProgress" style={{ scaleX: progress }} />

      <Aurora />
      <Stars />

      {/* Header */}
      <header className="header">
        <div className="headerInner">
          <a className="brand" href="#top" aria-label="Go to top">
            <span className="mark" />
            <span className="brandText">
              <span className="brandTop">2-Year Kundali Report</span>
              <span className="brandSub">Private • Personal • Month-by-Month</span>
            </span>
          </a>

          <a className="headerCta" href="#form">
            Start
          </a>
        </div>
      </header>

      {/* HERO — UNIQUE */}
      <section id="top" className="hero">
        <div className="heroMedia">
          <img className="heroImg" src={IMAGES.hero} alt="Night sky" />
          <div className="heroShade" />
          <div className="grain" />
        </div>

        <div className="heroInner">
          {/* Left: copy + CTA */}
          <motion.div
            className="heroCard"
            initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease }}
          >
            <div className="pillRow">
              <span className="pill">WhatsApp Summary</span>
              <span className="pill">20–35 Page PDF</span>
              <span className="pill">24-Month Timeline</span>
            </div>

            <h1 className="h1">
              Don’t “guess” the next <span className="gold">24 months</span>.
              <br />
              <span className="muted">See your windows before you move.</span>
            </h1>

            <p className="sub">
              You’re not buying “astrology”.
              <br />
              You’re buying a <b>decision timeline</b> (act / wait / avoid) for love, career & money.
            </p>

            <div className="ctaRow">
              <motion.a
                ref={ctaRef}
                href="#form"
                className="ctaPrimary"
                onMouseMove={onMoveMagnetic}
                onMouseLeave={onLeaveMagnetic}
                style={{ x: mxs, y: mys }}
                whileTap={{ scale: 0.98 }}
              >
                Reveal My Timeline <span className="shine" />
              </motion.a>

              <a className="ctaGhost" href="#selling">
                What am I getting?
              </a>
            </div>

            <div className="miniTrust">
              <div className="miniTrustItem">
                <div className="k">Delivery</div>
                <div className="v">24–48 hrs</div>
              </div>
              <div className="miniTrustItem">
                <div className="k">Made from</div>
                <div className="v">Birth details</div>
              </div>
              <div className="miniTrustItem">
                <div className="k">Format</div>
                <div className="v">PDF + WhatsApp</div>
              </div>
            </div>
          </motion.div>

          {/* Right: UNIQUE interactive dial + windows */}
          <motion.div
            className="heroDemo"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12, ease }}
          >
            <div className="demoTop">
              <div className="demoTitle">Destiny Dial (demo)</div>
              <div className="demoSub">Drag the dial → watch the “window” change</div>
            </div>

            <div className="dialWrap">
              <motion.div
                className="dialGlow"
                style={{ opacity: dialGlow }}
                aria-hidden="true"
              />
              <motion.div
                className="dial"
                style={{ rotate: dialRotate }}
                drag="x"
                dragConstraints={{ left: -120, right: 120 }}
                dragElastic={0.08}
                onDrag={(e, info) => {
                  const v = Math.max(-1, Math.min(1, info.offset.x / 120));
                  dial.set(v);
                }}
                onDragEnd={() => dial.set(0)}
                whileTap={{ scale: 0.985 }}
              >
                <div className="dialFace">
                  <div className="dialRing" />
                  <div className="dialNeedle" />
                  <div className="dialCenter" />
                  <div className="dialMarks">
                    {new Array(18).fill(0).map((_, i) => (
                      <span key={i} className="tick" style={{ transform: `rotate(${i * 20}deg)` }} />
                    ))}
                  </div>
                </div>
                <div className="dialHint">drag</div>
              </motion.div>

              <div className="winPanel">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeWin}
                    className={"winCard " + windows[activeWin].tone}
                    initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -6, filter: "blur(10px)" }}
                    transition={{ duration: 0.55, ease }}
                  >
                    <div className="winLabel">{windows[activeWin].label}</div>
                    <div className="winTitle">{windows[activeWin].title}</div>
                    <div className="winSub">{windows[activeWin].sub}</div>
                    <div className="winRow">
                      <span className="chip">Act</span>
                      <span className="chip">Wait</span>
                      <span className="chip">Avoid</span>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="winDots">
                  {windows.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      className={i === activeWin ? "dot active" : "dot"}
                      onClick={() => setActiveWin(i)}
                      aria-label={`Show ${windows[i].label}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="demoFoot">
              This is what the report does — it turns “life feels uncertain” into a timeline you can follow.
            </div>
          </motion.div>
        </div>

        <div className="heroFooter">
          <span className="heroFooterDot" />
          <span>Scroll → see what exactly you’re buying</span>
        </div>
      </section>

      {/* 2) WHAT EXACTLY YOU’RE SELLING */}
      <section id="selling" className="section sectionAlt">
        <SectionHead
          title="What exactly are you selling?"
          desc="A decision system for the next 24 months — not generic predictions."
        />

        <div className="sellingGrid">
          <Deliverable
            title="Your 24-Month Decision Timeline"
            sub="Month-by-month • act / wait / avoid"
            icon="🗓️"
          />
          <Deliverable
            title="Love & Commitment Windows"
            sub="Turning points • danger months • healing"
            icon="❤"
          />
          <Deliverable
            title="Career & Money Windows"
            sub="Growth months • avoid-risk phases"
            icon="💼"
          />
          <Deliverable
            title="Personalised PDF + WhatsApp Summary"
            sub="Clean report • delivered privately"
            icon="📩"
          />
        </div>

        {/* “Proof” strip (very visual, minimal text) */}
        <div className="proofStrip">
          <ProofTile img={IMAGES.texture} label="Premium layout" />
          <ProofTile img={IMAGES.candle} label="Focused guidance" />
          <ProofTile img={IMAGES.journal} label="Action notes" />
        </div>

        <div className="center">
          <a className="ctaPrimary wide" href="#beforeafter">
            Show before/after table <span className="shine" />
          </a>
        </div>
      </section>

      {/* 3) BEFORE / AFTER TABLE (Mobile-friendly) */}
      <section id="beforeafter" className="section">
        <SectionHead
          title="Life before vs after this report"
          desc="This is the value: less confusion, fewer bad moves, stronger timing."
        />

        {/* Mobile-first: card table */}
        <div className="baCards">
          {[
            {
              left: "Decisions based on mood / fear",
              right: "Decisions based on timing windows",
            },
            {
              left: "Random effort → inconsistent outcomes",
              right: "Effort aligned to peak months",
            },
            {
              left: "Ignoring warning phases",
              right: "Avoid months clearly flagged",
            },
            {
              left: "Repeating the same love/career cycles",
              right: "Pattern awareness + corrective plan",
            },
            {
              left: "Always feeling late",
              right: "Knowing your next best window",
            },
          ].map((row, i) => (
            <motion.div
              key={i}
              className="baCard"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.65, delay: i * 0.04, ease }}
            >
              <div className="baCol before">
                <div className="baHead">Before</div>
                <div className="baText">{row.left}</div>
              </div>
              <div className="baCol after">
                <div className="baHead">After</div>
                <div className="baText">{row.right}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: real table */}
        <div className="baTableWrap">
          <table className="baTable" aria-label="Before and After table">
            <thead>
              <tr>
                <th>Before</th>
                <th>After</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Decisions based on mood / fear</td>
                <td>Decisions based on timing windows</td>
              </tr>
              <tr>
                <td>Random effort → inconsistent outcomes</td>
                <td>Effort aligned to peak months</td>
              </tr>
              <tr>
                <td>Ignoring warning phases</td>
                <td>Avoid months clearly flagged</td>
              </tr>
              <tr>
                <td>Repeating love/career cycles</td>
                <td>Pattern awareness + corrective plan</td>
              </tr>
              <tr>
                <td>Always feeling late</td>
                <td>Knowing your next best window</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="center">
          <a className="ctaPrimary wide" href="#form">
            Okay — start my report <span className="shine" />
          </a>
        </div>
      </section>

      {/* FORM */}
      <section id="form" className="section sectionDark">
        <SectionHead title="Start your report" desc="Private delivery • WhatsApp + PDF • 24–48 hrs" light />

        <div className="formWrap">
          <motion.div
            className="formMedia"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease }}
          >
            <img src={IMAGES.journal} alt="Notebook" />
            <div className="formShade" />
            <div className="formNote">
              <div className="fnTitle">Your timeline starts here</div>
              <div className="fnSub">Fill details → we build the month-by-month roadmap</div>
            </div>
          </motion.div>

          <motion.form
            className="form"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease }}
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              console.log("ORDER FORM:", Object.fromEntries(fd.entries()));
            }}
          >
            <div className="row">
              <div className="field">
                <label>Full name</label>
                <input name="name" placeholder="Your name" required />
              </div>
              <div className="field">
                <label>WhatsApp</label>
                <input name="whatsapp" placeholder="+91…" inputMode="tel" required />
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label>Date of birth</label>
                <input name="dob" placeholder="DD/MM/YYYY" required />
              </div>
              <div className="field">
                <label>Birth time</label>
                <input name="time" placeholder="HH:MM (if known)" />
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label>Birth place</label>
                <input name="place" placeholder="City, State" required />
              </div>
              <div className="field">
                <label>Email</label>
                <input name="email" type="email" placeholder="you@email.com" required />
              </div>
            </div>

            <div className="field">
              <label>Main concern</label>
              <textarea name="concern" placeholder="Love / career / money… (1–2 lines)" rows={4} required />
            </div>

            <button className="ctaPrimary full" type="submit">
              Submit & reveal my timeline <span className="shine" />
            </button>

            <div className="fine">
              Disclaimer: Astrology is guidance, not fixed fate. You control your actions. We provide clarity & timing.
            </div>
          </motion.form>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <SectionHead title="FAQ" desc="Short answers. Less doubt." />
        <div className="faq">
          {[
            { q: "Is this personalised?", a: "Yes — built from your DOB, time (if known), place, and concern." },
            { q: "When will I receive it?", a: "Within 24–48 hours (WhatsApp summary + PDF)." },
            { q: "What if I don’t know birth time?", a: "Still okay — we adjust analysis accordingly." },
            { q: "Do you store data?", a: "No — details are used only to generate your report." },
          ].map((it, i) => {
            const open = openFAQ === i;
            return (
              <div key={i} className="faqItem">
                <button type="button" className="faqQ" onClick={() => setOpenFAQ(open ? null : i)}>
                  <span>{it.q}</span>
                  <span className={open ? "chev open" : "chev"}>⌄</span>
                </button>
                <motion.div
                  className="faqA"
                  initial={false}
                  animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                  transition={{ duration: 0.32, ease }}
                >
                  <div className="faqAText">{it.a}</div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <div className="mobileBar">
        <a className="mobileBtn" href="#form">
          Reveal my 24 months
        </a>
      </div>

      <style>{styles}</style>
    </div>
  );
}

/* ---------- UI bits ---------- */

function SectionHead({ title, desc, light }) {
  return (
    <div className={light ? "sh shLight" : "sh"}>
      <motion.h2
        className="h2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="desc"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.05, ease }}
      >
        {desc}
      </motion.p>
    </div>
  );
}

function Deliverable({ title, sub, icon }) {
  return (
    <motion.div
      className="deliv"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.75, ease }}
    >
      <div className="delivIcon">{icon}</div>
      <div className="delivText">
        <div className="delivTitle">{title}</div>
        <div className="delivSub">{sub}</div>
      </div>
    </motion.div>
  );
}

function ProofTile({ img, label }) {
  return (
    <motion.div
      className="proof"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75, ease }}
    >
      <img src={img} alt="" />
      <div className="proofShade" />
      <div className="proofLabel">{label}</div>
    </motion.div>
  );
}

function Aurora() {
  return (
    <div className="aurora" aria-hidden="true">
      <span className="a a1" />
      <span className="a a2" />
      <span className="a a3" />
    </div>
  );
}

function Stars() {
  const dots = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 80; i++) {
      arr.push({
        left: Math.random() * 100,
        top: Math.random() * 100,
        s: 1 + Math.random() * 2.6,
        o: 0.12 + Math.random() * 0.6,
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
}

/* ---------- Styles ---------- */

const styles = `
:root{
  --bg0:#07060A;
  --bg1:#0B0912;
  --royal:#2A0F2D;
  --royal2:#140A1F;
  --gold:#D7B35A;
  --gold2:#F0D79A;
  --text:rgba(255,255,255,.92);
  --muted:rgba(255,255,255,.70);
  --muted2:rgba(255,255,255,.58);
  --line:rgba(255,255,255,.10);
  --line2:rgba(255,255,255,.14);
  --shadow: 0 24px 70px rgba(0,0,0,.45);
  --shadow2: 0 18px 48px rgba(0,0,0,.35);
  --r16:16px;
  --r22:22px;
  --r26:26px;
}

*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
  color: var(--text);
  background:
    radial-gradient(900px 520px at 15% 10%, rgba(215,179,90,.12), transparent 60%),
    radial-gradient(800px 520px at 85% 0%, rgba(155,95,170,.14), transparent 62%),
    linear-gradient(180deg, var(--bg0), var(--bg1));
  overflow-x:hidden;
}
.wrap{min-height:100vh; position:relative}

/* progress */
.topProgress{
  position:fixed; left:0; top:0;
  height:3px; width:100%;
  transform-origin:left;
  z-index:9999;
  background: linear-gradient(90deg, rgba(215,179,90,.95), rgba(240,215,154,.95), rgba(155,95,170,.85));
}

/* background fx */
.aurora{position:fixed; inset:0; pointer-events:none; z-index:0; opacity:.95}
.aurora .a{
  position:absolute; width:540px; height:540px; border-radius:999px; filter: blur(78px); opacity:.42;
  animation: drift 10s ease-in-out infinite;
}
.a1{left:-200px; top:120px; background: radial-gradient(circle at 30% 30%, rgba(215,179,90,.55), transparent 65%)}
.a2{right:-220px; top:40px; background: radial-gradient(circle at 30% 30%, rgba(155,95,170,.55), transparent 65%); animation-delay:-3s}
.a3{left:20%; bottom:-320px; background: radial-gradient(circle at 30% 30%, rgba(120,90,190,.45), transparent 65%); animation-delay:-6s}
@keyframes drift{
  0%,100%{transform: translate3d(0,0,0) scale(1)}
  50%{transform: translate3d(40px,-22px,0) scale(1.05)}
}
.stars{position:fixed; inset:0; pointer-events:none; z-index:0}
.star{
  position:absolute; border-radius:999px; background: rgba(255,255,255,.95);
  box-shadow: 0 0 14px rgba(255,255,255,.20);
  animation: tw 4.8s ease-in-out infinite;
}
@keyframes tw{
  0%,100%{transform:scale(1)}
  50%{transform:scale(1.7); opacity:1}
}

/* header */
.header{
  position:sticky; top:0; z-index:60;
  backdrop-filter: blur(14px);
  background: linear-gradient(180deg, rgba(10,8,16,.78), rgba(10,8,16,.45));
  border-bottom: 1px solid rgba(255,255,255,.08);
}
.headerInner{
  max-width:1120px; margin:0 auto;
  padding: 12px 14px;
  display:flex; align-items:center; gap:12px;
}
.brand{display:flex; align-items:center; gap:10px; text-decoration:none; color:inherit}
.mark{
  width:36px; height:36px; border-radius:14px;
  background:
    radial-gradient(10px 10px at 28% 30%, rgba(255,255,255,.80), transparent 60%),
    radial-gradient(14px 14px at 70% 60%, rgba(240,215,154,.80), transparent 60%),
    linear-gradient(135deg, rgba(215,179,90,.30), rgba(155,95,170,.22));
  border: 1px solid rgba(255,255,255,.14);
  box-shadow: 0 14px 34px rgba(0,0,0,.35);
}
.brandText{display:flex; flex-direction:column; line-height:1.02}
.brandTop{font-weight:980; letter-spacing:.2px}
.brandSub{font-size:12px; color: var(--muted2); margin-top:2px}
.headerCta{
  margin-left:auto;
  text-decoration:none;
  font-weight:980;
  font-size:13px;
  color: #0b0a0e;
  background: linear-gradient(90deg, rgba(240,215,154,.96), rgba(215,179,90,.92));
  padding: 10px 12px;
  border-radius: 999px;
  box-shadow: 0 16px 40px rgba(0,0,0,.35);
}
.headerCta:active{transform: translateY(1px)}

/* hero */
.hero{
  position:relative;
  z-index:1;
  max-width:1120px;
  margin:0 auto;
  padding: 14px 14px 10px;
}
.heroMedia{
  position:absolute;
  inset: 12px 14px auto 14px;
  height: 560px;
  border-radius: var(--r26);
  overflow:hidden;
  border: 1px solid rgba(255,255,255,.10);
  box-shadow: var(--shadow);
}
.heroImg{
  width:100%; height:100%; object-fit:cover;
  transform: scale(1.02);
  filter: saturate(1.08) contrast(1.06);
  opacity:.92;
}
.heroShade{
  position:absolute; inset:0;
  background:
    radial-gradient(720px 340px at 25% 18%, rgba(215,179,90,.18), transparent 62%),
    radial-gradient(700px 340px at 80% 10%, rgba(155,95,170,.18), transparent 65%),
    linear-gradient(180deg, rgba(0,0,0,.20), rgba(0,0,0,.60), rgba(7,6,10,.95));
}
.grain{
  position:absolute; inset:0;
  opacity:.16;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='.22'/%3E%3C/svg%3E");
  mix-blend-mode: overlay;
  pointer-events:none;
}
.heroInner{
  position:relative;
  padding-top: 320px;
  display:grid;
  grid-template-columns: 1fr;
  gap: 12px;
}
.heroCard{
  background: linear-gradient(180deg, rgba(16,12,22,.76), rgba(10,8,16,.62));
  border: 1px solid rgba(255,255,255,.12);
  border-radius: var(--r22);
  padding: 14px 14px;
  box-shadow: var(--shadow2);
  backdrop-filter: blur(14px);
}
.pillRow{display:flex; flex-wrap:wrap; gap:8px; margin-bottom: 10px}
.pill{
  font-size:12px;
  color: rgba(255,255,255,.88);
  padding: 7px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,.12);
  background: rgba(255,255,255,.05);
}
.h1{
  margin:0;
  font-size: 30px;
  line-height: 1.08;
  letter-spacing: -.4px;
  font-weight: 990;
}
.gold{
  background: linear-gradient(90deg, rgba(240,215,154,.98), rgba(215,179,90,.92));
  -webkit-background-clip:text;
  background-clip:text;
  color: transparent;
}
.muted{color: var(--muted)}
.sub{
  margin: 10px 0 0;
  color: var(--muted);
  font-size: 14.5px;
  line-height: 1.58;
}
.sub b{color: rgba(255,255,255,.92)}
.ctaRow{
  display:flex;
  flex-direction:column;
  gap:10px;
  margin-top: 14px;
}
.ctaPrimary{
  position:relative;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:10px;
  width:100%;
  text-decoration:none;
  color:#0b0a0e;
  background: linear-gradient(90deg, rgba(240,215,154,.98), rgba(215,179,90,.92));
  border-radius: 999px;
  padding: 14px 14px;
  font-weight: 990;
  font-size: 14.5px;
  box-shadow: 0 18px 44px rgba(0,0,0,.42);
  overflow:hidden;
}
.ctaPrimary.wide{max-width: 520px}
.ctaPrimary:active{transform: translateY(1px)}
.ctaGhost{
  width:100%;
  text-decoration:none;
  color: rgba(255,255,255,.92);
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.14);
  border-radius: 999px;
  padding: 13px 14px;
  font-weight: 900;
  text-align:center;
}
.shine{
  position:absolute;
  inset:-60px -80px;
  background: radial-gradient(180px 70px at 18% 50%, rgba(255,255,255,.55), transparent 60%);
  opacity:.35;
  filter: blur(8px);
  animation: shine 3.8s ease-in-out infinite;
  pointer-events:none;
}
@keyframes shine{
  0%,100%{transform: translate3d(-30px,0,0)}
  50%{transform: translate3d(55px,-10px,0)}
}

.miniTrust{
  margin-top: 12px;
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap:10px;
}
.miniTrustItem{
  padding: 10px 10px;
  border-radius: 16px;
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.10);
}
.k{font-size:12px; color: var(--muted2)}
.v{margin-top:4px; font-size:12.5px; font-weight:950}

/* Unique hero demo */
.heroDemo{
  border-radius: var(--r22);
  border: 1px solid rgba(255,255,255,.12);
  background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.03));
  box-shadow: var(--shadow2);
  padding: 14px;
  backdrop-filter: blur(14px);
}
.demoTop{display:flex; justify-content:space-between; gap:10px; align-items:flex-start}
.demoTitle{font-weight: 980}
.demoSub{color: var(--muted2); font-size: 12.5px; line-height: 1.35}
.dialWrap{margin-top: 12px; display:grid; grid-template-columns: 1fr; gap: 12px}
.dialGlow{
  position:absolute;
}
.dial{
  position:relative;
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  padding: 14px;
  border-radius: 22px;
  border: 1px solid rgba(255,255,255,.10);
  background: radial-gradient(120px 120px at 30% 30%, rgba(240,215,154,.12), transparent 70%),
              radial-gradient(120px 120px at 70% 60%, rgba(155,95,170,.12), transparent 72%),
              rgba(0,0,0,.22);
  overflow:hidden;
}
.dialFace{
  position:relative;
  width: 220px;
  height: 220px;
  margin: 0 auto;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(255,255,255,.08), rgba(0,0,0,.20));
  border: 1px solid rgba(255,255,255,.12);
  box-shadow: inset 0 0 0 10px rgba(0,0,0,.18), 0 18px 40px rgba(0,0,0,.45);
}
.dialRing{
  position:absolute; inset: 16px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,.12);
  background: radial-gradient(circle at 30% 30%, rgba(240,215,154,.10), transparent 60%);
}
.dialNeedle{
  position:absolute;
  left:50%; top:50%;
  width: 2px; height: 90px;
  transform: translate(-50%,-86%);
  background: linear-gradient(180deg, rgba(240,215,154,.95), rgba(155,95,170,.55));
  border-radius: 99px;
  box-shadow: 0 0 18px rgba(240,215,154,.22);
}
.dialCenter{
  position:absolute;
  left:50%; top:50%;
  width: 18px; height: 18px;
  transform: translate(-50%,-50%);
  border-radius: 99px;
  background: linear-gradient(90deg, rgba(240,215,154,.95), rgba(215,179,90,.92));
  box-shadow: 0 0 0 6px rgba(240,215,154,.10);
}
.dialMarks .tick{
  position:absolute;
  left:50%; top:10px;
  width:2px; height: 10px;
  transform-origin: 0 100px;
  background: rgba(255,255,255,.20);
  border-radius: 99px;
}
.dialHint{
  margin-top: 10px;
  text-align:center;
  font-size: 12px;
  color: var(--muted2);
  letter-spacing:.18em;
  text-transform: uppercase;
}
.winPanel{
  border-radius: 22px;
  border: 1px solid rgba(255,255,255,.10);
  background: rgba(0,0,0,.18);
  padding: 12px;
}
.winCard{
  border-radius: 18px;
  border: 1px solid rgba(255,255,255,.10);
  padding: 12px;
  background: rgba(255,255,255,.05);
}
.winCard.gold{box-shadow: inset 0 0 0 1px rgba(240,215,154,.14)}
.winCard.rose{box-shadow: inset 0 0 0 1px rgba(255,120,170,.14)}
.winCard.violet{box-shadow: inset 0 0 0 1px rgba(155,95,170,.16)}
.winCard.slate{box-shadow: inset 0 0 0 1px rgba(160,170,190,.12)}
.winLabel{
  font-size: 11px;
  color: var(--muted2);
  letter-spacing: .22em;
  text-transform: uppercase;
}
.winTitle{margin-top: 6px; font-weight: 990; font-size: 16px}
.winSub{margin-top: 4px; color: var(--muted); font-size: 12.8px}
.winRow{margin-top: 10px; display:flex; gap:8px; flex-wrap:wrap}
.chip{
  padding: 8px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,.12);
  background: rgba(255,255,255,.06);
  color: rgba(255,255,255,.86);
  font-size: 12px;
  font-weight: 850;
}
.winDots{margin-top: 10px; display:flex; gap:8px; justify-content:center}
.dot{
  width: 8px; height: 8px;
  border-radius: 99px;
  border: 1px solid rgba(255,255,255,.18);
  background: rgba(255,255,255,.08);
  cursor:pointer;
}
.dot.active{
  background: linear-gradient(90deg, rgba(240,215,154,.95), rgba(155,95,170,.85));
  border-color: rgba(255,255,255,.28);
}
.demoFoot{
  margin-top: 10px;
  color: var(--muted2);
  font-size: 12.5px;
  line-height: 1.5;
}

/* hero footer */
.heroFooter{
  margin-top: 10px;
  display:flex;
  justify-content:center;
  align-items:center;
  gap:10px;
  color: var(--muted2);
  font-size: 12px;
}
.heroFooterDot{
  width:7px; height:7px; border-radius:999px;
  background: linear-gradient(90deg, rgba(240,215,154,.95), rgba(155,95,170,.85));
  box-shadow: 0 0 16px rgba(240,215,154,.20);
}

/* sections */
.section{
  position:relative;
  z-index:1;
  max-width:1120px;
  margin:0 auto;
  padding: 60px 14px;
}
.sectionAlt{
  background: linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.01));
  border-top: 1px solid rgba(255,255,255,.08);
  border-bottom: 1px solid rgba(255,255,255,.08);
}
.sectionDark{
  background: linear-gradient(180deg, rgba(10,8,16,.70), rgba(10,8,16,.88));
  border-top: 1px solid rgba(255,255,255,.08);
  border-bottom: 1px solid rgba(255,255,255,.08);
}
.sh{margin-bottom: 14px}
.shLight .h2{color: rgba(255,255,255,.95)}
.shLight .desc{color: rgba(255,255,255,.70)}
.h2{
  margin:0;
  font-size: 24px;
  line-height: 1.16;
  letter-spacing: -.3px;
  font-weight: 990;
}
.desc{
  margin: 10px 0 0;
  color: var(--muted);
  font-size: 14.4px;
  line-height: 1.6;
  max-width: 70ch;
}
.center{margin-top: 14px; display:flex; justify-content:center}

/* selling */
.sellingGrid{
  margin-top: 14px;
  display:grid;
  grid-template-columns: 1fr;
  gap: 10px;
}
.deliv{
  display:flex;
  gap: 12px;
  align-items:flex-start;
  border-radius: var(--r22);
  border: 1px solid rgba(255,255,255,.12);
  background: rgba(255,255,255,.05);
  padding: 14px;
  box-shadow: 0 16px 44px rgba(0,0,0,.25);
}
.delivIcon{
  width: 44px;
  height: 44px;
  border-radius: 18px;
  display:flex;
  align-items:center;
  justify-content:center;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.12);
  box-shadow: inset 0 0 0 1px rgba(240,215,154,.10);
  flex: 0 0 auto;
}
.delivTitle{font-weight: 980}
.delivSub{margin-top: 4px; color: var(--muted2); font-size: 12.8px; line-height:1.45}

.proofStrip{
  margin-top: 12px;
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}
.proof{
  position:relative;
  overflow:hidden;
  border-radius: 18px;
  border: 1px solid rgba(255,255,255,.10);
  height: 110px;
  box-shadow: 0 16px 40px rgba(0,0,0,.30);
}
.proof img{width:100%; height:100%; object-fit:cover; opacity:.92}
.proofShade{position:absolute; inset:0; background: linear-gradient(180deg, rgba(0,0,0,.15), rgba(0,0,0,.80))}
.proofLabel{
  position:absolute; left:10px; bottom:10px;
  font-weight: 950;
  font-size: 12px;
  color: rgba(255,255,255,.92);
}

/* Before/after */
.baCards{margin-top: 14px; display:grid; grid-template-columns: 1fr; gap: 10px}
.baCard{
  display:grid;
  grid-template-columns: 1fr;
  gap: 10px;
  border-radius: var(--r22);
  border: 1px solid rgba(255,255,255,.12);
  background: rgba(255,255,255,.05);
  padding: 14px;
  box-shadow: 0 16px 44px rgba(0,0,0,.25);
}
.baCol{
  border-radius: 18px;
  border: 1px solid rgba(255,255,255,.10);
  padding: 12px;
  background: rgba(0,0,0,.14);
}
.baCol.before{box-shadow: inset 0 0 0 1px rgba(255,120,170,.10)}
.baCol.after{box-shadow: inset 0 0 0 1px rgba(240,215,154,.12)}
.baHead{
  font-size: 11px;
  letter-spacing: .22em;
  text-transform: uppercase;
  color: var(--muted2);
}
.baText{margin-top: 6px; font-weight: 900; color: rgba(255,255,255,.88); line-height:1.45}

.baTableWrap{display:none; margin-top: 14px}
.baTable{
  width:100%;
  border-collapse: collapse;
  overflow:hidden;
  border-radius: 18px;
  border: 1px solid rgba(255,255,255,.12);
  background: rgba(255,255,255,.04);
}
.baTable th, .baTable td{
  padding: 12px;
  border-bottom: 1px solid rgba(255,255,255,.10);
  vertical-align: top;
  text-align:left;
}
.baTable th{
  font-size: 12px;
  letter-spacing: .18em;
  text-transform: uppercase;
  color: rgba(255,255,255,.75);
  background: rgba(0,0,0,.22);
}
.baTable td{color: rgba(255,255,255,.88); font-weight: 850}

/* form */
.formWrap{margin-top: 14px; display:grid; grid-template-columns: 1fr; gap: 12px}
.formMedia{
  position:relative; overflow:hidden;
  border-radius: var(--r22);
  border: 1px solid rgba(255,255,255,.10);
  height: 220px;
  box-shadow: 0 16px 40px rgba(0,0,0,.30);
}
.formMedia img{width:100%; height:100%; object-fit:cover; opacity:.92}
.formShade{position:absolute; inset:0; background: linear-gradient(180deg, rgba(0,0,0,.10), rgba(0,0,0,.78))}
.formNote{position:absolute; left:12px; bottom:12px; right:12px}
.fnTitle{font-weight: 990; font-size: 16px}
.fnSub{margin-top:4px; color: rgba(255,255,255,.78); font-size: 12.8px}
.form{
  border-radius: var(--r22);
  border: 1px solid rgba(255,255,255,.12);
  background: rgba(255,255,255,.05);
  padding: 14px;
  box-shadow: 0 16px 44px rgba(0,0,0,.25);
}
.row{display:grid; grid-template-columns: 1fr; gap: 10px}
.field{margin-top: 10px}
label{
  display:block;
  font-size: 11px;
  letter-spacing:.22em;
  text-transform:uppercase;
  color: rgba(255,255,255,.70);
  margin-bottom: 8px;
}
input, textarea{
  width:100%;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,.14);
  background: rgba(0,0,0,.35);
  color: rgba(255,255,255,.92);
  padding: 12px;
  outline:none;
  font-size: 14.5px;
}
input::placeholder, textarea::placeholder{color: rgba(255,255,255,.55)}
input:focus, textarea:focus{
  border-color: rgba(240,215,154,.55);
  box-shadow: 0 0 0 6px rgba(240,215,154,.10);
}
.full{width:100%}
.fine{margin-top: 10px; color: rgba(255,255,255,.65); font-size: 12.5px; line-height:1.55}

/* faq */
.faq{margin-top: 14px; display:flex; flex-direction:column; gap:10px}
.faqItem{
  border: 1px solid rgba(255,255,255,.12);
  border-radius: var(--r22);
  background: rgba(255,255,255,.05);
  overflow:hidden;
}
.faqQ{
  width:100%;
  display:flex; justify-content:space-between; align-items:center;
  padding: 14px;
  background: transparent;
  border: 0;
  color: rgba(255,255,255,.92);
  font-weight: 950;
  cursor:pointer;
}
.chev{transition: transform .25s ease}
.chev.open{transform: rotate(180deg)}
.faqA{overflow:hidden}
.faqAText{padding: 0 14px 14px; color: rgba(255,255,255,.72); font-size: 14px; line-height:1.6}

/* mobile sticky CTA */
.mobileBar{
  position:fixed; left:0; right:0; bottom:0;
  padding: 10px 12px 12px;
  z-index:70;
  background: linear-gradient(180deg, rgba(7,6,10,0), rgba(7,6,10,.92));
  backdrop-filter: blur(10px);
}
.mobileBtn{
  display:block;
  text-align:center;
  text-decoration:none;
  font-weight: 990;
  color:#0b0a0e;
  background: linear-gradient(90deg, rgba(240,215,154,.98), rgba(215,179,90,.92));
  padding: 14px;
  border-radius: 999px;
  box-shadow: 0 18px 44px rgba(0,0,0,.42);
}

/* Desktop upgrades */
@media(min-width: 980px){
  .heroInner{grid-template-columns: 1.05fr .95fr; gap: 14px; padding-top: 300px}
  .heroCard{padding: 16px}
  .heroDemo{padding: 16px}
  .h1{font-size: 46px}
  .ctaRow{flex-direction: row}
  .ctaPrimary{max-width: 420px}
  .ctaGhost{max-width: 240px}
  .sellingGrid{grid-template-columns: 1fr 1fr}
  .baCards{display:none}
  .baTableWrap{display:block}
  .formWrap{grid-template-columns: .9fr 1.1fr}
  .row{grid-template-columns: 1fr 1fr}
  .mobileBar{display:none}
}
`;

