import React, { useState } from "react";
import { useUser } from "../../Context/UserContext";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./signin.css";
import { toast } from "react-toastify";

const SignIn = () => {
  const [username, SetUserName] = useState("");
  const [password, setPassword] = useState("");
  const [displayMsg, setDisplayMsg] = useState(false);
  const { dispatch } = useUser();

  let navigate = useNavigate();

  const signIn = async () => {
    if (username & password) {
      return await axios
        .post("https://metaphor-music.herokuapp.com/signin", {
          username,
          password,
        })
        .then((res) => {
          dispatch({
            type: "SIGN_IN",
            payload: res.data,
          });
          navigate("/");
        })
        .catch((err) => {
          console.log("Sign Up error response", err);
          setDisplayMsg(true);
        });
    }
    toast.dark("Fields can't be empty");
  };

  return (
    <div className="SignInContainer container flex-column align-center">
      <h1 className="heading-l">SignIn</h1>

      {displayMsg && <h3>Wrong Username or password</h3>}

      <form
        className="flex-column signInForm mt15"
        action="#"
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
          value="SignIn"
          onClick={signIn}
        />
      </form>

      <p className="signInPara mt10">
        Don't have an accout?{" "}
        <Link to="/signup">
          <span className="formLink"> SignUp</span>
        </Link>
      </p>
    </div>
  );
};
export default SignIn;
