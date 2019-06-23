import React from "react";
import "./home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="home__vcontainer">
        <video className="home__vcontainer__video" autoPlay muted loop>
          <source src="home_video.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default Home;
