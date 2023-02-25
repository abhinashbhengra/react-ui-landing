import React from "react";
import styled from "styled-components";
import { SecondaryButton } from "./buttons/SecondaryButton";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-container">
        <div className="left-section">
          <img src="./images/logo.png" alt="logo" />
          <p>Update right to your inbox</p>
          <div className="email-button">
            <input type="text" placeholder="Email Address" />
            <SecondaryButton>Subscribe</SecondaryButton>
          </div>
          <div className="left-details">
            <p> © COMPANY 2023</p>
            <p>Privacy Policy</p>
            <p>Terms of use</p>
          </div>
        </div>
        <div className="right-section">
          <div className="section1">
            <div className="story">
              <p className="bold">Our Story</p>
              <p>FAQ</p>
              <p>Contact</p>
            </div>
            <div className="title">
              <p className="bold">Title</p>
              <p>title</p>
              <p>title</p>
              <p>title</p>
            </div>
            <div className="title">
              <p className="bold">Title</p>
              <p>title</p>
              <p>title</p>
              <p>title</p>
            </div>
          </div>
          <div className="section2">
            <div className="link">
              <img src="./images/Facebook.png" alt="facebook" />
            </div>
            <div className="link">
              <img src="./images/Linkedin.png" alt="linkedin" />
            </div>
            <div className="link">
              <img src="./images/Instagram.png" alt="intagram" />
            </div>
            <div className="link">
              <img src="./images/Twitter.png" alt="twitter" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* border: 2px solid red; */
  /* height: 413px; */
  display: flex;
  padding: 70px 80px;
  justify-content: center;
  align-items: center;

  .footer-container {
    /* border: 2px solid green; */
    display: flex;
    align-items: center;
    gap: 900px;

    .left-section {
      /* border: 2px solid purple; */
      img {
        margin-bottom: 75px;
      }
      p {
        margin-bottom: 12px;
        font-size: 18px;
      }

      .email-button {
        margin-bottom: 33px;
        input {
          width: 320px;
          height: 54px;
          margin-right: 20px;
          border-radius: 10px;
          outline: none;
          padding-left: 30px;
          font-size: 18px;
        }
      }

      .left-details {
        display: flex;
        font-weight: 600;
        gap: 34px;
      }
    }

    .right-section {
      /* border: 2px solid purple; */
      .section1 {
        display: flex;
        margin-bottom: 92px;
        gap: 60px;
        .story {
          margin-top: 16px;
          .bold {
            font-weight: 600;
            margin-bottom: 24px;
          }
          p {
            font-size: 18px;
            margin-bottom: 24px;
          }
        }
        .title {
          margin-right: 60px;
          margin-top: 18px;
          .bold {
            font-weight: 600;
            margin-bottom: 24px;
          }
          p {
            font-size: 18px;
            margin-bottom: 16px;
          }
        }
      }

      .section2 {
        display: flex;
        justify-content: end;
        gap: 30px;

        .link {
          font-size: 30px;
        }
      }
    }
  }
`;
export default Footer;
