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
  videos: [],
  channels: [],
};

const videoReducer = (state, action) => {
  console.log("Reducer Called");
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };

    case "SET_VIDEOS":
      console.log("Setting Videos", action.payload);
      return {
        ...state,
        videos: action.payload.videos,
        channels: action.payload.channels,
        isLoading: false,
      };

    case "SET_CHANNELS":
      console.log("Setting Channels", action.payload);
      return { ...state, channels: [action.payload] };

    default:
      return state;
  }
};

export const VideoProvider = ({ children }) => {
  const [apiData, setApiData] = useState([]);

  const [{ videos, channels, isLoading }, videoDispatch] = useReducer(
    videoReducer,
    initState
  );

  return (
    <VideoContext.Provider
      value={{ apiData, videos, channels, isLoading, videoDispatch }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = () => {
  return useContext(VideoContext);
};
