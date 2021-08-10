import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const error = "Username or Password not valid.";
  //replace with error state

  console.log(credentials);
  const handleChanges = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    console.log("this is the login button");
    axios
      .post(`http://localhost:5000/api/login`, credentials)
      .then((res) => {
        console.log(res.data.payload);
        localStorage.setItem("token", res.data.payload);

      })
      .catch((err) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            id="username"
            value={credentials.username}
            onChange={handleChanges}
          />
          <input
            type="password"
            name="password"
            id="password"
            value={credentials.password}
            onChange={handleChanges}
          />
          <button>Log in</button>
        </form>
      </div>
      
      <p id="error" className="error">
        {error}
      </p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"
