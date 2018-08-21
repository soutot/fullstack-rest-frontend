import * as React from 'react';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";
import { Button } from '@material-ui/core';

import Template from '../Template';
import OrderCard from './OrderCard';
import ContentHeader from '../ContentHeader';
import CardsContainer from '../common/CardsContainer';
import Card from '../common/Card';
import CardContent from '../common/CardContent';
import Loading from '../common/Loading';
import CardTitle from '../common/CardTitle';

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

  renderOrders = (orders) => {
    return orders && orders.length > 0 ?
      <React.Fragment>
        <ContentHeader />
        <CardsContainer>
          {orders.map(order => <OrderCard key={order.id} order={order} onClick={() => this.props.history.push({ pathname: `/order-detail/${order.id}` })} />)}
        </CardsContainer>
      </React.Fragment>
      :
      <CardsContainer>
        <CardContent>
          There are no orders to show
        </CardContent>
      </CardsContainer>
  }

  render() {
    const { orders } = this.state;

    return (
      this.state.isLoading 
        ? 
          <Loading />
        :
          this.renderOrders(orders)
    );
  }
};

export default Template(withRouter(OrderList), 'Order List');
