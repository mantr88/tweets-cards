import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(NavLink)`
  display: inline-flex;
  padding: 12px 16px;
  margin-left: 100px;
  border-radius: 4px;
  text-decoration: none;
  color: ${(p) => p.theme.colors.fairTextColor};
  background-color: ${(p) => p.theme.colors.primary};
  font-weight: 500;

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.darkTextColor};
    background-color: ${(p) => p.theme.colors.secondary};
  }
`;
