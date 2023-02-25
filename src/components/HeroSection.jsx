import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "./buttons/PrimaryButton";
import { CtaButton } from "./buttons/CtaButton";

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="info">
        <div className="info-heading">
          <h1>I'm a header</h1>
        </div>
        <div className="info-description">
          <p>
            Fresh ingredients slowly baked into our super delicious food.
            Available in a range of delicious flavors, delivered to your door.
          </p>
        </div>
        <div className="info-btn">
          <PrimaryButton>Primary</PrimaryButton>
          <CtaButton>CTA</CtaButton>
        </div>
      </div>
      <div className="video"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 600px;
  background-color: #eef2ff;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .info-heading {
    width: 420px;
    line-height: 100px;
    padding-bottom: 30px;
    h1 {
      font-size: 80px;
      font-weight: 800;
    }
  }

  .info-description {
    width: 466px;
    padding-bottom: 40px;

    p {
      color: #2d2d2d;
      opacity: calc(0.5);
      font-size: 18px;
      line-height: 32px;
    }
  }

  .info-btn {
    display: flex;
    gap: 30px;
  }

  .video {
    height: 460px;
    width: 500px;
    background-color: #c4c4c4;
    border-radius: 10px;
  }
`;

export default HeroSection;
