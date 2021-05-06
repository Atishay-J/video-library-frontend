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
            <div className="playlistVideoContainer">
              <h1>{item.playlistName}</h1>
              <div className="playlistVideoWrapper">
                {item.videos.map((video) => (
                  <VideoCard
                    videoId={video.videoId}
                    videoTitle={video.videoTitle}
                    videoDuration={video.videoDuration}
                    channelId={video.channelId}
                    channelName={video.creatorName}
                    channelAvatar={video.creatorAvatar}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1>Log In to view</h1>
      )}
    </div>
  );
};

export default Playlist;
