import React from "react";
import { Link } from "react-router-dom";
import LinkedinLogoScreen from "./nested/LinkedinLogo";
import "./SignUp.css";

function SignUp () {
  return (
    <div className="sign-up">
      <div className="div">
        <div className="frame">
          <div className="text-wrapper">Sign Up</div>
          <p className="already-a-member">
            <span className="span">Already a member? </span>
            <span className="text-wrapper-2">Login</span>
          </p>
          <div className="text-wrapper-3">First Name</div>
          <div className="text-wrapper-4">Email Address</div>
          <div className="text-wrapper-5">Set Password</div>
          <div className="text-wrapper-6">Current Job Role</div>
          <div className="text-wrapper-7">Last Name</div>
          <div className="frame-2" />
          <div className="frame-3" />
          <div className="frame-4">
            <div className="ellipse" />
            <div className="ellipse-2" />
            <div className="ellipse-3" />
            <div className="ellipse-4" />
            <div className="ellipse-5" />
            <div className="ellipse-6" />
            <div className="ellipse-7" />
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-8"> <Link to= "./SignUpDetails">Next</Link></div>
          </div>
          <div className="frame-5">
            <div className="text-wrapper-9">Product Manager</div>
            <img className="vector" alt="Vector" src="vector-1.svg" />
          </div>
          <div className="frame-6" />
          <p className="by-signing-up-you">
            <span className="text-wrapper-10">By signing up, you agree to our </span>
            <span className="text-wrapper-11">Terms and Conditions</span>
          </p>
          <div className="text-wrapper-12">or</div>
          <div className="frame-7">
            <div className="text-wrapper-13">Sign up with LinkedIn</div>
            <LinkedinLogoScreen className="linkedin-logo" />
          </div>
        </div>
        <p className="lean-prep">
          <span className="text-wrapper-14">Lean</span>
          <span className="text-wrapper-15">Prep</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
