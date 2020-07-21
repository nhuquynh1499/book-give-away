import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header/Header";
import BookListItem from "./components/BookListItem/BookListItem";
import UserListItem from "./components/UserListItem/UserListItem";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header useLocation={useLocation} />
        <div className="Content">
          <Switch>
            <Route path="/book">
              <BookListItem
                image="https://picsum.photos/400"
                title="Hello World"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              />
            </Route>
            <Route path="/user">
              <UserListItem
                avatar="https://picsum.photos/400"
                name="Hello World"
                email="abc@expamble.com"
                phone="0123123123"
              />
            </Route>
            <Route path="/" extact>
              <h1>HOME</h1>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
