import { useEffect, useState } from "react";
import { useVideo } from "../../Context/VideoContext";
import { useParams } from "react-router-dom";

import VideoCard from "../Cards/VideoCard";
import "./channelPage.css";
import axios from "axios";

const ChannelPage = () => {
  const { channelId } = useParams();
  const [curChannel, SetCurChannel] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getChannelData = async () => {
    await axios
      .get(`http://localhost:8000/api/channels/${channelId}`)
      .then((res) => {
        SetCurChannel(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Error while loading channel data", err);
      });
  };

  useEffect(() => {
    getChannelData();
  }, []);

  return (
    <div className="channelPageContainer">
      <h1>Channel Page</h1>
      {isLoading !== true && <h2>{curChannel.creatorName}</h2>}
      <div>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          curChannel.creatorVideos.map((video) => (
            <VideoCard
              videoId={video.videoId}
              videoTitle={video.videoTitle}
              videoDuration={video.videoDuration}
              channelId={curChannel._id}
              channelName={curChannel.creatorName}
              channelAvatar={curChannel.creatorAvatar}
            />
          ))
        )}
      </div>
    </div>
  );
};
export default ChannelPage;
