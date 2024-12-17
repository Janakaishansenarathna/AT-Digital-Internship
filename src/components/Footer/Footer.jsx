import React from 'react'; 
import './Footer.css';
import Logo from "../../assets/images/logo.png"

const Footer = () => {
  return (
    <footer className="footer bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 text-start">
            <img src={Logo} alt="Company Logo" className="company-logo mb-4" />
            <p className="footer-description">
              Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve a single objective - your business results.
            </p>
          </div>
          <div className=" col-lg-3 col-md-6 mt-4 mt-lg-0">
            <h4 className="footer-tech-title mb-4">Our Technologies</h4>
            <ul className="list-unstyled">
              <li className='mb-2'>ReactJS</li>
              <li className='mb-2'>Gatsby</li>
              <li className='mb-2'>NextJS</li>
              <li className='mb-2'>NodeJS</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
            <h4 className="footer-services-title mb-4">Our Services</h4>
            <ul className="list-unstyled">
              <li className='mb-2'>Social media Marketing</li>
              <li className='mb-2'>Web & Mobile App Development</li>
              <li className='mb-2'>Data & Analytics</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom mt-4">
          <hr />
          <div className="d-flex justify-content-center align-items-center">
            <a href="/privacy-policy" className="footer-link me-4">Privacy Policy</a>
            <div className="vertical-line"></div>
            <a href="/terms-conditions" className="footer-link ms-4">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
