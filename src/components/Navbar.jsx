import React from "react";
import styled from "styled-components";
import { SecondaryButton } from "./buttons/SecondaryButton";

const Navbar = () => {
  return (
    <>
      <Wrapper>
        <div className="logo">
          <img src="./images/logo.png" alt="" />
        </div>
        <div className="menu-links">
          <div className="sign-btn">Sign-up</div>
          <SecondaryButton>Secondary</SecondaryButton>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .menu-links {
    display: flex;
    align-items: center;
  }

  .sign-btn {
    width: 100px;
    font-size: 18px;
  }
`;

export default Navbar;
