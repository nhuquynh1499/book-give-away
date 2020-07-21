import React from "react";
import PropTypes from "prop-types";

import DeleteIcon from "../../images/delete.svg";

import "./UserListItem.css";

const UserListItem = (props) => {
  const { item } = props;
  return (
    <div className="UserListItem">
      <div
        className="avatar"
        style={{ backgroundImage: `url(${item.avatar})` }}
      ></div>
      <div className="infor">
        <div className="name">{item.name}</div>
        <div className="infor-content">
          <div className="email">Email: {item.email}</div>
          <div className="phone">Phone: {item.phone}</div>
        </div>
      </div>
      <div className="delete">
        <img src={DeleteIcon} alt="" />
      </div>
    </div>
  );
};

UserListItem.propTypes = {
  /** Book of customers */
  avatar: PropTypes.string,
  /** Name of customers */
  name: PropTypes.string.isRequired,
  /** Email of books */
  email: PropTypes.string.isRequired,
  /** Phone of books */
  phone: PropTypes.string,
};

export default UserListItem;
