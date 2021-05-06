import { createContext, useContext, useReducer } from "react";
import { useVideo } from "./VideoContext";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const wasUserLoggedIn = localStorage.getItem("isUserLoggedIn");

  const initState = {
    isUserLoggedIn: wasUserLoggedIn !== null ? true : false,
    subscribedChannels: [],
    likedVideos: [],
    playlists: [],
    showLoginModal: false,
  };

  const userReducer = (state, action) => {
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

      case "SIGN_OUT":
        localStorage.removeItem("isUserLoggedIn");
        return { ...state, isUserLoggedIn: false };

      case "SUBSCRIBE_TOGGLE": {
        let channelId = action.payload.channelId;
        let creatorAvatar = action.payload.creatorAvatar;
        let creatorName = action.payload.creatorName;

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

      case "ADD_TO_PLAYLIST": {
        let videoId = action.payload.videoId;
        let channelId = action.payload.channelId;
        let creatorAvatar = action.payload.creatorAvatar;
        let creatorName = action.payload.creatorName;
        let videoTitle = action.payload.videoTitle;
        let videoDuration = action.payload.videoDuration;
        let playlistName = action.payload.playlistName;

        if (state.isUserLoggedIn) {
          let availablePlaylist = state.playlists.find(
            (playlist) => playlist.playlistName === action.payload.playlistName
          );

          console.log("AVaaauull", availablePlaylist);

          // console.log("out SI IDE ", availablePlaylist.playlistName);

          if (
            availablePlaylist !== undefined &&
            availablePlaylist.playlistName === action.payload.playlistName
          ) {
            console.log("======================= \n ===================");
            console.log("IN SI IDE ", availablePlaylist.playlistName);
            availablePlaylist.videos.push({
              videoId,
              channelId,
              creatorAvatar,
              creatorName,
              videoTitle,
              videoDuration,
            });

            return state;
          }
          console.log("================= O U T S I D E  ===================");
          return {
            ...state,
            playlists: [
              ...state.playlists,
              {
                playlistName,
                videos: [
                  {
                    videoId,
                    channelId,
                    creatorAvatar,
                    creatorName,
                    videoTitle,
                    videoDuration,
                  },
                ],
              },
            ],
          };
        }
        return state;
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
