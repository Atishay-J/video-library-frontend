import React from "react";

import { useUser } from "../../Context/UserContext";
import PlaylistCard from "../Cards/PlaylistCard";
import "./playlist.css";

const Playlists = () => {
  const { state } = useUser();

  return (
    <div className="playlistContainer container ">
      <h1 className="heading-l text-center">Playlists</h1>

      {state.isUserLoggedIn ? (
        <div className="playlistsWrapper ">
          {state.playlists.length > 0 ? (
            state.playlists.map((videos) => (
              <PlaylistCard
                playlistName={videos.playlistName}
                videos={videos.videos}
              />
            ))
          ) : (
            <h1 className="heading-m mt15 text-center">No Playlists</h1>
          )}
        </div>
      ) : (
        <h1 className="heading-m mt15 text-center">Log In to view</h1>
      )}
    </div>
  );
};

export default Playlists;
