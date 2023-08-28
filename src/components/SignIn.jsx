// import React from "react";
// import { Link } from "react-router-dom";
import FacebookLogoScreen from './nested/FacebookLogo';
import GoogleLogoScreen from './nested/GoogleLogo';
import LinkedinLogoScreen from './nested/LinkedinLogo';
import './SignIn.css';

function SignIn() {
  return (
    <div className="sign-in">
      <div className="div">
        <div className="frame">
          <div className="text-wrapper">Sign in</div>
          <p className="new-to-leanprep">
            <span className="span">New to LeanPrep?</span>
            <span className="text-wrapper-2">&nbsp;</span>
            <span className="text-wrapper-3">Signup</span>
          </p>
          <div className="text-wrapper-4">Email Address</div>
          <div className="text-wrapper-5">Password</div>
          <div className="frame-2" />
          <div className="frame-3">
            <FacebookLogoScreen className="facebook-logo" />
            <div className="text-wrapper-6">Continue with Facebook</div>
          </div>
          <div className="frame-4">
            <div className="text-wrapper-6">Continue with Google</div>
            <GoogleLogoScreen className="google-logo" />
          </div>
          <div className="frame-5">
            <div className="text-wrapper-6">Continue with LinkedIn</div>
            <LinkedinLogoScreen className="linkedin-logo" />
          </div>
          <div className="frame-6">
            <div className="ellipse" />
            <div className="ellipse-2" />
            <div className="ellipse-3" />
            <div className="ellipse-4" />
            <div className="ellipse-5" />
            <div className="ellipse-6" />
            <div className="ellipse-7" />
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-7">Continue</div>
          </div>
          <p className="by-signing-up-you">
            <span className="text-wrapper-8">
              By signing up, you agree to our{' '}
            </span>
            <span className="text-wrapper-9">Terms and Conditions</span>
          </p>
          <div className="text-wrapper-10">or</div>
        </div>
        <p className="lean-prep">
          <span className="text-wrapper-11">Lean</span>
          <span className="text-wrapper-12">Prep</span>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
