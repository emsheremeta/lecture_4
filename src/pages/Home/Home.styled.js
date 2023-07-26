import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TextWrapper = styled.div`
  display: block;
  position: absolute;
  top: 30%;
  left: 35%;
`;
export const Text = styled.h1`
  text-align: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: #007bff;
  color: #fff;
  padding: 5px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 15px;
  position: relative;
  top: 0;
  left: 40%;
`;
