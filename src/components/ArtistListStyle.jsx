import styled from 'styled-components';

import { Link } from "react-router-dom";

export const StyledContainer = styled.div`
  padding: 0 1em;
  border: 1px solid black;
  margin: 1em auto 0 auto;
  width: 500px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
`;

