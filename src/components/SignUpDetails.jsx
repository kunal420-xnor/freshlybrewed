import React from "react";
import { Link } from "react-router-dom";
import  CalendarBlank from "./nested/CalendarBlank";
import  LinkedinLogo  from "./nested/LinkedinLogo";
import "./SignUpDetails.css";

function SignUpDetails ()  {
  return (
    <div className="sign-up-details">
      <div className="div">
        <div className="frame">
          <div className="text-wrapper">Personal Details</div>
          <p className="p">We need a few more details to complete the sign up process</p>
          <div className="text-wrapper-2">Language Preferences</div>
          <div className="text-wrapper-3">Birth Date</div>
          <div className="text-wrapper-4">Education level</div>
          <div className="text-wrapper-5">Preferred Interview mode</div>
          <div className="text-wrapper-6">Target Job/Industry</div>
          <div className="calendar-blank-wrapper">
            <CalendarBlank className="calendar-blank" />
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-7">Sign up</div>
          </div>
          <div className="frame-2">
            <div className="text-wrapper-8">Select</div>
            <img className="vector" alt="Vector" src="vector-1.svg" />
          </div>
          <div className="frame-3">
            <div className="text-wrapper-8">Select</div>
            <img className="vector" alt="Vector" src="image.svg" />
          </div>
          <div className="text-wrapper-9">Interviewee</div>
          <div className="text-wrapper-10">Interviewer</div>
          <div className="text-wrapper-11">Hybrid mode</div>
          <div className="frame-4">
            <div className="text-wrapper-8">Select</div>
            <img className="vector" alt="Vector" src="vector-1-2.svg" />
          </div>
          <p className="by-signing-up-you">
            <span className="span">By signing up, you agree to our </span>
            <span className="text-wrapper-12">Terms and Conditions</span>
          </p>
          <div className="text-wrapper-13">or</div>
          <div className="frame-5">
            <div className="text-wrapper-14">Sign up with LinkedIn</div>
            <LinkedinLogo className="linkedin-logo" />
          </div>
          <div className="overlap-group">
            <div className="ellipse" />
          </div>
          <div className="ellipse-2" />
          <div className="ellipse-3" />
        </div>
        <p className="lean-prep">
          <span className="text-wrapper-15">Lean</span>
          <span className="text-wrapper-16">Prep</span>
        </p>
      </div>
    </div>
  );
};

export default SignUpDetails;
