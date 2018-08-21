import * as React from 'react';
import { withRouter } from "react-router-dom";

import Template from '../Template';
import Card from '../common/Card';
import CardContent from '../common/CardContent';
import OrderForm from './OrderForm';

const State = {
  isLoading: Boolean,
};

class OrderAdd extends React.Component<State> {
  state = {
    isLoading: true,
  };

  render() {
    return (
      <Card>
        <CardContent>
          <OrderForm />
        </CardContent>
      </Card>
    );
  }
}

export default Template(withRouter(OrderAdd), 'Order Add');
