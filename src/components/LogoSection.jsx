import React from "react";
import styled from "styled-components";

const LogoSection = () => {
  return (
    <Wrapper>
      <figure>
        <img src="./images/Nestle.png" alt="Nestle" />
      </figure>
      <figure>
        <img src="./images/Apple.png" alt="apple" />
      </figure>
      <figure>
        <img src="./images/Beco.png" alt="beco" />
      </figure>
      <figure>
        <img src="./images/Amazon.png" alt="amazon" />
      </figure>
      <figure>
        <img src="./images/Google.png" alt="google" />
      </figure>
      <figure>
        <img src="./images/Walmart.png" alt="walmart" />
      </figure>
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
