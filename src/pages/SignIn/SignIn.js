import React from "react";
import { Link } from "react-router-dom";

import "./SignIn.css";

function SignIn() {
  return (
    <div className="SignIn">
      <div className="Item">
        <div className="Content">
          <h1>Sign up</h1>
          <h2>
            "If you know how to read then the whole world opens up to you."
          </h2>
          <form className="form-SignIn">
            <input
              className="formItem"
              placeholder="Email"
              name="email"
            />
            <input
              className="formItem"
              placeholder="Password"
              name="password"
            />
            <button className="formItem">Sign up</button>
          </form>
          <Link to="/forgot-password" className="forgot">
            Forgot Password?
          </Link>
        </div>
      </div>
      <div className="Item Change-Signup">
        <span>Don't have an accout?</span>
        <Link to="/signup">Sign up </Link>
      </div>
    </div>
  );
}

export default SignIn;
