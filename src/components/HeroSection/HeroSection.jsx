import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-container position-relative">
      <div className="hero-background position-absolute w-100 h-100"></div>
      <div className="hero-content position-absolute d-flex flex-column align-items-start p-4">
        <div className="hero-text">
          <h1 className="text-white">
            We crush your competitors, goals, and sales records - without the
            B.S.
          </h1>
        </div>
        <div className="cta-button d-flex align-items-center">
          <button className="btn btn-custom">Get free consultation</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
