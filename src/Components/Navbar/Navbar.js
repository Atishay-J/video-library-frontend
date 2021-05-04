import React from "react";
import "./navbar.css";
import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";

const Navbar = () => {
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
        <div className="navbarUserImageContainer">
          <AccountCircleSharpIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
