import * as React from 'react';
import { Card } from '@material-ui/core';
import styled from 'styled-components';

const Wrapper = styled(Card)`
  margin: 10px;
`;

const CardTitle = styled.h3`
  margin: 10px;
`;

const CardStyled = ({ children, title, ...props }) => {
  return (
    <React.Fragment>
      {title && <CardTitle>{title}</CardTitle>}
      <Wrapper {...props}>
        {children}
      </Wrapper>
    </React.Fragment>
  )
}

export default CardStyled;
