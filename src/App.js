import React, { Component } from "react";
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Routes from "./routes/index";
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
            <Routes />
            </div>
          </div>
        </Router>
      </CartProvider>
    );
  }
}

export default App;
