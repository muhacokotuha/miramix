import React from "react";
import Home from "./components/home/Home";
import Items from "./components/item/Items";
import Navbar from "./components/navbar/Navbar";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <Items />
      </div>
    );
  }
}

export default App;
