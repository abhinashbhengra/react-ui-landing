import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "./buttons/PrimaryButton";

const CtaSection = () => {
  return (
    <Wrapper>
      <div className="container">
        <h1>Mid page CTA</h1>
        <p>
          You can ask us questions about your pet, and we will be happy to
          answer you!
        </p>
        <PrimaryButton>Contact us</PrimaryButton>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: #eef2ff;
  height: 502px;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 564px;
    text-align: center;
    h1 {
      font-size: 80px;
      font-weight: 600;
      line-height: 90px;
      margin-bottom: 30px;
    }
    p {
      font-size: 18px;
      margin-bottom: 40px;
    }
  }
`;
export default CtaSection;
