import styled from "styled-components";
import { df_ac_jc, padding } from "../../shared/styled";

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.primary};
  ${padding}
`;

export const Links = styled.div`
  ${df_ac_jc}
  gap:20px;
`;

export const IconLink = styled.a`
  width: 30px;
  height: 30px;
  & .MuiSvgIcon-root {
    font-size: 30px;
    color: ${({ theme }) => theme.background};
  }
  position: relative;
`;
