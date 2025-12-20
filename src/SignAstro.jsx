import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

/**
 * EASY SOUL LOGO — Signature Landing (Mobile-first)
 * ✅ Full single-file React JSX
 * ✅ Sticky header + scroll progress
 * ✅ Premium dark + glass + gold accents
 * ✅ Sections optimized for conversion (short + clean)
 * ✅ Placeholder images (Unsplash) so you can SEE it
 *
 * Install:
 *   npm i framer-motion
 */

const easeOut = [0.16, 1, 0.3, 1];

const EasySoulSignatureLanding = () => {
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
      hero: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1800&q=80",
      desk: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=80",
      pen: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80",
      paper: "https://images.unsplash.com/photo-1506111583091-bb5a2a90a2fd?auto=format&fit=crop&w=1600&q=80",

      // Work showcase placeholders
      work1: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=1600&q=80",
      work2: "https://images.unsplash.com/photo-1526481280695-3c687fd643ed?auto=format&fit=crop&w=1600&q=80",
      work3: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80",
      work4: "https://images.unsplash.com/photo-1456327102063-fb5054efe647?auto=format&fit=crop&w=1600&q=80",
      work5: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",

      footer: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1600&q=80",
    }),
    []
  );

  // active section detection for header highlight
  useEffect(() => {
    const ids = ["home", "included", "sample", "work", "why", "steps", "reviews", "form"];
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

  const heroParallaxY = useTransform(scrollYProgress, [0, 0.25], [0, 120]);
  const heroGlow = useTransform(scrollYProgress, [0, 0.2], [1, 0.65]);

  // Pricing + urgency (you can wire these dynamically later)
  const pricing = useMemo(
    () => ({
      current: 489,
      original: 4999,
      offLabel: "51% OFF",
      delivery: "24–48 hrs",
      weeklySlots: 7,
      remainingSlots: 2, // "Last 2 slots left"
      clients: "2,500+",
      rating: "4.9/5",
    }),
    []
  );

  return (
    <div ref={pageRef} className="wrap">
      {/* Top progress */}
      <motion.div className="topProgress" style={{ scaleX: progress }} />

      {/* Sticky header */}
      <header className="header">
        <div className="headerInner">
          <a className="brand" href="#home" aria-label="Go to top">
            <span className="brandMark" />
            <span className="brandText">
              <span className="brandName">Easy Soul Logo</span>
              <span className="brandSub">Designer Signature</span>
            </span>
          </a>

          <nav className="nav">
            <a className={active === "included" ? "navLink active" : "navLink"} href="#included">
              Included
            </a>
            <a className={active === "work" ? "navLink active" : "navLink"} href="#work">
              Work
            </a>
            <a className={active === "why" ? "navLink active" : "navLink"} href="#why">
              Why Us
            </a>
            <a className={active === "form" ? "navLink active" : "navLink"} href="#form">
              Start
            </a>
          </nav>

          <a className="headerCta" href="#form">
            Get My Signature
            <span className="headerCtaGlow" />
          </a>
        </div>
      </header>

      {/* Background FX */}
      <Stars />
      <Aurora />

      {/* HERO */}
      <section id="home" className="hero">
        <motion.div className="heroMedia" style={{ y: heroParallaxY }}>
          <img className="heroImg" src={IMAGES.hero} alt="Signature identity background" />
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
              <span className="pill">Handcrafted by Designers</span>
              <span className="pill">3 Unique Options</span>
              <span className="pill">Delivery {pricing.delivery}</span>
            </div>

            <h1 className="h1">
              Your Signature Isn’t Just <span className="accent">Ink</span> — It’s{" "}
              <span className="accent2">Identity</span>.
            </h1>

            <p className="sub">
              Make your name unforgettable with a designer signature crafted just for you —{" "}
              <b>professional, elegant, readable</b>.
            </p>

            <div className="priceRow">
              <div className="priceLeft">
                <div className="now">
                  ₹{pricing.current} <span className="off">{pricing.offLabel}</span>
                </div>
                <div className="was">₹{pricing.original}</div>
              </div>
              <div className="urgency">
                🚨 Only <b>{pricing.weeklySlots}</b> slots/week • <b>Last {pricing.remainingSlots}</b> left
              </div>
            </div>

            <div className="heroActions">
              <a className="cta" href="#form">
                Get My Signature Now
                <span className="ctaShine" />
              </a>
              <a className="cta ghost" href="#work">
                See Work Samples
              </a>
            </div>

            <div className="trustRow">
              <TrustItem title={`${pricing.clients}`} desc="Happy Clients" />
              <TrustItem title={`${pricing.rating}`} desc="Customer Rating" />
              <TrustItem title="24–48 hrs" desc="Delivery Time" />
              <TrustItem title="1-time" desc="No subscription" />
            </div>

            <div className="micro">
              <span className="microDot" />
              <span>Digital delivery • ready for all documents</span>
            </div>
          </motion.div>

          <motion.div
            className="heroSide"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: easeOut }}
          >
            <div className="miniFrame">
              <img src={IMAGES.pen} alt="Signature closeup" />
              <div className="miniShade" />
              <div className="miniText">
                <div className="miniTitle">Signature Package</div>
                <div className="miniSub">3 designs • tutorial • practice PDF</div>
              </div>
            </div>

            <div className="miniGrid">
              <MiniStat k="Style" v="Professional" />
              <MiniStat k="Result" v="Distinct" />
              <MiniStat k="Look" v="Premium" />
              <MiniStat k="Use" v="Everywhere" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* INCLUDED */}
      <section id="included" className="section sectionDark">
        <SectionHead
          eyebrow="What you get"
          title="Your full signature upgrade package"
          desc="Everything you need to use and perfect your new signature."
        />

        <div className="includeGrid">
          <IncludeCard title="3 Designer Signature Options" desc="Pick your favorite style." icon="✍️" />
          <IncludeCard title="Signature Writing Tutorial" desc="Learn the strokes step-by-step." icon="🎓" />
          <IncludeCard title="Practice Sheet (PDF)" desc="Print and practice quickly." icon="📄" />
          <IncludeCard title={`Delivery in ${pricing.delivery}`} desc="Via email/WhatsApp." icon="⚡" />
        </div>

        <div className="centerCta">
          <a className="cta" href="#form">
            Get My Signature Now
            <span className="ctaShine" />
          </a>
        </div>
      </section>

      {/* SAMPLE */}
      <section id="sample" className="section">
        <SectionHead
          eyebrow="Sample"
          title="Preview how it will feel"
          desc="Your final signature will be unique to you — crafted by designers (not AI)."
        />

        <div className="sampleWrap">
          <motion.div
            className="sampleCard"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <div className="sampleTop">
              <div className="sampleBadge">Sample Signature</div>
              <div className="sampleNote">Unique • elegant • readable</div>
            </div>

            <div className="signatureBox" aria-label="Sample signature">
              <div className="sigName">Raghib Najmi</div>
              <div className="sigLine" />
              <div className="sigHint">Your custom signature will be unique to you</div>
            </div>

            <div className="styleRow">
              <div className="styleTitle">Choose Your Style</div>
              <div className="styleChips">
                {[
                  "Indian Male Professional",
                  "Indian Female Professional",
                  "Foreign Male Professional",
                  "Foreign Female Professional",
                  "International Professional",
                ].map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="sampleMedia"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <img src={IMAGES.desk} alt="Notebook desk scene" />
            <div className="sampleMediaShade" />
            <div className="sampleTag">2,500+ professionals trust our signatures</div>
          </motion.div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="section sectionDark">
        <SectionHead
          eyebrow="Our work"
          title="Examples of signature transformations"
          desc="From basic scribbles to confident, professional signatures."
        />

        <div className="workGrid">
          {[
            { t: "Signature Transformation 1", img: IMAGES.work1 },
            { t: "Signature Transformation 2", img: IMAGES.work2 },
            { t: "Signature Transformation 3", img: IMAGES.work3 },
            { t: "Signature Transformation 4", img: IMAGES.work4 },
            { t: "Signature Transformation 5", img: IMAGES.work5 },
          ].map((it, i) => (
            <motion.div
              key={it.t}
              className="workCard"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: easeOut }}
            >
              <div className="workMedia">
                <img src={it.img} alt={it.t} />
                <div className="workShade" />
                <div className="workTitle">{it.t}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="transformStrip">
          <TransformRow left="Basic" right="Bold" desc="From simple scribbles to confident signatures" />
          <TransformRow left="Cluttered" right="Clean" desc="Transform messy handwriting into elegant & readable" />
          <TransformRow left="Forgettable" right="Flawless" desc="Make your signature memorable and distinctive" />
        </div>

        <div className="centerCta">
          <a className="cta" href="#form">
            Get My Signature Now
            <span className="ctaShine" />
          </a>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="section">
        <SectionHead
          eyebrow="Why choose us"
          title="Professional signature design that elevates your brand"
          desc="Designed to look premium on every document — and feel like you."
        />

        <div className="whyGrid">
          <WhyCard icon="🧑‍🎨" title="Expert Designers" desc="Handcrafted by professional designers, not AI-generated." />
          <WhyCard icon="💼" title="Career-Focused" desc="Built to enhance your image across all documents." />
          <WhyCard icon="✨" title="Elegant & Readable" desc="Perfect balance of style and clarity." />
          <WhyCard icon="📲" title="Digital Delivery" desc="Ready to use on all your devices." />
          <WhyCard icon="🤝" title="Personal Attention" desc="One-on-one attention for your vibe & profession." />
        </div>
      </section>

      {/* STEPS */}
      <section id="steps" className="section sectionDark">
        <SectionHead
          eyebrow="Simple process"
          title="Get your custom signature in 4 steps"
          desc="Quick form → designers craft → you receive your full package."
        />

        <div className="steps">
          <Step n="1" title="Place your order & share your name" desc="Simple form with your preferences." />
          <Step n="2" title="We study your vibe & profession" desc="We match a premium style to your identity." />
          <Step n="3" title="We craft 3 designer signatures" desc="Three unique options tailored to you." />
          <Step n="4" title={`Receive within ${pricing.delivery}`} desc="Tutorial + practice PDF included." />
        </div>

        <motion.div
          className="proofBar"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <div className="proofTitle">Limited weekly slots</div>
          <div className="proofText">
            Only <b>{pricing.weeklySlots}</b>/week to maintain quality • <b>Last {pricing.remainingSlots}</b> left
          </div>
          <a className="proofCta" href="#form">
            Secure
          </a>
        </motion.div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="section">
        <SectionHead eyebrow="Testimonials" title="What customers say" desc="Short, real feedback from professionals." />

        <div className="reviewGrid">
          {[
            { q: "From messy to magnetic. My new signature gets compliments every time!", n: "Priya", r: "CA" },
            { q: "Didn’t realize how weak my signature looked until now. Total upgrade!", n: "Rahul", r: "Founder" },
            { q: "Best ₹500 I’ve spent on myself.", n: "Aisha", r: "MBA Grad" },
            { q: "Professional signature that matches my brand perfectly!", n: "Sarah", r: "Marketing Director" },
            { q: "Worth every penny. My confidence has skyrocketed!", n: "Michael", r: "Software Engineer" },
          ].map((t, i) => (
            <motion.div
              key={i}
              className="reviewCard"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: easeOut }}
            >
              <div className="reviewStars">★★★★★</div>
              <div className="reviewQuote">“{t.q}”</div>
              <div className="reviewMeta">
                <div className="reviewName">{t.n}</div>
                <div className="reviewRole">{t.r}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="centerCta">
          <a className="cta" href="#form">
            Get My Signature Now
            <span className="ctaShine" />
          </a>
        </div>
      </section>

      {/* FORM */}
      <section id="form" className="section sectionDark">
        <SectionHead
          eyebrow="Start now"
          title="Get your designer signature"
          desc="Fill details below — we’ll deliver 3 options + tutorial + practice PDF in 24–48 hours."
        />

        <div className="formWrap">
          <motion.div
            className="formSide"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <img src={IMAGES.paper} alt="Paper and pen ambience" />
            <div className="formSideShade" />
            <div className="formSideText">
              <div className="formSideTitle">Private Delivery</div>
              <div className="formSideSub">Email/WhatsApp • no spam</div>
            </div>

            <div className="slotPill">
              <span className="slotDot" />
              <span>
                Last <b>{pricing.remainingSlots}</b> slots left this week
              </span>
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
              // Wire to your backend / payment flow.
              // For now: scroll to top as a placeholder.
              window.scrollTo({ top: 0, behavior: "smooth" });
              // You can replace with toast or redirect.
            }}
          >
            <div className="fieldRow">
              <div className="field">
                <label>Full Name</label>
                <input name="name" placeholder="Your name" required />
              </div>
              <div className="field">
                <label>WhatsApp</label>
                <input name="whatsapp" placeholder="+91…" inputMode="tel" required />
              </div>
            </div>

            <div className="fieldRow">
              <div className="field">
                <label>Email</label>
                <input name="email" placeholder="you@email.com" type="email" required />
              </div>
              <div className="field">
                <label>Profession</label>
                <input name="profession" placeholder="Software Engineer / CA / Founder…" required />
              </div>
            </div>

            <div className="fieldRow">
              <div className="field">
                <label>Preferred Style</label>
                <select name="style" required defaultValue="Indian Male Professional">
                  <option>Indian Male Professional</option>
                  <option>Indian Female Professional</option>
                  <option>Foreign Male Professional</option>
                  <option>Foreign Female Professional</option>
                  <option>International Professional</option>
                </select>
              </div>
              <div className="field">
                <label>Any Notes</label>
                <input name="notes" placeholder="Bold / clean / minimal / classy…" />
              </div>
            </div>

            <button className="cta ctaFull" type="submit">
              Submit & Get My Signature
              <span className="ctaShine" />
            </button>

            <div className="finePrint">
              By submitting, you agree to receive your signature package on email/WhatsApp. One-time payment, no
              subscription.
            </div>
          </motion.form>
        </div>

        <div className="footerNote">
          <div className="footerImg">
            <img src={IMAGES.footer} alt="Premium abstract background" />
            <div className="footerShade" />
          </div>
          <div className="footerText">
            <div className="footerTitle">One signature. Lifetime impact.</div>
            <div className="footerSub">
              Designed to elevate your identity across documents, emails, contracts, and beyond.
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Bottom Bar */}
      <div className="stickyBar" role="region" aria-label="Sticky checkout bar">
        <div className="stickyInner">
          <div className="stickyPrice">
            <div className="stickyNow">₹{pricing.current}</div>
            <div className="stickyWas">₹{pricing.original}</div>
            <div className="stickyOff">{pricing.offLabel}</div>
          </div>

          <div className="stickyMeta">
            <div className="stickyLine">
              <span className="dot" />
              Last <b>{pricing.remainingSlots}</b> slots left
            </div>
            <div className="stickySmall">Delivery: {pricing.delivery}</div>
          </div>

          <a className="stickyCta" href="#form">
            Get My Signature
          </a>
        </div>
      </div>

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

