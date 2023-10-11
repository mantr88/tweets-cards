import styled from "styled-components";

export const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
  justify-content: space-evenly;
`;
