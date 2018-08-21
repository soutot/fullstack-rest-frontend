import * as React from 'react';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";
import { Button, TextField } from '@material-ui/core';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import Template from '../Template';
import OrderForm from './OrderForm';
import Card from '../common/Card';
import CardContent from '../common/CardContent';
import Loading from '../common/Loading';
import CardTitle from '../common/CardTitle';

class OrderDetail extends React.Component {
  state = {
    isLoading: true,
    data: {},
  };

  componentDidMount() {
    const { setFieldValue, match } = this.props;
    const { id } = match.params;

    return fetch(`http://localhost:5000/order/${id}`)
    .then(response => response.json())
    .then(({ data }) => {
      this.setState({ isLoading: false, data })
    })
    .catch(error => {
      this.setState({ isLoading: false });
      alert('Error while trying to fetch');
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
              isView={true}
            />
          }
        </CardContent>
      </Card>
    );
  }
};

export default Template(withRouter(OrderDetail), 'Order Detail');
