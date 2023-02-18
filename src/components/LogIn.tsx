import React, { useEffect, useState } from "react";
import { NotificationManager } from "react-notifications";
import "../styles/LogIn.css";
import { Validation } from "../utils";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    const activeUser = localStorage.getItem("user");
    if (activeUser) {
      window.location.hash = "#/home";
    }
  }, []);
  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    const loginValidationErros = Validation({
      username,
      password,
    });
    if (Object.keys(loginValidationErros).length) {
      NotificationManager.error(Object.values(loginValidationErros));
    } else {
      fetch(
        `https://petstore.swagger.io/v2/user/login?username=${username}&password=${password}`,
        {
          headers: {
            accept: "application/json",
          },
        }
      )
        .then((data) => data.json())
        .then((data) => {
          console.log("login response", data);
          if (data.code == 200) {
            localStorage.setItem("user", username);
            window.location.hash = "#/home";
            NotificationManager.success(
              "Congratulations! You have successfully logged into PetStore!",
              "",
              5000
            );
          } else {
            NotificationManager.error(
              "Login Error",
              data.message,
              5000,
              () => {}
            );
          }
        });
    }
  };

  const form = (
    <div className="form">
      <form onSubmit={handlerSubmit}>
        <label htmlFor="username" />
        <div className="input-container">
          <input
            value={username}
            onChange={usernameHandler}
            type="text"
            placeholder="Enter your username"
            name="username"
          />
        </div>
        {errors ? <p>Username is required</p> : null}
        <div className="input-container">
          <label htmlFor="password" />
          <input
            value={password}
            onChange={passwordHandler}
            type="password"
            placeholder="Enter your password"
            name="password"
          />
        </div>
        {errors ? <p>Password is required</p> : null}

        <div className="button-container">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="login">
      <div className="login-form">
        <div className="title">Log In</div>
        {form}
      </div>
    </div>
  );
};
export default LogIn;
