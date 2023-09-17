import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import About from "./About";
import ScrollToTop from "./common/ScrollToTop";
import App from "../App";

const Routers = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route>
            <Route path="/" element={<App />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/hero" element={<Hero />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Routers;
