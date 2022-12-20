import styled from "styled-components";
import { df_ac } from "../../shared/styled";

export const Container = styled.section`
  background-color: ${({ theme }) => theme.secondary_background};
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  aspect-ratio: 2/1;
  @media (max-width: 768px) {
    display: block;
    aspect-ratio: unset;
  }
`;

export const ImageWrapper = styled.div`
  & img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: contain;
    object-position: left;
  }
  @media (max-width: 768px) {
    & img {
      margin: 0 auto;
      display: block;
      height: 300px;
      width: 300px;
      object-position: center;
    }
  }
`;

export const SliderContainer = styled.div`
  overflow: hidden;
  position: relative;
`;

export const Slides = styled.ul.attrs((props) => {})`
  width: 100%;
  height: 100%;
  list-style-type: none;
  ${df_ac}
  transform: ${({ translate }) => `translateX(${translate}%)`};
  transition: transform 0.3s ease-out;
`;

export const Slide = styled.li`
  min-width: 100%;
  height: 100%;
  ${df_ac}
  justify-content: flex-end;
  color: ${({ theme }) => theme.primary};
  & h3 {
    padding: 20px;
    padding-right: 80px;
    font-size: 48px;
    line-height: 56px;
    font-weight: 400;
    text-align: right;
    font-style: italic;
    @media (max-width: 1024px) {
      font-size: 36px;
      line-height: 42px;
    }
    @media (max-width: 768px) {
      font-size: 24px;
      line-height: 28px;
      & h3 {
        padding: 20px;
        padding-right: 50px;
      }
    }
    @media (max-width: 420px) {
      font-size: 20px;
      line-height: 24px;
    }
  }
`;

export const IconButton = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
  position: absolute;
  left: calc(100% - 60px);
  top: 50%;
  transform: translateY(-50%);
  & .MuiSvgIcon-root {
    min-width: 35px;
    height: auto;
  }
  @media (max-width: 768px) {
    & .MuiSvgIcon-root {
      min-width: 25px;
      height: auto;
    }
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

export const Dots = styled.ul``;
