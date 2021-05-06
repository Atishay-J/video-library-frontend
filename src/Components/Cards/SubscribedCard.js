import React from "react";

import { useUser } from "../../Context/UserContext";
import "./subscribedCard.css";

const SubscribedCard = ({ channelAvatar, channelName, channelId }) => {
  const { state, dispatch } = useUser();

  return (
    <div className="subscribedCardContainer mt15">
      <div className="subscirbeChannelInfo">
        <h3 className="subscribedChannelName">{channelName}</h3>
        <img
          className="subsribedChannelAvatar"
          src={channelAvatar}
          alt="Channel Avatar"
        />
      </div>
      <button
        className="subscribeCardBtn"
        onClick={() =>
          dispatch({
            type: "SUBSCRIBE_TOGGLE",
            payload: { channelId },
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

export default SubscribedCard;
