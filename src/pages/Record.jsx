import React, { useEffect, useMemo, useRef, useState } from "react";
import { BACKEND_URL } from "../utils/backendUrl";

const Record = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filters
  const [dateFilter, setDateFilter] = useState("today"); // default: today
  const [customFrom, setCustomFrom] = useState("");
  const [customTo, setCustomTo] = useState("");

  // Search
  const [search, setSearch] = useState("");

  // Refs for scrolling to top
  const topRef = useRef(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${BACKEND_URL}/api/lander1/get-orders`);
      const result = await response.json();

      if (result.success) {
        // sort latest first (safer)
        const sorted = [...(result.data || [])].sort((a, b) => {
          const da = new Date(a?.orderDate || a?.createdAt || 0).getTime();
          const db = new Date(b?.orderDate || b?.createdAt || 0).getTime();
          return db - da;
        });
        setOrders(sorted);
        setError(null);
      } else {
        setError("Failed to fetch orders");
      }
    } catch (err) {
      setError("Error fetching orders: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleDateString();
  };

  const formatDateTime = (dateTimeString) => {
    if (!dateTimeString) return "-";
    return new Date(dateTimeString).toLocaleString();
  };

  const toLocalDateKey = (d) => {
    // Returns YYYY-MM-DD in local time
    const date = new Date(d);
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  };

  const getTodayKey = () => toLocalDateKey(new Date());
  const getYesterdayKey = () => {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return toLocalDateKey(d);
  };

  const isWithinCustomRange = (orderDate) => {
    if (!customFrom && !customTo) return true;
    const t = new Date(orderDate).getTime();
    if (Number.isNaN(t)) return false;

    // Custom from/to are "YYYY-MM-DD"
    const fromT = customFrom
      ? new Date(`${customFrom}T00:00:00`).getTime()
      : null;
    const toT = customTo ? new Date(`${customTo}T23:59:59`).getTime() : null;

    if (fromT && t < fromT) return false;
    if (toT && t > toT) return false;
    return true;
  };

  const filteredOrders = useMemo(() => {
    const todayKey = getTodayKey();
    const yesterdayKey = getYesterdayKey();

    return orders
      .filter((o) => {
        const od = o?.orderDate || o?.createdAt;
        if (!od) return false;

        if (dateFilter === "all") return true;
        if (dateFilter === "today") return toLocalDateKey(od) === todayKey;
        if (dateFilter === "yesterday")
          return toLocalDateKey(od) === yesterdayKey;
        if (dateFilter === "custom") return isWithinCustomRange(od);

        return true;
      })
      .filter((o) => {
        if (!search.trim()) return true;
        const q = search.trim().toLowerCase();

        const fields = [
          o?.orderId,
          o?.fullName,
          o?.email,
          o?.phoneNumber,
          o?.gender,
          o?.placeOfBirth,
          (o?.additionalProducts || []).join(", "),
          String(o?.amount ?? ""),
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        return fields.includes(q);
      });
  }, [orders, dateFilter, customFrom, customTo, search]);

  // Highlight last 3 orders (latest 3 overall)
  const latest3Ids = useMemo(() => {
    return new Set(orders.slice(0, 3).map((o) => o?._id).filter(Boolean));
  }, [orders]);

  const exportCSV = () => {
    const rows = filteredOrders.map((order) => ({
      orderId: order?.orderId ?? "",
      name: order?.fullName ?? "",
      email: order?.email ?? "",
      phone: order?.phoneNumber ?? "",
      gender: order?.gender ?? "",
      dob: order?.dob ? formatDate(order.dob) : "",
      placeOfBirth: order?.placeOfBirth ?? "",
      preferredDate: order?.prefferedDateAndTime
        ? formatDateTime(order.prefferedDateAndTime)
        : "",
      additionalProducts: Array.isArray(order?.additionalProducts)
        ? order.additionalProducts.join(" | ")
        : "",
      amount: order?.amount ?? "",
      orderDate: order?.orderDate ? formatDateTime(order.orderDate) : "",
    }));

    const headers = Object.keys(
      rows[0] || {
        orderId: "",
        name: "",
        email: "",
        phone: "",
        gender: "",
        dob: "",
        placeOfBirth: "",
        preferredDate: "",
        additionalProducts: "",
        amount: "",
        orderDate: "",
      }
    );

    const escapeCSV = (v) => {
      const s = String(v ?? "");
      if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
      return s;
    };

    const csv =
      headers.join(",") +
      "\n" +
      rows.map((r) => headers.map((h) => escapeCSV(r[h])).join(",")).join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `orders_${dateFilter}_${new Date()
      .toISOString()
      .slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    a.remove();

    URL.revokeObjectURL(url);
  };

  const resetCustom = () => {
    setCustomFrom("");
    setCustomTo("");
  };

  const onChangeFilter = (val) => {
    setDateFilter(val);
    if (val !== "custom") resetCustom();
    // scroll to top for quick viewing
    setTimeout(() => topRef.current?.scrollIntoView({ behavior: "smooth" }), 0);
  };

  if (loading) {
    return (
      <div className="rec-wrap">
        <div className="rec-card rec-loading">Loading...</div>
        <style>{styles}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rec-wrap">
        <div className="rec-card rec-error">{error}</div>
        <style>{styles}</style>
      </div>
    );
  }

  return (
    <div className="rec-wrap">
      <style>{styles}</style>

      {/* Header */}
      <div ref={topRef} className="rec-topbar">
        <div className="rec-title">
          <div className="rec-titleGlow" />
          <h1>Order Records</h1>
          <p>Filter, search, highlight latest orders, and export.</p>
        </div>

        <div className="rec-actions">
          <button className="rec-btn rec-btnGhost" onClick={fetchOrders}>
            Refresh
          </button>
          <button className="rec-btn rec-btnPrimary" onClick={exportCSV}>
            Export CSV
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="rec-controls">
        <div className="rec-tabs">
          <button
            className={`rec-tab ${dateFilter === "today" ? "is-active" : ""}`}
            onClick={() => onChangeFilter("today")}
          >
            Today
          </button>
          <button
            className={`rec-tab ${
              dateFilter === "yesterday" ? "is-active" : ""
            }`}
            onClick={() => onChangeFilter("yesterday")}
          >
            Yesterday
          </button>
          <button
            className={`rec-tab ${dateFilter === "custom" ? "is-active" : ""}`}
            onClick={() => onChangeFilter("custom")}
          >
            Custom
          </button>
          <button
            className={`rec-tab ${dateFilter === "all" ? "is-active" : ""}`}
            onClick={() => onChangeFilter("all")}
          >
            All
          </button>
        </div>

        <div className="rec-search">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rec-input"
            placeholder="Search: name, email, phone, orderId, city, product..."
          />
        </div>

        {dateFilter === "custom" && (
          <div className="rec-custom">
            <div className="rec-field">
              <label>From</label>
              <input
                type="date"
                value={customFrom}
                onChange={(e) => setCustomFrom(e.target.value)}
                className="rec-input"
              />
            </div>
            <div className="rec-field">
              <label>To</label>
              <input
                type="date"
                value={customTo}
                onChange={(e) => setCustomTo(e.target.value)}
                className="rec-input"
              />
            </div>
            <button className="rec-btn rec-btnGhost" onClick={resetCustom}>
              Clear
            </button>
          </div>
        )}
      </div>

      {/* Summary Row */}
      <div className="rec-summary">
        <div className="rec-pill">
          Showing <b>{filteredOrders.length}</b> orders
        </div>
        <div className="rec-pill rec-pillSoft">
          Latest 3 orders are highlighted
        </div>
      </div>

      {/* Table */}
      <div className="rec-tableCard">
        <div className="rec-tableWrap">
          <table className="rec-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>DOB</th>
                <th>Place of Birth</th>
                <th>Preferred Date</th>
                <th>Additional Products</th>
                <th>Amount</th>
                <th>Order Date</th>
              </tr>
            </thead>

            <tbody>
              {filteredOrders.length === 0 ? (
                <tr>
                  <td className="rec-empty" colSpan={11}>
                    No orders found for this filter.
                  </td>
                </tr>
              ) : (
                filteredOrders.map((order) => {
                  const isLatest = latest3Ids.has(order?._id);
                  const products = Array.isArray(order?.additionalProducts)
                    ? order.additionalProducts.join(", ")
                    : "-";

                  return (
                    <tr
                      key={order._id}
                      className={`${isLatest ? "rec-highlight" : ""}`}
                    >
                      <td className="rec-mono">{order.orderId || "-"}</td>
                      <td>{order.fullName || "-"}</td>
                      <td className="rec-wrapText">{order.email || "-"}</td>
                      <td className="rec-mono">{order.phoneNumber || "-"}</td>
                      <td>{order.gender || "-"}</td>
                      <td className="rec-mono">{formatDate(order.dob)}</td>
                      <td>{order.placeOfBirth || "-"}</td>
                      <td className="rec-wrapText">
                        {formatDateTime(order.prefferedDateAndTime)}
                      </td>
                      <td className="rec-wrapText">{products}</td>
                      <td className="rec-mono">
                        ₹{typeof order.amount === "number" ? order.amount : order.amount || "-"}
                      </td>
                      <td className="rec-wrapText">
                        {formatDateTime(order.orderDate)}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer hint */}
      <div className="rec-foot">
        Tip: Use <b>Today</b> / <b>Yesterday</b> quickly, or switch to{" "}
        <b>Custom</b> for date range export.
      </div>
    </div>
  );
};

export default Record;

const styles = `
  :root{
    --bg: #0b1020;
    --card: rgba(255,255,255,0.06);
    --card2: rgba(255,255,255,0.04);
    --stroke: rgba(255,255,255,0.14);
    --stroke2: rgba(168,85,247,0.35);
    --text: rgba(255,255,255,0.92);
    --muted: rgba(255,255,255,0.68);
    --muted2: rgba(255,255,255,0.55);
    --shadow: 0 18px 60px rgba(0,0,0,0.45);
    --r: 18px;
  }

  .rec-wrap{
    min-height: 100vh;
    padding: 22px;
    background:
      radial-gradient(900px 600px at 10% 10%, rgba(168,85,247,0.20), transparent 60%),
      radial-gradient(900px 600px at 90% 80%, rgba(236,72,153,0.18), transparent 55%),
      radial-gradient(900px 600px at 70% 20%, rgba(250,204,21,0.10), transparent 55%),
      linear-gradient(135deg, #060816, #0b1020 40%, #070a16);
    color: var(--text);
    font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  }

  .rec-card{
    background: linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03));
    border: 1px solid var(--stroke);
    border-radius: var(--r);
    box-shadow: var(--shadow);
    padding: 18px;
  }
  .rec-loading{ max-width: 520px; margin: 40px auto; text-align:center; }
  .rec-error{ max-width: 700px; margin: 40px auto; color: #ff8aa0; }

  .rec-topbar{
    display:flex;
    gap: 16px;
    align-items:flex-end;
    justify-content: space-between;
    margin: 6px auto 18px;
    max-width: 1200px;
  }

  .rec-title{
    position: relative;
    padding: 10px 12px;
  }
  .rec-titleGlow{
    position:absolute;
    inset: -6px -10px auto auto;
    width: 220px;
    height: 120px;
    background: radial-gradient(circle at 30% 40%, rgba(168,85,247,0.35), transparent 60%);
    filter: blur(18px);
    pointer-events:none;
    z-index: 0;
  }
  .rec-title h1{
    position: relative;
    z-index: 1;
    margin: 0;
    font-size: 28px;
    letter-spacing: -0.02em;
  }
  .rec-title p{
    position: relative;
    z-index: 1;
    margin: 6px 0 0;
    color: var(--muted);
    font-size: 13px;
  }

  .rec-actions{
    display:flex;
    gap: 10px;
    flex-wrap: wrap;
    align-items:center;
  }

  .rec-btn{
    border-radius: 14px;
    border: 1px solid rgba(255,255,255,0.14);
    padding: 10px 14px;
    color: var(--text);
    background: rgba(255,255,255,0.06);
    cursor: pointer;
    transition: transform .15s ease, border-color .15s ease, background .15s ease, box-shadow .15s ease;
    font-weight: 700;
    letter-spacing: .01em;
    font-size: 13px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.25);
  }
  .rec-btn:hover{
    transform: translateY(-1px);
    border-color: rgba(168,85,247,0.55);
    background: rgba(255,255,255,0.08);
  }
  .rec-btn:active{ transform: translateY(0px) scale(0.99); }

  .rec-btnPrimary{
    border: 1px solid rgba(168,85,247,0.45);
    background: linear-gradient(90deg, rgba(168,85,247,0.9), rgba(236,72,153,0.85), rgba(250,204,21,0.80));
  }
  .rec-btnPrimary:hover{
    box-shadow: 0 18px 60px rgba(168,85,247,0.25);
    border-color: rgba(250,204,21,0.35);
  }
  .rec-btnGhost{
    background: rgba(255,255,255,0.05);
  }

  .rec-controls{
    max-width: 1200px;
    margin: 0 auto 12px;
    background: linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03));
    border: 1px solid var(--stroke);
    border-radius: var(--r);
    padding: 14px;
    box-shadow: var(--shadow);
  }

  .rec-tabs{
    display:flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 12px;
  }

  .rec-tab{
    border: 1px solid rgba(255,255,255,0.14);
    background: rgba(255,255,255,0.05);
    color: var(--muted);
    padding: 9px 12px;
    border-radius: 999px;
    cursor:pointer;
    font-weight: 800;
    font-size: 12px;
    transition: transform .15s ease, background .15s ease, border-color .15s ease, color .15s ease;
  }
  .rec-tab:hover{ transform: translateY(-1px); border-color: rgba(168,85,247,0.45); color: var(--text); }
  .rec-tab.is-active{
    color: rgba(255,255,255,0.95);
    border-color: rgba(168,85,247,0.55);
    background: linear-gradient(90deg, rgba(168,85,247,0.35), rgba(236,72,153,0.25), rgba(250,204,21,0.18));
  }

  .rec-search{
    display:flex;
    gap: 10px;
    align-items:center;
    margin-bottom: 10px;
  }

  .rec-custom{
    display:flex;
    gap: 10px;
    align-items:end;
    flex-wrap: wrap;
  }

  .rec-field{
    display:flex;
    flex-direction: column;
    gap: 6px;
  }
  .rec-field label{
    color: var(--muted2);
    font-size: 12px;
    font-weight: 700;
  }

  .rec-input{
    width: 100%;
    min-width: 220px;
    border-radius: 14px;
    border: 1px solid rgba(168,85,247,0.28);
    background: rgba(255,255,255,0.05);
    color: rgba(255,255,255,0.92);
    padding: 10px 12px;
    outline: none;
    transition: border-color .15s ease, background .15s ease;
    font-size: 13px;
  }
  .rec-input::placeholder{ color: rgba(255,255,255,0.45); }
  .rec-input:focus{
    border-color: rgba(168,85,247,0.6);
    background: rgba(255,255,255,0.07);
  }

  .rec-summary{
    max-width: 1200px;
    margin: 12px auto 12px;
    display:flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  .rec-pill{
    padding: 9px 12px;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,0.14);
    background: rgba(255,255,255,0.05);
    color: var(--muted);
    font-size: 12px;
    font-weight: 700;
  }
  .rec-pill b{ color: rgba(255,255,255,0.95); }
  .rec-pillSoft{
    border-color: rgba(250,204,21,0.22);
    background: rgba(250,204,21,0.08);
  }

  .rec-tableCard{
    max-width: 1200px;
    margin: 0 auto;
    background: linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03));
    border: 1px solid var(--stroke);
    border-radius: 22px;
    box-shadow: var(--shadow);
    overflow: hidden;
  }
  .rec-tableWrap{
    width: 100%;
    overflow: auto;
  }

  .rec-table{
    width: 100%;
    border-collapse: collapse;
    min-width: 1100px;
  }

  .rec-table thead th{
    position: sticky;
    top: 0;
    z-index: 5;
    background: rgba(9, 12, 25, 0.85);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255,255,255,0.12);
    text-align: left;
    padding: 12px 12px;
    font-size: 12px;
    letter-spacing: .06em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.72);
    white-space: nowrap;
  }

  .rec-table tbody td{
    padding: 12px 12px;
    border-bottom: 1px solid rgba(255,255,255,0.08);
    color: rgba(255,255,255,0.86);
    font-size: 13px;
    vertical-align: top;
  }
  .rec-table tbody tr:hover td{
    background: rgba(255,255,255,0.04);
  }

  .rec-mono{
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: 12.5px;
  }
  .rec-wrapText{
    white-space: normal;
    word-break: break-word;
    max-width: 260px;
  }

  .rec-highlight td{
    background: linear-gradient(
      90deg,
      rgba(168,85,247,0.20),
      rgba(236,72,153,0.12),
      rgba(250,204,21,0.08)
    );
    border-bottom-color: rgba(168,85,247,0.20);
  }

  .rec-empty{
    padding: 26px 14px !important;
    text-align: center;
    color: rgba(255,255,255,0.65) !important;
  }

  .rec-foot{
    max-width: 1200px;
    margin: 14px auto 0;
    color: rgba(255,255,255,0.55);
    font-size: 12px;
  }

  @media (max-width: 920px){
    .rec-topbar{
      flex-direction: column;
      align-items: flex-start;
    }
    .rec-actions{
      width: 100%;
    }
    .rec-input{ min-width: 0; width: 100%; }
  }
`;
