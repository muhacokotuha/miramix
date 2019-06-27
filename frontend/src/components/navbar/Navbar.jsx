import React from "react";
import "./navbar.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      websiteMenuCssClass:
        "navbar__main-menu__container navbar__main-menu__container__website",
      slideInMenu: false
    };
  }

  onClickOpenSlideInMenu = e => {
    e.preventDefault();
    this.setState({ slideInMenu: true });
  };
  onClickCloseSlideInMenu = e => {
    e.preventDefault();
    this.setState({ slideInMenu: false });
  };

  render() {
    return (
      <div className="navbar">
        <div className="navbar__main-menu">
          <img className="navbar__main-menu__logo" src="logo.jpg" alt="logo" />
          <div
            className={
              this.state.slideInMenu
                ? this.state.websiteMenuCssClass +
                  " navbar__main-menu__container__website--slide-in"
                : this.state.websiteMenuCssClass
            }
          >
            {this.state.slideInMenu ? (
              <p
                className="cross-icon"
                onClick={this.onClickCloseSlideInMenu}
              />
            ) : (
              ""
            )}
            <ul className="navbar__main-menu__container__ul">
              <li className="navbar__main-menu__container__website__ul__li__dropdown">
                Shop
                <div className="navbar__main-menu__container__website__ul__li__dropdown-content">
                  <a
                    className="navbar__main-menu__container__website__ul__li__dropdown-content__a"
                    href="#"
                  >
                    Bits
                  </a>
                </div>
              </li>
              <li className="navbar__main-menu__container__website__ul__li">
                Delivery
              </li>
              <li className="navbar__main-menu__container__website__ul__li">
                Contact Us
              </li>
            </ul>
          </div>
          <div className="navbar__main-menu__container">
            <ul className="navbar__main-menu__container__ul">
              <li className="navbar__main-menu__container__ul__li search-icon" />
              <li className="navbar__main-menu__container__ul__li cart-icon" />
              <li className="navbar__main-menu__container__ul__li login-icon" />
            </ul>
          </div>
        </div>
        <div className="navbar__hamburger-menu">
          <a
            className="navbar__hamburger-menu__a"
            href="javascript:void(0);"
            onClick={this.onClickOpenSlideInMenu}
          >
            <i className="fa fa-bars" />
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
