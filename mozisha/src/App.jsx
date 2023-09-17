import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="container mx-auto mb-8 px-8" >
      <Navbar />
      <Hero />
      {/* <About />
      <Footer /> */}
    </div>
  );
};

export default App;
