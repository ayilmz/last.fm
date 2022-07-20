import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const StyledContainer = styled.div`
  padding: 1em;
  border: 1px solid black;
  margin: 1em auto;
  width: 100%;
  &:hover{
    border-color: red;
  }
`;

export const Title = styled.p`
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  color: black;
  margin: 0;
`;

export const Name = styled.p`
  font-size: 14px;
  font-weight: normal;
  text-align: left;
  color: black;
  margin: 0;
`;

export const Listeners = styled.p`
  font-size: 14px;
  font-weight: normal;
  text-align: left;
  color: black;
  margin: 0;
`;
export const PlayCount = styled.p`
  font-size: 14px;
  font-weight: normal;
  text-align: left;
  color: black;
  margin: 0;
`;