import React from "react";
import "./video.css";
import { useVideo } from "../../Context/VideoContext";

import { VideoCard, LoadingCard } from "../index";

const Videos = () => {
  const { isLoading, channels } = useVideo();

  return (
    <div className="videoContainer">
      <div className="videosWrapper flex-cont space-around flex-wrap">
        {isLoading ? (
          <>
            {Array(9)
              .fill()
              .map((item, index) => (
                <LoadingCard key={index} />
              ))}
          </>
        ) : (
          channels.map((channel) => {
            return channel.creatorVideos.map((video) => (
              <VideoCard
                key={video.videoId}
                videoId={video.videoId}
                videoTitle={video.videoTitle}
                videoDuration={video.videoDuration}
                channelId={channel._id}
                channelName={channel.creatorName}
                channelAvatar={channel.creatorAvatar}
              />
            ));
          })
        )}
      </div>
    </div>
  );
};

export default Videos;
