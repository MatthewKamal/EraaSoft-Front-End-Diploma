import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/navbar/navbar.jsx";
import Hero from "./components/heroSection/hero.jsx";
import Features from "./components/ourFeatures/features.jsx";
import Products from "./components/recommendedProducts/products.jsx";
import Footer from "./components/footer/footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <Features />
    <Products />
    <Footer />
  </StrictMode>,
);
