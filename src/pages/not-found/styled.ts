import styled from "styled-components";
import { Link } from "react-router-dom";

export const Message = styled.h5`
  text-align: center;
  color: ${({ theme }) => theme.primary};
  font-size: 18px;
  font-weight: 400;
`;

export const BtnLink = styled(Link)`
  font-size: 24px;
  color: #fff;
  background-color: ${({ theme }) => theme.secondary};
  padding: 8px 16px;
  border-radius: 5px;
  font-weight: 400;
  display: block;
  margin: 20px auto;
  width: fit-content;
`;
