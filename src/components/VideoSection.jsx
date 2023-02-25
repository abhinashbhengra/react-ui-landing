import React from "react";
import styled from "styled-components";

const VideoSection = () => {
  return (
    <Wrapper>
      <div className="video-container">
        <img src="./images/play.png" alt="play" />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 600px;
  background-color: #daf2f1;
  display: flex;
  justify-content: center;
  align-items: center;

  .video-container {
    background-image: linear-gradient(#2d2d2d, #757575);
    height: 460px;
    width: 765px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }
`;
export default VideoSection;
