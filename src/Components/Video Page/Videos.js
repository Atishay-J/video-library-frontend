import React from "react";
import "./video.css";
import { useVideo } from "../../Context/VideoContext";

import { VideoCard, LoadingCard } from "../index";

const Videos = () => {
  const { apiData, videoState } = useVideo();

  return (
    <div className="videoContainer">
      {/* <h1 className="heading-l">All Videos </h1> */}

      <div className="videosWrapper flex-cont space-around flex-wrap">
        {videoState.isLoading ? (
          <>
            {Array(9)
              .fill()
              .map((item, index) => (
                <LoadingCard key={index} />
              ))}
          </>
        ) : (
          apiData.map((channels) =>
            channels.creatorVideos.map((item) => (
              <VideoCard
                key={item.videoId}
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
