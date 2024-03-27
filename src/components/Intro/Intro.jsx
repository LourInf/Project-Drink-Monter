import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faCirclePause,
} from "@fortawesome/free-regular-svg-icons";
import introVideo from "../../assets/intro-video.mp4";
import "./Intro.css";

export const Intro = () => {
  const [playVideo, setPlayVideo] = useState(true); //set to true to match autoPlay
  const vidRef = useRef();

  const togglePlayPause = () => {
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className="intro-video-container">
      <video
        src={introVideo}
        type="video/mp4"
        ref={vidRef}
        loop
        muted
        controls={false}
        autoPlay
      />
      <div className="video-overlay d-flex flex-column">
        <h1>
          Podnosząc Poziom Twojego Wydarzenia za Pomocą Wyjątkowych Koktajli
        </h1>
        <a className="cta-button mt-5" href="#contactUs" role="button">
          Skontaktuj się z nami
        </a>
      </div>
      <div className="video-controls">
        <div onClick={togglePlayPause}>
          {playVideo ? (
            <FontAwesomeIcon icon={faCirclePause} color="#fff" fontSize={30} />
          ) : (
            <FontAwesomeIcon icon={faCirclePlay} color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};
