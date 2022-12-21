import styled, { css } from "styled-components";
import { df_ac_jsb, dfc_as_jcs, df_ac_jc } from "../../shared/styled";
import { NavLink } from "react-router-dom";

const underline = css`
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.secondary};
  top: 100%;
`;

const linktransition = css`
  transition: all 100ms ease-out;
`;

export const HeaderSt = styled.header`
  padding: 20px 40px;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.background};
  ${df_ac_jsb}
  transition: all 300ms ease-out;
  @media (max-width: 1024px) {
    padding: 20px;
  }
`;

export const NavBackground = styled.div`
  @media (max-width: 768px) {
    position: absolute;
    inset: 0;
    z-index: 1;
    width: 0;
    transition: width 300ms cubic-bezier(0.85, 0.01, 0.4, 1);
    height: 100vh;
    overflow: hidden;
    &.show {
      width: 100%;
    }
  }
`;

export const Nav = styled.nav`
  ${df_ac_jsb}
  gap:20px;
  @media (max-width: 768px) {
    ${dfc_as_jcs}
    gap:0;
    padding: 20px;
    width: 50%;
    height: 100%;
    background-color: ${({ theme }) => theme.background};
    box-shadow: 4px 8px 12px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const CustomLink = styled(NavLink)`
  color: ${({ theme }) => theme.primary};
  font-size: 24px;
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
      top: 50%;
      width: 100%;
      transform: translateY(-50%);
      background-color: ${({ theme }) => theme.primary};
    }
  }
  @media (max-width: 768px) {
    color: ${({ theme }) => theme.primary};
    margin-bottom: 20px;
    &.active::after {
      background-color: ${({ theme }) => theme.primary};
    }
  }
`;

export const IconButton = styled.button`
  & .MuiSvgIcon-root {
    width: 24px;
    height: 24px;
  }
  margin-left: auto;
  & svg {
    fill: ${({ theme }) => theme.primary};
  }
  & .dark {
    transform: rotate(180deg);
  }
  &.close {
    & .MuiSvgIcon-root {
      width: 30px;
      height: 30px;
    }
    & svg {
      fill: ${({ theme }) => theme.primary};
    }
  }
  @media (min-width: 769px) {
    &.close {
      display: none;
    }
  }
`;

export const MenuButton = styled.button`
  width: 26px;
  height: 24px;
  padding: 2px;
  ${df_ac_jc}
  flex-direction: column;
  gap: 5px;
  & div {
    width: 100%;
    height: 3px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.primary};
  }
  @media (min-width: 769px) {
    display: none;
  }
`;
