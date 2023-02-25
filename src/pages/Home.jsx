import React from "react";
import Features from "../components/Features";
import Feedback from "../components/Feedback";
import HeroSection from "../components/HeroSection";
import LogoSection from "../components/LogoSection";
import Navbar from "../components/Navbar";
import VideoSection from "../components/VideoSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LogoSection />
      <VideoSection />
      <Features />
      <Feedback />
    </>
  );
};

export default Home;
