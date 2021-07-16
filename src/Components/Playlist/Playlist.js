import React, { useEffect } from "react";
import { useUser } from "../../Context/UserContext";
import { VideoCard } from "../index";
import { useParams, useNavigate } from "react-router-dom";
import "./playlist.css";
import { useVideo } from "../../Context/VideoContext";

function Playlist() {
  const { state } = useUser();
  const { apiData } = useVideo();
  const { playlistName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      state.playlists.find(
        (playlists) => playlists.playlistName === playlistName
      ) === undefined
    ) {
      navigate("/notFound");
    }
  }, [navigate, playlistName, state.playlistName, state.playlists]);

  return (
    <div className="playlistVideos container">
      <h1 className="playlistnameHeading">{playlistName}</h1>
      <div className="playlistVideosWrapper">
        {state.playlists
          .find((playlists) => playlists.playlistName === playlistName)
          ?.videos.map((video, index) => (
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
