import React, { useEffect, useState } from "react";

import { useUser } from "../../Context/UserContext";

import VideoCard from "../Cards/VideoCard";

const LikedVideos = () => {
  const { state } = useUser();

  return (
    <div className="playlistContainer">
      <h1>likedVideos</h1>
      <h1>likedVideos</h1>
      <h1>likedVideos</h1>
      <h1>likedVideos</h1>
      {state.isUserLoggedIn ? (
        <div className="likedVideosWrapper">
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
            <h1>No videos</h1>
          )}
        </div>
      ) : (
        <h1>Log In to view</h1>
      )}
    </div>
  );
};

export default LikedVideos;
