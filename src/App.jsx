import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";




import Cart from "./pages/Cart";
import "./App.css";
import OrderConfirmation from "./pages/OrderConfirmation";
import Record from "./pages/Record";
import LoveSection from "./pages/LoveSection";
import NewLove from "./pages/NewLove";
import LoveCart from "./pages/LoveCart";
import LoveRecord from "./pages/LoveRecord";
import LoveOrderConfirmation from "./pages/LoveOrderConfirmation";
import Signature from "./pages/Signature";
import SignatureCart from "./pages/SignatureCart";
import SignatureRecord from "./pages/SignatureRecord";
import SignatureOrderConfirmation from "./pages/SignatureOrderConfirmation";
import FortuneReport from "./pages/FortuneReport";

import Privacy from "./pages/Privacy";
import Raghib from "./pages/Raghib";
import RaghibCart from "./pages/RaghibCart";
import Kundali from "./Kundali";
import Kundali2 from "./Kundali2";
import New from "./New";
import SignAstro from "./SignAstro";
import Minimal from "./Minimal";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
           <Route path="/consultation" element={<Home />} />
     <Route path="/kundali" element={<Kundali />} />
             <Route path="/kundali2" element={<Kundali2 />} />
               <Route path="/signastro" element={<SignAstro />} />
          <Route path="/consultation" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart-2" element={<LoveCart />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route
            path="/order-confirmation-2"
            element={<LoveOrderConfirmation />}
          />
          <Route path="/record" element={<Record />} />
          <Route path="/raghib" element={<Raghib />} />
          <Route path="/raghib-cart" element={<RaghibCart />} />

          <Route path="/love-record" element={<LoveRecord />} />
          {/* <Route path="/love" element={<LoveSection />} /> */}
          <Route path="/love" element={<NewLove />} />
          <Route path="/signature" element={<Signature />} />
          <Route path="/signature-cart" element={<SignatureCart />} />
          <Route path="/signature-record" element={<SignatureRecord />} />
            <Route path="/minimal" element={<Minimal />} />
          <Route
            path="/signature-order-confirmation"
            element={<SignatureOrderConfirmation />}
          />
          <Route path="/fortune-report" element={<FortuneReport />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
