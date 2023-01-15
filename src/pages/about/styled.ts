import styled from "styled-components";
import { typo } from "../../shared/styled";

export const Text = styled.pre`
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: inherit;
  ${typo}
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.primary};
  width: 100%;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    text-align: left;
  }
  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;
