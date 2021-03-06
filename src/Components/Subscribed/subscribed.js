import React from "react";

import { useUser } from "../../Context/UserContext";
import SubscribedCard from "../Cards/SubscribedCard";
import "./subscribed.css";

const Subscribed = () => {
  const { state } = useUser();

  return (
    <div className="playlistContainer container ">
      <h1 className="heading-l text-center">subscribed Channels</h1>

      {state.isUserLoggedIn ? (
        <div className="subscribedWrapper flex-cont space-around flex-wrap">
          {state.userData.subscribedChannels.length > 0 ? (
            state.userData.subscribedChannels.map((item) => (
              <SubscribedCard
                key={item.channelId}
                channelAvatar={item.creatorAvatar}
                channelName={item.creatorName}
                channelId={item.channelId}
              />
            ))
          ) : (
            <h1 className="heading-m mt15">No Subscriptions</h1>
          )}
        </div>
      ) : (
        <h1 className="heading-m mt15 text-center">Log In to view</h1>
      )}
    </div>
  );
};

export default Subscribed;
