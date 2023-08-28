import React from "react";
import { Link } from "react-router-dom";
import Videocall from "./nested/VideoIcon";
import "./Home.css";

 function Home() {
  return (
    <div className="landing-page">
      <div className="overlap">
        <div className="overlap-group">
          <p className="lean-prep">
            <span className="text-wrapper">Lean</span>
            <span className="span">Prep</span>
          </p>
          <p className="welcome-to-leanprep">
            <span className="text-wrapper-2">Welcome to </span>
            <span className="text-wrapper">LeanPrep</span>
            <span className="text-wrapper-2">
              ! The ultimate destination for honing your interview skills. Whether you&#39;re a fresh graduate, career
              changer, or seasoned professional, we&#39;ve got you covered. Our{" "}
            </span>
            <span className="text-wrapper">comprehensive library</span>
            <span className="text-wrapper-2"> of mock interview questions and</span>
            <span className="text-wrapper"> expert tips</span>
            <span className="text-wrapper-2"> will help you </span>
            <span className="text-wrapper">ace any job interview. </span>
          </p>
          <div className="div">Already a memeber?</div>
          <p className="don-t-let-nerves-get">
            <span className="text-wrapper-3">
              Don&#39;t let nerves get the best of you – <br />
            </span>
            <span className="text-wrapper-4">practice makes perfect!</span>
          </p>
          <div className="frame">
            <div className="text-wrapper-5"> <Link to= "./SignUp"> Join our Program</Link> </div>
            
          </div>
          <div className="text-wrapper-6"> <Link to= "./SignIn"> Login</Link></div>
          <img className="vector" alt="Vector" src="/images/Vector.png" />
          <img className="blob" alt="Blob" src="/images/blob.png" />
        </div>
        <div className="div-wrapper">
          <div className="text-wrapper-7">Pricing</div>
        </div>
        <div className="frame-2">
          <div className="text-wrapper-7">About us</div>
        </div>
        <div className="frame-3">
          <div className="text-wrapper-8">Demo</div>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
