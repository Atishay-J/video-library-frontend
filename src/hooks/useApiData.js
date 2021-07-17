import { useEffect, useState } from "react";
import axios from "axios";
import { useVideo } from "../Context/VideoContext";

const useApiData = () => {
  const [apiData, setApiData] = useState("");

  const { videoDispatch } = useVideo();

  const fetchData = async () => {
    console.log("FETtchingggg");
    await axios
      .get("https://metaphor-music.herokuapp.com/api/videos")
      .then((res) => {
        console.log("RESPONSEEE", res);
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

    // console.log("CHaneel dataa", videos, "and \n", channels);
  };

  useEffect(() => {
    // console.log("API DATA CHANGED", apiData);
    if (apiData.length) {
      saveVideos();
    }
  }, [apiData]);

  return;
};
export default useApiData;
