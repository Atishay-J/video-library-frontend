import { Routes, Route } from "react-router-dom";
import PageNotFound from "../404/PageNotFound";

import {
  Playlist,
  Playlists,
  Videos,
  ChannelPage,
  VideoPlayer,
  SignIn,
  SignUp,
  Subscribed,
  LikedVideos,
} from "../index";

function Router() {
  return (
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
  );
}
export default Router;
