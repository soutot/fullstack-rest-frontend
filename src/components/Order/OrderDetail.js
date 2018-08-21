import * as React from 'react';
import { withRouter } from "react-router-dom";

import Template from '../Template';
import OrderForm from './OrderForm';
import OrderIssueList from './OrderIssueList';
import Card from '../common/Card';
import CardContent from '../common/CardContent';
import Loading from '../common/Loading';

class OrderDetail extends React.Component {
  state = {
    isLoading: true,
    data: {},
  };

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;

    fetch(`http://localhost:5000/order/${id}`)
    .then(response => response.json())
    .then(({ data }) => {
      this.setState({ isLoading: false, data });
    })
    .catch(error => {
      this.setState({ isLoading: false });
      alert('Error while trying to fetch');
      console.error(error);
    });
  }

  render() {
    const { isLoading, data } = this.state;
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
        <OrderIssueList />
      </React.Fragment>
    );
  }
}

export default Template(withRouter(OrderDetail), 'Order Detail');
