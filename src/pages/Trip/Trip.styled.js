import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Image = styled.img`
  width: 500px;
  height: 400px;
  margin-right: 25px;
`;

export const TripInfo = styled.p`
  background-color: beige;
  padding: 10px;
  margin: 0;
  font-family: 'Sans Serif';
  font-weight: bold;
`;
export const TripPrice = styled.p`
  color: brown;
  font-family: 'Sans Serif';
  font-weight: bold;
  font-size: large;
`;
export const TripDesc = styled.p`
  font-family: 'Sans Serif';
  font-weight: 500;
`;
export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  margin-bottom: 10px;
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
`;
