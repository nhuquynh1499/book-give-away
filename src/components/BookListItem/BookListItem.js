import React from 'react';
import PropTypes from 'prop-types';

import './BookListItem.css';

const BookListItem = (props) => {
    const { image, title, description } = props;
    return (
      <div className="BookListItem">
        <div 
          className="image"
          style={{backgroundImage: `url(${image})`}}  
        >
        </div>
        <div className="infor">
          <div className="title">{title}</div>
          <div className="description">{description}</div>
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
