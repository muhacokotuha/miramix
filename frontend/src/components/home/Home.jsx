import React from "react";
import { connect } from "react-redux";
import Product from "../products/Product";
import store from "../../store.js";
import "./home.css";

class UnConnectedHome extends React.Component {
  componentDidMount() {
    fetch("http://localhost:666/products/categories", {
      method: "GET"
    })
      .then(res => res.json())
      .then(body => {
        let categories = body;
        store.dispatch({ type: "AddCategories", categories: categories });
        store.dispatch({ type: "SetCategory", currentCategory: categories[0] });
        if (categories[0] !== "") {
          return fetch(
            "http://localhost:666/products/items?category=" + categories[0],
            {
              method: "GET"
            }
          );
        }
      })
      .then(res => res.json())
      .then(body => {
        const items = body;
        store.dispatch({ type: "AddItems", currentItems: items });
      });
  }

  render() {
    return (
      <div>
        <div className="home__vcontainer">
          <video className="home__vcontainer__video" autoPlay muted loop>
            <source src="home_video.mp4" type="video/mp4" />
          </video>
        </div>
        <Product category={this.props.category} items={this.props.items} />
      </div>
    );
  }
}

let mapStateToProps = state => {
  return { category: state.currentCategory, items: state.currentItems };
};

let Home = connect(mapStateToProps)(UnConnectedHome);

export default Home;
