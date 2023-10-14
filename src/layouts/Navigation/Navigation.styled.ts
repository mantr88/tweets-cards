import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 8px 0;
  margin-bottom: 24px;

  :not(:last-child) {
    margin-right: 24px;
  }

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 12px 16px;
  margin-top: 12px;
  border-radius: 4px;
  text-decoration: none;
  color: ${(p) => p.theme.colors.darkText};
  font-weight: 500;

  &.active {
    color: ${(p) => p.theme.colors.fairTextColor};
    background-color: ${(p) => p.theme.colors.primary};
  }
`;
