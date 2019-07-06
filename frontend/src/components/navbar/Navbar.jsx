import React from "react";
import { connect } from "react-redux";
import "./navbar.css";
import store from "../../store";

class UnConnectedNavbar extends React.Component {
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

  onClickChooseCategory = e => {
    e.preventDefault();
    let category = e.target.innerText;
    fetch("http://localhost:666/products/items?category=" + category, {
      method: "GET"
    })
      .then(res => res.json())
      .then(body => {
        const items = body;
        store.dispatch({ type: "AddItems", currentItems: items });
        store.dispatch({ type: "SetCategory", currentCategory: category });
      });
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
                  {this.props.categories.map((category, index) => {
                    return (
                      <button
                        key={index}
                        className="navbar__main-menu__container__website__ul__li__dropdown-content__button"
                        onClick={this.onClickChooseCategory}
                      >
                        {category}
                      </button>
                    );
                  })}
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

let mapStatetoProps = state => {
  return { categories: state.categories };
};

let Navbar = connect(mapStatetoProps)(UnConnectedNavbar);

export default Navbar;
