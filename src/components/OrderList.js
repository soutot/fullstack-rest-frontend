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

class OrderList extends React.Component {
  renderOrderCard = ({ id, customerName, price }) => {
    {/* <Link to={'/order-detail'}>Details</Link> */}
    return (
      <CardStyled key={id}>
        <CardContentStyled>
          <CardTitle>{customerName}</CardTitle>
          <p>{price}</p>
          <Button variant="contained" onClick={() => this.props.history.push({ pathname: `/order-detail/${id}` })}>Details</Button>
        </CardContentStyled>
      </CardStyled>
    );
  }

  render() {
    return (
      orders && orders.length > 0 &&
        <React.Fragment>
          <ContentHeader />
          <CardsContainer>
            {orders.map(order => this.renderOrderCard(order))}
          </CardsContainer>
        </React.Fragment>
    );
  }
};

export default Template(withRouter(OrderList), 'Order List');
