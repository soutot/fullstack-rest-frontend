import * as React from 'react';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";
import { Button, TextField } from '@material-ui/core';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import Template from '../Template';
import ContentHeader from '../ContentHeader';
import Card from '../common/Card';
import CardContent from '../common/CardContent';
import OrderForm from './OrderForm';
import CardTitle from '../common/CardTitle';

class OrderAdd extends React.Component {
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
};

export default Template(withRouter(OrderAdd), 'Order Add');
