import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div>
        <h1>Enter any keyword to load...</h1>
        <br />
        <p>
          Enjoy the videos and music you love, upload original content, and
          share it all with friends, family, and the world on YouTube.
        </p>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <div className=" ">
      <iframe
        src={videoSrc}
        allowFullScreen
        title="Video player"
        style={{ width: "1080px", height: "500px" }}
      />

      <h4 className="m-3 p-1">{video.snippet.title}</h4>
      <p className="m-3 p-1">{video.snippet.description}</p>
    </div>
  );
};

export default VideoDetail;
