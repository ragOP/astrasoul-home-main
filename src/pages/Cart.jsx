import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { X, Shield, Sparkles, Check, Star } from "lucide-react";
import Navbar from "../components/Navbar";
import TestimonialsSection from "../components/TestimonialsSection";
import ClientTestimonialsSection from "../components/ClientTestimonialsSection";
import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";
import AdditionalProducts from "../components/AdditionalProducts";
import ConsultationForm from "../components/ConsultationForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../utils/backendUrl";

function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Astro Consultation",
      description:
        "1-on-1 personalized consultation with India's top astro-numerology expert",
      price: 999,
      originalPrice: 9999,
      duration: "45 minutes",
      features: [
        "Personalized birth chart analysis",
        "Life path guidance",
        "Career & relationship insights",
        "Remedial solutions",
      ],
      image: "/astro.jpg",
    },
  ]);

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [animateElements, setAnimateElements] = useState(false);
  const [consultationFormData, setConsultationFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    dateOfBirth: "",
    placeOfBirth: "",
    gender: "",
    preferredDateTime: "",
  });

  // Additional products data
  const additionalProducts = [
    {
      id: 2,
      title: "Plan Your Future — Month by Month!",
      description:
        "Wondering what 2025 and 2026 hold for your love life, finances, and growth? This detailed month-by-month astrological forecast gives you the clarity you need to plan ahead with confidence!",
      features: [
        "Key dates for love, wealth & career",
        "Monthly guidance for 24 months",
        "Easy-to-follow format",
        "Based 100% on your birth chart",
      ],
      price: 199,
      originalPrice: 2999,
      icon: "🔮",
      color: {
        from: "from-purple-500/20",
        via: "via-pink-500/20",
        to: "to-indigo-500/20",
      },
    },
    {
      id: 3,
      title: "Discover Your Soul's Purpose",
      description:
        "Your soul carries a journey, lessons, and unresolved karma. This deep-dive report reveals your true life path and what you must overcome to feel fulfilled and in flow.",
      features: [
        "Your core life purpose",
        "Past life karma & spiritual blocks",
        "How to break karmic cycles",
        "Personalized healing path & action steps",
      ],
      price: 199,
      originalPrice: 2499,
      icon: "🪷",
      color: {
        from: "from-emerald-500/20",
        via: "via-teal-500/20",
        to: "to-cyan-500/20",
      },
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    const timer = setTimeout(() => {
      setAnimateElements(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const onProductToggle = (productId) => {
    setSelectedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleConsultationFormSubmit = (formData) => {
    setConsultationFormData(formData);
    console.log("Consultation form submitted:", formData);
    // You can add additional logic here like API calls, validation, etc.
  };

  const removeItem = (itemId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  // Calculate cart totals including selected additional products
  const selectedAdditionalProducts = additionalProducts.filter((product) =>
    selectedProducts.includes(product.id)
  );

  const cartSubtotal = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  const additionalSubtotal = selectedAdditionalProducts.reduce(
    (sum, product) => sum + product.price,
    0
  );
  const subtotal = cartSubtotal + additionalSubtotal;

  const cartDiscount = cartItems.reduce(
    (sum, item) =>
      sum + (item.originalPrice - item.price) * (item.quantity || 1),
    0
  );
  const additionalDiscount = selectedAdditionalProducts.reduce(
    (sum, product) => sum + (product.originalPrice - product.price),
    0
  );
  const discount = cartDiscount + additionalDiscount;

  const total = subtotal;

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js").then(
      (result) => {
        if (result) {
          console.log("Razorpay script loaded successfully");
        }
      }
    );
  }, []);

  const handleCheckout = async () => {
    const additionalProducts = selectedAdditionalProducts.map((product) => product.title);
    // if (
    //   consultationFormData?.name === "" ||
    //   consultationFormData?.email === "" ||
    //   consultationFormData?.phoneNumber === "" ||
    //   consultationFormData?.dateOfBirth === "" ||
    //   consultationFormData?.placeOfBirth === "" ||
    //   consultationFormData?.gender === "" ||
    //   consultationFormData?.preferredDateTime === ""
    // ) {
    //   alert("Please fill all the fields");
    //   return;
    // }
    try {
      setIsCheckingOut(true);

      const res = await axios.post(
        `${BACKEND_URL}/api/payment/razorpay`,
        {
          amount: total,
        }
      );

      const data = res.data.data;

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        amount: total,
        currency: "INR",
        name: "AstraSoul",
        description: "Order Payment",
        order_id: data.orderId,
        handler: async function (response) {
          try {
            await axios.post(`${BACKEND_URL}/api/lander1/create-order`, {
              amount: total,
              razorpayOrderId: response.razorpay_order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
              name: consultationFormData?.name,
              email: consultationFormData?.email,
              phone: consultationFormData?.phoneNumber,
              dateOfBirth: consultationFormData?.dateOfBirth,
              placeOfBirth: consultationFormData?.placeOfBirth,
              gender: consultationFormData?.gender,
              prefferedDateAndTime: consultationFormData?.preferredDateTime,
              orderId: data.orderId,
              additionalProducts: additionalProducts,
            });
            
            navigate("/order-confirmation", {
              state: {
                orderId: data.orderId,
                amount: total,
              },
            });
          } catch (error) {
            console.error("Error creating order:", error);
            alert("Payment successful but order creation failed. Please contact support.");
          }
        },
        prefill: {
          name: consultationFormData?.name,
          email: consultationFormData?.email,
          contact: consultationFormData?.phoneNumber,
        },
        theme: {
          color: "#00BFA5",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.log(error);
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <div className="min-h-screen bg-black selection:bg-red-500/20 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>

        {/* Floating Elements */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            <div
              className={`w-1 h-1 rounded-full ${
                i % 3 === 0
                  ? "bg-amber-400"
                  : i % 3 === 1
                  ? "bg-purple-400"
                  : "bg-white"
              } opacity-60`}
            ></div>
          </div>
        ))}
      </div>

      {/* Cart Content */}
      <section className="relative pt-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-6 sm:mb-8 px-4 mt-4 sm:mt-6 transition-all duration-1000 transform ${
              animateElements
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4">
              <span className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Your Cosmic Cart
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-2xl mx-auto px-2">
              Review your selected services and prepare for your transformative
              journey
            </p>
          </div>

          {cartItems.length === 0 ? (
            /* Empty Cart */
            <div
              className={`max-w-2xl px-4 mx-auto transition-all duration-1000 delay-300 transform ${
                animateElements
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-8 opacity-0 scale-95"
              }`}
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 via-pink-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/20">
                  <div className="text-center space-y-4 sm:space-y-6">
                    <div className="text-4xl sm:text-6xl mb-3 sm:mb-4 animate-bounce">
                      ✨
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Your Cart is Empty
                    </h3>
                    <p className="text-sm sm:text-base text-white/70 px-2">
                      Ready to unlock your cosmic potential? Browse our premium
                      services!
                    </p>
                    <Link
                      to="/home"
                      className="inline-block bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 buy-now-shimmer text-sm sm:text-base"
                    >
                      <span>Explore Services</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Cart Items - Mobile Layout (unchanged) */}
              <div
                className={`lg:hidden grid grid-cols-1 px-4 gap-4 sm:gap-6 transition-all duration-1000 delay-500 transform ${
                  animateElements
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                {/* Cart Items List */}
                <div className="space-y-4 sm:space-y-6">
                  {cartItems.map((item, index) => (
                    <div
                      key={item.id}
                      className={`transition-all duration-700 delay-${
                        index * 200
                      } transform ${
                        animateElements
                          ? "translate-x-0 opacity-100"
                          : "translate-x-8 opacity-0"
                      }`}
                    >
                      <CartItem item={item} onRemove={removeItem} />
                    </div>
                  ))}
                </div>

                {/* Order Summary and Forms - Mobile: Stacked */}
                <div className="space-y-4 sm:space-y-6">
                  {/* Additional Products Section */}
                  <div
                    className={`transition-all duration-700 delay-700 transform ${
                      animateElements
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                  >
                    <AdditionalProducts
                      products={additionalProducts}
                      selectedProducts={selectedProducts}
                      onProductToggle={onProductToggle}
                    />
                  </div>

                  {/* Consultation Form */}
                  <div
                    className={`transition-all duration-700 delay-800 transform ${
                      animateElements
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                  >
                    <ConsultationForm
                      onSubmit={handleConsultationFormSubmit}
                      formData={consultationFormData}
                      setFormData={setConsultationFormData}
                    />
                  </div>

                  {/* Order Summary */}
                  <div
                    className={`transition-all duration-700 delay-900 transform ${
                      animateElements
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                  >
                    <OrderSummary
                      subtotal={subtotal}
                      discount={discount}
                      total={total}
                      isCheckingOut={isCheckingOut}
                      onCheckout={handleCheckout}
                    />
                  </div>
                </div>
              </div>

              {/* Desktop Layout - New Design */}
              <div
                className={`hidden lg:block px-4 transition-all duration-1000 delay-500 transform ${
                  animateElements
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <div className="max-w-6xl mx-auto space-y-8">
                  {/* Main Cart Item */}
                  <div
                    className={`transition-all duration-700 delay-200 transform ${
                      animateElements
                        ? "translate-x-0 opacity-100"
                        : "translate-x-8 opacity-0"
                    }`}
                  >
                    {cartItems.map((item) => (
                      <CartItem
                        key={item.id}
                        item={item}
                        onRemove={removeItem}
                      />
                    ))}
                  </div>

                  {/* Additional Products Section */}
                  <div
                    className={`transition-all duration-700 delay-400 transform ${
                      animateElements
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                  >
                    <AdditionalProducts
                      products={additionalProducts}
                      selectedProducts={selectedProducts}
                      onProductToggle={onProductToggle}
                    />
                  </div>

                  {/* Consultation Form */}
                  <div
                    className={`transition-all duration-700 delay-600 transform ${
                      animateElements
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                  >
                    <ConsultationForm
                      onSubmit={handleConsultationFormSubmit}
                      formData={consultationFormData}
                      setFormData={setConsultationFormData}
                    />
                  </div>

                  {/* Order Summary */}
                  <div
                    className={`transition-all duration-700 delay-800 transform ${
                      animateElements
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                  >
                    <OrderSummary
                      subtotal={subtotal}
                      discount={discount}
                      total={total}
                      isCheckingOut={isCheckingOut}
                      onCheckout={handleCheckout}
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          <TestimonialsSection />

          <ClientTestimonialsSection />
        </div>
      </section>
    </div>
  );
}

export default Cart;
