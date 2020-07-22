import React, { Component } from "react";
import axios from 'axios';

import UserListItem from "../../components/UserListItem/UserListItem";

import "./User.css";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/api/user`)
    .then(res => {
      const users = res.data;
      this.setState({ users });
    })
    .catch(error => console.log(error));
  }

  render() {
    const { users } = this.state;
    return (
      <div className="User">
        {users.map((item, index) => (
          <UserListItem item={item} key={index}/>
        ))}
      </div>
    );
  }
}
