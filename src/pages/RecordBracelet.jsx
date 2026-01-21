import React, { useEffect, useMemo, useState } from "react";
import { BACKEND_URL } from "../utils/backendUrl";

const Record = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [range, setRange] = useState("today"); // today | yesterday | all
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    applyRangeFilter(range, orders);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [range, orders]);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${BACKEND_URL}/api/lander21/get-orders`);
      const result = await response.json();

      if (result?.success) {
        const data = Array.isArray(result.data) ? result.data : [];
        setOrders(data);
      } else {
        setError("Failed to fetch orders");
      }
    } catch (err) {
      setError("Error fetching orders: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // ====== DATE HELPERS (LOCAL TIME) ======
  const getLocalDayStart = (d) => {
    const x = new Date(d);
    x.setHours(0, 0, 0, 0);
    return x;
  };

  const getLocalDayEnd = (d) => {
    const x = new Date(d);
    x.setHours(23, 59, 59, 999);
    return x;
  };

  const applyRangeFilter = (selectedRange, list) => {
    if (!Array.isArray(list) || list.length === 0) {
      setFilteredOrders([]);
      return;
    }

    if (selectedRange === "all") {
      setFilteredOrders(list);
      return;
    }

    const now = new Date();
    const todayStart = getLocalDayStart(now);
    const todayEnd = getLocalDayEnd(now);

    const getOrderDate = (o) =>
      new Date(o?.orderDate || o?.createdAt || o?.updatedAt || 0);

    if (selectedRange === "today") {
      setFilteredOrders(
        list.filter((o) => {
          const dt = getOrderDate(o);
          return dt >= todayStart && dt <= todayEnd;
        })
      );
      return;
    }

    // yesterday
    const y = new Date(now);
    y.setDate(y.getDate() - 1);
    const yStart = getLocalDayStart(y);
    const yEnd = getLocalDayEnd(y);

    setFilteredOrders(
      list.filter((o) => {
        const dt = getOrderDate(o);
        return dt >= yStart && dt <= yEnd;
      })
    );
  };

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    const d = new Date(dateString);
    if (Number.isNaN(d.getTime())) return "-";
    return d.toLocaleDateString();
  };

  const formatDateTime = (dateTimeString) => {
    if (!dateTimeString) return "-";
    const d = new Date(dateTimeString);
    if (Number.isNaN(d.getTime())) return "-";
    return d.toLocaleString();
  };

  const safeJoin = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) return "-";
    return arr.join(", ");
  };

  // ====== CSV DOWNLOAD ======
  const csvHeaders = useMemo(
    () => [
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
      "Razorpay Order ID",
      "Razorpay Payment ID",
      "Delivery Status Email",
      "Created At",
      "Updated At",
      "Mongo ID",
    ],
    []
  );

  const escapeCsv = (value) => {
    if (value === null || value === undefined) return "";
    const s = String(value);
    if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
    return s;
  };

  const buildCsv = (rows) => {
    const lines = [];
    lines.push(csvHeaders.map(escapeCsv).join(","));

    rows.forEach((o) => {
      const row = [
        o?.orderId || "",
        o?.fullName || "",
        o?.email || "",
        o?.phoneNumber || "",
        o?.gender || "",
        o?.dob ? formatDate(o?.dob) : "",
        o?.placeOfBirth || "",
        o?.prefferedDateAndTime ? formatDateTime(o?.prefferedDateAndTime) : "",
        Array.isArray(o?.additionalProducts)
          ? o.additionalProducts.join(" | ")
          : "",
        o?.amount ?? "",
        o?.orderDate ? formatDateTime(o?.orderDate) : "",
        o?.razorpayOrderId || "",
        o?.razorpayPaymentId || "",
        o?.deliveryStatusEmail === true ? "true" : "false",
        o?.createdAt ? formatDateTime(o?.createdAt) : "",
        o?.updatedAt ? formatDateTime(o?.updatedAt) : "",
        o?._id || "",
      ];
      lines.push(row.map(escapeCsv).join(","));
    });

    return lines.join("\n");
  };

  const downloadCsv = () => {
    const csv = buildCsv(filteredOrders);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const now = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    const filename = `orders_${range}_${now.getFullYear()}-${pad(
      now.getMonth() + 1
    )}-${pad(now.getDate())}_${pad(now.getHours())}${pad(now.getMinutes())}.csv`;

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);
  };

  // ====== STYLES (HARD OVERRIDE LIGHT THEME) ======
  const styles = {
    // This wrapper sits on top of any dark parent and paints a white page.
    page: {
      position: "relative",
      minHeight: "100vh",
      background: "#ffffff",
      color: "#111827",
      isolation: "isolate", // prevents parent blend/filters affecting children
    },
    // Extra safety: a full-screen fixed white layer behind content
    // so even if parent has gradients/dark overlays, this page remains light.
    pageBgOverlay: {
      position: "fixed",
      inset: 0,
      background: "#ffffff",
      zIndex: 0,
      pointerEvents: "none",
    },
    container: {
      position: "relative",
      zIndex: 1,
      padding: 20,
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
    },
    topBar: {
      display: "flex",
      flexWrap: "wrap",
      gap: 10,
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 12,
    },
    leftControls: {
      display: "flex",
      flexWrap: "wrap",
      gap: 10,
      alignItems: "center",
    },
    pills: { display: "flex", gap: 8, flexWrap: "wrap" },
    pill: (active) => ({
      padding: "8px 12px",
      borderRadius: 999,
      border: active ? "1px solid #111827" : "1px solid #d1d5db",
      background: active ? "#111827" : "#ffffff",
      color: active ? "#ffffff" : "#111827",
      cursor: "pointer",
      fontSize: 13,
      fontWeight: 700,
    }),
    btn: {
      padding: "9px 12px",
      borderRadius: 10,
      border: "1px solid #d1d5db",
      background: "#ffffff",
      color: "#111827",
      cursor: "pointer",
      fontSize: 13,
      fontWeight: 700,
    },
    btnPrimary: (disabled) => ({
      padding: "9px 12px",
      borderRadius: 10,
      border: "1px solid #111827",
      background: disabled ? "#9ca3af" : "#111827",
      color: "#ffffff",
      cursor: disabled ? "not-allowed" : "pointer",
      fontSize: 13,
      fontWeight: 800,
      opacity: disabled ? 0.7 : 1,
    }),
    meta: { color: "#6b7280", fontSize: 13 },
    tableWrap: {
      width: "100%",
      overflowX: "auto",
      border: "1px solid #e5e7eb",
      borderRadius: 12,
      background: "#ffffff",
      boxShadow: "0 8px 30px rgba(17,24,39,0.08)",
    },
    table: { width: "100%", borderCollapse: "collapse", minWidth: 1100 },
    th: {
      borderBottom: "1px solid #e5e7eb",
      padding: "10px 10px",
      textAlign: "left",
      background: "#f9fafb",
      color: "#111827",
      position: "sticky",
      top: 0,
      zIndex: 1,
      fontSize: 13,
      whiteSpace: "nowrap",
    },
    td: {
      borderBottom: "1px solid #f1f5f9",
      padding: "10px 10px",
      fontSize: 13,
      verticalAlign: "top",
      whiteSpace: "nowrap",
      color: "#111827",
      background: "#ffffff",
    },
    empty: {
      padding: 18,
      color: "#6b7280",
      fontSize: 14,
      background: "#ffffff",
    },
    errorBox: {
      position: "relative",
      zIndex: 1,
      padding: 20,
      background: "#ffffff",
      color: "#b91c1c",
    },
    loadingBox: {
      position: "relative",
      zIndex: 1,
      padding: 20,
      background: "#ffffff",
      color: "#111827",
    },
  };

  if (loading) {
    return (
      <div style={styles.page}>
        <div style={styles.pageBgOverlay} />
        <div style={styles.loadingBox}>Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.page}>
        <div style={styles.pageBgOverlay} />
        <div style={styles.errorBox}>
          {error}
          <div style={{ marginTop: 10 }}>
            <button style={styles.btn} onClick={fetchOrders} type="button">
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  const csvDisabled = filteredOrders.length === 0;

  return (
    <div style={styles.page}>
      <div style={styles.pageBgOverlay} />
      <div style={styles.container}>
        <div style={styles.topBar}>
          <div>
            <h1 style={{ margin: 0 }}>Order Records</h1>
            <div style={styles.meta}>
              Showing <b>{filteredOrders.length}</b> / {orders.length} orders
            </div>
          </div>

          <div style={styles.leftControls}>
            <div style={styles.pills}>
              <button
                style={styles.pill(range === "today")}
                onClick={() => setRange("today")}
                type="button"
              >
                Today
              </button>
              <button
                style={styles.pill(range === "yesterday")}
                onClick={() => setRange("yesterday")}
                type="button"
              >
                Yesterday
              </button>
              <button
                style={styles.pill(range === "all")}
                onClick={() => setRange("all")}
                type="button"
              >
                All
              </button>
            </div>

            <button style={styles.btn} onClick={fetchOrders} type="button">
              Refresh
            </button>

            <button
              style={styles.btnPrimary(csvDisabled)}
              onClick={downloadCsv}
              type="button"
              disabled={csvDisabled}
              title={csvDisabled ? "No rows to export" : "Download CSV"}
            >
              Download CSV
            </button>
          </div>
        </div>

        <div style={styles.tableWrap}>
          {filteredOrders.length === 0 ? (
            <div style={styles.empty}>
              No orders found for <b>{range}</b>.
            </div>
          ) : (
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
                  <th style={styles.th}>Preferred Date</th>
                  <th style={styles.th}>Additional Products</th>
                  <th style={styles.th}>Amount</th>
                  <th style={styles.th}>Order Date</th>
                  <th style={styles.th}>Razorpay Order</th>
                  <th style={styles.th}>Payment ID</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order._id}>
                    <td style={styles.td}>{order.orderId || "-"}</td>
                    <td style={styles.td}>{order.fullName || "-"}</td>
                    <td style={styles.td}>{order.email || "-"}</td>
                    <td style={styles.td}>{order.phoneNumber || "-"}</td>
                    <td style={styles.td}>{order.gender || "-"}</td>
                    <td style={styles.td}>
                      {order?.dob ? formatDate(order.dob) : "-"}
                    </td>
                    <td style={styles.td}>{order.placeOfBirth || "-"}</td>
                    <td style={styles.td}>
                      {order?.prefferedDateAndTime
                        ? formatDateTime(order.prefferedDateAndTime)
                        : "-"}
                    </td>
                    <td style={styles.td}>
                      {safeJoin(order.additionalProducts)}
                    </td>
                    <td style={styles.td}>₹{order.amount ?? "-"}</td>
                    <td style={styles.td}>
                      {order?.orderDate ? formatDateTime(order.orderDate) : "-"}
                    </td>
                    <td style={styles.td}>{order.razorpayOrderId || "-"}</td>
                    <td style={styles.td}>{order.razorpayPaymentId || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Record;
