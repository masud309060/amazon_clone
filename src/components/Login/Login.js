import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import "./Login.css";

const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const singIn = (e) => {
    e.preventDefault()
    // some fancy firebase sing in shittt.... 
    auth
      .signInWithEmailAndPassword(email, password)
    .then((user) => {
      if(user) {
        history.push('/')
      }
    })
    .catch((error) => {
      alert(error.message)
    });
  };

  const register = (e) => {
    e.preventDefault();
    // some fancy firebase register shittt..... 
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password 
        if(auth) {
          history.push('/')
        }
      })
      .catch((error) => {
        alert(error.message)
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG6.png"
          alt=""
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /> 
          <button className="login__signInButton" onClick={singIn}>
            Sign in
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditionals of Use &
          Sale. Please see our Privacy Notice, Our Cookies Notice and our
          Interest-Based ads Notice.
        </p>
        <button className="login__registerButton" onClick={register}>
          Create your AMAZON account
        </button>
      </div>
    </div>
  );
};

export default Login;
