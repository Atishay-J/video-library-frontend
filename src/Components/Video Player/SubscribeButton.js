import { useUser } from "../../Context/UserContext";

const SubscribeToggle = ({ channelId, curChannel }) => {
  const { state, dispatch } = useUser();
  return (
    <div className="subscribeToggleContainer">
      <button
        onClick={() =>
          dispatch({
            type: "SUBSCRIBE_TOGGLE",
            payload: {
              channelId,
              creatorAvatar: curChannel.creatorAvatar,
              creatorName: curChannel.creatorName,
            },
          })
        }
      >
        {state.subscribedChannels.find(
          (channel) => channel.channelId === channelId
        )
          ? "Unsubscribe"
          : "Subscribe"}
      </button>
    </div>
  );
};

export default SubscribeToggle;
