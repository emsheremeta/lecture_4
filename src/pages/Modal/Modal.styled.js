import styled, { css } from 'styled-components';
import Modal from 'react-modal';

export const ModalWindowStyled = styled(Modal)`
  width: 450px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 50px;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
`;

export const ModalTripInfo = styled.div`
  text-align: left;
  background-color: beige;
  font-weight: 600;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  ${props =>
    !props.disabled &&
    css`
      background-color: #007bff;
      color: #fff;
      &:hover {
        border-color: black;
      }
    `}

  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
      background-color: grey;
      color: #fff;
    `}
`;

export const TotalPrice = styled.p`
  font-weight: 600;
  text-align: center;
  font-weight: 600;
  text-align: center;
  margin-top: 35px;
  margin-bottom: 30px;
`;

export const CloseBtn = styled.div`
  position: absolute;
  top: 20px;
  right: 35px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
`;
