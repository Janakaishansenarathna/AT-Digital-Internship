import React from 'react';
import './Button.css'; 

const Button = ({ text, onClick }) => {
  return (
    <button className="btn-consultation" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
