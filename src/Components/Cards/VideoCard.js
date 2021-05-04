import "./videoCard.css";
import { Link } from "react-router-dom";
import { useVideo } from "../../Context/VideoContext";

const VideoCard = ({
  videoId,
  videoTitle,
  videoDuration,
  channelId,
  channelName,
  channelAvatar,
}) => {
  const { dispatch } = useVideo();

  console.log("Chhhaaannneel Id", channelId);

  let thumbnailImage = `https://img.youtube.com/vi/${videoId}/hq720.jpg`;

  return (
    <div className="videoCardContainer">
      <div className="videoCardThumbnailContainer">
        <img
          className="videoCardThumbnailImage"
          src={thumbnailImage}
          alt="Thumbnail"
        />
        <span className="videoDuration">{videoDuration}</span>
      </div>
      <div className="videoCardInfoContainer">
        <Link to={`/channels/${channelId}`}>
          <img
            className="videoCardChannelAvatar"
            src={channelAvatar}
            alt="Channel Avatar"
          />
        </Link>
        <div className="videoCardChannelInfoContainer">
          <h1 className="videoCardTitle">{videoTitle}</h1>
          <h3 className="videoCardChannelTitle">{channelName}</h3>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
