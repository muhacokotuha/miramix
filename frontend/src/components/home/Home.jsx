import React from "react";
import Product from "../products/Product";
import "./home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.content = [
      {
        imgSrc:
          "http://cdn.shopify.com/s/files/1/1186/7574/products/20170214_093017_1200x1200.jpg?v=1527113379",
        name: "Bits",
        description: "Bits for manicure",
        price: "10"
      },
      {
        imgSrc:
          "http://cdn.shopify.com/s/files/1/1186/7574/products/20170214_093017_1200x1200.jpg?v=1527113379",
        name: "Bits",
        description: "Bits for manicure",
        price: "10"
      },
      {
        imgSrc:
          "http://cdn.shopify.com/s/files/1/1186/7574/products/20170214_093017_1200x1200.jpg?v=1527113379",
        name: "Bits",
        description: "Bits for manicure",
        price: "10"
      },
      {
        imgSrc:
          "http://cdn.shopify.com/s/files/1/1186/7574/products/20170214_093017_1200x1200.jpg?v=1527113379",
        name: "Bits",
        description: "Bits for manicure",
        price: "10"
      }
    ];
    this.category = "bits";
  }

  render() {
    return (
      <div>
        <div className="home__vcontainer">
          <video className="home__vcontainer__video" autoPlay muted loop>
            <source src="home_video.mp4" type="video/mp4" />
          </video>
        </div>
        <Product category={this.category} items={this.content} />
      </div>
    );
  }
}

export default Home;
