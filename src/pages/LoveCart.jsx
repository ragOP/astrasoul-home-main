import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { X, Shield, Sparkles, Check, Star, Palette, Briefcase, Search, DollarSign } from "lucide-react";
import Navbar from "../components/love/Navbar";
import TestimonialsSection from "../components/love/TestimonialsSection";
import WhyReportMattersSection from "../components/love/WhyReportMattersSection";
import LoveCartItem from "../components/love/LoveCartItem";
import LoveOrderSummary from "../components/love/LoveOrderSummary";
import LoveAdditionalProducts from "../components/love/LoveAdditionalProducts";
import LoveConsultationForm from "../components/love/LoveConsultationForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import WhyPeopleLoveSection from "../components/love/WhyPeopleLoveSection";
import { BACKEND_URL } from "../utils/backendUrl";

function LoveCart() {
  const navigate = useNavigate();
  const location = useLocation();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Love & Relationship Report",
      description:
        "Personalized Love & Relationship Report based on Vedic astrology & numerology",
      price: 499,
      originalPrice: 999,
      duration: "48-72 hours",
      features: [
        "Your Love & Relationship Horoscope",
        "Breakup or Patch-Up Possibility",
        "Timeline for Marriage & True Love",
        "Hidden blocks & remedies for love issues",
      ],
      image: "/astro-hero.jpeg",
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

  // Additional products data for Love theme
  const additionalProducts = [
    {
      id: 2,
      title: "Soulmate Sketch",
      description:
        "What if you could see the face of your future partner? Our intuitive artists create a psychic sketch based on your stars and energy. Delivered digitally, straight to your WhatsApp in 48 hours.",
      features: [
        "🔮 Psychic drawing of your soulmate",
        "📧 Delivered in 48 hours via WhatsApp & Email",
        "💌 Based on astrology, numerology & intuitive energy mapping",
      ],
      price: 199,
      originalPrice: 999,
      icon: "🎨",
      color: {
        from: "from-pink-500/20",
        via: "via-rose-500/20",
        to: "to-purple-500/20",
      },
    },
    {
      id: 3,
      title: "Wealth Report",
      description:
        "Confused about your money, career, or success path? Your birth chart holds powerful insights into what's blocking your abundance. This report helps align your actions with your true financial destiny.",
      features: [
        "💰 Personalized astrology + numerology-based wealth blueprint",
        "🔍 Career timing, money blocks & success windows",
        "📄 Delivered as a digital report within 48 hours",
      ],
      price: 199,
      originalPrice: 999,
      icon: "💰",
      color: {
        from: "from-amber-500/20",
        via: "via-yellow-500/20",
        to: "to-orange-500/20",
      },
    },
  ];

  useEffect(() => {
    // Scroll to top when component mounts or when navigating from other pages
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    // Check if we're coming from a CTA button (with scrollToTop state)
    if (location.state?.scrollToTop) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }

    const timer = setTimeout(() => {
      setAnimateElements(true);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [location.state]);

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
        description: "Love Report Order Payment",
        order_id: data.orderId,
        handler: async function (response) {
          try {
            await axios.post(`${BACKEND_URL}/api/lander2/create-order`, {
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
              preferredDateTime: consultationFormData?.preferredDateTime,
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
          color: "#ec4899",
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
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-pink-100 selection:bg-pink-500/20 selection:text-white">
      {/* Navigation */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-pink-100"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent_50%)]"></div>

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
              className={`w-1 h-1 rounded-full ${i % 3 === 0
                  ? "bg-rose-400"
                  : i % 3 === 1
                    ? "bg-pink-400"
                    : "bg-purple-400"
                } opacity-60`}
            ></div>
          </div>
        ))}
      </div>

      {/* Cart Content */}
      <section className="relative pt-2 z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-4 sm:mb-6 px-4 mt-4 sm:mt-6 transition-all duration-1000 transform ${animateElements
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
              }`}
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 sm:mb-2">
              <span className="bg-gradient-to-r from-rose-600 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                Your Love Cart
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto px-2">
              Review your selected love services and prepare for your romantic journey
            </p>
          </div>

          {cartItems.length === 0 ? (
            /* Empty Cart */
            <div
              className={`max-w-2xl px-4 mx-auto transition-all duration-1000 delay-300 transform ${animateElements
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-8 opacity-0 scale-95"
                }`}
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-rose-500/20 via-pink-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-rose-200">
                  <div className="text-center space-y-4 sm:space-y-6">
                    <div className="text-4xl sm:text-6xl mb-3 sm:mb-4 animate-bounce">
                      💖
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                      Your Love Cart is Empty
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 px-2">
                      Ready to discover your love destiny? Browse our romantic services!
                    </p>
                    <Link
                      to="/new-love"
                      className="inline-block bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 buy-now-shimmer text-sm sm:text-base"
                    >
                      <span>Explore Love Services</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Cart Items - Mobile Layout */}
              <div
                className={`lg:hidden grid grid-cols-1 px-4 gap-4 sm:gap-6 transition-all duration-1000 delay-500 transform ${animateElements
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                  }`}
              >
                {/* Cart Items List */}
                <div className="space-y-4 sm:space-y-6">
                  {cartItems.map((item, index) => (
                    <div
                      key={item.id}
                      className={`transition-all duration-700 delay-${index * 200
                        } transform ${animateElements
                          ? "translate-x-0 opacity-100"
                          : "translate-x-8 opacity-0"
                        }`}
                    >
                      <LoveCartItem item={item} onRemove={removeItem} showRemoveButton={false} />
                    </div>
                  ))}
                </div>

                {/* Order Summary and Forms - Mobile: Stacked */}
                <div className="space-y-4 sm:space-y-6">
                  {/* Additional Products Section */}
                  <div
                    className={`transition-all duration-700 delay-700 transform ${animateElements
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                      }`}
                  >
                    <LoveAdditionalProducts
                      products={additionalProducts}
                      selectedProducts={selectedProducts}
                      onProductToggle={onProductToggle}
                    />
                  </div>

                  {/* Consultation Form */}
                  <div
                    className={`transition-all duration-700 delay-800 transform ${animateElements
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                      }`}
                  >
                    <LoveConsultationForm
                      onSubmit={handleConsultationFormSubmit}
                      formData={consultationFormData}
                      setFormData={setConsultationFormData}
                    />
                  </div>

                  {/* Order Summary */}
                  <div
                    className={`transition-all duration-700 delay-900 transform ${animateElements
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                      }`}
                  >
                    <LoveOrderSummary
                      subtotal={subtotal}
                      discount={discount}
                      total={total}
                      isCheckingOut={isCheckingOut}
                      onCheckout={handleCheckout}
                    />
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div
                className={`hidden lg:block px-4 transition-all duration-1000 delay-500 transform ${animateElements
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                  }`}
              >
                <div className="max-w-6xl mx-auto space-y-8">
                  {/* Main Cart Item */}
                  <div
                    className={`transition-all duration-700 delay-200 transform ${animateElements
                        ? "translate-x-0 opacity-100"
                        : "translate-x-8 opacity-0"
                      }`}
                  >
                    {cartItems.map((item) => (
                      <LoveCartItem
                        key={item.id}
                        item={item}
                        onRemove={removeItem}
                        showRemoveButton={false}
                      />
                    ))}
                  </div>

                  {/* Additional Products Section */}
                  <div
                    className={`transition-all duration-700 delay-400 transform ${animateElements
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                      }`}
                  >
                    <LoveAdditionalProducts
                      products={additionalProducts}
                      selectedProducts={selectedProducts}
                      onProductToggle={onProductToggle}
                    />
                  </div>

                  {/* Consultation Form */}
                  <div
                    className={`transition-all duration-700 delay-600 transform ${animateElements
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                      }`}
                  >
                    <LoveConsultationForm
                      onSubmit={handleConsultationFormSubmit}
                      formData={consultationFormData}
                      setFormData={setConsultationFormData}
                    />
                  </div>

                  {/* Order Summary */}
                  <div
                    className={`transition-all duration-700 delay-800 transform ${animateElements
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                      }`}
                  >
                    <LoveOrderSummary
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

          <WhyPeopleLoveSection />
        </div>
      </section>
    </div>
  );
}

export default LoveCart; 