import styled from "styled-components";
import { Stars } from "../unlockedLevelCard/unlockedLevelCard.style";

export const ModalStars = styled(Stars)`
  font-size: 3.5rem;
  @media (max-width: 360px) {
    font-size: 3rem;
  }
  @media (max-width: 270px) {
    font-size: 2.5rem;
  }
  @media (max-width: 220px) {
    font-size: 2.2rem;
  }
`;

export const ModalContainerDiv = styled.div`
  position: absolute;
  text-align: center;
  width: 20rem;
  height: 20rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 1px 2px 10px;
  background-color: rgb(152, 68, 183);
  display: grid;
  place-items: center;
  z-index: 10;
  border-radius: 25px;
  @media (max-width: 360px) {
    width: 15rem;
    height: 15rem;
  }
  @media (max-width: 270px) {
    width: 12rem;
    height: 12rem;
  }
  @media (max-width: 220px) {
    width: 10rem;
    height: 10rem;
  }
`;
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(51, 204, 54, 0.7);
  backdrop-filter: blur(10px);
`;

export const Message = styled.span`
  color: white;
  font-size: 2rem;
  @media (max-width: 360px) {
    font-size: 1.5rem;
  }
  @media (max-width: 270px) {
    font-size: 1.3rem;
  }
  @media (max-width: 220px) {
    font-size: 1rem;
  }
`;
