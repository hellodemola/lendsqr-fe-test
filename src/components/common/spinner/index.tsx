import React from "react";
import "./Spinner.scss"; // Import the CSS for the spinner

const Spinner: React.FC = () => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;
