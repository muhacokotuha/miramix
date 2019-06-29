import React from "react";
import "./product.css";

class Product extends React.Component {
  render() {
    let { items } = this.props;
    let { category } = this.props;
    return (
      <div>
        <div className="category-header">{category}</div>
        {items.map(item => {
          return (
            <div className="item">
              <img className="item__image" src={item.imgSrc} />
              <div className="item__details">
                <div>Name: {item.name}</div>
                <div>Price: ${item.price}</div>
                <div>Description: {item.description}</div>
                <div>QTY: 1</div>
                <button>Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Product;
