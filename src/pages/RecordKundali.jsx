import React, { useEffect, useMemo, useRef, useState } from "react";
import { BACKEND_URL } from "../utils/backendUrl";

/**
 * ✅ Record Page (Premium + Simple Structure)
 * - Beautiful UI (no libraries)
 * - Filters: Today / Yesterday / Last 7 Days / This Month / Custom Range
 * - Search + Amount range
 * - Download CSV (current filtered rows)
 * - One main wrapper div
 * - Table is clean: header + rows only
 */

const Record = () => {
  const [orders, setOrders] = useState([]);
  const [rawLoading, setRawLoading] = useState(true);
  const [error, setError] = useState(null);

  // UI / Filters
  const [quick, setQuick] = useState("7d"); // today | yesterday | 7d | month | custom | all
  const [customFrom, setCustomFrom] = useState("");
  const [customTo, setCustomTo] = useState("");
  const [query, setQuery] = useState("");
  const [gender, setGender] = useState("all");
  const [minAmt, setMinAmt] = useState("");
  const [maxAmt, setMaxAmt] = useState("");
  const [sortBy, setSortBy] = useState("orderDate"); // orderDate | amount
  const [sortDir, setSortDir] = useState("desc"); // asc | desc

  const tableWrapRef = useRef(null);

  useEffect(() => {
    fetchOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchOrders = async () => {
    setRawLoading(true);
    setError(null);
    try {
      const response = await fetch(`${BACKEND_URL}/api/lander13/get-orders`);
      const result = await response.json();
      if (result?.success) setOrders(Array.isArray(result.data) ? result.data : []);
      else setError("Failed to fetch orders");
    } catch (err) {
      setError("Error fetching orders: " + (err?.message || "Unknown"));
    } finally {
      setRawLoading(false);
    }
  };

  // ---------- Date helpers (Asia/Kolkata-friendly display; filtering uses local time) ----------
  const pad2 = (n) => String(n).padStart(2, "0");

  const toLocalInputValue = (date) => {
    const d = new Date(date);
    if (Number.isNaN(d.getTime())) return "";
    return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
  };

  const formatDate = (dateString) => {
    const d = new Date(dateString);
    if (Number.isNaN(d.getTime())) return "—";
    return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" });
  };

  const formatDateTime = (dateString) => {
    const d = new Date(dateString);
    if (Number.isNaN(d.getTime())) return "—";
    return d.toLocaleString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0, 0);
  const endOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate(), 23, 59, 59, 999);

  const getRange = () => {
    const now = new Date();
    const todayStart = startOfDay(now);
    const todayEnd = endOfDay(now);

    if (quick === "today") return { from: todayStart, to: todayEnd };
    if (quick === "yesterday") {
      const y = new Date(now);
      y.setDate(y.getDate() - 1);
      return { from: startOfDay(y), to: endOfDay(y) };
    }
    if (quick === "7d") {
      const from = new Date(now);
      from.setDate(from.getDate() - 6);
      return { from: startOfDay(from), to: todayEnd };
    }
    if (quick === "month") {
      const from = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0, 0);
      const to = todayEnd;
      return { from, to };
    }
    if (quick === "custom") {
      const f = customFrom ? startOfDay(new Date(customFrom + "T00:00:00")) : null;
      const t = customTo ? endOfDay(new Date(customTo + "T00:00:00")) : null;
      // if only one side filled, still work
      return { from: f, to: t };
    }
    return { from: null, to: null }; // all
  };

  // ---------- Derived: filtered + sorted ----------
  const filteredOrders = useMemo(() => {
    const q = query.trim().toLowerCase();
    const { from, to } = getRange();

    const min = minAmt === "" ? null : Number(minAmt);
    const max = maxAmt === "" ? null : Number(maxAmt);

    const safeIncludes = (val) => (val ?? "").toString().toLowerCase().includes(q);

    const arr = (orders || [])
      .filter((o) => {
        // Date range filter on orderDate (fallback: createdAt)
        if (from || to) {
          const d = new Date(o?.orderDate || o?.createdAt || o?.prefferedDateAndTime || 0);
          if (Number.isNaN(d.getTime())) return false;
          if (from && d < from) return false;
          if (to && d > to) return false;
        }

        // Search
        if (q) {
          const hit =
            safeIncludes(o?.orderId) ||
            safeIncludes(o?._id) ||
            safeIncludes(o?.fullName) ||
            safeIncludes(o?.email) ||
            safeIncludes(o?.phoneNumber) ||
            safeIncludes(o?.placeOfBirth) ||
            safeIncludes(o?.gender) ||
            (Array.isArray(o?.additionalProducts) &&
              o.additionalProducts.join(", ").toLowerCase().includes(q));
          if (!hit) return false;
        }

        // Gender
        if (gender !== "all") {
          if ((o?.gender || "").toLowerCase() !== gender) return false;
        }

        // Amount range
        const amt = Number(o?.amount ?? 0);
        if (min !== null && Number.isFinite(min) && amt < min) return false;
        if (max !== null && Number.isFinite(max) && amt > max) return false;

        return true;
      })
      .sort((a, b) => {
        const dir = sortDir === "asc" ? 1 : -1;

        if (sortBy === "amount") {
          const aa = Number(a?.amount ?? 0);
          const bb = Number(b?.amount ?? 0);
          return (aa - bb) * dir;
        }

        // default: orderDate
        const da = new Date(a?.orderDate || a?.createdAt || 0).getTime();
        const db = new Date(b?.orderDate || b?.createdAt || 0).getTime();
        return (da - db) * dir;
      });

    return arr;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orders, quick, customFrom, customTo, query, gender, minAmt, maxAmt, sortBy, sortDir]);

  // ---------- Stats ----------
  const stats = useMemo(() => {
    const total = filteredOrders.length;
    const revenue = filteredOrders.reduce((sum, o) => sum + Number(o?.amount ?? 0), 0);
    const avg = total ? Math.round(revenue / total) : 0;
    const last = filteredOrders[0]?.orderDate || filteredOrders[0]?.createdAt || null;
    return {
      total,
      revenue,
      avg,
      last: last ? formatDateTime(last) : "—",
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredOrders]);

  // ---------- CSV Download ----------
  const escapeCsv = (v) => {
    const s = (v ?? "").toString();
    if (s.includes('"') || s.includes(",") || s.includes("\n")) return `"${s.replace(/"/g, '""')}"`;
    return s;
  };

  const downloadCSV = () => {
    const headers = [
      "Order ID",
      "Name",
      "Email",
      "Phone",
      "Gender",
      "DOB",
      "Place of Birth",
      "Preferred Date",
      "Additional Products",
      "Amount",
      "Order Date",
      "Mongo ID",
    ];

    const rows = filteredOrders.map((o) => [
      o?.orderId,
      o?.fullName,
      o?.email,
      o?.phoneNumber,
      o?.gender,
      o?.dob ? formatDate(o.dob) : "",
      o?.placeOfBirth,
      o?.prefferedDateAndTime ? formatDateTime(o.prefferedDateAndTime) : "",
      Array.isArray(o?.additionalProducts) ? o.additionalProducts.join(" | ") : "",
      o?.amount,
      o?.orderDate ? formatDateTime(o.orderDate) : "",
      o?._id,
    ]);

    const csv = [headers, ...rows].map((r) => r.map(escapeCsv).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `orders_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  // ---------- UX Actions ----------
  const resetFilters = () => {
    setQuick("7d");
    setCustomFrom("");
    setCustomTo("");
    setQuery("");
    setGender("all");
    setMinAmt("");
    setMaxAmt("");
    setSortBy("orderDate");
    setSortDir("desc");
  };

  const applyCustomPreset = () => {
    if (!customFrom && !customTo) {
      const today = new Date();
      setCustomFrom(toLocalInputValue(today));
      setCustomTo(toLocalInputValue(today));
    }
    setQuick("custom");
  };

  // ---------- UI ----------
  const styles = {
    page: {
      minHeight: "100vh",
      background:
        "radial-gradient(1200px 600px at 15% 10%, rgba(124,58,237,.12), transparent 60%), radial-gradient(900px 500px at 85% 15%, rgba(14,165,233,.10), transparent 60%), linear-gradient(180deg, #0b1220 0%, #070b14 100%)",
      padding: "22px",
      color: "#e8eefc",
      fontFamily:
        'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
    },
    card: {
      maxWidth: 1250,
      margin: "0 auto",
      borderRadius: 22,
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.10)",
      boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
      overflow: "hidden",
    },
    top: {
      padding: "18px 18px 12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      flexWrap: "wrap",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
      background:
        "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))",
    },
    titleWrap: { display: "flex", alignItems: "center", gap: 10 },
    badge: {
      width: 40,
      height: 40,
      borderRadius: 14,
      background:
        "linear-gradient(135deg, rgba(124,58,237,0.9), rgba(14,165,233,0.85))",
      boxShadow: "0 10px 25px rgba(124,58,237,0.25)",
      display: "grid",
      placeItems: "center",
      fontWeight: 900,
      letterSpacing: "-0.02em",
    },
    h1: { margin: 0, fontSize: 18, fontWeight: 900, letterSpacing: "-0.02em" },
    sub: { margin: "4px 0 0", fontSize: 12, color: "rgba(232,238,252,0.75)" },

    actions: { display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" },
    btn: {
      borderRadius: 14,
      padding: "10px 12px",
      border: "1px solid rgba(255,255,255,0.12)",
      background: "rgba(255,255,255,0.06)",
      color: "#eaf0ff",
      cursor: "pointer",
      fontWeight: 800,
      fontSize: 13,
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      transition: "transform .12s ease, background .12s ease, border-color .12s ease",
    },
    btnPrimary: {
      borderRadius: 14,
      padding: "10px 12px",
      border: "1px solid rgba(124,58,237,0.35)",
      background:
        "linear-gradient(135deg, rgba(124,58,237,0.95), rgba(14,165,233,0.85))",
      color: "#071022",
      cursor: "pointer",
      fontWeight: 900,
      fontSize: 13,
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      transition: "transform .12s ease, filter .12s ease",
      boxShadow: "0 16px 35px rgba(124,58,237,0.18)",
    },

    mid: { padding: 16, display: "grid", gap: 12 },
    statsRow: {
      display: "grid",
      gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
      gap: 10,
    },
    stat: {
      borderRadius: 16,
      padding: 12,
      border: "1px solid rgba(255,255,255,0.10)",
      background: "rgba(0,0,0,0.12)",
    },
    statLabel: { fontSize: 11, color: "rgba(232,238,252,0.72)", marginBottom: 6 },
    statValue: { fontSize: 16, fontWeight: 900, letterSpacing: "-0.02em" },

    filters: {
      borderRadius: 18,
      padding: 12,
      border: "1px solid rgba(255,255,255,0.10)",
      background: "rgba(255,255,255,0.04)",
      display: "grid",
      gap: 10,
    },
    row: {
      display: "grid",
      gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
      gap: 10,
      alignItems: "center",
    },
    pillRow: { display: "flex", gap: 8, flexWrap: "wrap" },
    pill: (active) => ({
      borderRadius: 999,
      padding: "8px 10px",
      border: "1px solid rgba(255,255,255,0.12)",
      background: active
        ? "linear-gradient(135deg, rgba(124,58,237,0.9), rgba(14,165,233,0.75))"
        : "rgba(255,255,255,0.04)",
      color: active ? "#071022" : "#eaf0ff",
      cursor: "pointer",
      fontWeight: 900,
      fontSize: 12,
      transition: "transform .12s ease",
      userSelect: "none",
    }),
    label: { fontSize: 11, color: "rgba(232,238,252,0.72)", marginBottom: 6 },
    input: {
      width: "100%",
      borderRadius: 14,
      padding: "10px 10px",
      border: "1px solid rgba(255,255,255,0.12)",
      background: "rgba(0,0,0,0.12)",
      color: "#eaf0ff",
      outline: "none",
      fontSize: 13,
      fontWeight: 700,
    },
    select: {
      width: "100%",
      borderRadius: 14,
      padding: "10px 10px",
      border: "1px solid rgba(255,255,255,0.12)",
      background: "rgba(0,0,0,0.12)",
      color: "#eaf0ff",
      outline: "none",
      fontSize: 13,
      fontWeight: 800,
    },

    tableWrap: {
      borderRadius: 18,
      border: "1px solid rgba(255,255,255,0.10)",
      overflow: "hidden",
      background: "rgba(0,0,0,0.16)",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      minWidth: 980,
    },
    th: {
      textAlign: "left",
      fontSize: 12,
      padding: "12px 12px",
      color: "rgba(232,238,252,0.80)",
      borderBottom: "1px solid rgba(255,255,255,0.10)",
      background: "rgba(255,255,255,0.06)",
      position: "sticky",
      top: 0,
      zIndex: 2,
      whiteSpace: "nowrap",
    },
    td: {
      fontSize: 13,
      padding: "12px 12px",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      color: "rgba(232,238,252,0.92)",
      verticalAlign: "top",
    },
    trHover: {
      transition: "background .12s ease",
    },
    chip: (tone = "neutral") => {
      const map = {
        neutral: { bg: "rgba(255,255,255,0.08)", bd: "rgba(255,255,255,0.12)", fg: "#eaf0ff" },
        good: { bg: "rgba(34,197,94,0.10)", bd: "rgba(34,197,94,0.25)", fg: "rgba(220,252,231,0.95)" },
        warn: { bg: "rgba(245,158,11,0.10)", bd: "rgba(245,158,11,0.25)", fg: "rgba(255,247,237,0.95)" },
        bad: { bg: "rgba(239,68,68,0.10)", bd: "rgba(239,68,68,0.25)", fg: "rgba(254,226,226,0.95)" },
      };
      const t = map[tone] || map.neutral;
      return {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "6px 10px",
        borderRadius: 999,
        border: `1px solid ${t.bd}`,
        background: t.bg,
        color: t.fg,
        fontWeight: 900,
        fontSize: 12,
        whiteSpace: "nowrap",
      };
    },
    hint: { fontSize: 12, color: "rgba(232,238,252,0.72)" },
    empty: {
      padding: 16,
      color: "rgba(232,238,252,0.72)",
      fontWeight: 800,
    },
    mobileScroll: {
      overflowX: "auto",
      WebkitOverflowScrolling: "touch",
    },
  };

  const amountTone = (amt) => {
    const n = Number(amt ?? 0);
    if (n >= 999) return "good";
    if (n >= 499) return "neutral";
    if (n >= 199) return "warn";
    return "bad";
  };

  const safeJoin = (arr) => (Array.isArray(arr) && arr.length ? arr.join(", ") : "—");

  const rangeText = useMemo(() => {
    const { from, to } = getRange();
    if (quick === "all") return "All time";
    if (quick === "today") return "Today";
    if (quick === "yesterday") return "Yesterday";
    if (quick === "7d") return "Last 7 days";
    if (quick === "month") return "This month";
    if (quick === "custom") {
      const a = from ? formatDate(from) : "—";
      const b = to ? formatDate(to) : "—";
      return `${a} → ${b}`;
    }
    return "—";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quick, customFrom, customTo]);

  // ---------- Render states ----------
  if (rawLoading) {
    return (
      <div style={styles.page}>
        <div style={{ ...styles.card, padding: 18 }}>
          <div style={{ fontWeight: 900, fontSize: 14 }}>Loading orders…</div>
          <div style={{ marginTop: 10, height: 10, borderRadius: 999, background: "rgba(255,255,255,0.10)" }}>
            <div
              style={{
                height: "100%",
                width: "45%",
                borderRadius: 999,
                background: "linear-gradient(90deg, rgba(124,58,237,0.95), rgba(14,165,233,0.9))",
                animation: "recordPulse 1.2s ease-in-out infinite",
              }}
            />
          </div>

          <style>{`
            @keyframes recordPulse { 
              0% { transform: translateX(-10%); opacity: .65; }
              50% { transform: translateX(40%); opacity: 1; }
              100% { transform: translateX(-10%); opacity: .65; }
            }
          `}</style>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.page}>
        <div style={{ ...styles.card, padding: 18 }}>
          <div style={{ fontWeight: 1000, fontSize: 16, marginBottom: 8 }}>Couldn’t load orders</div>
          <div style={{ color: "rgba(254,226,226,0.95)", fontWeight: 800 }}>{error}</div>
          <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button
              style={styles.btnPrimary}
              onClick={fetchOrders}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(.98)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              ↻ Retry
            </button>
            <button
              style={styles.btn}
              onClick={() => {
                setError(null);
                setOrders([]);
              }}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ---------- Main UI ----------
  return (
    <div style={styles.page}>
      {/* ONE MAIN WRAPPER DIV */}
      <div style={styles.card}>
        {/* Top Bar */}
        <div style={styles.top}>
          <div style={styles.titleWrap}>
            <div style={styles.badge}>R</div>
            <div>
              <h1 style={styles.h1}>Order Records</h1>
              <div style={styles.sub}>
                Showing <b>{stats.total}</b> orders • Range: <b>{rangeText}</b>
              </div>
            </div>
          </div>

          <div style={styles.actions}>
            <button
              style={styles.btn}
              onClick={() => {
                if (tableWrapRef.current) tableWrapRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(.98)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              ⇩ Jump to table
            </button>

            <button
              style={styles.btn}
              onClick={resetFilters}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(.98)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              ✕ Reset
            </button>

            <button
              style={styles.btn}
              onClick={fetchOrders}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(.98)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              ↻ Refresh
            </button>

            <button
              style={styles.btnPrimary}
              onClick={downloadCSV}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(.98)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
              disabled={!filteredOrders.length}
              title={!filteredOrders.length ? "No rows to export" : "Export current filtered rows"}
            >
              ⤓ Download CSV
            </button>
          </div>
        </div>

        <div style={styles.mid}>
          {/* Stats */}
          <div style={styles.statsRow}>
            <div style={styles.stat}>
              <div style={styles.statLabel}>Orders</div>
              <div style={styles.statValue}>{stats.total}</div>
            </div>
            <div style={styles.stat}>
              <div style={styles.statLabel}>Revenue (filtered)</div>
              <div style={styles.statValue}>₹{stats.revenue.toLocaleString("en-IN")}</div>
            </div>
            <div style={styles.stat}>
              <div style={styles.statLabel}>Avg Order</div>
              <div style={styles.statValue}>₹{stats.avg.toLocaleString("en-IN")}</div>
            </div>
            <div style={styles.stat}>
              <div style={styles.statLabel}>Latest</div>
              <div style={{ ...styles.statValue, fontSize: 13 }}>{stats.last}</div>
            </div>
          </div>

          {/* Filters */}
          <div style={styles.filters}>
            <div style={{ ...styles.row, gridTemplateColumns: "repeat(12, minmax(0, 1fr))" }}>
              <div style={{ gridColumn: "span 12" }}>
                <div style={styles.label}>Quick filters</div>
                <div style={styles.pillRow}>
                  <div style={styles.pill(quick === "today")} onClick={() => setQuick("today")}>
                    Today
                  </div>
                  <div style={styles.pill(quick === "yesterday")} onClick={() => setQuick("yesterday")}>
                    Yesterday
                  </div>
                  <div style={styles.pill(quick === "7d")} onClick={() => setQuick("7d")}>
                    Last 7 Days
                  </div>
                  <div style={styles.pill(quick === "month")} onClick={() => setQuick("month")}>
                    This Month
                  </div>
                  <div
                    style={styles.pill(quick === "custom")}
                    onClick={() => {
                      applyCustomPreset();
                    }}
                  >
                    Custom
                  </div>
                  <div style={styles.pill(quick === "all")} onClick={() => setQuick("all")}>
                    All Time
                  </div>
                </div>
              </div>

              {/* Search */}
              <div style={{ gridColumn: "span 5" }}>
                <div style={styles.label}>Search</div>
                <input
                  style={styles.input}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="OrderId, name, email, phone, city, product…"
                />
              </div>

              {/* Gender */}
              <div style={{ gridColumn: "span 2" }}>
                <div style={styles.label}>Gender</div>
                <select style={styles.select} value={gender} onChange={(e) => setGender(e.target.value)}>
                  <option value="all">All</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Amount */}
              <div style={{ gridColumn: "span 2" }}>
                <div style={styles.label}>Min ₹</div>
                <input
                  style={styles.input}
                  value={minAmt}
                  onChange={(e) => setMinAmt(e.target.value.replace(/[^\d]/g, ""))}
                  placeholder="0"
                />
              </div>
              <div style={{ gridColumn: "span 2" }}>
                <div style={styles.label}>Max ₹</div>
                <input
                  style={styles.input}
                  value={maxAmt}
                  onChange={(e) => setMaxAmt(e.target.value.replace(/[^\d]/g, ""))}
                  placeholder="99999"
                />
              </div>

              {/* Sort */}
              <div style={{ gridColumn: "span 1" }}>
                <div style={styles.label}>Sort</div>
                <select style={styles.select} value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="orderDate">Date</option>
                  <option value="amount">Amount</option>
                </select>
              </div>

              <div style={{ gridColumn: "span 12", display: "grid", gridTemplateColumns: "repeat(12, minmax(0, 1fr))", gap: 10 }}>
                {/* Custom range only when custom */}
                <div style={{ gridColumn: "span 3", opacity: quick === "custom" ? 1 : 0.45 }}>
                  <div style={styles.label}>From</div>
                  <input
                    style={styles.input}
                    type="date"
                    value={customFrom}
                    onChange={(e) => {
                      setCustomFrom(e.target.value);
                      setQuick("custom");
                    }}
                    disabled={quick !== "custom"}
                  />
                </div>
                <div style={{ gridColumn: "span 3", opacity: quick === "custom" ? 1 : 0.45 }}>
                  <div style={styles.label}>To</div>
                  <input
                    style={styles.input}
                    type="date"
                    value={customTo}
                    onChange={(e) => {
                      setCustomTo(e.target.value);
                      setQuick("custom");
                    }}
                    disabled={quick !== "custom"}
                  />
                </div>

                <div style={{ gridColumn: "span 3" }}>
                  <div style={styles.label}>Direction</div>
                  <select style={styles.select} value={sortDir} onChange={(e) => setSortDir(e.target.value)}>
                    <option value="desc">Newest / Highest</option>
                    <option value="asc">Oldest / Lowest</option>
                  </select>
                </div>

                <div style={{ gridColumn: "span 3", display: "flex", gap: 10, alignItems: "flex-end", justifyContent: "flex-end" }}>
                  <div style={{ ...styles.hint, marginRight: "auto" }}>
                    Tip: filters work on <b>Order Date</b>. Export downloads only filtered rows.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TABLE (header + rows only) */}
          <div ref={tableWrapRef} style={styles.tableWrap}>
            <div style={styles.mobileScroll}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>Order ID</th>
                    <th style={styles.th}>Name</th>
                    <th style={styles.th}>Email</th>
                    <th style={styles.th}>Phone</th>
                    <th style={styles.th}>Gender</th>
                    <th style={styles.th}>DOB</th>
                    <th style={styles.th}>Place of Birth</th>
                    <th style={styles.th}>Preferred</th>
                    <th style={styles.th}>Products</th>
                    <th style={styles.th}>Amount</th>
                    <th style={styles.th}>Order Date</th>
                  </tr>
                </thead>

                <tbody>
                  {!filteredOrders.length ? (
                    <tr>
                      <td style={styles.empty} colSpan={11}>
                        No orders match the current filters.
                      </td>
                    </tr>
                  ) : (
                    filteredOrders.map((order, idx) => {
                      const rowBg = idx % 2 === 0 ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.08)";
                      return (
                        <tr
                          key={order?._id || order?.orderId || idx}
                          style={{ ...styles.trHover, background: rowBg }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(124,58,237,0.08)")}
                          onMouseLeave={(e) => (e.currentTarget.style.background = rowBg)}
                        >
                          <td style={styles.td}>
                            <div style={{ fontWeight: 1000, letterSpacing: "-0.01em" }}>{order?.orderId || "—"}</div>
                            <div style={{ fontSize: 11, color: "rgba(232,238,252,0.62)", marginTop: 3 }}>
                              {order?._id ? `#${order._id.slice(-6)}` : ""}
                            </div>
                          </td>

                          <td style={styles.td}>
                            <div style={{ fontWeight: 950 }}>{order?.fullName || "—"}</div>
                          </td>

                          <td style={styles.td}>
                            <div style={{ fontWeight: 800 }}>{order?.email || "—"}</div>
                          </td>

                          <td style={styles.td}>
                            <div style={{ fontWeight: 900 }}>{order?.phoneNumber || "—"}</div>
                          </td>

                          <td style={styles.td}>
                            <span style={styles.chip(order?.gender ? "neutral" : "warn")}>
                              {order?.gender ? order.gender : "—"}
                            </span>
                          </td>

                          <td style={styles.td}>{order?.dob ? formatDate(order.dob) : "—"}</td>

                          <td style={styles.td}>
                            <div style={{ fontWeight: 850 }}>{order?.placeOfBirth || "—"}</div>
                          </td>

                          <td style={styles.td}>
                            {order?.prefferedDateAndTime ? formatDateTime(order.prefferedDateAndTime) : "—"}
                          </td>

                          <td style={styles.td}>
                            <div style={{ maxWidth: 260, lineHeight: 1.35 }}>
                              {safeJoin(order?.additionalProducts)}
                            </div>
                          </td>

                          <td style={styles.td}>
                            <span style={styles.chip(amountTone(order?.amount))}>₹{Number(order?.amount ?? 0).toLocaleString("en-IN")}</span>
                          </td>

                          <td style={styles.td}>{order?.orderDate ? formatDateTime(order.orderDate) : "—"}</td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <style>{`
          /* Make buttons feel premium on hover */
          button:hover { filter: brightness(1.06); }
          button:active { transform: scale(.99); }
          /* Scrollbar subtle */
          *::-webkit-scrollbar { height: 10px; width: 10px; }
          *::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.16); border-radius: 999px; }
          *::-webkit-scrollbar-track { background: rgba(0,0,0,0.18); border-radius: 999px; }
          @media (max-width: 980px){
            /* Keep the whole page simple on mobile; table scrolls horizontally */
          }
        `}</style>
      </div>
    </div>
  );
};

export default Record;
