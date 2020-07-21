import React, { useState } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../contexts/Cart";

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
        <li className={isActive === "/" ? "active" : null} onClick={toggle}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={toggle} className={isActive === "/book" ? "active" : null}>
          <Link to="/book">Book</Link>
        </li>
        <li onClick={toggle} className={isActive === "/user" ? "active" : null}>
          <Link to="/user">User</Link>
        </li>

        <li>
          <CartContext.Consumer>
            {({ cartItems }) => <Link to="/user">Cart ({cartItems.length})</Link>}
          </CartContext.Consumer>
        </li>
      </ul>
    </div>
  );
}

export default Header;
