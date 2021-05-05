import "./videoPlayer.css";
import YouTube from "react-youtube";
import { useParams, Link } from "react-router-dom";
import { useVideo } from "../../Context/VideoContext";
import { useEffect, useState } from "react";
import axios from "axios";

const VideoPlayer = () => {
  const { videoId, channelId } = useParams();
  const [curChannel, SetCurChannel] = useState("");
  const [curVideo, setCurVideo] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const addToWatchHistory = () => {
    console.log("Added to history");
  };

  //**************************************** */
  //******* TRY TO DO THIS IN CONTEXT ******/
  //**************************************** */

  const getChannelData = async () => {
    await axios
      .get(`http://localhost:8000/api/channels/${channelId}`)
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

  console.log("Videeeeoo Id", videoId);
  console.log("Currenntt video", curVideo);

  useEffect(() => {
    getChannelData();
  }, []);

  return (
    <div className="videoPlayerContainer">
      <h1>Video Player</h1>

      <div className="videoPlayerFrameWrapper">
        <YouTube videoId={videoId} onPlay={addToWatchHistory} />
      </div>
      {isLoading !== true && (
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
            <div className="subcribeButtonContainer">
              <button>Subscribe</button>
              <div className="addToButtonsWrapper">
                <button>Add to playlist</button>
                <button>Like</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
