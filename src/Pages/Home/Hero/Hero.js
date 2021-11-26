import React from "react";
import { Button } from "react-bootstrap";
import video from "../../../videos/hero-bg.mp4";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-bg">
        <video className="background" autoPlay loop muted>
          <source src={video} type="video/mp4"></source>
        </video>
        {/* <div className="overlay"></div> */}
      </div>
      <div className="hero-title">
        <h1 className="caption mb-sm-3">Make Your Tour Amazing With Us</h1>
        <p className="details mb-sm-5">Travel to the any corner of the world, without going around in circles</p>
        <Button className="cta login">View Tours</Button>
      </div>
    </div>
  );
};

export default Hero;
