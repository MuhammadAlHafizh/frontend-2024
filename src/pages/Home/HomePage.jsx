import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import GelobalSection from "../../components/GelobalSection/GelobalSection";
import SituationsRegions from "../../components/SituationsRegions/SituationsRegionsContainer";

function HomePage() {

  return (
    <div>
        <Navbar/>
        <Hero />
        <GelobalSection situation="global"/>
        <SituationsRegions />
        <Footer />
    </div>
  );
}

export default HomePage;
