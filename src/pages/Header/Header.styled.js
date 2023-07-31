import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 5555;
`;

export const Navigation = styled.svg`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 5px;
`;
export const LogoLink = styled(Link)`
  text-decoration: none;
  color: beige;
  text-shadow: 0 0 black;
  font-family: 'Sans Serif';
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 20px;
  cursor: pointer;
`;
export const WelcomeText = styled.p`
  font-family: 'Sans Serif';
  font-weight: bold;
  font-size: 25px;
  color: white;
`;
