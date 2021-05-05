import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { VideoProvider } from "./Context/VideoContext";
import { UserProvider } from "./Context/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <VideoProvider>
        <Router>
          <App />
        </Router>
      </VideoProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
