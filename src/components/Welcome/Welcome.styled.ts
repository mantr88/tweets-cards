import styled from "styled-components";
import BgImg from "../../assets/twitter-6-meses-elon-musk-3024446.webp";
import { NavLink } from "react-router-dom";

export const PageWrap = styled.div`
  padding: 50px;
  height: 100vh;
  width: 100vw;
  background: url(${BgImg});
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
`;

export const Link = styled(NavLink)`
  /* position: absolute;
  top: 85%;
  left: 40%; */
  display: flex;
  gap: 16px;

  font-size: 26px;
  font-weight: 600;
`;
