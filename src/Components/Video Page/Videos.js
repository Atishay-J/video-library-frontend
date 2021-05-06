import React from "react";
import "./video.css";
import { useVideo } from "../../Context/VideoContext";

import VideoCard from "../Cards/VideoCard";

const Videos = () => {
  const { apiData, videoState } = useVideo();

  return (
    <div className="videoContainer">
      {/* <h1 className="heading-l">All Videos </h1> */}

      <div className="videosWrapper flex-cont space-around flex-wrap">
        {videoState.isLoading ? (
          <h2>Loading...</h2>
        ) : (
          apiData.map((channels) =>
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
          )
        )}
      </div>
    </div>
  );
};

export default Videos;
