import React from "react";

import BookListItem from "../../components/BookListItem/BookListItem";

import './Book.css';

export default function Book(props) {
  const { data } = props;
  return (
    <div className="Book">
      {data.map((item) => (
        <BookListItem item={item} />
      ))}
    </div>
  );
}
