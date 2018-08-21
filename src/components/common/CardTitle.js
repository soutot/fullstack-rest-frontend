import * as React from 'react';
import styled from 'styled-components';

import { colors } from '../../theme';

const Wrapper = styled.h1`
  color: ${colors.title};
`;

const CardTitle = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      {children}
    </Wrapper>
  );
};

export default CardTitle;
