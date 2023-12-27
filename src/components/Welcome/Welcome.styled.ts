import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const PageWrap = styled.div`
  padding: 50px;
  width: 100vw;
  background: linear-gradient(
    115deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );

  color: ${(p) => p.theme.colors.secondary};
`;
export const PageContainer = styled.div`
  margin-bottom: 200px;
  display: flex;
  flex-direction: column;
  width: 600px;
`;

export const MainText = styled.h1`
  margin-bottom: 44px;
  font-size: 36px;
  font-weight: 900;
`;

export const OtherText = styled.p`
  font-size: 26px;
  font-weight: 600;
  line-height: 1.5;
`;

export const Link = styled(NavLink)`
  display: flex;
  gap: 16px;

  font-size: 26px;
  font-weight: 600;
`;
