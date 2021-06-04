import React from "react";
import { useUser } from "../../Context/UserContext";
import { VideoCard } from "../index";
import { useParams } from "react-router-dom";
import "./playlist.css";

function Playlist() {
  const { state } = useUser();
  const { playlistName } = useParams();

  return (
    <div className="playlistVideos container">
      <h1 className="playlistnameHeading">{playlistName}</h1>
      <div className="playlistVideosWrapper">
        {state.playlists
          .find((playlists) => playlists.playlistName === playlistName)
          .videos.map((video, index) => (
            <VideoCard
              key={index}
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
  );
}
export default Playlist;
