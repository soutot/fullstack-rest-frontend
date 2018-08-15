import React, { Component } from 'react';

import './App.css';
import Routes from './router/routes';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Routes />
      </React.Fragment>
    );
  }
}

export default App;
