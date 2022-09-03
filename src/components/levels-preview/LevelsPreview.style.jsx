import styled from "styled-components";

export const LevelPreviewDiv = styled.div`
  font-size: 1.5rem;
  background-color: rgba(152, 68, 183, 1);

  height: 100vh;
  overflow: scroll;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 160px;

  place-items: center;
  @media (max-width: 350px) {
    font-size: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;
