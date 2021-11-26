import React from "react";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import FeaturedProgram from "./FeaturedProgram/FeaturedProgram";
import Hero from "./Hero/Hero";
import "./Home.css";
import Newsletter from "./Newsletter/Newsletter";
import ServicesSection from "./ServicesSection/ServicesSection";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <FeaturedProgram></FeaturedProgram>
      <ServicesSection></ServicesSection>
      <Banner></Banner>
      <Newsletter></Newsletter>
      <Contact></Contact>
    </div>
  );
};

export default Home;
