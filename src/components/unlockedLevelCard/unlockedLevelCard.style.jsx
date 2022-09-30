import styled from "styled-components";
import { Icon } from "@iconify/react";

export const Stars = styled(Icon)`
  font-size: 2rem;
  @media (max-width: 350px) {
    font-size: 1.5rem;
  }
  @media (max-width: 280px) {
    font-size: 1rem;
  }
  @media (max-width: 265px) {
    font-size: 0.8rem;
  }
`;
export const UnlockedLevelButton = styled.button`
  background-color: #33cc36;
  width: 16rem;
  border-radius: 20px;
  text-align: left;
  color: white;
  border: 4px solid #104211;
  margin: 2rem;
  padding: 1.5rem;
  font-weight: 700;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  font-family: "Exo", sans-serif;
  position: relative;
  z-index: 10;

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
  @media (max-width: 265px) {
    width: 8rem;
    padding: 0.8rem;
    font-size: 0.7rem;
  }
`;

export const LevelName = styled.span`
  margin-right: 2rem;
  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
  @media (max-width: 350px) {
    margin-right: 1.5rem;
  }
  @media (max-width: 280px) {
    margin-right: 1.2rem;
  }
  @media (max-width: 265px) {
    margin-right: 1rem;
  }
`;
