import { useUser } from "../../Context/UserContext";
import { useVideo } from "../../Context/VideoContext";
import PlaylistModal from "../Modals/PlaylistModal";

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
        <button onClick={() => videoDispatch({ type: "SHOW_PLAYLIST_MODAL" })}>
          Add to playlist{" "}
        </button>
      )}
    </div>
  );
};

export default PlaylistToggle;
