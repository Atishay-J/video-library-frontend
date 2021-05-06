import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import VideoCard from "../Cards/VideoCard";
import SubscribeToggle from "../Video Player/SubscribeButton";
import "./channelPage.css";
import axios from "axios";
import { useUser } from "../../Context/UserContext";

const ChannelPage = () => {
  const { channelId } = useParams();
  const [curChannel, SetCurChannel] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { state, dispatch } = useUser();

  //**************************************** */
  //******* TRY TO DO THIS IN CONTEXT ******/
  //**************************************** */

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
      {isLoading !== true && (
        <div className="channelPageCoverContainer">
          <div className="channelPageInfoWrapper">
            <img
              src={curChannel.creatorAvatar}
              className="channelPageAvatar"
              alt="Channel Avatar"
            />
            <h2>{curChannel.creatorName}</h2>
          </div>
          <div className="channelPageSubscribeWrapper">
            <SubscribeToggle channelId={channelId} curChannel={curChannel} />
          </div>
        </div>
      )}

      <div className="channelPageVideoContainer">
        <h3 className="channelPageVideoHeading">Videos</h3>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <div className="channelPageVideosWrapper">
            {curChannel.creatorVideos.map((video) => (
              <VideoCard
                videoId={video.videoId}
                videoTitle={video.videoTitle}
                videoDuration={video.videoDuration}
                channelId={curChannel._id}
                channelName={curChannel.creatorName}
                channelAvatar={curChannel.creatorAvatar}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default ChannelPage;
