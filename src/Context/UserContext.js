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
          subscribedChannels: [...action.payload.subscribed],
          likedVideos: [...action.payload.likedVideos],
          playlists: [...action.payload.playlist],
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

        if (state.isUserLoggedIn) {
          if (
            state.userData.subscribedChannels &&
            state.userData.subscribedChannels.find(
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
            userData: {
              ...state.userData,
              subscribedChannels: [
                ...state.subscribedChannels,
                { channelId, creatorName, creatorAvatar },
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

          console.log("Raming playlist", remainingPlaylists);

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

        // let videoId = action.payload.videoId;
        // let channelId = action.payload.channelId;
        // let creatorAvatar = action.payload.creatorAvatar;
        // let creatorName = action.payload.creatorName;
        // let videoTitle = action.payload.videoTitle;
        // let videoDuration = action.payload.videoDuration;
        // let playlistName = action.payload.playlistName;

        // if (state.isUserLoggedIn) {
        //   let availablePlaylist = state.userData.playlists.find(
        //     (playlist) => playlist.playlistName === action.payload.playlistName
        //   );

        //   if (
        //     availablePlaylist !== undefined &&
        //     availablePlaylist.playlistName === action.payload.playlistName
        //   ) {
        //     availablePlaylist.videos.push({
        //       videoId,
        //       channelId,
        //       creatorAvatar,
        //       creatorName,
        //       videoTitle,
        //       videoDuration,
        //     });

        //     return state;
        //   }

        //   return {
        //     ...state,
        //     playlists: [
        //       ...state.playlists,
        //       {
        //         playlistName,
        //         videos: [
        //           {
        //             videoId,
        //             channelId,
        //             creatorAvatar,
        //             creatorName,
        //             videoTitle,
        //             videoDuration,
        //           },
        //         ],
        //       },
        //     ],
        //   };
        // }
        // return { ...state, showLoginModal: true };
      }

      case "LIKE_TOGGLE": {
        let videoId = action.payload.videoId;
        // let channelId = action.payload.channelId;
        // let creatorAvatar = action.payload.creatorAvatar;
        // let creatorName = action.payload.creatorName;
        // let videoTitle = action.payload.videoTitle;
        // let videoDuration = action.payload.videoDuration;

        console.log("============= \n Like Called \n =========");

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
                // channelId,
                // creatorAvatar,
                // creatorName,
                // videoDuration,
                // videoTitle,
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
