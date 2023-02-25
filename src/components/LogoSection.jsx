import React from "react";
import styled from "styled-components";

const LogoSection = () => {
  return (
    <Wrapper>
      <img src="./images/Nestle.png" alt="Nestle" />

      <img src="./images/Apple.png" alt="apple" />

      <img src="./images/Beco.png" alt="beco" />

      <img src="./images/Amazon.png" alt="amazon" />

      <img src="./images/Google.png" alt="google" />

      <img src="./images/Walmart.png" alt="walmart" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  height: 200px;
  padding: 80px 170px;
  align-items: center;
  justify-content: center;
  /* gap: 70px; */
  justify-content: space-around;
`;

export default LogoSection;
