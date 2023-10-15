import styled from "styled-components";
import BgImg from "../../assets/mg-817d5f9d-w1500-w1300.jpg";
import { NavLink } from "react-router-dom";

export const PageWrap = styled.div`
  height: 100vh;
  background: url(${BgImg});
`;
export const PageContainer = styled.div`
  position: absolute;
  top: 15%;
  left: 7%;
  display: flex;
  flex-direction: column;
  width: 600px;
`;

export const MainText = styled.h1`
  margin-bottom: 24px;
  font-size: 36px;
  font-weight: 900;
`;

export const OtherText = styled.p`
  font-size: 26px;
  font-weight: 600;
`;

export const Link = styled(NavLink)`
  position: absolute;
  top: 85%;
  left: 40%;
  display: flex;
  gap: 16px;

  font-size: 26px;
  font-weight: 600;
`;
