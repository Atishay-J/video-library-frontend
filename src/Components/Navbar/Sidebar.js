import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

import HomeSharpIcon from "@material-ui/icons/HomeSharp";
import PlaylistAddCheckSharpIcon from "@material-ui/icons/PlaylistAddCheckSharp";
import SubscriptionsSharpIcon from "@material-ui/icons/SubscriptionsSharp";
import ThumbUpAltSharpIcon from "@material-ui/icons/ThumbUpAltSharp";

const Sidebar = () => {
  return (
    <div className="sidebarContainer">
      <div className="sidebarLink">
        <Link to="/">
          <HomeSharpIcon />
        </Link>
      </div>

      <div className="sidebarLink">
        <Link to="/playlist">
          <PlaylistAddCheckSharpIcon />
        </Link>
      </div>
      <div className="sidebarLink">
        <Link to="/subscribed">
          <SubscriptionsSharpIcon />
        </Link>
      </div>
      <div className="sidebarLink">
        <Link to="/liked">
          <ThumbUpAltSharpIcon />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
