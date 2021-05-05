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
  curChannel: "",
  curVideo: "",
  isLoading: true,
};

export const VideoProvider = ({ children }) => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/videos").then((res) => {
      setApiData(res.data);
    });
  }, []);

  return (
    <VideoContext.Provider value={{ apiData }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = () => {
  return useContext(VideoContext);
};
