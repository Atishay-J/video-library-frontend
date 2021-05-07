import React from "react";

import { useUser } from "../../Context/UserContext";

import VideoCard from "../Cards/VideoCard";
import "./playlist.css";

const Playlist = () => {
  const { state } = useUser();

  return (
    <div className="playlistContainer container ">
      <h1 className="heading-l text-center">Playlists</h1>

      {state.isUserLoggedIn ? (
        <div className="playlistsWrapper ">
          {state.playlists.length > 0 ? (
            state.playlists.map((item) => (
              <div className="playlistVideoContainer">
                <h1 className="heading-m text-left ">{item.playlistName}</h1>
                <div className="playlistVideoWrapper flex-cont space-around flex-wrap">
                  {item.videos.map((video) => (
                    <VideoCard
                      key={video.videoId}
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
            ))
          ) : (
            <h1 className="heading-m mt15">No Playlists</h1>
          )}
        </div>
      ) : (
        <h1 className="heading-m mt15 text-center">Log In to view</h1>
      )}
    </div>
  );
};

export default Playlist;
