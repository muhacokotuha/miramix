import React from "react";
import "./navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <img className="navbar__logo" src="logo.jpg" alt="logo" />
        <div className="navbar__container__menu navbar__container__menu__website">
          <ul className="navbar__container__menu__ul">
            <li className="navbar__container__menu__website__ul__li__dropdown">
              Shop
              <div className="navbar__container__menu__website__ul__li__dropdown-content">
                <a
                  className="navbar__container__menu__website__ul__li__dropdown-content__a"
                  href="#"
                >
                  Bits
                </a>
              </div>
            </li>
            <li className="navbar__container__menu__website__ul__li">
              Delivery
            </li>
            <li className="navbar__container__menu__website__ul__li">
              Contact Us
            </li>
          </ul>
        </div>
        <div className="navbar__container__menu">
          <ul className="navbar__container__menu__ul">
            <li className="navbar__container__menu__ul__li search-icon" />
            <li className="navbar__container__menu__ul__li cart-icon" />
            <li className="navbar__container__menu__ul__li login-icon" />
          </ul>
        </div>
        <a
          href="javascript:void(0);"
          className="mobile-menu"
          onclick="myFunction()"
        >
          <i className="fa fa-bars" />
        </a>
      </div>
    );
  }
}

export default Navbar;
