import styled from "styled-components";
import { df_ac, df_ac_jc, typo } from "../../shared/styled";

export const Container = styled.div`
  ${df_ac_jc}
  height: 100%;
  & .wrapper {
    width: 100%;
  }
`;

export const Item = styled.div`
  ${df_ac}
  justify-content: space-between;
  ${typo}
  color: ${({ theme }) => theme.primary};
  & .name {
    font-weight: 600;
    min-width: 110px;
  }
  & a {
    text-align: right;
  }
  padding: 30px 0;
  border-bottom: 2px solid ${({ theme }) => theme.primary};
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    & .name {
      min-width: unset;
    }
    & a {
      text-align: left;
      word-break: break-word;
    }
  }
`;
