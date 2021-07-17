import React from "react";
import "./video.css";
import { useVideo } from "../../Context/VideoContext";

import { VideoCard, LoadingCard } from "../index";

const Videos = () => {
  const { apiData, videos, isLoading, channels } = useVideo();

  console.log("VIdeos in inttt", videos);

  return (
    <div className="videoContainer">
      {/* <h1 className="heading-l">All Videos </h1> */}

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
