import React from "react";
import { connect } from "react-redux";
import Product from "../products/Product";
import store from "../../store.js";
import "./home.css";

class UnconnectedHome extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch("http://localhost:666/products/categories", {
      method: "GET"
    })
      .then(res => res.json())
      .then(body => {
        store.dispatch({ type: "AddCategories", categories: body });
        let category = body[0];
        if (body !== "") {
          return fetch(
            "http://localhost:666/products/items?category=" + category,
            {
              method: "GET"
            }
          );
        }
      })
      .then(res => res.json())
      .then(body => {
        store.dispatch({ type: "AddItems", items: body });
      });
    console.log("DidMount");
  }

  render() {
    console.log("Render");
    let items = this.props.items ? this.props.items : [];
    let categories = this.props.categories ? this.props.categories : "";
    return (
      <div>
        <div className="home__vcontainer">
          <video className="home__vcontainer__video" autoPlay muted loop>
            <source src="home_video.mp4" type="video/mp4" />
          </video>
        </div>
        <Product category={categories} items={items} />
      </div>
    );
  }
}

let mapStateToProps = state => {
  console.log("mapStateToProps");
  return { categories: state.categories, items: state.items };
};

let Home = connect(mapStateToProps)(UnconnectedHome);

export default Home;
