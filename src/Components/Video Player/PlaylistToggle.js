import PlaylistModal from "../Modals/PlaylistModal";
import PlaylistAddSharpIcon from "@material-ui/icons/PlaylistAddSharp";
import { useState, useEffect } from "react";
import { useUser } from "../../Context/UserContext";
import { toast } from "react-toastify";

const PlaylistToggle = ({ videoId, channelId, curChannel, curVideo }) => {
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);

  const { state } = useUser();

  useEffect(() => {
    console.log("PLaylist s", state);
  }, [state]);

  const addToPlaylist = () => {
    if (state.isUserLoggedIn) {
      return setShowPlaylistModal(true);
    }
    toast.dark("Please login to save playlist");
  };

  return (
    <div className="PlaylistToggleContainer">
      {/* <ToastContainer /> */}
      {showPlaylistModal ? (
        <PlaylistModal
          videoId={videoId}
          channelId={channelId}
          curChannel={curChannel}
          curVideo={curVideo}
          setShowPlaylistModal={setShowPlaylistModal}
        />
      ) : (
        <button className="addToPlaylistBtn" onClick={addToPlaylist}>
          <PlaylistAddSharpIcon classes={{ root: "addToPlaylist" }} />
        </button>
      )}
    </div>
  );
};

export default PlaylistToggle;
