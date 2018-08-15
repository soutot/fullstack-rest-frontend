import * as React from 'react';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";
import { Card, CardContent, Button } from '@material-ui/core';

import Template from './Template';
import ContentHeader from './ContentHeader';

import { orders } from './mocked-orders';

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

class OrderDetail extends React.Component {
  render() {
    return (
      orders &&
      <CardStyled>
        <CardContentStyled>
          <CardTitle>{orders[0].customerName}</CardTitle>
          <p>{orders[0].price}</p>
          <Button variant="contained" onClick={() => this.props.history.goBack()}>Back</Button>
        </CardContentStyled>
      </CardStyled>
    );
  }
};

export default Template(withRouter(OrderDetail), 'Order Detail');
