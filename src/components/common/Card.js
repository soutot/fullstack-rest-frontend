import * as React from 'react';
import { Card } from '@material-ui/core';
import styled from 'styled-components';

const Wrapper = styled(Card)`
  margin: 10px;
`;

const CardStyled = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default CardStyled;
