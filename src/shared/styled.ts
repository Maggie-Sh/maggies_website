import styled, { css } from "styled-components";

export const df_ac = css`
  display: flex;
  align-items: center;
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

export const dfc_as_jcs = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Container = styled.div`
  background-color: red;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  &.overflow-overlay {
    overflow-y: overlay;
  }
  &.overflow-hidden {
    overflow-y: hidden;
  }
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.scrollbar_color};
    border-radius: 5px;
  }
`;

export const Main = styled.main`
  background-color: ${({ theme }) => theme.secondary_background};
  padding: 0 40px;
  @media (max-width: 1024px) {
    padding: 0 20px;
  }
`;
