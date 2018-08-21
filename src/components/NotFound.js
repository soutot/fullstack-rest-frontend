import * as React from 'react';
import { withRouter } from "react-router-dom";

import Template from './Template';
import CardsContainer from './common/CardsContainer';
import CardContent from './common/CardContent';

class NotFound extends React.Component {
  render() {
    return (
      <CardsContainer>
        <CardContent>
          Page not found
        </CardContent>
      </CardsContainer>
    );
  }
}

export default Template(withRouter(NotFound), 'Not Found');
