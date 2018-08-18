import * as React from 'react';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";
import { Card, CardContent, Button, TextField } from '@material-ui/core';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import Template from './Template';
import ContentHeader from './ContentHeader';

import { orders } from './mocked-orders';

const CardsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 900px;
  align-self: center;
`

const CardStyled = styled(Card)`
  margin: 10px;
`;

const CardContentStyled = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
`

const CardTitle = styled.h1``;

class OrderDetail extends React.Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    const { setFieldValue, match } = this.props;
    const { id } = match.params;

    return fetch(`http://localhost:5000/order/${id}`)
    .then(response => response.json())
    .then(({ data }) => {
      setFieldValue('name', data.customerName);
      setFieldValue('price', data.price);
      setFieldValue('number', data.address.number);
      setFieldValue('street', data.address.street);
      setFieldValue('postcode', data.address.postcode);
      this.setState({ isLoading: false })
    });

  }
  render() {
    const { handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue, values } = this.props;

    return (
      <CardStyled>
        <CardContentStyled>
          {this.state.isLoading ? <span>Loading...</span>
          :
            <FormStyled onSubmit={handleSubmit}>
              <TextField 
                placeholder='Name'
                label='Name'
                name='name'
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled
              />
              <TextField 
                placeholder='Price'
                label='Price'
                name='price'
                value={values.price}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled
              />
              <TextField 
                placeholder='Street'
                label='Street'
                name='street'
                value={values.street}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled
              />
              <TextField 
                placeholder='Number'
                label='Number'
                name='number'
                value={values.number}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled
              />
              <TextField 
                placeholder='Postcode'
                label='Postcode'
                name='postcode'
                value={values.postcode}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div>
                <Button variant="contained" type="submit">Save</Button>
                <Button variant="contained" onClick={() => this.props.history.goBack()}>Back</Button>
              </div>
            </FormStyled>
          }
        </CardContentStyled>
      </CardStyled>
    );
  }
};

const OrderDetailForm = withFormik({
  mapPropsToValues: props => {
    const { id } = props.match.params;
    
    return ({
      name: '',
      price: '',
      street: '',
      number: '',
      postcode: '',
    });
  },
  validationSchema: Yup.object().shape({
    // postcode: Yup.string().required('postcode is required'),
  }),
  handleSubmit: (values, { setSubmitting, props, setErrors }) => {
    setSubmitting(false);
  },
})(OrderDetail);

export default Template(withRouter(OrderDetailForm), 'Order Detail');
