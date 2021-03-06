import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import './App.css';
import Routes from './router/routes';
import favicon from './images/react.png';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Fullstack</title>
          <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet' />
          <meta name='description' content='fullstack orders' />
          <link rel='icon' type='image/png' href={favicon} sizes='16x16' />
        </Helmet>
        <Routes />
      </React.Fragment>
    );
  }
}

export default App;
