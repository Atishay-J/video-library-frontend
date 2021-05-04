import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [apiData, setApiData] = useState([]);

  const fetchApiData = async () => {
    axios
      .get("http://localhost:8000/api/videos")
      .then((res) => setApiData(res.data))
      .catch((err) => console.log("Error while fetching data", err));
  };

  useEffect(() => {
    fetchApiData();
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
