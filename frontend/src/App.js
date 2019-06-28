import React from "react";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import "./app.css";

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;
