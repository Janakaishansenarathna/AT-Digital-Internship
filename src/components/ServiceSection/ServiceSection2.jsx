import React from "react";
import "./ServiceSection.css";
import ServiceImg from "../../assets/images/service-2.png";

const ServiceSection2 = () => {
  return (
    <section className="section-two-container d-flex flex-column flex-md-row align-items-center position-relative">
      <div className="section-two-image order-1 order-md-1">
        <img src={ServiceImg} alt="web app development" className="img-fluid" />
      </div>
      <div className="section-two-content d-flex flex-column justify-content-start ps-4 order-2 order-md-0">
        <div className="section-two-header order-2 order-md-first">
          <h3 className="section-two-title">Digital Strategy Consulting</h3>
        </div>
        <div className="section-two-description order-3 order-md-first">
          <p className="section-two-text">
          Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
          </p>
        </div>
        <div className="cta-button order-4 order-md-first">
          <button className="btn btn-custom">Get free consultation</button>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection2;
