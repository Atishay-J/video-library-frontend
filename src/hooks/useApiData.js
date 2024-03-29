import { useEffect, useState } from "react";
import axios from "axios";
import { useVideo } from "../Context/VideoContext";

const useApiData = () => {
  const [apiData, setApiData] = useState("");

  const { videoDispatch } = useVideo();

  const fetchData = async () => {
    await axios
      .get("https://www.glitcheads.io/musicer/api/videos")
      // .get("http://localhost:8000/api/videos")
      .then((res) => {
        setApiData(res.data);
      })
      .catch((err) => console.log("Some erorr occured"));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const saveVideos = () => {
    let videos = [];
    let channels = [];
    apiData?.map((channel) => {
      return (
        (videos = [...videos, ...channel.creatorVideos]),
        (channels = [...channels, channel])
      );
    });

    videoDispatch({ type: "SET_VIDEOS", payload: { videos, channels } });
  };

  useEffect(() => {
    if (apiData.length) {
      saveVideos();
    }
  }, [apiData]);

  return;
};
export default useApiData;
