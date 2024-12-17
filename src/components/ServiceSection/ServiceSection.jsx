import React from "react";
import "./ServiceSection.css";
import ServiceImg from "../../assets/images/service-1.png";

const ServiceSection = () => {
  return (
    <section className="section-two-container d-flex flex-coloumn flex-md-row align-items-center position-relative">
      <div className="section-two-image">
        <img src={ServiceImg} alt="web app development" className="img-fluid" />
      </div>
      <div className="section-two-content d-flex flex-column justify-content-start ps-4">
        <div className="section-two-header">
          <h3 className="section-two-title">Web & Mobile App Development</h3>
        </div>
        <div className="section-two-description">
          <p className="section-two-text">
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>
        </div>
        <div className="cta-button">
          <button className="btn btn-custom">Get free consultation</button>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
