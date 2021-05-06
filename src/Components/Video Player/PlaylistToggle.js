const PlaylistToggle = ({ videoId, channelId, curChannel, curVideo }) => {
  return (
    <div className="PlaylistToggleContainer">
      <button
        onClick={() =>
          dispatch({
            type: "PLAYLIST_TOGGLE",
            payload: {
              videoId,
              channelId,
              creatorAvatar: curChannel.creatorAvatar,
              creatorName: curChannel.creatorName,
              videoTitle: curVideo.videoTitle,
              videoDuration: curVideo.videoDuration,
            },
          })
        }
      >
        {state.playlists.find((video) => video.videoId === videoId)
          ? "Remove from playlist"
          : "Add to playlist"}
      </button>
    </div>
  );
};

export default PlaylistToggle;
