import { toast } from "react-toastify";
import { useUser } from "../../Context/UserContext";

const SubscribeToggle = ({ channelId, curChannel }) => {
  const { state, dispatch } = useUser();

  const subscribe = () => {
    if (state.isUserLoggedIn) {
      return dispatch({
        type: "SUBSCRIBE_TOGGLE",
        payload: {
          channelId,
          creatorAvatar: curChannel.creatorAvatar,
          creatorName: curChannel.creatorName,
        },
      });
    }
    toast.dark("Please login to subscribe");
  };

  return (
    <div className="subscribeToggleContainer">
      <button className="subscribeBtn" onClick={subscribe}>
        {state.subscribedChannels?.find(
          (channel) => channel.channelId === channelId
        )
          ? "Unsubscribe"
          : "Subscribe"}
      </button>
    </div>
  );
};

export default SubscribeToggle;
