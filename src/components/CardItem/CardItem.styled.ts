import styled from "styled-components";
import Logo from "../../../public/Logo.png";
import BgPicture from "../../../public/picture.png";

export const GridItems = styled.li`
  width: 380px;
  height: 460px;
  border-radius: 20px;
  background: url(${Logo}) no-repeat 20px 20px, url(${BgPicture}) center 28px,
    linear-gradient(115deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-repeat: no-repeat;
  box-shadow: -2.5777px 6.87386px 20.62157px 0px rgba(0, 0, 0, 0.23);
`;
export const Wrap = styled.div`
  position: relative;
  height: 100%;
`;
export const AvatarWrap = styled.div`
  position: absolute;
  top: 37%;
  left: 140px;
  width: 80px;
  height: 80px;
  border: 10px solid ${(p) => p.theme.colors.secondary};
  border-radius: 50%;
  background-color: ${(p) => p.theme.colors.primary};
`;
export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  position: absolute;
  border-radius: 50%;
`;
export const Line = styled.div`
  position: absolute;
  top: 214px;
  width: 380px;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 2.5777px 0px #fbf8ff inset,
    0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.06),
    0px -1.71846px 3.43693px 0px #ae7be3 inset;
`;

export const InfoWrap = styled.div`
  position: absolute;
  top: 284px;
  left: 76px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const InfoText = styled.p`
  color: #ebd8ff;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;

export const BtnWrap = styled.div`
  position: absolute;
  top: 374px;
  left: 96px;
`;
