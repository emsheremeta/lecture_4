import styled from 'styled-components';

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
`;
export const SelectField = styled.select`
  width: 100px;
  height: 25px;
`;
export const GridWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  position: absolute;
  top: 30%;
`;

export const Image = styled.img`
  width: 300px;
  height: 350px;
`;
