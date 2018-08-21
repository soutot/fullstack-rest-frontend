import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import OrderList from '../components/Order/OrderList';
import OrderDetail from '../components/Order/OrderDetail';
import OrderEdit from '../components/Order/OrderEdit';
import OrderAdd from '../components/Order/OrderAdd';
import NotFound from '../components/NotFound';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={OrderList} />
      <Route path='/order-detail/:id' component={OrderDetail} />
      <Route path='/order-edit/:id' component={OrderEdit} />
      <Route path='/order-add' component={OrderAdd} />
      <Route path='/soutot' component={() => window.location.href = 'http://github.com/soutot'}/>

      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
