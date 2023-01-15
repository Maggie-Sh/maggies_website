import styled, { css } from "styled-components";
import { typo, large_typo } from "../styled";

const flex = css`
  flex-wrap: wrap;
  column-gap: 5px;
  display: flex;
`;

export const ListContainer = styled.div`
  color: ${({ theme }) => theme.primary};
  max-width: 60%;
  margin: 0 auto;
  &.large {
    max-width: 100%;
  }
  @media (max-width: 1024px) {
    max-width: 80%;
    &.large {
      max-width: 100%;
    }
  }
  @media (max-width: 768px) {
    max-width: 90%;
  }
  @media (max-width: 480px) {
    max-width: 100%;
  }
  &.mt {
    margin-top: 40px;
  }
`;

export const Heading = styled.h3`
  ${large_typo}
  font-weight: 700;
  &::first-letter {
    text-transform: uppercase;
  }
  &.flex {
    ${flex}
    ${typo}
  }
  & span {
    width: 100%;
    font-weight: 500;
    &::before {
      content: "-";
    }
  }
  margin-bottom: 20px;
  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

export const List = styled.ul`
  width: fit-content;
`;

export const ListItem = styled.li`
  ${typo}
  padding: 5px 0;
  &.flex {
    ${flex}
  }
  & .bold {
    font-weight: 700;
  }
  & .coloured {
    color: ${({ theme }) => theme.secondary};
  }
  & .fullwidth {
    width: 100%;
  }
`;
