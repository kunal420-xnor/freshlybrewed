import React from "react";
import "./LinkedinLogo.css";

 function LinkedinLogoScreen() {
  return (
    <div className="linkedin-logo-screen">
      <div className="overlap-group">
        <div className="overlap">
          <img className="vector" alt="Vector" src="vector-2.svg" />
          <img className="img" alt="Vector" src="vector-4.svg" />
        </div>
        <img className="vector-2" alt="Vector" src="vector-3.svg" />
        <img className="vector-3" alt="Vector" src="vector-5.svg" />
      </div>
    </div>
  );
}

export default LinkedinLogoScreen;