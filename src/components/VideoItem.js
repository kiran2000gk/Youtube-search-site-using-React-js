import React from "react";

const VideoItem = ({ video, handleVideoSelect }) => {
  return (
    <div
      onClick={() => handleVideoSelect(video)}
      className="container d-flex m-4 p-3 "
    >
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div className="m-5 p-4">
        <div>{video.snippet.title}</div>
      </div>
    </div>
  );
};
export default VideoItem;
