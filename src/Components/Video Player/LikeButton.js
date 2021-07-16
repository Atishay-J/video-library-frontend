import { useUser } from "../../Context/UserContext";
import { toast } from "react-toastify";

import ThumbUpAltSharpIcon from "@material-ui/icons/ThumbUpAltSharp";
const LikeToggle = ({ videoId, channelId, curChannel, curVideo }) => {
  const { state, dispatch } = useUser();

  const handleLike = () => {
    if (state.isUserLoggedIn) {
      return dispatch({
        type: "LIKE_TOGGLE",
        payload: {
          videoId,
          channelId,
          creatorAvatar: curChannel.creatorAvatar,
          creatorName: curChannel.creatorName,
          videoTitle: curVideo.videoTitle,
          videoDuration: curVideo.videoDuration,
        },
      });
    }
    toast.dark("Please login to like");
  };

  return (
    <div className="likeToggleContainer">
      <button className="likeToggleBtn" onClick={handleLike}>
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
