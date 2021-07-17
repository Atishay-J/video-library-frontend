import { createContext, useContext, useReducer } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const wasUserLoggedIn = localStorage.getItem("token");

  const initState = {
    isUserLoggedIn: wasUserLoggedIn !== null ? true : false,
    userData: {
      userId: "",
      username: "",
      subscribedChannels: [],
      likedVideos: [],
      playlists: [],
    },
    showLoginModal: false,
  };

  const userReducer = (state, action) => {
    switch (action.type) {
      case "SIGN_IN": {
        localStorage.setItem("token", action.payload.token);

        let userData = {
          userId: action.payload.userId,
          username: action.payload.username,
          subscribedChannels: [],
          likedVideos: [],
          playlists: [],
        };

        return { userData, isUserLoggedIn: true };
      }

      case "SIGN_OUT": {
        localStorage.removeItem("token");

        let userData = {
          userId: "",
          username: "",
          subscribedChannels: [],
          likedVideos: [],
          playlists: [],
        };

        return { userData, isUserLoggedIn: false };
      }

      case "SUBSCRIBE_TOGGLE": {
        let channelId = action.payload.channelId;
        let creatorAvatar = action.payload.creatorAvatar;
        let creatorName = action.payload.creatorName;

        let ifAlreadySubscribed = state.userData.subscribedChannels?.find(
          (channel) => channel.channelId === channelId
        );

        if (state.isUserLoggedIn) {
          if (ifAlreadySubscribed) {
            let removeSubscribed = state.userData.subscribedChannels.filter(
              (channel) => channel.channelId !== channelId
            );

            return {
              ...state,
              userData: {
                ...state.userData,
                subscribedChannels: removeSubscribed,
              },
            };
          }
          return {
            ...state,
            userData: {
              ...state.userData,
              subscribedChannels: [
                ...state.userData.subscribedChannels,
                { channelId, creatorAvatar, creatorName },
              ],
            },
          };
        }
        return { ...state, showLoginModal: true };
      }

      case "ADD_TO_PLAYLIST": {
        let isPlaylistExist = state.userData.playlists.find(
          ({ playlistName }) => playlistName === action.payload.playlistname
        );

        if (isPlaylistExist) {
          let copyPlaylist = JSON.parse(JSON.stringify(isPlaylistExist));

          copyPlaylist.videos.push({
            videoId: action.payload.videoId,
            channelId: action.payload.channelId,
          });

          let remainingPlaylists = state.userData.playlists.filter(
            ({ playlistName }) => playlistName !== action.payload.playlistname
          );

          return {
            ...state,
            userData: {
              ...state.userData,
              playlists: [copyPlaylist, ...remainingPlaylists],
            },
          };
        }

        return {
          ...state,
          userData: {
            ...state.userData,
            playlists: [
              {
                playlistName: action.payload.playlistname,
                videos: [
                  {
                    videoId: action.payload.videoId,
                    channelId: action.payload.channelId,
                  },
                ],
              },
              ...state.userData.playlists,
            ],
          },
        };
      }

      case "LIKE_TOGGLE": {
        let videoId = action.payload.videoId;
        let channelId = action.payload.channelId;

        let ifAlreadyLiked = state.userData.likedVideos.find(
          (video) => video.videoId === videoId
        );

        if (state.isUserLoggedIn) {
          if (ifAlreadyLiked) {
            let removeLiked = state.userData.likedVideos.filter(
              (video) => video.videoId !== videoId
            );

            return {
              ...state,
              userData: {
                ...state.userData,
                likedVideos: removeLiked,
              },
            };
          }
          return {
            ...state,
            userData: {
              ...state.userData,
              likedVideos: [{ videoId, channelId }],
            },
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
