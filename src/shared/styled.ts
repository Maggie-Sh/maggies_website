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

export const padding = css`
  padding: 20px 40px;
  @media (max-width: 1024px) {
    padding: 20px 30px;
  }
`;

export const typo = css`
  font-size: 24px;
  line-height: 28px;
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 24px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
    line-height: 20px;
  }
`;

export const large_typo = css`
  font-size: 48px;
  line-height: 56px;
  @media (max-width: 1024px) {
    font-size: 36px;
    line-height: 42px;
  }
  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 32px;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
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
  ${padding}
  flex-grow: 1;
  padding-bottom: 50px !important;
`;
