import styled, { css } from "styled-components";

export const light = css`
  /* color: #596e7f;
  background-color: #fafbfd; */
  color: #66545e;
  background-color: #f6e0b5;
`;

export const dark = css`
  /* background-color: #596e7f;
  color: #fafbfd; */
  background-color: #66545e;
  color: #f6e0b5;
`;

export const df_ac_jsb = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const df_ac_jc = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.main`
  padding: 0 40px;
`;

export const IconButton = styled.button`
  & svg {
    fill: ${({ theme }) => (theme === "light" ? "#66545e" : "#f6e0b5")};
  }
  transform: ${({ theme }) => (theme === "dark" ? "rotate(180deg)" : "")};
`;
