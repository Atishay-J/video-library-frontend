import "./videoPlayer.css";
import YouTube from "react-youtube";
import { useParams, Link } from "react-router-dom";
import { useVideo } from "../../Context/VideoContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../../Context/UserContext";
import PlaylistToggle from "./PlaylistToggle";
import SubscribeToggle from "./SubscribeButton";
import LikeToggle from "./LikeButton";
import { VideoPlayerLoader } from "../index";
import { ToastContainer } from "react-toastify";

const VideoPlayer = () => {
  const { videoId, channelId } = useParams();
  const [curChannel, SetCurChannel] = useState("");
  const [curVideo, setCurVideo] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const { state, dispatch } = useUser();

  const { apiData } = useVideo();

  const addToWatchHistory = () => {
    console.log("Added to history");
  };

  const getChannelData = async () => {
    await axios
      .get(`https://www.glitcheads.io/musicer/api/channels/${channelId}`)
      .then((res) => {
        SetCurChannel(res.data);
        setCurVideo(
          res.data.creatorVideos.find((video) => video.videoId === videoId)
        );
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
    <div className="videoPlayerContainer">
      {/* <ToastContainer /> */}
      <div className="videoPlayerFrameWrapper">
        <YouTube
          className="videoPlayer"
          videoId={videoId}
          onPlay={addToWatchHistory}
        />
      </div>
      {isLoading ? (
        <VideoPlayerLoader />
      ) : (
        <div className="videoCardInfoContainer">
          <Link to={`/channels/${channelId}`}>
            <img
              className="videoCardChannelAvatar"
              src={curChannel.creatorAvatar}
              alt="Channel Avatar"
            />
          </Link>
          <div className="videoCardChannelInfoContainer">
            <Link to={`/watch/${channelId}/${videoId}`}>
              <h1 className="videoCardTitle">{curVideo.videoTitle}</h1>
            </Link>
            <Link to={`/channels/${channelId}`}>
              <h3 className="videoCardChannelTitle">
                {curChannel.creatorName}
              </h3>
            </Link>
          </div>
          <div className="videoCardBtnContainer">
            <SubscribeToggle channelId={channelId} curChannel={curChannel} />

            <div className="toggleBtnWrapper">
              <PlaylistToggle videoId={videoId} channelId={channelId} />
              <LikeToggle
                videoId={videoId}
                channelId={channelId}
                curChannel={curChannel}
                curVideo={curVideo}
              />
              {/* {state.showLoginModal && (
                <div className="signinModal">
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
              )} */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
