import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Home from "./pages/Home";
import Rentals from "./pages/Rentals";
import RentalDetail from "./pages/RentalDetail";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Districts from "./pages/Districts";
import NotFound from "./pages/NotFound";

export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 280);
    window.scrollTo(0, 0);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-paper text-ink dark:bg-ink dark:text-slate-100">
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/arenda" element={<Rentals />} />
          <Route path="/arenda/:id" element={<RentalDetail />} />
          <Route path="/tumanlar" element={<Districts />} />
          <Route path="/xizmatlar" element={<Services />} />
          <Route path="/biz-haqimizda" element={<About />} />
          <Route path="/savol-javob" element={<Faq />} />
          <Route path="/aloqa" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
      <Footer />
    </div>
  );
}
