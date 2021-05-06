import "./App.css";

import { Routes, Route } from "react-router-dom";

import {
  Navbar,
  Playlist,
  Videos,
  Sidebar,
  ChannelPage,
  VideoPlayer,
  SignIn,
  SignUp,
  Subscribed,
} from "./Components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Videos />} />
        <Route exact path="/navbar" element={<Navbar />} />
        <Route exact path="/playlist" element={<Playlist />} />
        <Route exact path="/channels/:channelId" element={<ChannelPage />} />
        <Route
          exact
          path="/watch/:channelId/:videoId"
          element={<VideoPlayer />}
        />

        <Route exact path="/subscribed" element={<Subscribed />} />
        <Route exact path="/signin" element={<SignIn />} />

        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
      <Sidebar />
    </div>
  );
}

export default App;
