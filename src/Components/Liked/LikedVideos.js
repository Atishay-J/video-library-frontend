import React, { useEffect, useState } from "react";

import { useUser } from "../../Context/UserContext";

import VideoCard from "../Cards/VideoCard";
import PlaylistVideoCard from "../Cards/playlistVideoCard";

const LikedVideos = () => {
  const { state } = useUser();

  return (
    <div className="playlistContainer container">
      <h1 className="heading-l text-center">Liked Videos</h1>
      {state.isUserLoggedIn ? (
        <div className="likedVideosWrapper flex-cont space-around flex-wrap">
          {state.userData.likedVideos.length > 0 ? (
            state.userData.likedVideos.map((item) => (
              <PlaylistVideoCard
                key={item.videoId}
                videoId={item.videoId}
                channelId={item.channelId}
              />
            ))
          ) : (
            <h1 className="heading-m mt15">No Liked videos</h1>
          )}
        </div>
      ) : (
        <h1 className="heading-m mt15 text-center">Log In to view</h1>
      )}
    </div>
  );
};

export default LikedVideos;
