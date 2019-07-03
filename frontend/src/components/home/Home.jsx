import React from "react";
import Product from "../products/Product";
import "./home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.category = "bits";
    this.state = { items: [] };
  }

  componentDidMount() {
    fetch("http://localhost:666/products/bits", { method: "GET" })
      .then(res => {
        return res.json();
      })
      .then(body => {
        this.setState({ items: body });
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
        <Product category={this.category} items={this.state.items} />
      </div>
    );
  }
}

export default Home;
