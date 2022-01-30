import styled from 'styled-components';

export const Box = styled.div`
  margin-bottom: 20px;
`;

export const Button = styled.button`
  font-weight: bold;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid gainsboro;
  background-color: transparent;
  box-shadow: 0px 2px 2px darkslategrey;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;
