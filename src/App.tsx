import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage/landingPage";
import NavLandingPage from "./components/Navbar/NavLandingPage";
import HeroSection from "./components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <NavLandingPage />
      <LandingPage />
      {/* <HeroSection /> */}
    </div>
  );
}

export default App;
