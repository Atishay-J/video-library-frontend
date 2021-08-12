import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

import HomeSharpIcon from "@material-ui/icons/HomeSharp";
import PlaylistAddCheckSharpIcon from "@material-ui/icons/PlaylistAddCheckSharp";
import SubscriptionsSharpIcon from "@material-ui/icons/SubscriptionsSharp";
import ThumbUpAltSharpIcon from "@material-ui/icons/ThumbUpAltSharp";

const Sidebar = () => {
  return (
    <div className="sidebarContainer">
      <NavLink className="navItem" activeClassName="selectedNavItem" end to="/">
        <HomeSharpIcon />
      </NavLink>

      <NavLink
        className="navItem"
        activeClassName="selectedNavItem"
        end
        to="/playlists"
      >
        <PlaylistAddCheckSharpIcon />
      </NavLink>

      <NavLink
        className="navItem"
        activeClassName="selectedNavItem"
        end
        to="/subscribed"
      >
        <SubscriptionsSharpIcon />
      </NavLink>

      <NavLink
        className="navItem"
        activeClassName="selectedNavItem"
        end
        to="/liked"
      >
        <ThumbUpAltSharpIcon />
      </NavLink>
    </div>
  );
};

export default Sidebar;
