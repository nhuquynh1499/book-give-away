import React, {Component} from 'react';
import PropTypes from 'prop-types';

import DeleteIcon from "../../images/delete.svg";

import './UserListItem.css';

class UserListItem extends Component {
  render() {
    const { avatar, name, email, phone } = this.props;
    return (
      <div className="UserListItem">
        <div 
          className="avatar"
          style={{backgroundImage: `url(${avatar})`}}  
        >
        </div>
        <div className="infor">
          <div className="name">{name}</div>
          <div className="infor-content">
            <div className="email">Email: {email}</div>
            <div className="phone">Phone: {phone}</div>
          </div>
        </div>
        <div className="delete">
          <img src={DeleteIcon} alt="" />
        </div>
      </div>
    )
  }
}

UserListItem.propTypes = {
  /** Book of customers */
  avatar: PropTypes.string, 
  /** Name of customers */
  name: PropTypes.string.isRequired, 
  /** Email of books */
  email: PropTypes.string.isRequired,
  /** Phone of books */
  phone: PropTypes.string,
}

export default UserListItem
