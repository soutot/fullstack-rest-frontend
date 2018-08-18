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

const ErrorText = styled.div`
  font-size: 12px;
  margin: 5px 0 0 5px;
  color: #ee8188;
  font-weight: bold;
`;

class OrderEdit extends React.Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    const { setFieldValue, match } = this.props;
    const { id } = match.params;

    return fetch(`http://localhost:5000/order/${id}`)
    .then(response => response.json())
    .then(({ data }) => {
      setFieldValue('customerName', data.customerName);
      setFieldValue('price', data.price);
      setFieldValue('number', data.address.number);
      setFieldValue('street', data.address.street);
      setFieldValue('postcode', data.address.postcode);
      this.setState({ isLoading: false })
    });

  }
  render() {
    const { handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue, values, errors, touched } = this.props;

    return (
      <CardStyled>
        <CardContentStyled>
          {this.state.isLoading ? <span>Loading...</span>
          :
            <FormStyled onSubmit={handleSubmit}>
              <TextField 
                placeholder='Name'
                label='Name'
                name='customerName'
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled
              />
              {errors.customerName && touched.customerName && <ErrorText>{errors.customerName}</ErrorText>}
              <TextField 
                placeholder='Price'
                label='Price'
                name='price'
                value={values.price}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled
              />
              {errors.price && touched.price && <ErrorText>{errors.price}</ErrorText>}
              <TextField 
                placeholder='Street'
                label='Street'
                name='street'
                value={values.street}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.street && touched.street && <ErrorText>{errors.street}</ErrorText>}
              <TextField 
                placeholder='Number'
                label='Number'
                name='number'
                value={values.number}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.number && touched.number && <ErrorText>{errors.number}</ErrorText>}
              <TextField 
                placeholder='Postcode'
                label='Postcode'
                name='postcode'
                value={values.postcode}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.postcode && touched.postcode && <ErrorText>{errors.postcode}</ErrorText>}
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

const OrderEditForm = withFormik({
  mapPropsToValues: props => {
    const { id } = props.match.params;
    
    return ({
      customerName: '',
      price: '',
      street: '',
      number: '',
      postcode: '',
    });
  },
  validationSchema: Yup.object().shape({
    customerName: Yup.string().required('Name field is required'),
    price: Yup.string().required('Price field is required'),
    street: Yup.string().required('Street field is required'),
    number: Yup.number()
    .typeError('Number field should be a valid number')
    .integer()
    .min(0)
    .required('Number field is required'),
    postcode: Yup.string().required('Postcode field is required'),
  }),
  handleSubmit: async (values, { setSubmitting, props, setErrors }) => {
    const { id } = props.match.params;
    const { customerName, price, postcode, number, street } = values;
    const data = {
      customerName,
      price,
      address: {
        postcode,
        number,
        street,
      },
    };
    const order = await fetch(`http://localhost:5000/orderEdit/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    });

    setSubmitting(false);
  },
})(OrderEdit);

export default Template(withRouter(OrderEditForm), 'Order Edit');
