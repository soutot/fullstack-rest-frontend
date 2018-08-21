import * as React from 'react';
import { withRouter } from "react-router-dom";

import Template from '../Template';
import OrderCard from './OrderCard';
import ContentHeader from '../ContentHeader';
import CardsContainer from '../common/CardsContainer';
import CardContent from '../common/CardContent';
import Loading from '../common/Loading';
import withSnackbar from '../common/Snackbar';

const fetchError = 'Error while trying to fetch';

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
      const { setSnackbarMessage, openSnackback } = this.props;

      this.setState({ isLoading: false });
      setSnackbarMessage(fetchError);
      openSnackback();
      console.error(error);
    });
  }

  renderOrders = (orders) => {
    const { history } = this.props;

    return orders && orders.length > 0 ?
      <React.Fragment>
        <ContentHeader />
        <CardsContainer>
          {orders.map(order => <OrderCard key={order.id} order={order} onClick={() => history.push({ pathname: `/order-detail/${order.id}` })} />)}
        </CardsContainer>
      </React.Fragment>
      :
      <CardsContainer>
        <CardContent>
          There are no orders to show
        </CardContent>
      </CardsContainer>;
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
}

export default Template(withSnackbar(withRouter(OrderList), 'Order List'));
