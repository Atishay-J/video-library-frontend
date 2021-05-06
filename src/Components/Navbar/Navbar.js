import React from "react";
import "./navbar.css";
import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";

import { useUser } from "../../Context/UserContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { state, dispatch } = useUser();

  return (
    <div className="navbarContainer">
      <div className="navbarLogoWrapper">
        <h1>Logo</h1>
      </div>
      <div className="navbarSearchWrapper">
        <label className="searchLabel">
          <input type="text" className="navbarSearchInput" />
          <button className="navbarSearchBtn">
            <SearchSharpIcon />
          </button>
        </label>
      </div>
      <div className="navbarUserWrapper">
        <div className="navbarLoginButtonContainer">
          <button
            className="NavbarLoginBtn"
            onClick={() =>
              state.isUserLoggedIn && dispatch({ type: "SIGN_OUT" })
            }
          >
            {state.isUserLoggedIn ? "Logout" : <Link to="/signin">Login</Link>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
