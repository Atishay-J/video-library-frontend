import PlaylistModal from "../Modals/PlaylistModal";
import PlaylistAddSharpIcon from "@material-ui/icons/PlaylistAddSharp";
import { useState } from "react";
import { useUser } from "../../Context/UserContext";
import { toast } from "react-toastify";

const PlaylistToggle = ({ videoId, channelId }) => {
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);

  const { state } = useUser();

  const addToPlaylist = () => {
    if (state.isUserLoggedIn) {
      return setShowPlaylistModal(true);
    }
    toast.dark("Please login to save playlist");
  };

  return (
    <div className="PlaylistToggleContainer">
      {showPlaylistModal ? (
        <PlaylistModal
          videoId={videoId}
          channelId={channelId}
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
