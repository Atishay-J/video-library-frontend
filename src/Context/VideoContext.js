import React, { createContext, useContext, useState, useReducer } from "react";

export const VideoContext = createContext();

const initState = {
  isLoading: true,
  videos: [],
  channels: [],
};

const videoReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };

    case "SET_VIDEOS":
      return {
        ...state,
        videos: action.payload.videos,
        channels: action.payload.channels,
        isLoading: false,
      };

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
