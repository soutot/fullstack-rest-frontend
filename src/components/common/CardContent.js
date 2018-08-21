import * as React from 'react';
import styled from 'styled-components';
import { CardContent, Button } from '@material-ui/core';

const Wrapper = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardContentStyled = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default CardContentStyled;
