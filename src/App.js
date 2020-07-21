import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Book from "./pages/Book/Book";
import User from "./pages/User/User";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          image: "https://picsum.photos/400",
          title: "Hello World",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          image:
            "https://i1.wp.com/portugalconfidential.com/wp-content/uploads/2019/09/Harry-Potter-Exhibition-Lisbon-feature-1.jpg?resize=750%2C400&ssl=1",
          title: "Harry Poter",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          image:
            "https://i1.wp.com/portugalconfidential.com/wp-content/uploads/2019/09/Harry-Potter-Exhibition-Lisbon-feature-1.jpg?resize=750%2C400&ssl=1",
          title: "Harry Poter",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          image: "https://picsum.photos/400",
          title: "Hello World",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
      ],
      users: [
        {
          avatar: "https://picsum.photos/400",
          name: "Hello World",
          email: "abc@expamble.com",
          phone: "0123123123",
        },
        {
          avatar: "https://picsum.photos/400",
          name: "Hello World",
          email: "abc@expamble.com",
          phone: "0123123123",
        },
        {
          avatar: "https://picsum.photos/400",
          name: "Hello World",
          email: "abc@expamble.com",
          phone: "0123123123",
        },
      ],
    };
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header useLocation={useLocation} />
          <div className="Content">
            <Switch>
              <Route path="/book">
                <Book data={this.state.books} />
              </Route>
              <Route path="/user">
                <User data={this.state.users} />
              </Route>
              <Route path="/" extact>
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
