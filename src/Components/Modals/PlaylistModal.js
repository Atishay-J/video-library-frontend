import { useState } from "react";
import { useUser } from "../../Context/UserContext";
import { useVideo } from "../../Context/VideoContext";

const PlaylistModal = ({ videoId, channelId, curChannel, curVideo }) => {
  const { videoState, videoDispatch } = useVideo();
  const { state, dispatch } = useUser();

  const [playlistInput, setPlaylistInput] = useState("");

  return (
    <div className="playlistModal">
      <div className="playlistModalContent">
        <span
          className="playlistModalClose"
          onClick={() => videoDispatch({ type: "HIDE_PLAYLIST_MODAL" })}
        >
          &times;
        </span>
        <div className="playlistModalData">
          <div className="playlistModalInputWrapper">
            <input
              type="text"
              placeholder="Playlist Name"
              value={playlistInput}
              className="playlistModalInput"
              onChange={(e) => setPlaylistInput(e.target.value)}
            />
            <button
              className="playlistModalSubmitBtn"
              onClick={() => {
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
                videoDispatch({ type: "HIDE_PLAYLIST_MODAL" });
              }}
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
