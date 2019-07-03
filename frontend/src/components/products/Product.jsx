import React from "react";
import "./product.css";

class Product extends React.Component {
  render() {
    let { items } = this.props;
    console.log(items);
    let { category } = this.props;
    return (
      <div>
        <div className="category-header">{category}</div>
        {items.map((item, index) => {
          return (
            <div className="item" key={index}>
              <img className="item__image" src={item.imgSrc} alt={index} />
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
