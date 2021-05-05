import "./videoCard.css";
import { Link } from "react-router-dom";

const VideoCard = ({
  videoId,
  videoTitle,
  videoDuration,
  channelId,
  channelName,
  channelAvatar,
}) => {
  let thumbnailImage = `https://img.youtube.com/vi/${videoId}/hq720.jpg`;

  return (
    <div className="videoCardContainer">
      <div className="videoCardThumbnailContainer">
        <Link to={`/watch/${channelId}/${videoId}`}>
          <img
            className="videoCardThumbnailImage"
            src={thumbnailImage}
            alt="Thumbnail"
          />
          <span className="videoDuration">{videoDuration}</span>
        </Link>
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
          <Link to={`/watch/${channelId}/${videoId}`}>
            <h1 className="videoCardTitle">{videoTitle}</h1>
          </Link>
          <Link to={`/channels/${channelId}`}>
            <h3 className="videoCardChannelTitle">{channelName}</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
