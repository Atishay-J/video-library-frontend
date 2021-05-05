import React, { useState } from "react";
import { useUser } from "../../Context/UserContext";
import axios from "axios";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [username, SetUserName] = useState("");
  const [password, setPassword] = useState("");
  const [displayMsg, setDisplayMsg] = useState(false);

  console.log(" U and P", username, password);

  const signUp = async () => {
    await axios
      .post("http://localhost:8000/signup", { username, password })
      .then((res) => {
        console.log("SignUp response", res);
        setDisplayMsg(true);
      })
      .catch((err) => console.log("Sign Up error response", err));
  };

  return (
    <div classname="signupContainer">
      <h1>Signup</h1>
      <h1>Signup</h1>
      <h1>Signup</h1>

      {displayMsg && (
        <div className="signUpMsgContainer">
          <h3 className="singupMsg">Account succesfully created, Go to</h3>
          <Link to="/signin">Login</Link>
        </div>
      )}

      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => SetUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Signup" onClick={signUp} />
      </form>
    </div>
  );
};
export default SignUp;
