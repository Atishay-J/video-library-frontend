import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./signin.css";

const SignUp = () => {
  const [{ username, password }, SetUserInput] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const signUp = async () => {
    if (username && password) {
      return await axios
        .post("https://www.glitcheads.io/musicer/signup", {
          // .post("http://localhost:8000/signup", {
          username,
          password,
        })
        .then((res) => {
          toast.dark("Account Created ");
          navigate("/signin");
        })
        .catch((err) => {
          console.log("Sign Up error response", err);
          toast.error("Some Error Occured");
        });
    }
    toast.dark("Fields can't be empty");
  };

  return (
    <div className="signupContainer container flex-column align-center">
      <h1 className="heading-l">Signup</h1>

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
            onChange={(e) =>
              SetUserInput((prev) => {
                return { ...prev, username: e.target.value };
              })
            }
          />
          <input
            className="simpleText-input"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) =>
              SetUserInput((prev) => {
                return { ...prev, password: e.target.value };
              })
            }
          />
        </div>
        <input
          className="primary submitBtn"
          type="submit"
          value="Signup"
          onClick={signUp}
        />
      </form>
      <p className="signInPara mt10">
        Already have an account?
        <Link to="/signin">
          <span className="formLink"> Signin</span>
        </Link>
      </p>
    </div>
  );
};
export default SignUp;
