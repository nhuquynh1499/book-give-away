import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import "./SignUp.css";

function SignUp(props) {
  const [data, setData] = useState({
    email: "",
    name: "",
    phone: "",
    password: "",
    avatar: "https://picsum.photos/400",
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
      .post("http://localhost:8000/api/user", data)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
      history.push("/signin")
  };
  
  return (
    <div className="SignUp">
      <div className="Item">
        <div className="Content">
          <h1>Sign up</h1>
          <h2>
            "If you know how to read then the whole world opens up to you."
          </h2>
          <form className="form-signup">
            <input
              className="formItem"
              placeholder="Full Name"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
            <input
              className="formItem"
              placeholder="Email"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
            <input
              className="formItem"
              placeholder="Phone"
              name="phone"
              value={data.phone}
              onChange={handleChange}
            />
            <input
              className="formItem"
              type="password"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
            <button className="formItem" onClick={handleSubmit}>
              Sign up
            </button>
          </form>
          <p className="policy">
            By signing up, you agree to our
            <span> Terms</span>,<span> Data Policy </span>
            and
            <span> Cookies Policy</span>.
          </p>
        </div>
      </div>
      <div className="Item Change-Signin">
        <span>Have an account?</span>
        <Link to="/signin">Log in</Link>
      </div>
    </div>
  );
}

export default SignUp;
