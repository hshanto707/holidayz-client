import React from "react";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import ToursSection from "./ToursSection/ToursSection";
import Hero from "./Hero/Hero";
import Newsletter from "./Newsletter/Newsletter";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <ToursSection></ToursSection>
      <Banner></Banner>
      <Contact></Contact>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
