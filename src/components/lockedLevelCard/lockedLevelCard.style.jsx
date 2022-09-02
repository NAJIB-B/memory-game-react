import styled from "styled-components";
import { Icon } from "@iconify/react";

export const Lock = styled(Icon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  backdrop-filter: 10px;
  font-size: 2rem;
`;

export const LockedLevelButton = styled.button`
  opacity: 0.6;
  z-index: 10;
  background-color: #33cc36;
  width: 16rem;
  border-radius: 20px;
  text-align: left;
  color: white;
  border: 4px solid #104211;
  margin: 2rem;
  padding: 1.5rem;
  font-weight: 700;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  font-family: "Exo", sans-serif;
  position: relative;
  @media (max-width: 350px) {
    width: 13rem;
    padding: 1.2rem;
    font-size: 1rem;
  }
  @media (max-width: 280px) {
    width: 10rem;
    padding: 1rem;
    font-size: 0.8rem;
  }
`;
