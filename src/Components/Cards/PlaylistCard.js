import "./playlistCard.css";
import PlaylistPlaySharpIcon from "@material-ui/icons/PlaylistPlaySharp";

import { Link } from "react-router-dom";

function PlaylistCard({ playlistName, videos }) {
  return (
    <div className="playlistCardContainer">
      <Link to={`/playlist/${playlistName}`}>
        <div className="playlistThumbnailWrapper">
          <div className="thumbnailImage">
            <img
              className="playlistThumbnail"
              src={`https://img.youtube.com/vi/${videos[0].videoId}/hq720.jpg`}
              alt="Thumbnail"
            />
          </div>
          <div className="playlistVideoCountWrapper">
            <PlaylistPlaySharpIcon className="playlistThumbIcon" />
            <h3 className="playlistVideoCounter">{videos.length}</h3>
          </div>
        </div>
        <h2 className="playlistName">{playlistName}</h2>
      </Link>
    </div>
  );
}
export default PlaylistCard;
