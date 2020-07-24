import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import "./SignIn.css";

function SignIn() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  let history = useHistory();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/login", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.userId);
        history.push("/home");
      })
      .catch((error) => {
        toast.error('Invalid username or password');
      });
  };

  return (
    <div className="SignIn">
      <ToastContainer />
      <div className="Item">
        <div className="Content">
          <h1>Sign in</h1>
          <h2>
            "If you know how to read then the whole world opens up to you."
          </h2>

          <form className="form-SignIn">
            <input
              className="formItem"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
            />
            <input
              className="formItem"
              placeholder="Password"
              name="password"
              type="password"
              onChange={handleChange}
              value={data.password}
            />
            <button className="formItem" onClick={handleSubmit}>
              Sign in
            </button>
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
