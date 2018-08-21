import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h1`
  color: #555;
`;

const CardTitle = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      {children}
    </Wrapper>
  )
}

export default CardTitle;
