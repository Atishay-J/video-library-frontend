import { useUser } from "../../Context/UserContext";

const LikeToggle = ({ videoId, channelId, curChannel, curVideo }) => {
  const { state, dispatch } = useUser();
  return (
    <div className="likeToggleContainer">
      <button
        onClick={() =>
          dispatch({
            type: "LIKE_TOGGLE",
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
        {state.likedVideos.find((video) => video.videoId === videoId)
          ? "Dislike"
          : "Like"}
      </button>
    </div>
  );
};

export default LikeToggle;
