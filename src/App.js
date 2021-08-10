import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";

import axiosWithAuth from "./helpers/axiosWithAuth";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";

function App() {
  const logout = () => {
    axiosWithAuth()
      .post("/logout")
      .then((res) => {
        console.log(res);
        localStorage.removeItem("token");
        window.location.href = "/login";
      });
  };

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a onClick={logout} data-testid="logoutButton" href="google.com">
            logout
          </a>
        </header>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/protected">Bubble Page </Link>
        </li>
        <Route path="/login" component={Login} />
        <Route path="/" />
        <PrivateRoute exact path="/protected" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'.
//2. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.
