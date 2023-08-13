import React, { useState } from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./signin.css";
import Navbar from "../components/navbar";

function Signin() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">

    <form onSubmit={handleSubmit}>
    <div class="form-group">
        <label for="exampleInputEmail1" className="email">Email address</label>
        <input type="email" class="form-control emailbox" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    </div>
    <p>

    </p>
    <div class="form-group">
        <label for="exampleInputPassword1" className="pass">Password</label>
        <input type="password" class="form-control passbox" id="exampleInputPassword1" placeholder="Password" />
    </div>
    <p>

    </p>
    <div className="button">

    <button type="submit" class="btn btn-primary button-container">Sign In</button>
    </div>
    </form>
    </div>
  );

  return (
    <div>
    <div className="signin">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
    </div>
  );
}

export default Signin;