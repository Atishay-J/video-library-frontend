import React from "react";

import { useUser } from "../../Context/UserContext";
import SubscribedCard from "../Cards/SubscribedCard";

const Subscribed = () => {
  const { state } = useUser();

  console.log("STate from SUbscirbe", state);

  return (
    <div className="playlistContainer">
      <h1>subscribed</h1>
      <h1>subscribed</h1>
      <h1>subscribed</h1>
      <h1>subscribed</h1>
      {state.isUserLoggedIn ? (
        <div className="subscribedWrapper">
          {state.subscribedChannels.length > 0 ? (
            state.subscribedChannels.map((item) => (
              <SubscribedCard
                channelAvatar={item.creatorAvatar}
                channelName={item.creatorName}
                channelId={item.channelId}
              />
            ))
          ) : (
            <h1>No videos</h1>
          )}
        </div>
      ) : (
        <h1>Log In to view</h1>
      )}
    </div>
  );
};

export default Subscribed;
