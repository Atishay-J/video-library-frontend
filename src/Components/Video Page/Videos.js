import React from "react";
import "./video.css";
import { useVideo } from "../../Context/VideoContext";

import VideoCard from "../Cards/VideoCard";

const Videos = () => {
  const { apiData } = useVideo();

  return (
    <div className="videoContainer">
      <h1>Video Page </h1>

      <div className="videosWrapper">
        {apiData.map((channels) =>
          channels.creatorVideos.map((item) => (
            <VideoCard
              videoId={item.videoId}
              videoTitle={item.videoTitle}
              videoDuration={item.videoDuration}
              channelId={channels._id}
              channelName={channels.creatorName}
              channelAvatar={channels.creatorAvatar}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Videos;
