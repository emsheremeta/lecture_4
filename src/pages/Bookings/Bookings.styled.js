import styled from 'styled-components';

export const NoBooking = styled.p`
  text-align: center;
  margin-top: 150px;
  font-weight: 500;
`;

export const BookingWrapper = styled.li`
  list-style: none;
  &:first-child {
    margin-top: 80px;
  }
  + li {
    margin-top: 20px;
  }
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  background-color: beige;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  margin-bottom: 10px;
  width: 50pxpx;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
`;
