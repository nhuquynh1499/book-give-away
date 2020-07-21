import React, { Component } from "react";
import PropTypes from "prop-types";

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
            <button>Add to cart</button>
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
  title: PropTypes.string.isRequired,
  /** Description of books */
  description: PropTypes.string.isRequired,
};

export default BookListItem;
