import React from "react";

import { useUser } from "../../Context/UserContext";
import PlaylistCard from "../Cards/PlaylistCard";
import "./playlist.css";

const Playlists = () => {
  const { state } = useUser();

  console.log("Play list me userdata", state.userData);

  return (
    <div className="playlistContainer container ">
      <h1 className="heading-l text-center">Playlists</h1>

      {state.isUserLoggedIn ? (
        <div className="playlistsWrapper ">
          {state.userData.playlists.length > 0 ? (
            state.userData.playlists.map((playlist) => {
              console.log("VIDEEOEEOOEEEEE", playlist);
              return (
                <PlaylistCard
                  playlistName={playlist.playlistName}
                  videos={playlist.videos}
                />
              );
            })
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
