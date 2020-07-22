import React from "react";
import { Link } from "react-router-dom";


import "./SignUp.css";

function SignUp() {
  return (
    <div className="SignUp">
      <div className="Item">

      <div className="Content">
        <h1>Sign up</h1>
        <h2>"If you know how to read then the whole world opens up to you."</h2>
        <form className="form-signup">
          <input className="formItem" placeholder="Full Name" name="full-name" />
          <input className="formItem" placeholder="Email" name="email" />
          <input className="formItem" placeholder="Phone" name="phone" />
          <input className="formItem" placeholder="Password" name="password" />
          <button className="formItem" >Sign up</button>
        </form>
        <p className="policy">
          By signing up, you agree to our 
          <span> Terms</span>
          ,
          <span> Data Policy </span>
          and
          <span> Cookies Policy</span>
          .
        </p>
      </div>
      </div>
      <div className="Item Change-Signin">
        <span>Have an account?</span>
        <Link to='/signin'>Log in</Link>
      </div>
    </div>
  );
}

export default SignUp;