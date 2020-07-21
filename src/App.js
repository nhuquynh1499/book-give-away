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
import { CartProvider } from "./contexts/Cart";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      <CartProvider>
        <Router>
          <div className="App">
            <Header useLocation={useLocation} />
            <div className="Content">
              <Switch>
                <Route path="/book">
                  <Book />
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
      </CartProvider>
    );
  }
}

export default App;
