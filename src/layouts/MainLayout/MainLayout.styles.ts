import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1200px) {
    width: 1440px;
  }

  button {
    cursor: pointer;
  }
`;
