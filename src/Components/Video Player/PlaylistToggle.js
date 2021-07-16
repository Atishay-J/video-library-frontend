import PlaylistModal from "../Modals/PlaylistModal";

import PlaylistAddSharpIcon from "@material-ui/icons/PlaylistAddSharp";
import { useState } from "react";

const PlaylistToggle = ({ videoId, channelId, curChannel, curVideo }) => {
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);

  return (
    <div className="PlaylistToggleContainer">
      {showPlaylistModal ? (
        <PlaylistModal
          videoId={videoId}
          channelId={channelId}
          curChannel={curChannel}
          curVideo={curVideo}
          setShowPlaylistModal={setShowPlaylistModal}
        />
      ) : (
        <button
          className="addToPlaylistBtn"
          onClick={() => setShowPlaylistModal(true)}
        >
          <PlaylistAddSharpIcon classes={{ root: "addToPlaylist" }} />
        </button>
      )}
    </div>
  );
};

export default PlaylistToggle;
