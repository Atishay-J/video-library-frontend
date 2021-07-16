import React from "react";
import "./navbar.css";

import { useUser } from "../../Context/UserContext";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { state, dispatch } = useUser();
  const navigate = useNavigate();

  return (
    <div className="navbarContainer">
      <div className="navbarLogoWrapper">
        <h1 className="heading-s">Musicer</h1>
      </div>

      <button
        className="navbarLoginBtn primary btn-pill"
        onClick={() =>
          state.isUserLoggedIn
            ? dispatch({ type: "SIGN_OUT" })
            : navigate("/signin")
        }
      >
        {state.isUserLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Navbar;
