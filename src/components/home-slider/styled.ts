import styled from "styled-components";
import { df_ac, df_ac_jc, large_typo } from "../../shared/styled";

export const Container = styled.section`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const ImageWrapper = styled.div`
  min-width: 300px;
  & img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    min-width: 0;
    max-width: 300px;
    width: 100%;
    margin: 0 auto;
  }
`;

export const SliderContainer = styled.div`
  @media (min-width: 769px) {
    ${df_ac}
    gap:20px;
  }
`;

export const Slides = styled.div`
  ${df_ac}
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

interface SlideProps {
  transl?: number;
}
export const Slide = styled.div<SlideProps>`
  min-width: 100%;
  width: fit-content;
  height: 100%;
  ${df_ac}
  justify-content: flex-end;
  color: ${({ theme }) => theme.primary};
  transform: ${({ transl }) => `translateX(${transl}%)`};
  transition: transform 250ms ease-out;
  padding: 20px;
  word-break: break-word;
  text-align: right;
  ${large_typo}
  font-weight: 400;
  font-style: italic;
  @media (max-width: 768px) {
    padding: 20px 50px;
    text-align: center;
    justify-content: center;
  }
  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const IconButton = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
  & .MuiSvgIcon-root {
    min-width: 35px;
    height: auto;
  }
  @media (max-width: 768px) {
    display: none;
  }
  & svg {
    fill: ${({ theme }) => theme.primary};
  }
  opacity: 0.7;
  &:hover,
  &:focus-visible {
    opacity: 0.8;
  }
`;

export const Dots = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
  ${df_ac_jc}
  gap:10px;
  & button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #d8d8d8;
    &.active {
      background-color: #8a8a8a;
    }
  }
`;
