import * as React from 'react';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";
import { Card, CardContent, Button } from '@material-ui/core';

import Template from './Template';
import ContentHeader from './ContentHeader';

const CardsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 900px;
  align-self: center;
`

const CardStyled = styled(Card)`
  margin: 10px;
`;

const CardContentStyled = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardTitle = styled.h1``;

class NotFound extends React.Component {

  render() {
    return (
      <CardsContainer>Page not found</CardsContainer>
    );
  }
};

export default Template(withRouter(NotFound), 'Not Found');
