import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 900px;
  align-self: center;
`;

const CardsContainer = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default CardsContainer;
