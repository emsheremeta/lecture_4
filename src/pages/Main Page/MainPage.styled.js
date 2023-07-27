import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1250px;
`;

export const InputWrapper = styled.div`
  background: grey;
  width: 100%;
  height: 100px;
  position: absolute;
  top: 8%;
  display: flex;
  align-items: center;
`;

export const InputField = styled.input`
  width: 200px;
  height: 25px;
  margin-left: 90px;
  margin-right: 5px;
`;
export const SelectField = styled.select`
  width: 100px;
  height: 25px;
  margin-right: 10px;
`;

export const GridWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 3fr);
  gap: 50px;
  grid-auto-rows: minmax(100px, auto);
  position: absolute;
  top: 30%;
  margin: 0 auto;
  list-style: none;
  margin-left: 5px;
  padding-bottom: 90px;
`;

export const Image = styled.img`
  width: 300px;
  height: 200px;
`;
export const Title = styled.p`
  font-family: 'Sans Serif';
  font-weight: bold;
  font-size: large;
  text-align: center;
`;
export const TripInfo = styled.div`
  background-color: beige;
  display: flex;
  justify-content: space-evenly;
  font-family: 'Sans Serif';
`;
export const TripPrice = styled.p`
  color: brown;
  font-family: 'Sans Serif';
  font-weight: bold;
  text-align: center;
`;
export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-left: 10px;
`;
export const Link = styled(NavLink)`
  font-family: 'Sans Serif';
  text-decoration: none;
  color: black;
  font-weight: 500;
`;
