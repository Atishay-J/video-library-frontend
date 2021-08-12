import React, { useEffect } from "react";
import { useUser } from "../../Context/UserContext";
import { VideoCard, PlaylistVideoCard } from "../index";
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
      state.userData.playlists.find(
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
        {state.userData.playlists
          .find((playlists) => playlists.playlistName === playlistName)
          ?.videos.map((video, index) => (
            <PlaylistVideoCard
              key={video.videoId}
              videoId={video.videoId}
              channelId={video.channelId}
            />
          ))}
      </div>
    </div>
  );
}
export default Playlist;
