import React from 'react';
import PropTypes from 'prop-types';

import './BookListItem.css';

const BookListItem = (props) => {
    const { item } = props;
    return (
      <div className="BookListItem">
        <div 
          className="image"
          style={{backgroundImage: `url(${item.image})`}}  
        >
        </div>
        <div className="infor">
          <div className="title">{item.title}</div>
          <div className="description">{item.description}</div>
        </div>
      </div>
    )
  }

BookListItem.propTypes = {
  /** Book cover posters */
  image: PropTypes.string, 
  /** Title of books */
  title: PropTypes.string.isRequired, 
  /** Description of books */
  description: PropTypes.string.isRequired
}

export default BookListItem
