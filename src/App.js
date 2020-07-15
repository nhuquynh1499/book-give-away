import React from "react";
import BookListItem from "./components/BookListItem/BookListItem";
import UserListItem from "./components/UserListItem/UserListItem";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BookListItem
        image="https://picsum.photos/400"
        title="Hello World"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <UserListItem
        avatar="https://picsum.photos/400"
        name="Hello World"
        email="abc@expamble.com"
        phone="0123123123"
      />
    </div>
  );
}

export default App;
