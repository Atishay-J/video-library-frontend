import React from "react";

import { useUser } from "../../Context/UserContext";
import "./subscribedCard.css";
import { Link } from "react-router-dom";

const SubscribedCard = ({ channelAvatar, channelName, channelId }) => {
  const { state, dispatch } = useUser();

  return (
    <div className="subscribedCardContainer mt15">
      <div className="subscribedChannelInfo">
        <Link to={`/channels/${channelId}`}>
          <img
            className="subscribedChannelAvatar"
            src={channelAvatar}
            alt="Channel Avatar"
          />
        </Link>

        <Link to={`/channels/${channelId}`}>
          <h3 className="subscribedChannelName">{channelName}</h3>
        </Link>
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
