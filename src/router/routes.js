import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import OrderList from '../components/OrderList';
import OrderDetail from '../components/OrderDetail';
import OrderAdd from '../components/OrderAdd';
import NotFound from '../components/NotFound';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={OrderList} />
      <Route path='/order-detail/:id' component={OrderDetail} />
      <Route path='/order-add' component={OrderAdd} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
