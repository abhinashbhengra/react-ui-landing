import React from "react";
import HeroSection from "../components/HeroSection";
import LogoSection from "../components/LogoSection";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LogoSection />
    </>
  );
};

export default Home;
