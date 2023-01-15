import styled from "styled-components";

export const Section = styled.section`
  font-size: 48px;
  line-height: 54px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  & .bold {
    color: ${({ theme }) => theme.secondary};
    font-size: 54px;
    line-height: 64px;
    font-weight: 700;
    font-style: oblique;
  }
  @media (max-width: 1024px) {
    font-size: 36px;
    line-height: 42px;
    & .bold {
      font-size: 42px;
      line-height: 48px;
    }
  }
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 30px;
    & .bold {
      font-size: 34px;
      line-height: 42px;
    }
  }
`;
