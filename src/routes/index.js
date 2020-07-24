import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Book from "../pages/Book/Book";
import CreateBook from "../pages/Book/CreateBook";
import User from "../pages/User/User";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import { PrivateRoute } from "./PrivateRoute";

export default function () {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/book" component={Book} />
      <PrivateRoute exact path="/add-book" component={CreateBook} />
      <PrivateRoute exact path="/user" component={User} />
    </Switch>
  );
}
