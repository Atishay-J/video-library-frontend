import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import VideoCard from "../Cards/VideoCard";
import SubscribeToggle from "../Video Player/SubscribeButton";
import "./channelPage.css";
import axios from "axios";
import { useUser } from "../../Context/UserContext";
import { Link } from "react-router-dom";

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
      .get(`https://metaphor-music.herokuapp.com/api/channels/${channelId}`)
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
      {/* <h1 className="heading-s ">Channel Page</h1> */}
      {isLoading !== true && (
        <div className="channelPageCoverContainer mt10">
          <div className="channelPageInfoWrapper">
            <img
              src={curChannel.creatorAvatar}
              className="channelPageAvatar"
              alt="Channel Avatar"
            />
            <h2 className="heading-m">{curChannel.creatorName}</h2>
          </div>
          <div className="channelPageSubscribeWrapper">
            <SubscribeToggle channelId={channelId} curChannel={curChannel} />
          </div>
          {state.showLoginModal && (
            <div className="signinModal channelPageModal">
              Please{" "}
              <Link
                to="/signin"
                onClick={() => dispatch({ type: "HIDE_LOGIN_MODAL" })}
              >
                <span
                  style={{ textDecoration: "underline", cursor: "pointer" }}
                >
                  SignIn
                </span>{" "}
              </Link>
              to continue
            </div>
          )}
        </div>
      )}

      <div className="channelPageVideoContainer">
        <h3 className="channelPageVideoHeading heading-s">Videos</h3>
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
