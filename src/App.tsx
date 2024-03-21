import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage/landingPage";
import NavLandingPage from "./components/Navbar/NavLandingPage";

function App() {
  return (
    <div className="App">
      <NavLandingPage />
      <LandingPage />
    </div>
  );
}

export default App;
