import React, { useEffect, useState } from "react";
import { useUser } from "../../Context/UserContext";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

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
    <div className="SignInContainer">
      <h1>SignIn Page</h1>
      <h1>SignIn Page</h1>
      <h1>SignIn Page</h1>
      <h1>SignIn Page</h1>

      {console.log("Stateee", state)}

      {displayMsg && <h3>Wrong Username or password</h3>}

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
        <input type="submit" value="SignIn" onClick={signIn} />
      </form>

      <p className="signInPara">
        Don't have an accout? <Link to="/signup">SignUp</Link>
      </p>
    </div>
  );
};
export default SignIn;
