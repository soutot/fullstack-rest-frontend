import * as React from 'react';
import styled from 'styled-components';
import { CardContent, Button } from '@material-ui/core';

const Wrapper = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`;

const CardContentStyled = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      {children}
    </Wrapper>
  )
}

export default CardContentStyled;
