import "./videoCard.css";
import { Link } from "react-router-dom";
import { useVideo } from "../../Context/VideoContext";

const PlaylistVideoCard = ({ video }) => {
  const { apiData, videoState } = useVideo();

  const retriveCurrentVideoData = () => {
    let allVideos = [];

    apiData.map(
      (creator) => (allVideos = [...allVideos, ...creator.creatorVideos])
    );
    console.log("ALLL VIDEOSSS", allVideos);
  };

  retriveCurrentVideoData();

  console.log(
    "thingsss",
    apiData.map((creators) =>
      creators.creatorVideos.find((video) => video.videoId === video)
    )
  );

  console.log("API DATA", apiData);

  let thumbnailImage = `https://img.youtube.com/vi/${video}/hq720.jpg`;

  console.log("VIDEO I GOT IN ", video);

  return (
    <div className="videoCardContainer">
      <h1>{video}</h1>

      {/* <div className="videoCardThumbnailContainer">
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
      </div> */}
    </div>
  );
};

export default PlaylistVideoCard;
