import { useUser } from "../../Context/UserContext";
import { useVideo } from "../../Context/VideoContext";
import PlaylistModal from "../Modals/PlaylistModal";

import PlaylistAddSharpIcon from "@material-ui/icons/PlaylistAddSharp";

const PlaylistToggle = ({ videoId, channelId, curChannel, curVideo }) => {
  const { state, dispatch } = useUser();

  const { videoState, videoDispatch } = useVideo();

  return (
    <div className="PlaylistToggleContainer">
      {videoState.showPlaylistModal ? (
        <PlaylistModal
          videoId={videoId}
          channelId={channelId}
          curChannel={curChannel}
          curVideo={curVideo}
        />
      ) : (
        <button
          className="addToPlaylistBtn"
          onClick={() => videoDispatch({ type: "SHOW_PLAYLIST_MODAL" })}
        >
          <PlaylistAddSharpIcon classes={{ root: "addToPlaylist" }} />
        </button>
      )}
    </div>
  );
};

export default PlaylistToggle;
