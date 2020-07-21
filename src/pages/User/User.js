import React from "react";

import UserListItem from "../../components/UserListItem/UserListItem";

import './User.css';

export default function User(props) {
  const { data } = props;
  return (
    <div className="User">
      {data.map((item) => (
        <UserListItem item={item} />
      ))}
    </div>
  );
}
