import React, { useState } from "react";
import { useUser } from "../../Context/UserContext";
import axios from "axios";
import { Link } from "react-router-dom";
import "./signin.css";

const SignUp = () => {
  const [username, SetUserName] = useState("");
  const [password, setPassword] = useState("");
  const [displayMsg, setDisplayMsg] = useState(false);

  const signUp = async () => {
    await axios
      .post("https://metaphor-music.herokuapp.com/signup", {
        username,
        password,
      })
      .then((res) => {
        console.log("SignUp response", res);
        setDisplayMsg(true);
      })
      .catch((err) => console.log("Sign Up error response", err));
  };

  return (
    <div className="signupContainer container flex-column align-center">
      <h1 className="heading-l">Signup</h1>

      {displayMsg && (
        <div className="signUpMsgContainer">
          <h3 className="signupMsg">
            Account succesfully created, Go to{" "}
            <span className="signupMsgLink">
              <Link to="/signin">Login</Link>
            </span>
          </h3>
        </div>
      )}

      <form
        action="#"
        className="flex-column signInForm mt15"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="inputsWrapper flex-cont">
          <input
            className="simpleText-input"
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => SetUserName(e.target.value)}
          />
          <input
            className="simpleText-input"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input
          className="primary submitBtn"
          type="submit"
          value="Signup"
          onClick={signUp}
        />
      </form>
    </div>
  );
};
export default SignUp;
