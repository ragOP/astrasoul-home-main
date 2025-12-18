import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { X, Shield, Sparkles, Check, Star, Palette, Briefcase, Search, DollarSign } from "lucide-react";
import SignatureNavbar from "../components/signature/SignatureNavbar";
import SignatureTestimonialsSection from "../components/signature/SignatureTestimonialsSection";
import SignatureImageSlider from "../components/signature/SignatureImageSlider";
import SignatureCartItem from "../components/signature/SignatureCartItem";
import SignatureConsultationForm from "../components/signature/SignatureConsultationForm";
import SignatureOrderSummary from "../components/signature/SignatureOrderSummary";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../utils/backendUrl";

function SignatureCart() {
  const navigate = useNavigate();
  const location = useLocation();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "✍ Professional Signature Design",
      description:
        "Personalized professional signature design based on your name and personality",
      price: 589,
      originalPrice: 999,
      duration: "24-48 hours",
      features: [
        "Your Professional Signature Design",
        "Multiple Style Variations",
        "Digital & Print Ready Formats",
        "Lifetime Usage Rights",
      ],
      image: "/astro-hero.jpeg",
    },
  ]);

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

  const handleConsultationFormSubmit = (formData) => {
    setConsultationFormData(formData);
    console.log("Consultation form submitted:", formData);
  };

  const removeItem = (itemId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  // Calculate cart totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const discount = cartItems.reduce(
    (sum, item) =>
      sum + (item.originalPrice - item.price) * (item.quantity || 1),
    0
  );

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
    try {
      setIsCheckingOut(true);

      const res = await axios.post(
        `${BACKEND_URL}/api/payment/razorpay`,
        {
          amount: 2,
          // amount: total,
        }
      );

      const data = res.data.data;

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        // amount: total,
        amount: 2,
        currency: "INR",
        name: "AstraSoul",
        description: "Signature Design Order Payment",
        order_id: data.orderId,
        handler: async function (response) {
          try {
            await axios.post(`${BACKEND_URL}/api/lander4/create-order`, {
              amount: 2,
              // amount: total,
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
              additionalProducts: [],
            });
            
            navigate("/signature-order-confirmation", {
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
          color: "#000000",
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
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 selection:bg-gray-500/20 selection:text-white">
      {/* Navigation */}
      <div className="relative z-50">
        <SignatureNavbar />
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.05),transparent_50%)]"></div>

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
                  ? "bg-gray-400"
                  : i % 3 === 1
                  ? "bg-blue-400"
                  : "bg-black"
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
            className={`text-center mb-4 sm:mb-6 px-4 mt-4 sm:mt-6 transition-all duration-1000 transform ${
              animateElements
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 sm:mb-2">
              <span className="bg-gradient-to-r from-gray-800 via-black to-gray-800 bg-clip-text text-transparent animate-pulse">
                Your Signature Cart
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto px-2">
              Review your selected signature design and prepare for your professional journey
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
                <div className="absolute -inset-1 bg-gradient-to-r from-gray-500/20 via-black/20 to-gray-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-gray-200">
                  <div className="text-center space-y-4 sm:space-y-6">
                    <div className="text-4xl sm:text-6xl mb-3 sm:mb-4 animate-bounce">
                      ✍️
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                      Your Signature Cart is Empty
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 px-2">
                      Ready to create your professional signature? Browse our signature services!
                    </p>
                    <Link
                      to="/signature"
                      className="inline-block bg-gradient-to-r from-gray-800 to-black text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:from-gray-900 hover:to-black transition-all duration-300 transform hover:scale-105 buy-now-shimmer text-sm sm:text-base"
                    >
                      <span>Explore Signature Services</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Cart Items - Mobile Layout */}
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
                      <SignatureCartItem item={item} onRemove={removeItem} showRemoveButton={false} />
                    </div>
                  ))}
                </div>

                {/* Order Summary and Forms - Mobile: Stacked */}
                <div className="space-y-4 sm:space-y-6">
                  {/* Consultation Form */}
                  <div
                    className={`transition-all duration-700 delay-700 transform ${
                      animateElements
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                  >
                    <SignatureConsultationForm
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
                    <SignatureOrderSummary
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
                      <SignatureCartItem
                        key={item.id}
                        item={item}
                        onRemove={removeItem}
                        showRemoveButton={false}
                      />
                    ))}
                  </div>

                  {/* Consultation Form */}
                  <div
                    className={`transition-all duration-700 delay-600 transform ${
                      animateElements
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                  >
                    <SignatureConsultationForm
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
                    <SignatureOrderSummary
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

          <SignatureTestimonialsSection />
        </div>
      </section>
    </div>
  );
}

export default SignatureCart; 