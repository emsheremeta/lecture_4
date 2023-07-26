import styled from 'styled-components';

export const SignInWrapper = styled.div`
  position: relative;
  height: 100vh;
`;

export const Form = styled.form`
  position: absolute;
  top: 25%;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  width: 250px;
  padding: 20px;

  border-radius: 4px;
`;
export const Text = styled.div`
  text-decoration: none;
  text-align: center;
  text-shadow: 0 0 black;
  font-family: 'Sans Serif';
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 20px;
  cursor: pointer;
  position: absolute;
  top: 15%;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
`;

export const InputField = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  margin-bottom: 10px;
  width: 109%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const TextInfo = styled.p`
  text-align: center;
`;
