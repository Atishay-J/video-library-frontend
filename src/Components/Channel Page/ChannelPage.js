import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { LoadingCard, VideoCard } from "../index";
import SubscribeToggle from "../Video Player/SubscribeButton";
import "./channelPage.css";
import axios from "axios";
import { useUser } from "../../Context/UserContext";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

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
      {/* {isLoading !== true && ( */}
      {
        <div className="channelPageCoverContainer mt10">
          <div className="channelPageInfoWrapper">
            {curChannel.creatorAvatar ? (
              <img
                src={curChannel.creatorAvatar}
                className="channelPageAvatar"
                alt="Channel Avatar"
              />
            ) : (
              <Skeleton width={"5rem"} height={"5rem"} />
            )}
            <h2 className="heading-m">
              {curChannel.creatorName ? (
                curChannel.creatorName
              ) : (
                <Skeleton width={"6rem"} />
              )}
            </h2>
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
      }

      <div className="channelPageVideoContainer">
        <h3 className="channelPageVideoHeading heading-s">Videos</h3>
        {isLoading ? (
          <div className="channelPageVideosWrapper">
            {Array(4)
              .fill()
              .map((item, index) => (
                <LoadingCard key={index} />
              ))}
          </div>
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
