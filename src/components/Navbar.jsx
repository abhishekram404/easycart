import React from "react";
import Icon from "./assets/shopping-cart.svg";
import "./Navbar.css";
import Cart from "./assets/cart-right.svg";
import Profile from "./assets/male.svg";

const Navbar = () => {
  return (
    <div className="nav-cont">
      <div className="title-cont">
        <h2>EasyCart</h2>
        <img src={Icon} alt="icon" className="nav-icon" />
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>
            <img src={Cart} alt="cart" />
            <p className="cart-notif">3</p>
          </li>
          <li>
            <img src={Profile} alt="profile" />
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
