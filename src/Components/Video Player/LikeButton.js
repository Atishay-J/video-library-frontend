import { useUser } from "../../Context/UserContext";

import ThumbUpAltSharpIcon from "@material-ui/icons/ThumbUpAltSharp";
const LikeToggle = ({ videoId, channelId, curChannel, curVideo }) => {
  const { state, dispatch } = useUser();
  return (
    <div className="likeToggleContainer">
      <button
        className="likeToggleBtn"
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
        {state.likedVideos.find((video) => video.videoId === videoId) ? (
          <ThumbUpAltSharpIcon classes={{ root: "dislike" }} />
        ) : (
          <ThumbUpAltSharpIcon classes={{ root: "like" }} />
        )}
      </button>
    </div>
  );
};

export default LikeToggle;
