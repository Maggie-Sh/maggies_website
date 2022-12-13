import styled, { css } from "styled-components";
import { light, dark, df_ac_jsb } from "../../styled";
import { NavLink } from "react-router-dom";

const underline = css`
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  border-radius: 5px;

  background-color: ${({ theme }) =>
    theme === "light" ? "#eea990" : "#aa6f73"};
  top: 100%;
`;

const linktransition = css`
  transition: all 100ms ease-out;
`;

export const HeaderSt = styled.header`
  padding: 20px 40px;
  &.dark {
    ${dark}
  }
  &.light {
    ${light}
  }
  ${df_ac_jsb}
  & .side {
    ${df_ac_jsb}
    gap:20px;
  }
  transition: all 300ms ease-out;
`;

export const CustomLink = styled(NavLink)`
  color: ${({ theme }) => (theme === "light" ? "#66545e" : "#f6e0b5")};
  font-size: 28px;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
  outline: 0;
  position: relative;
  &::after {
    content: "";
    ${underline}
    transform: scale(0);
    transform-origin: left;
    ${linktransition}
  }
  &:hover,
  &:focus {
    &::after {
      top: 100%;
      transform: scale(1);
      ${linktransition}
    }
  }
  &.active {
    &::after {
      content: "";
      ${underline}
      top: 50%;
      ${linktransition}
      transform: translateY(-50%) scale(1);
      background-color: ${({ theme }) =>
        theme === "light" ? "#66545e" : "#f6e0b5"};
    }
  }
`;