const IncludeCard = ({ icon, title, desc }) => (
  <motion.div
    className="includeCard"
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
    transition={{ duration: 0.75, ease: easeOut }}
  >
    <div className="includeIcon">{icon}</div>
    <div className="includeTitle">{title}</div>
    <div className="includeDesc">{desc}</div>
  </motion.div>
);

const WhyCard = ({ icon, title, desc }) => (
  <motion.div
    className="whyCard"
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
    transition={{ duration: 0.75, ease: easeOut }}
  >
    <div className="whyIcon">{icon}</div>
    <div className="whyTitle">{title}</div>
    <div className="whyDesc">{desc}</div>
  </motion.div>
);

const TransformRow = ({ left, right, desc }) => (
  <motion.div
    className="transformRow"
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.75, ease: easeOut }}
  >
    <div className="transformLR">
      <span className="transformTag">{left}</span>
      <span className="arrow">→</span>
      <span className="transformTag on">{right}</span>
    </div>
    <div className="transformDesc">{desc}</div>
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

  .wrap{position:relative; min-height:100vh; padding-bottom: 84px;} /* space for sticky bar */

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
    text-decoration:none; color:inherit; min-width: 180px;
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
    white-space:nowrap;
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
    filter: saturate(1.08) contrast(1.05);
  }
  .heroOverlay{
    position:absolute; inset:0;
    background:
      radial-gradient(600px 360px at 20% 20%, rgba(184,140,255,.18), transparent 62%),
      radial-gradient(700px 420px at 80% 15%, rgba(109,228,255,.12), transparent 65%),
      linear-gradient(180deg, rgba(0,0,0,.65), rgba(0,0,0,.55), rgba(5,7,18,.95));
  }
  .heroBloom{
    position:absolute; inset:-40px;
    background:
      radial-gradient(260px 160px at 20% 30%, rgba(246,215,125,.18), transparent 70%),
      radial-gradient(240px 160px at 75% 35%, rgba(184,140,255,.18), transparent 70%);
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
    margin-top: 210px;
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

  .priceRow{
    margin-top: 12px;
    display:flex;
    flex-direction: column;
    gap: 8px;
    padding: 12px 12px;
    border-radius: 18px;
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.04);
  }
  .priceLeft{
    display:flex;
    align-items:flex-end;
    gap: 10px;
  }
  .now{
    font-weight: 950;
    font-size: 22px;
    letter-spacing: -.2px;
  }
  .off{
    margin-left: 8px;
    font-size: 12px;
    padding: 6px 8px;
    border-radius: 999px;
    color: rgba(0,0,0,.92);
    background: linear-gradient(90deg, rgba(246,215,125,.95), rgba(109,228,255,.85));
  }
  .was{
    color: rgba(255,255,255,.55);
    text-decoration: line-through;
    font-size: 13px;
    padding-bottom: 3px;
  }
  .urgency{
    color: rgba(255,255,255,.80);
    font-size: 13px;
  }

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

  .heroSide{display:none;}
  .miniFrame{
    position:relative;
    overflow:hidden;
    border-radius: var(--radius);
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.03);
    box-shadow: var(--shadow2);
    height: 210px;
  }
  .miniFrame img{width:100%; height:100%; object-fit:cover; filter:saturate(1.05)}
  .miniShade{
    position:absolute; inset:0;
    background: linear-gradient(180deg, rgba(0,0,0,.15), rgba(0,0,0,.78));
  }
  .miniText{position:absolute; left:12px; bottom:12px;}
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
    .priceRow{flex-direction: row; align-items:center; justify-content:space-between}
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
  .sectionHead{margin-bottom: 18px;}
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

  .centerCta{margin-top: 18px; display:flex; justify-content:center;}

  /* Included */
  .includeGrid{
    margin-top: 14px;
    display:grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }
  .includeCard{
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.04);
    padding: 14px 14px;
  }
  .includeIcon{
    width: 40px; height: 40px;
    border-radius: 16px;
    display:flex; align-items:center; justify-content:center;
    background: rgba(255,255,255,.06);
    border: 1px solid rgba(255,255,255,.10);
    font-size: 18px;
  }
  .includeTitle{margin-top: 10px; font-weight: 950}
  .includeDesc{margin-top: 6px; color: var(--muted); font-size: 14px; line-height:1.55}
  @media(min-width: 980px){
    .includeGrid{grid-template-columns: 1fr 1fr 1fr 1fr}
  }

  /* Sample */
  .sampleWrap{
    margin-top: 14px;
    display:grid;
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .sampleCard{
    border-radius: var(--radius);
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.04);
    padding: 14px 14px;
  }
  .sampleTop{
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap: 10px;
    margin-bottom: 10px;
  }
  .sampleBadge{
    font-weight: 950;
    font-size: 12px;
    padding: 8px 10px;
    border-radius: 999px;
    color: rgba(0,0,0,.92);
    background: linear-gradient(90deg, rgba(246,215,125,.96), rgba(109,228,255,.85));
    white-space:nowrap;
  }
  .sampleNote{color: var(--muted2); font-size: 12px}

  .signatureBox{
    border-radius: 18px;
    border: 1px solid rgba(255,255,255,.10);
    background: linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.03));
    padding: 14px 14px;
  }
  .sigName{
    font-size: 30px;
    letter-spacing: -.2px;
    font-weight: 800;
    line-height: 1;
    background: linear-gradient(90deg, rgba(246,215,125,.95), rgba(184,140,255,.95));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  .sigLine{
    height: 1px;
    margin: 12px 0 10px;
    background: rgba(255,255,255,.12);
  }
  .sigHint{color: var(--muted); font-size: 13px}

  .styleRow{margin-top: 12px}
  .styleTitle{font-weight: 950; margin-bottom: 10px}
  .styleChips{display:flex; flex-wrap:wrap; gap: 8px}
  .chip{
    font-size: 12px;
    color: rgba(255,255,255,.86);
    padding: 7px 10px;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,.12);
    background: rgba(255,255,255,.05);
  }

  .sampleMedia{
    position:relative;
    border-radius: var(--radius);
    border: 1px solid rgba(255,255,255,.10);
    overflow:hidden;
    height: 240px;
  }
  .sampleMedia img{width:100%; height:100%; object-fit:cover}
  .sampleMediaShade{
    position:absolute; inset:0;
    background: linear-gradient(180deg, rgba(0,0,0,.10), rgba(0,0,0,.78));
  }
  .sampleTag{
    position:absolute; left:12px; bottom:12px;
    padding: 8px 10px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 900;
    border: 1px solid rgba(255,255,255,.12);
    background: rgba(255,255,255,.06);
  }
  @media(min-width: 980px){
    .sampleWrap{grid-template-columns: 1.1fr .9fr; gap: 16px}
    .sampleMedia{height: 100%}
  }

  /* Work */
  .workGrid{
    margin-top: 14px;
    display:grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }
  .workCard{border-radius: var(--radius); overflow:hidden;}
  .workMedia{
    position:relative;
    border-radius: var(--radius);
    border: 1px solid rgba(255,255,255,.10);
    overflow:hidden;
    height: 200px;
  }
  .workMedia img{width:100%; height:100%; object-fit:cover; filter:saturate(1.05) contrast(1.02)}
  .workShade{
    position:absolute; inset:0;
    background: linear-gradient(180deg, rgba(0,0,0,.10), rgba(0,0,0,.82));
  }
  .workTitle{
    position:absolute; left:12px; bottom:12px;
    font-weight: 950;
    font-size: 13px;
    padding: 8px 10px;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,.12);
    background: rgba(255,255,255,.06);
  }
  @media(min-width: 980px){
    .workGrid{grid-template-columns: 1fr 1fr; gap: 14px}
    .workMedia{height: 260px}
  }

  .transformStrip{
    margin-top: 14px;
    display:grid;
    gap: 10px;
  }
  .transformRow{
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.04);
    padding: 14px 14px;
  }
  .transformLR{
    display:flex;
    align-items:center;
    gap: 10px;
    font-weight: 950;
  }
  .transformTag{
    padding: 7px 10px;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,.12);
    background: rgba(255,255,255,.05);
    color: rgba(255,255,255,.88);
    font-size: 12px;
  }
  .transformTag.on{
    color: rgba(0,0,0,.92);
    background: linear-gradient(90deg, rgba(246,215,125,.95), rgba(109,228,255,.85));
  }
  .arrow{color: rgba(255,255,255,.55)}
  .transformDesc{
    margin-top: 8px;
    color: var(--muted);
    font-size: 14px;
    line-height:1.55;
  }

  /* Why */
  .whyGrid{
    margin-top: 14px;
    display:grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }
  .whyCard{
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.04);
    padding: 14px 14px;
  }
  .whyIcon{
    width: 40px; height: 40px;
    border-radius: 16px;
    display:flex; align-items:center; justify-content:center;
    background: rgba(255,255,255,.06);
    border: 1px solid rgba(255,255,255,.10);
    font-size: 18px;
  }
  .whyTitle{margin-top: 10px; font-weight: 950}
  .whyDesc{margin-top: 6px; color: var(--muted); font-size: 14px; line-height:1.55}
  @media(min-width: 980px){
    .whyGrid{grid-template-columns: 1fr 1fr 1fr; gap: 14px}
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
    .steps{grid-template-columns: 1fr 1fr 1fr 1fr}
  }

  .proofBar{
    margin-top: 14px;
    display:flex;
    flex-direction: column;
    align-items:flex-start;
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
  @media(min-width: 980px){
    .proofBar{flex-direction: row; align-items:center;}
  }

  /* Reviews */
  .reviewGrid{
    margin-top: 14px;
    display:grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }
  .reviewCard{
    border-radius: 22px;
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.04);
    padding: 14px 14px;
  }
  .reviewStars{color: rgba(246,215,125,.92); letter-spacing: .12em; font-weight: 900}
  .reviewQuote{margin-top: 10px; color: rgba(255,255,255,.86); font-size: 14.5px; line-height:1.6}
  .reviewMeta{margin-top: 12px; display:flex; align-items:baseline; gap: 10px}
  .reviewName{font-weight: 950}
  .reviewRole{color: var(--muted2); font-size: 13px}
  @media(min-width: 980px){
    .reviewGrid{grid-template-columns: 1fr 1fr; gap: 14px}
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
    height: 240px;
  }
  .formSide img{width:100%; height:100%; object-fit:cover}
  .formSideShade{
    position:absolute; inset:0;
    background: linear-gradient(180deg, rgba(0,0,0,.10), rgba(0,0,0,.78));
  }
  .formSideText{position:absolute; left:12px; bottom:12px; right:12px;}
  .formSideTitle{font-weight:950; font-size:16px}
  .formSideSub{margin-top:4px; color: var(--muted); font-size:12.5px}

  .slotPill{
    position:absolute;
    left:12px;
    top:12px;
    display:inline-flex;
    align-items:center;
    gap: 8px;
    padding: 8px 10px;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,.12);
    background: rgba(0,0,0,.25);
    backdrop-filter: blur(10px);
    font-size: 12px;
    color: rgba(255,255,255,.86);
  }
  .slotDot{
    width:8px; height:8px; border-radius:999px;
    background: rgba(246,215,125,.95);
    box-shadow: 0 0 16px rgba(246,215,125,.30);
  }

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
  input, textarea, select{
    width:100%;
    border-radius: 16px;
    border: 1px solid rgba(255,255,255,.12);
    background: rgba(10,14,31,.55);
    color: rgba(255,255,255,.92);
    padding: 12px 12px;
    outline:none;
    font-size: 14.5px;
  }
  select{appearance:none}
  input::placeholder, textarea::placeholder{color: rgba(255,255,255,.46)}
  input:focus, textarea:focus, select:focus{
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
  .footerImg{position:relative; height: 160px;}
  .footerImg img{width:100%; height:100%; object-fit:cover; filter:saturate(1.05)}
  .footerShade{
    position:absolute; inset:0;
    background: linear-gradient(180deg, rgba(0,0,0,.15), rgba(0,0,0,.80));
  }
  .footerText{padding: 14px 14px;}
  .footerTitle{font-weight: 950; font-size: 16px;}
  .footerSub{margin-top: 6px; color: var(--muted); font-size: 13.8px; line-height: 1.55;}
  @media(min-width: 980px){
    .footerNote{grid-template-columns: .7fr 1.3fr}
    .footerImg{height: 100%}
  }

  /* Sticky bottom bar */
  .stickyBar{
    position: fixed;
    left: 0; right: 0; bottom: 0;
    z-index: 60;
    padding: 10px 10px;
    background: linear-gradient(180deg, rgba(7,10,22,.25), rgba(7,10,22,.78));
    backdrop-filter: blur(14px);
    border-top: 1px solid rgba(255,255,255,.08);
  }
  .stickyInner{
    max-width: 1120px;
    margin: 0 auto;
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap: 10px;
  }
  .stickyPrice{
    display:flex;
    align-items:baseline;
    gap: 10px;
    min-width: 160px;
  }
  .stickyNow{
    font-weight: 950;
    font-size: 18px;
  }
  .stickyWas{
    color: rgba(255,255,255,.55);
    text-decoration: line-through;
    font-size: 12px;
  }
  .stickyOff{
    font-size: 12px;
    padding: 6px 8px;
    border-radius: 999px;
    color: rgba(0,0,0,.92);
    background: linear-gradient(90deg, rgba(246,215,125,.95), rgba(109,228,255,.85));
    white-space: nowrap;
  }
  .stickyMeta{
    flex: 1;
    display:flex;
    flex-direction: column;
    gap: 2px;
    color: rgba(255,255,255,.78);
    font-size: 12px;
  }
  .stickyLine{
    display:flex;
    align-items:center;
    gap: 8px;
    white-space: nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
  }
  .dot{
    width:8px; height:8px; border-radius:999px;
    background: rgba(246,215,125,.95);
    box-shadow: 0 0 16px rgba(246,215,125,.30);
    flex: 0 0 auto;
  }
  .stickySmall{color: rgba(255,255,255,.58)}
  .stickyCta{
    text-decoration:none;
    font-weight: 950;
    color: rgba(0,0,0,.92);
    padding: 12px 14px;
    border-radius: 999px;
    background: linear-gradient(90deg, rgba(246,215,125,.95), rgba(184,140,255,.90));
    box-shadow: 0 16px 40px rgba(0,0,0,.36);
    white-space: nowrap;
  }

  @media(min-width: 980px){
    .stickyMeta{flex-direction: row; align-items:center; justify-content:center; gap: 14px;}
    .stickySmall{margin-left: 8px}
  }
`;

export default EasySoulSignatureLanding;
