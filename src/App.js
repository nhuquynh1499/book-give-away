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
import CreateBook from "./pages/Book/CreateBook";
import User from "./pages/User/User";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import { CartProvider } from "./contexts/Cart";
import "./App.css";

class App extends Component {
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
                <Route path="/add-book">
                  <CreateBook />
                </Route>
                <Route path="/user">
                  <User />
                </Route>
                <Route path="/signup">
                  <SignUp />
                </Route>
                <Route path="/signin">
                  <SignIn />
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
