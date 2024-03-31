import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import About from "./pages/about/About";
import Contact from "./pages/contact/contact";
import NavBar from "./pages/Navbar/Navbar";
import CafeDetails from "./pages/cafe-details/CafeDetails";
import Pickup from "./pages/pickup/Pickup";
import { ToastContainer } from "react-toastify";
import Footer from "./staticComponent/footer/Footer";
import PreLoader from "./staticComponent/preloader/PreLoader";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <PreLoader />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cafes/:id" element={<CafeDetails />} />
        <Route path="/pickup/:id" element={<Pickup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
