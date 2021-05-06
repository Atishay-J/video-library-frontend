import React from "react";

import { useUser } from "../../Context/UserContext";

import VideoCard from "../Cards/VideoCard";

const Playlist = () => {
  const { state } = useUser();

  return (
    <div className="playlistContainer">
      <h1>Playlist</h1>
      <h1>Playlist</h1>
      <h1>Playlist</h1>
      <h1>Playlist</h1>
      {state.isUserLoggedIn ? (
        <div className="playlistsWrapper">
          {state.playlists.map((item) => (
            <VideoCard
              videoId={item.videoId}
              videoTitle={item.videoTitle}
              videoDuration={item.videoDuration}
              channelId={item.channelId}
              channelName={item.creatorName}
              channelAvatar={item.creatorAvatar}
            />
          ))}
        </div>
      ) : (
        <h1>Log In to view</h1>
      )}
    </div>
  );
};

export default Playlist;
