import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import { UpdateFollower } from "react-mouse-follower";
import Products from "./components/Products/Products";
import Banner from "./components/Banner/Banner";
import BannerText from "./components/Banner/BannerText";
import Blogs from "./components/Blogs/Blogs";
import FAQ from "./components/FAQ/FAQ";
import AllProducts from "./components/AllProducts";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      {" "}
      {/* Agrega Router aquí */}
      <main className="overflow-x-hidden">
        <Routes>
          {" "}
          {/* Usa Routes para definir las rutas */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Products />
                <Banner />
                <BannerText />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route path="/all-products" element={<AllProducts />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
