import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from '../components/Home';

const BasicExample = () => (
  <Router>
    <div>
      <Route exact path='/' component={Home} />
    </div>
  </Router>
);

export default Route;
