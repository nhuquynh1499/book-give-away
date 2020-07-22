import React, { Component } from 'react';

export default class CreateBook extends Component {
  render() {
    return(
      <div className="CreateBook">
        <form>
          <input type="file" name="image" />
          <input type="text" name="title" placeholder="Title"/>
          <input type="text" name="description" placeholder="Description" />
        </form>
      </div>
    )
  }
}