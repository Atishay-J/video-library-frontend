import React, { useState, useEffect } from "react";
import axios from "axios";
import { useVideo } from "../../Context/VideoContext";

const Videos = () => {
  const { apiData } = useVideo();

  return (
    <>
      <h1>Video Page </h1>

      <div>
        <h1>Filtered video </h1>
        {apiData.map((item) => (
          <li>{item.creatorName}</li>
        ))}
      </div>

      <div>
        <h1>Filtered video</h1>
        {apiData.map((item) => (
          <li>{item.creatorName}</li>
        ))}
      </div>
      <div>
        <h1>Filtered video</h1>
        {apiData.map((item) => (
          <li>{item.creatorName}</li>
        ))}
      </div>
      <div>
        <h1>Filtered video</h1>
        {apiData.map((item) => (
          <li>{item.creatorName}</li>
        ))}
      </div>
      <div>
        <h1>Filtered video</h1>
        {apiData.map((item) => (
          <li>{item.creatorName}</li>
        ))}
      </div>
      <div>
        <h1>Filtered video</h1>
        {apiData.map((item) => (
          <li>{item.creatorName}</li>
        ))}
      </div>
      <div>
        <h1>Filtered video</h1>
        {apiData.map((item) => (
          <li>{item.creatorName}</li>
        ))}
      </div>
    </>
  );
};

export default Videos;
