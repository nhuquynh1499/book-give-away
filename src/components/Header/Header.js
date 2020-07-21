import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

function Header(props) {
  let { pathname } = props.useLocation();
  const [isActive, setIsActive] = useState(pathname);

  const toggle = () => {
    pathname = window.location.pathname;
    setIsActive(pathname);
  };

  return (
    <div className="Header">
      <ul>
        <li 
          className={isActive === "/" ? "active" : null} 
          onClick={toggle}
        >
          <Link to="/">Home</Link>
        </li>
        <li 
          onClick={toggle} 
          className={isActive === "/book" ? "active" : null}
        >
          <Link to="/book">Book</Link>
        </li>
        <li 
          onClick={toggle} 
          className={isActive === "/user" ? "active" : null}
        >
          <Link to="/user">User</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
