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
  console.log("REducer acalllelffsfd", state);
  switch (action.type) {
    case "SHOW_PLAYLIST_MODAL":
      console.log("Gottt theee switttchcccch");
      return { ...state, showPlaylistModal: true };
    default:
      return state;

    case "HIDE_PLAYLIST_MODAL":
      return { ...state, showPlaylistModal: false };
  }
};

export const VideoProvider = ({ children }) => {
  const [apiData, setApiData] = useState([]);

  const [videoState, videoDispatch] = useReducer(videoReducer, initState);

  useEffect(() => {
    axios.get("http://localhost:8000/api/videos").then((res) => {
      setApiData(res.data);
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
