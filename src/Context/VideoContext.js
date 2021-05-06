import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import axios from "axios";

export const VideoContext = createContext();

const initState = {
  isLoading: true,
  showPlaylistModal: false,
};

const videoReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_PLAYLIST_MODAL":
      return { ...state, showPlaylistModal: true };
    default:
      return state;

    case "HIDE_PLAYLIST_MODAL":
      return { ...state, showPlaylistModal: false };

    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
  }
};

export const VideoProvider = ({ children }) => {
  const [apiData, setApiData] = useState([]);

  const [videoState, videoDispatch] = useReducer(videoReducer, initState);

  useEffect(() => {
    axios.get("https://metaphor-music.herokuapp.com/api/videos").then((res) => {
      setApiData(res.data);
      videoDispatch({ type: "SET_LOADING", payload: false });
    });
  }, []);

  return (
    <VideoContext.Provider value={{ apiData, videoState, videoDispatch }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = () => {
  return useContext(VideoContext);
};
