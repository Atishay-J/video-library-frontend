import { createContext, useContext, useReducer } from "react";
import { useVideo } from "./VideoContext";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const wasUserLoggedIn = localStorage.getItem("isUserLoggedIn");

  console.log("What this sayssss=====", wasUserLoggedIn);

  const initState = {
    isUserLoggedIn: wasUserLoggedIn !== null ? true : false,
    subscribedChannels: [],
    likedVideos: [],
    playlists: [],
    showLoginModal: false,
  };

  const userReducer = (state, action) => {
    console.log("Reducer askeeeeeeeddd");

    console.log("Action", action);

    switch (action.type) {
      case "SIGN_IN":
        if (action.payload.status) {
          localStorage.setItem("isUserLoggedIn", "true");

          localStorage.setItem(
            "likedVideos",
            JSON.stringify(action.payload.userData.likedVideos)
          );
          localStorage.setItem(
            "subscribed",
            JSON.stringify(action.payload.userData.subscribed)
          );
          localStorage.setItem(
            "history",
            JSON.stringify(action.payload.userData.history)
          );
          localStorage.setItem(
            "playlist",
            JSON.stringify(action.payload.userData.playlist)
          );
          return { ...state, isUserLoggedIn: true };
        }

        return state;

      case "SUBSCRIBE_TOGGLE": {
        let channelId = action.payload.channelId;
        let creatorAvatar = action.payload.creatorAvatar;
        let creatorName = action.payload.creatorName;

        console.log("Type offf chaneeel iiid", typeof channelId);

        if (state.isUserLoggedIn) {
          if (
            state.subscribedChannels &&
            state.subscribedChannels.find(
              (channel) => channel.channelId === channelId
            )
          ) {
            return {
              ...state,
              subscribedChannels: state.subscribedChannels.filter(
                (channel) => channel.channelId !== channelId
              ),
            };
          }
          return {
            ...state,
            subscribedChannels: [
              ...state.subscribedChannels,
              { channelId, creatorName, creatorAvatar },
            ],
          };
        }
        return { ...state, showLoginModal: true };
      }

      case "PLAYLIST_TOGGLE": {
        let videoId = action.payload.videoId;
        let channelId = action.payload.channelId;
        let creatorAvatar = action.payload.creatorAvatar;
        let creatorName = action.payload.creatorName;
        let videoTitle = action.payload.videoTitle;
        let videoDuration = action.payload.videoDuration;

        if (state.isUserLoggedIn) {
          if (state.playlists.find((video) => video.videoId === videoId)) {
            return {
              ...state,
              playlists: [
                state.playlists.filter((video) => video.videoId !== videoId),
              ],
            };
          }
          return {
            ...state,
            playlists: [
              ...state.playlists,
              {
                videoId,
                channelId,
                creatorAvatar,
                creatorName,
                videoDuration,
                videoTitle,
              },
            ],
          };
        }
        return { ...state, showLoginModal: true };
      }

      case "LIKE_TOGGLE": {
        let videoId = action.payload.videoId;
        let channelId = action.payload.channelId;
        let creatorAvatar = action.payload.creatorAvatar;
        let creatorName = action.payload.creatorName;
        let videoTitle = action.payload.videoTitle;
        let videoDuration = action.payload.videoDuration;

        if (state.isUserLoggedIn) {
          if (state.likedVideos.find((video) => video.videoId === videoId)) {
            return {
              ...state,
              likedVideos: state.likedVideos.filter(
                (video) => video.videoId !== videoId
              ),
            };
          }
          return {
            ...state,
            likedVideos: [
              ...state.likedVideos,
              {
                videoId,
                channelId,
                creatorAvatar,
                creatorName,
                videoDuration,
                videoTitle,
              },
            ],
          };
        }
        return { ...state, showLoginModal: true };
      }

      case "HIDE_LOGIN_MODAL":
        return { ...state, showLoginModal: false };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(userReducer, initState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
