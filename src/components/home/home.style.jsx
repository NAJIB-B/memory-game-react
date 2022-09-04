import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const homeAnimation = keyframes`
    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }
`;

export const Area = styled.div`
  background: rgba(152, 68, 183, 1);
  background: -webkit-linear-gradient(to left, #8f94fb, rgba(152, 68, 183, 1));
  width: 100%;
  min-height: 100vh;
  text-align: center;
`;
export const HomeH1 = styled.h1`
  font-family: "Exo", sans-serif;
  font-weight: 700;
  font-size: 6rem;
  text-align: center;
  color: #33cc36;

  text-shadow: 4px 4px black;
  @media (max-width: 710px) {
    font-size: 5rem;
  }
  @media (max-width: 580px) {
    font-size: 4rem;
  }
  @media (max-width: 460px) {
    font-size: 3rem;
  }
  @media (max-width: 350px) {
    font-size: 2.5rem;
  }
  @media (max-width: 300px) {
    font-size: 2rem;
  }
`;
export const TopBtnDiv = styled.div`
  display: flex;
  justify-content: end;
  position: relative;
  z-index: 10;
`;
export const LogOutBtn = styled.button`
  padding: 1rem 2rem;
  margin: 1rem;
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  background: none;

  cursor: pointer;
  text-shadow: 2px 2px black;
  border: 3px solid white;
  border-radius: 20px;
  position: relative;
  z-index: 10;
  @media (max-width: 650px) {
    font-size: 1rem;
  }
  @media (max-width: 460px) {
    padding: 0.5rem 1rem;
  }
  @media (max-width: 370px) {
    font-size: 0.8rem;
  }
  @media (max-width: 350px) {
    margin: 0.5rem 0.2rem;
    border: 2px solid white;
  }
`;

export const SignUpBtn = styled.button`
  padding: 1rem 2rem;
  margin: 1rem;
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  background: #33cc36;
  border: none;

  cursor: pointer;
  text-shadow: 2px 2px black;
  border-radius: 20px;
  position: relative;
  z-index: 10;
  @media (max-width: 650px) {
    font-size: 1rem;
  }
  @media (max-width: 460px) {
    padding: 0.5rem 1rem;
  }
  @media (max-width: 350px) {
    margin: 0.5rem 0.2rem;
  }
`;

export const GameBtnDiv = styled.div`
  background-color: #33cc36;
  border-radius: 10px;
  margin: 3rem;
  width: 60%;
  display: inline-block;
  position: relative;
  z-index: 10;
  padding: 1rem 1rem;

  color: white;
  font-size: 2rem;
  @media (max-width: 580px) {
    font-size: 1.5rem;
  }
  @media (max-width: 460px) {
    width: 50%;
  }
  @media (max-width: 300px) {
    padding: 0.5rem 0.5rem;
    margin: 2rem;
  }
`;

export const CirclesLi = styled.div`
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 25s linear infinite;
  bottom: -150px;
`;
export const Circles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  & ${CirclesLi}:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-name: ${homeAnimation};
    animation-delay: 0s;
  }
  & ${CirclesLi}:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-name: ${homeAnimation};
    animation-delay: 2s;
    animation-duration: 12s;
  }
  & ${CirclesLi}:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-name: ${homeAnimation};
    animation-delay: 4s;
  }
  & ${CirclesLi}:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-name: ${homeAnimation};
    animation-delay: 0s;
    animation-duration: 18s;
  }
  & ${CirclesLi}:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-name: ${homeAnimation};
    animation-delay: 0s;
  }
  & ${CirclesLi}:nth-child(6) {
    animation-name: ${homeAnimation};
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
  }
  & ${CirclesLi}:nth-child(7) {
    animation-name: ${homeAnimation};
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
  }
  & ${CirclesLi}:nth-child(8) {
    animation-name: ${homeAnimation};
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
  }
  & ${CirclesLi}:nth-child(9) {
    animation-name: ${homeAnimation};
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
  }
  & ${CirclesLi}:nth-child(10) {
    animation-name: ${homeAnimation};
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
  }
`;
