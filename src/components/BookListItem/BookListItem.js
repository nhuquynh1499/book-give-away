import React, { Component } from "react";
import PropTypes from "prop-types";

import { CartContext } from "../../contexts/Cart";

import "./BookListItem.css";

class BookListItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="BookListItem">
        <div
          className="image"
          style={{ backgroundImage: `url(${item.image})` }}
        ></div>
        <div className="infor">
          <div className="infor-content">
            <div className="title">{item.title}</div>
            <CartContext.Consumer>
              {
                ({ addToCart }) => <button onClick={() => addToCart(item)}>Add to cart</button>
              }
            </CartContext.Consumer>
          </div>
          <div className="description">{item.description}</div>
        </div>
      </div>
    );
  }
}

BookListItem.propTypes = {
  /** Book cover posters */
  image: PropTypes.string,
  /** Title of books */
  title: PropTypes.string,
  /** Description of books */
  description: PropTypes.string,
};

export default BookListItem;
