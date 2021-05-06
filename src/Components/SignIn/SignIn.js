import React, { useEffect, useState } from "react";
import { useUser } from "../../Context/UserContext";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./signin.css";

const SignIn = () => {
  const [username, SetUserName] = useState("");
  const [password, setPassword] = useState("");
  const [displayMsg, setDisplayMsg] = useState(false);
  const { state, dispatch } = useUser();

  let navigate = useNavigate();

  useEffect(() => {
    state.isUserLoggedIn && navigate("/");
  }, [state]);

  const signIn = async () => {
    await axios
      .post("http://localhost:8000/login", { username, password })
      .then((res) => {
        console.log("SignUp response", res);

        dispatch({
          type: "SIGN_IN",
          payload: {
            userData: res.data,
            status: res.status,
          },
        });
      })
      .catch((err) => {
        console.log("Sign Up error response", err);
        setDisplayMsg(true);
      });
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
