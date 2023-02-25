import React from "react";
import styled from "styled-components";

const Feedback = () => {
  return (
    <Wrapper>
      <div className="feedback-container">
        <p className="testimony">
          “User quote User quote User quote User quote User quote User quote
          User quote User quote User quote User quote User quote User quote User
          quote User quote User quote User quote”
        </p>
        <div className="user">
          <div className="user-avatar"></div>
          <div className="details">
            <p>Name</p>
            <span>★★★★★</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #fefbf2;
  height: 500px;
  padding: 110px 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  .feedback-container {
    width: 920px;
    .testimony {
      font-size: 24px;
      font-weight: 600;
      line-height: 40px;
      margin-bottom: 80px;
    }
    .user {
      display: flex;
      gap: 20px;
      align-items: center;

      .user-avatar {
        width: 80px;
        height: 80px;
        border-radius: 100%;
        background-color: #c4c4c4;
        border: 2px solid #b1b1b1;
      }

      .details p {
        font-size: 18px;
        color: #c4c4c4;
      }
    }
  }
`;

export default Feedback;
