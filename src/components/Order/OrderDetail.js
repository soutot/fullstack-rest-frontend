import * as React from 'react';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";
import { Button, TextField, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
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
    issues: [],
  };

  componentDidMount() {
    const { setFieldValue, match } = this.props;
    const { id } = match.params;

    fetch(`http://localhost:5000/order/${id}`)
    .then(response => response.json())
    .then(({ data }) => {
      this.setState({ isLoading: false, data })
    })
    .catch(error => {
      this.setState({ isLoading: false });
      alert('Error while trying to fetch');
      console.error(error);
    });

    fetch(`http://localhost:5000/issues/${id}`)
    .then(response => response.json())
    .then(({ data }) => {
      this.setState({ issues: data })
    })
    .catch(error => {
      this.setState({ isLoading: false });
      alert('Error while trying to fetch');
      console.error(error);
    });

  }

  render() {
    const { isLoading, data, issues } = this.state;
    return (
      <React.Fragment>
        <Card title='Detail'>
          <CardContent>
            {isLoading
            ? 
              <Loading />
            :
              <OrderForm
                data={data}
                isView={true}
              />
            }
          </CardContent>
        </Card>
        {issues && issues.length > 0 &&
          <Card title='Issues'>
            <CardContent>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Order ID</TableCell>
                    <TableCell>Issue Key</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {issues.map(({ issueKey, orderId }) => {
                    return (
                      <TableRow key={issueKey} hover onClick={() => window.open(`https://albelli-test-cc.atlassian.net/projects/CC/board?issue-key=${issueKey}`, '_blank')}>
                        <TableCell component="th" scope="row">
                          {orderId}
                        </TableCell>
                        <TableCell>{issueKey}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          }
      </React.Fragment>
    );
  }
};

export default Template(withRouter(OrderDetail), 'Order Detail');
