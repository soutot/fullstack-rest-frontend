import * as React from 'react';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";
import { Button } from '@material-ui/core';

import Template from '../Template';
import ContentHeader from '../ContentHeader';
import CardsContainer from '../common/CardsContainer';
import Card from '../common/Card';
import CardContent from '../common/CardContent';

const CardTitle = styled.h1``;

class OrderList extends React.Component {
  state = {
    isLoading: true,
    orders: null,
  };

  componentDidMount() {
    fetch('http://localhost:5000/orders')
    .then(response => response.json())
    .then(({ data }) => {
      this.setState({ orders: data });
      this.setState({ isLoading: false });
    })
    .catch(error => {
      this.setState({ isLoading: false });
      alert('Error while trying to fetch');
      console.error(error);
    });
  }

  renderOrderCard = ({ _id, customerName, price }) => {
    {/* <Link to={'/order-detail'}>Details</Link> */}
    return (
      <Card key={_id}>
        <CardContent>
          <CardTitle>{customerName}</CardTitle>
          <p>{price}</p>
          <Button variant="contained" onClick={() => this.props.history.push({ pathname: `/order-detail/${_id}` })}>Details</Button>
        </CardContent>
      </Card>
    );
  }

  render() {
    const { orders } = this.state;

    return (
      orders && orders.length > 0 &&
        <React.Fragment>
          <ContentHeader />
          {/* <div>
            <Button variant="contained" onClick={() => this.props.history.push({ pathname: `/order-add` })}>Add</Button>
          </div> */}
          <CardsContainer>
            {orders.map(order => this.renderOrderCard(order))}
          </CardsContainer>
        </React.Fragment>
    );
  }
};

export default Template(withRouter(OrderList), 'Order List');
