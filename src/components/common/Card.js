import * as React from 'react';
import { Card } from '@material-ui/core';
import styled from 'styled-components';

import { colors } from '../../theme';

const Wrapper = styled(Card)`
  margin: 10px;
`;

const CardTitle = styled.h3`
  margin: 10px;
  color: ${colors.title};
`;

const CardStyled = ({ children, title, ...props }) => (
  <React.Fragment>
    {title && <CardTitle>{title}</CardTitle>}
    <Wrapper {...props}>
      {children}
    </Wrapper>
  </React.Fragment>
);

export default CardStyled;
