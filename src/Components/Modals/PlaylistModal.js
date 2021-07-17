import { useState } from "react";
import { useUser } from "../../Context/UserContext";
import { toast } from "react-toastify";

const PlaylistModal = ({ videoId, channelId, setShowPlaylistModal }) => {
  const { dispatch } = useUser();
  const [playlistInput, setPlaylistInput] = useState("");

  const addToPlaylist = () => {
    playlistInput !== "" &&
      dispatch({
        type: "ADD_TO_PLAYLIST",
        payload: { videoId, playlistname: playlistInput, channelId },
      });

    toast.dark(`Added to ${playlistInput}`, { position: "bottom-right" });

    setShowPlaylistModal(false);
  };

  return (
    <div className="playlistModal">
      <div className="playlistModalContent">
        <span
          className="playlistModalClose"
          onClick={() => setShowPlaylistModal(false)}
        >
          &times;
        </span>
        <div className="playlistModalData">
          <div className="playlistModalInputWrapper">
            <input
              className="playlistModalInput simpleText-input"
              type="text"
              placeholder="Playlist Name"
              value={playlistInput}
              onChange={(e) => setPlaylistInput(e.target.value)}
            />
            <button
              className="playlistModalSubmitBtn primary submitBtn"
              onClick={addToPlaylist}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistModal;
