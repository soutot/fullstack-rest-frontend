import * as React from 'react';
import { withRouter } from "react-router-dom";

import Template from '../Template';
import OrderForm from './OrderForm';
import Card from '../common/Card';
import CardContent from '../common/CardContent';
import Loading from '../common/Loading';
import withSnackbar from '../common/Snackbar';

const fetchError = 'Error while trying to fetch';

class OrderEdit extends React.Component {
  state = {
    isLoading: true,
    data: {},
  };

  componentDidMount() {
    const { match, setSnackbarMessage, openSnackback } = this.props;
    const { id } = match.params;

    return fetch(`http://localhost:5000/order/${id}`)
    .then(response => response.json())
    .then(({ data }) => {
      this.setState({ isLoading: false, data });
    })
    .catch(error => {
      this.setState({ isLoading: false });
      setSnackbarMessage(fetchError);
      openSnackback();
      console.error(error);
    });

  }

  render() {
    return (
      <Card>
        <CardContent>
          {this.state.isLoading 
          ? 
            <Loading />
          :
            <OrderForm
              data={this.state.data}
              isEdit={true}
            />
          }
        </CardContent>
      </Card>
    );
  }
}

export default Template(withSnackbar(withRouter(OrderEdit), 'Order Edit'));
