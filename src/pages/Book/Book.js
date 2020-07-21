import React, { Component } from "react";
import axios from 'axios';

import BookListItem from "../../components/BookListItem/BookListItem";

import "./Book.css";

export default class Book extends Component {

  constructor(props) {
    super(props);

    this.state = {
      books: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/books`)
    .then(res => {
      const books = res.data;
      this.setState({ books });
    })
    .catch(error => console.log(error));
  }

  render() {
    const { books } = this.state;
    return (
      <div className="Book">
        {books.map((item) => (
          <BookListItem item={item} />
        ))}
      </div>
    );
  }
}
