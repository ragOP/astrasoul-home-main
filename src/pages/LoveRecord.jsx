import React, { useEffect, useMemo, useState } from "react";
import { Heart, Calendar, Filter, Phone, Mail, MapPin, User, Clock, Star } from "lucide-react";
import Navbar from "../components/love/Navbar";
import { BACKEND_URL } from "../utils/backendUrl";

/**
 * LoveRecord (JSX version)
 * - Mobile-first card layout; desktop table
 * - Filters: Today (default), Yesterday, All
 * - Soft rose theme + floating hearts
 */
const LoveRecord = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("today"); // "today" | "yesterday" | "all"
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${BACKEND_URL}/api/lander2/get-orders`);
      const result = await res.json();
      if (result && result.success) {
        setOrders(Array.isArray(result.data) ? result.data : []);
      } else {
        setError("Failed to fetch love orders");
      }
    } catch (err) {
      setError("Error fetching love orders: " + (err?.message || "Unknown error"));
    } finally {
      setLoading(false);
    }
  };

  // ---------- Date helpers ----------
  const fmtDate = (dateString) => {
    if (!dateString) return "-";
    try {
      return new Date(dateString).toLocaleDateString();
    } catch {
      return dateString;
    }
  };

  const fmtDateTime = (dateString) => {
    if (!dateString) return "-";
    try {
      return new Date(dateString).toLocaleString();
    } catch {
      return dateString;
    }
  };

  // Normalize to YYYY-MM-DD for comparison in local time
  const ymd = (d) => {
    const yr = d.getFullYear();
    const m = `${d.getMonth() + 1}`.padStart(2, "0");
    const day = `${d.getDate()}`.padStart(2, "0");
    return `${yr}-${m}-${day}`;
  };

  const todayYMD = ymd(new Date());
  const yesterdayYMD = (() => {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return ymd(d);
  })();

  const orderYMD = (od) => {
    if (!od) return "";
    const d = new Date(od);
    return ymd(d);
  };

  // ---------- Derived counts ----------
  const counts = useMemo(() => {
    let t = 0,
      y = 0,
      a = orders.length;
    for (const o of orders) {
      const d = orderYMD(o?.orderDate);
      if (d === todayYMD) t++;
      if (d === yesterdayYMD) y++;
    }
    return { today: t, yesterday: y, all: a };
  }, [orders, todayYMD, yesterdayYMD]);

  // ---------- Filter + Search ----------
  const filtered = useMemo(() => {
    let list = orders;
    if (filter === "today") list = list.filter((o) => orderYMD(o?.orderDate) === todayYMD);
    if (filter === "yesterday") list = list.filter((o) => orderYMD(o?.orderDate) === yesterdayYMD);

    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter((o) => {
        const name = (o?.fullName || "").toLowerCase();
        const email = (o?.email || "").toLowerCase();
        const phone = (o?.phoneNumber || "").toLowerCase();
        const id = (o?.orderId || "").toLowerCase();
        return name.includes(q) || email.includes(q) || phone.includes(q) || id.includes(q);
      });
    }
    // newest first
    return [...list].sort(
      (a, b) => new Date(b?.orderDate || 0).getTime() - new Date(a?.orderDate || 0).getTime()
    );
  }, [orders, filter, search, todayYMD, yesterdayYMD]);

  // ---------- UI ----------
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-pink-100">
        <Navbar />
        <div className="relative">
          <HeartsBackground />
          <div className="flex items-center justify-center min-h-[70vh] px-6">
            <div className="text-center">
              <div className="h-12 w-12 border-4 border-rose-300 border-t-rose-500 rounded-full animate-spin mx-auto mb-4" />
              <p className="text-rose-700/80 font-medium">Loading your love journey records…</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-pink-100">
        <Navbar />
        <div className="relative">
          <HeartsBackground />
          <div className="flex items-center justify-center min-h-[70vh] px-6">
            <div className="text-center">
              <div className="text-5xl mb-3">💔</div>
              <p className="text-red-600 font-semibold">{error}</p>
              <button
                onClick={fetchOrders}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-rose-600 text-white px-5 py-2.5 hover:bg-rose-700 transition"
              >
                <Filter size={18} />
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-pink-100">
      <Navbar />

      <div className="relative">
        <HeartsBackground />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 pb-16">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-rose-700 font-semibold uppercase tracking-wide text-xs">
                <Heart className="h-4 w-4 fill-rose-600 text-rose-600" />
                Love Lander • Orders
              </div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-rose-900 mt-1">
                Order Records
              </h1>
              <p className="text-rose-700/70 mt-1">
                Review all heartfelt purchases with quick filters for Today, Yesterday, or All.
              </p>
            </div>

            {/* Search */}
            <div className="flex items-center gap-3">
              <div className="relative w-full md:w-80">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by name, email, phone, or ID…"
                  className="w-full rounded-full bg-white/70 backdrop-blur border border-rose-200 px-5 py-2.5 outline-none focus:ring-2 focus:ring-rose-300 text-rose-900 placeholder-rose-400"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-rose-400 text-xs">
                  ⌘K
                </span>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <FilterPill
              active={filter === "today"}
              onClick={() => setFilter("today")}
              label="Today"
              count={counts.today}
            />
            <FilterPill
              active={filter === "yesterday"}
              onClick={() => setFilter("yesterday")}
              label="Yesterday"
              count={counts.yesterday}
            />
            <FilterPill
              active={filter === "all"}
              onClick={() => setFilter("all")}
              label="All"
              count={counts.all}
            />
          </div>

          {/* Empty state */}
          {filtered.length === 0 ? (
            <div className="mt-10 grid place-items-center rounded-2xl border border-rose-200 bg-white/70 p-10 text-center">
              <Heart className="h-10 w-10 text-rose-400 mb-2" />
              <p className="text-rose-900 font-semibold">No orders found</p>
              <p className="text-rose-700/70 text-sm">
                Try switching filters or clearing the search.
              </p>
            </div>
          ) : (
            <>
              {/* Mobile cards */}
              <div className="mt-6 grid gap-4 md:hidden">
                {filtered.map((o) => (
                  <MobileOrderCard key={o?._id} o={o} fmtDate={fmtDate} fmtDateTime={fmtDateTime} />
                ))}
              </div>

              {/* Desktop table */}
              <div className="mt-6 overflow-x-auto rounded-2xl border border-rose-200 bg-white/80 backdrop-blur shadow-sm hidden md:block">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-rose-50/80 text-rose-800">
                    <tr>
                      <Th>Order ID</Th>
                      <Th>Name</Th>
                      <Th>Email</Th>
                      <Th>Phone</Th>
                      <Th>Gender</Th>
                      <Th>DOB</Th>
                      <Th>Place of Birth</Th>
                      <Th>Additional Products</Th>
                      <Th className="text-right">Amount</Th>
                      <Th>Order Date</Th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-rose-100 text-rose-900">
                    {filtered.map((o) => (
                      <tr key={o?._id} className="hover:bg-rose-50/50 transition">
                        <Td className="font-semibold">{o?.orderId || "-"}</Td>
                        <Td>{o?.fullName || "-"}</Td>
                        <Td className="text-rose-700/80">
                          {o?.email ? (
                            <a
                              href={`mailto:${o.email}`}
                              className="underline decoration-dotted underline-offset-4 hover:text-rose-700"
                            >
                              {o.email}
                            </a>
                          ) : (
                            "-"
                          )}
                        </Td>
                        <Td className="text-rose-700/80">
                          {o?.phoneNumber ? (
                            <a
                              href={`tel:${o.phoneNumber}`}
                              className="underline decoration-dotted underline-offset-4 hover:text-rose-700"
                            >
                              {o.phoneNumber}
                            </a>
                          ) : (
                            "-"
                          )}
                        </Td>
                        <Td>{o?.gender || "-"}</Td>
                        <Td>{fmtDate(o?.dob)}</Td>
                        <Td>{o?.placeOfBirth || "-"}</Td>
                        <Td className="max-w-[320px]">
                          {Array.isArray(o?.additionalProducts) && o.additionalProducts.length
                            ? o.additionalProducts.join(", ")
                            : "-"}
                        </Td>
                        <Td className="text-right font-semibold">
                          {o?.amount !== undefined && o?.amount !== null && `${"₹"}${o?.amount}`}
                        </Td>
                        <Td>{fmtDateTime(o?.orderDate)}</Td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoveRecord;

/* --------------------------- Subcomponents --------------------------- */

const Th = ({ children, className = "" }) => (
  <th className={`px-4 py-3 text-xs font-bold uppercase tracking-wider ${className}`}>{children}</th>
);

const Td = ({ children, className = "" }) => (
  <td className={`px-4 py-3 align-top ${className}`}>{children}</td>
);

const FilterPill = ({ active, onClick, label, count = 0 }) => {
  return (
    <button
      onClick={onClick}
      className={[
        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition border",
        active
          ? "bg-rose-600 text-white border-rose-600 shadow-sm"
          : "bg-white/70 text-rose-800 border-rose-200 hover:bg-white",
      ].join(" ")}
    >
      <Calendar size={16} />
      <span className="font-semibold">{label}</span>
      <span
        className={[
          "ml-1 h-5 min-w-5 px-1 rounded-full grid place-items-center text-xs",
          active ? "bg-white/25 text-white" : "bg-rose-100 text-rose-700",
        ].join(" ")}
      >
        {count}
      </span>
    </button>
  );
};

const MobileOrderCard = ({ o, fmtDate, fmtDateTime }) => {
  const products = Array.isArray(o?.additionalProducts) ? o.additionalProducts : [];
  return (
    <div className="rounded-2xl border border-rose-200 bg-white/80 backdrop-blur p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-rose-100 grid place-items-center">
            <Heart className="h-5 w-5 text-rose-600" />
          </div>
          <div>
            <div className="text-sm text-rose-700/70">Order ID</div>
            <div className="font-bold text-rose-900">{o?.orderId || "-"}</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-rose-700/70 flex items-center justify-end gap-1">
            <Clock size={14} /> {fmtDateTime(o?.orderDate)}
          </div>
          <div className="mt-1 inline-flex items-center gap-1 rounded-full bg-rose-50 text-rose-700 text-xs px-2 py-1 border border-rose-200">
            <span className="font-semibold">{`₹${o?.amount ?? "-"}`}</span>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
        <Row icon={<User size={14} />} label="Name" value={o?.fullName || "-"} />
        <Row
          icon={<Mail size={14} />}
          label="Email"
          value={
            o?.email ? (
              <a className="underline decoration-dotted underline-offset-4" href={`mailto:${o.email}`}>
                {o.email}
              </a>
            ) : (
              "-"
            )
          }
        />
        <Row
          icon={<Phone size={14} />}
          label="Phone"
          value={
            o?.phoneNumber ? (
              <a className="underline decoration-dotted underline-offset-4" href={`tel:${o.phoneNumber}`}>
                {o.phoneNumber}
              </a>
            ) : (
              "-"
            )
          }
        />
        <Row icon={<User size={14} />} label="Gender" value={o?.gender || "-"} />
        <Row icon={<Calendar size={14} />} label="DOB" value={fmtDate(o?.dob)} />
        <Row icon={<MapPin size={14} />} label="Birth Place" value={o?.placeOfBirth || "-"} />
      </div>

      <div className="mt-4">
        <div className="text-sm text-rose-700/70 mb-1">Additional Products</div>
        {products?.length ? (
          <div className="flex flex-wrap gap-2">
            {products.map((p, idx) => (
              <span
                key={`${p}-${idx}`}
                className="inline-flex items-center gap-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 px-3 py-1 text-xs"
              >
                <Star size={12} className="text-rose-500" />
                {p}
              </span>
            ))}
          </div>
        ) : (
          <div className="text-rose-900 text-sm">-</div>
        )}
      </div>
    </div>
  );
};

const Row = ({ icon, label, value }) => (
  <div className="flex items-start gap-2">
    <div className="mt-0.5 text-rose-400">{icon}</div>
    <div className="flex-1">
      <div className="text-rose-700/70 text-xs">{label}</div>
      <div className="text-rose-900 font-medium">{value}</div>
    </div>
  </div>
);

/**
 * Decorative animated hearts background (very light)
 */
const HeartsBackground = () => {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="animate-[float_12s_ease-in-out_infinite] absolute -left-10 top-10 opacity-20">
        <Heart className="h-10 w-10 text-rose-300" />
      </div>
      <div className="animate-[float_14s_ease-in-out_infinite] absolute right-8 top-24 opacity-20">
        <Heart className="h-6 w-6 text-rose-300" />
      </div>
      <div className="animate-[float_16s_ease-in-out_infinite] absolute left-1/3 bottom-10 opacity-20">
        <Heart className="h-8 w-8 text-rose-300" />
      </div>
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) }
          50% { transform: translateY(-8px) }
          100% { transform: translateY(0px) }
        }
      `}</style>
    </div>
  );
};
