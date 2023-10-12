import styled from "styled-components";

export const MainButton = styled.button`
  width: 196px;
  padding: 14px 28px;
  border-radius: 10px;
  border: none;
  background: ${(p) => p.theme.colors.secondary};
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);

  color: ${(p) => p.theme.colors.darkTextColor};
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
`;
