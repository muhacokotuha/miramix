import React from "react";
import Product from "../products/Product";
import "./home.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="home__vcontainer">
          <video className="home__vcontainer__video" autoPlay muted loop>
            <source src="home_video.mp4" type="video/mp4" />
          </video>
        </div>
        <Product />
      </div>
    );
  }
}

export default Home;
