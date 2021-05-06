import React, { useEffect, useState } from "react";

import { useUser } from "../../Context/UserContext";

import VideoCard from "../Cards/VideoCard";

const LikedVideos = () => {
  const { state } = useUser();

  return (
    <div className="playlistContainer container">
      <h1 className="heading-l">Liked Videos</h1>
      {state.isUserLoggedIn ? (
        <div className="likedVideosWrapper flex-cont space-around flex-wrap">
          {state.likedVideos.length > 0 ? (
            state.likedVideos.map((item) => (
              <VideoCard
                videoId={item.videoId}
                videoTitle={item.videoTitle}
                videoDuration={item.videoDuration}
                channelId={item.channelId}
                channelName={item.creatorName}
                channelAvatar={item.creatorAvatar}
              />
            ))
          ) : (
            <h1 className="heading-m mt15">No Liked videos</h1>
          )}
        </div>
      ) : (
        <h1 className="heading-m mt15">Log In to view</h1>
      )}
    </div>
  );
};

export default LikedVideos;
