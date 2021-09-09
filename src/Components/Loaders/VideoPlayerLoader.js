import "../Video Player/videoPlayer.css";
import Skeleton from "react-loading-skeleton";

function VideoPlayerLoader() {
  return (
    <div className="videoCardInfoContainer">
      <Skeleton width={"2.5rem"} height={"2.5rem"} circle={true} />
      <div className="videoCardChannelInfoContainer">
        <Skeleton width={"20rem"} height={"2rem"} />
      </div>
      <div className="videoCardBtnContainer">
        <Skeleton width={"4.5rem"} height={"2rem"} />
      </div>
    </div>
  );
}

export default VideoPlayerLoader;
