import React from "react";
import styled from "styled-components";

const Features = () => {
  return (
    <Wrapper>
      <div className="feature-main">
        <div className="feature-container">
          <div className="feature-img"></div>
          <div className="feature-title">Feature</div>
          <div className="feature-desc">
            Description Description Description Description Description
            Description
          </div>
        </div>
        <div className="feature-container">
          <div className="feature-img"></div>
          <div className="feature-title">Feature</div>
          <div className="feature-desc">
            Description Description Description Description Description
            Description
          </div>
        </div>
        <div className="feature-container">
          <div className="feature-img"></div>
          <div className="feature-title">Feature</div>
          <div className="feature-desc">
            Description Description Description Description Description
            Description
          </div>
        </div>
        <div className="feature-container">
          <div className="feature-img"></div>
          <div className="feature-title">Feature</div>
          <div className="feature-desc">
            Description Description Description Description Description
            Description
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;

  .feature-main {
    margin: 116px 90px;
    display: flex;
    gap: 60px;

    .feature-container {
      width: 230px;

      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      .feature-img {
        width: 85px;
        height: 85px;
        border-radius: 100%;
        background-color: #c4c4c4;
        border: 2px solid #767575;
        margin-bottom: 40px;
      }

      .feature-title {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 15px;
      }

      .feature-desc {
        font-size: 18px;
        font-weight: 400;
        line-height: 32px;
        color: #c4c4c4;
      }
    }
  }
`;
export default Features;
