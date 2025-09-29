import React from "react";
import PortfolioNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";
import "./App.css";
import "./responsive.css";


function App() {
  return (
    <div className="app-container">
      <PortfolioNavbar />
      <Hero />
      <Skills />
      <Achievements />
      <Footer />
    </div>
  );
}

export default App;
