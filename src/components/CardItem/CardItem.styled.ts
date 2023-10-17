import styled from "styled-components";
import Logo from "../../assets/Logo.png";
import BgPicture from "../../assets/picture.png";

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
  top: -36px;
  left: 150px;
  width: 60px;
  height: 60px;
  border: 10px solid ${(p) => p.theme.colors.secondary};
  border-radius: 50%;
  background-color: ${(p) => p.theme.colors.primary};
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 214px;

  &::before {
    content: " ";
    width: 380px;
    height: 8px;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 2.5777px 0px #fbf8ff inset,
      0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.06),
      0px -1.71846px 3.43693px 0px #ae7be3 inset;
  }
`;
export const InfoText = styled.p`
  color: #ebd8ff;
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;

  &:first-child {
    margin-top: 62px;
  }
`;

export const BtnWrap = styled.div`
  margin-top: 26px;
  margin-left: 92px;
`;
