import { useState } from "react";
import { useUser } from "../../Context/UserContext";

const PlaylistModal = ({
  videoId,
  channelId,
  curChannel,
  curVideo,
  setShowPlaylistModal,
}) => {
  const { dispatch } = useUser();

  const [playlistInput, setPlaylistInput] = useState("");

  const addToPlaylist = () => {
    playlistInput !== "" &&
      dispatch({
        type: "ADD_TO_PLAYLIST",
        payload: {
          videoId,
          channelId,
          creatorAvatar: curChannel.creatorAvatar,
          creatorName: curChannel.creatorName,
          videoTitle: curVideo.videoTitle,
          videoDuration: curVideo.videoDuration,
          playlistName: playlistInput,
        },
      });

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
