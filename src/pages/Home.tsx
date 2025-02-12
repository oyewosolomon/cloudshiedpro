import React from "react";

import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import FeaturesGrid from "../components/FeaturesGrid";
import StatsSection from "../components/StatsSection";
import ServicesSection from "../components/ServicesSection";
import TeamSection from "../components/TeamSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesGrid />
        <StatsSection />
        <ServicesSection />
        <TeamSection />
        <ContactSection />
      <Footer/>
      </main>
    </div>
  );
}
