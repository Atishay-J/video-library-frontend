import "./App.css";

import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useApiData from "./hooks/useApiData";

import {
  Navbar,
  Playlist,
  Playlists,
  Videos,
  Sidebar,
  ChannelPage,
  VideoPlayer,
  SignIn,
  SignUp,
  Subscribed,
  LikedVideos,
} from "./Components";
import PageNotFound from "./Components/404/PageNotFound";
import { useEffect } from "react";

function App() {
  const apiData = useApiData();

  return (
    <div className="App">
      <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={1500}
        draggablePercent={60}
      />
      <div className="routesDiv">
        <Routes>
          <Route exact path="/" element={<Videos />} />
          {/* <Route exact path="/navbar" element={<Navbar />} /> */}
          <Route exact path="/playlists" element={<Playlists />} />
          <Route exact path="/playlist/:playlistName" element={<Playlist />} />
          <Route exact path="/channels/:channelId" element={<ChannelPage />} />
          <Route
            exact
            path="/watch/:channelId/:videoId"
            element={<VideoPlayer />}
          />

          <Route exact path="/subscribed" element={<Subscribed />} />
          <Route exact path="/liked" element={<LikedVideos />} />
          <Route exact path="/signin" element={<SignIn />} />

          <Route exact path="/signup" element={<SignUp />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Sidebar />
    </div>
  );
}

export default App;
