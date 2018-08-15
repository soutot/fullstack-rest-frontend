import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import OrderList from '../components/OrderList';
import OrderDetail from '../components/OrderDetail';

const Routes = () => (
  <Router>
    <div>
      <Route exact path='/' component={OrderList} />
      <Route path='/order-detail/:id' component={OrderDetail} />
    </div>
  </Router>
);

export default Routes;
