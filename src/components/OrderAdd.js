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

class OrderAdd extends React.Component {
  state = {
    isLoading: true,
  };

  render() {
    const { handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue, values } = this.props;

    return (
      <CardStyled>
        <CardContentStyled>
          <FormStyled onSubmit={handleSubmit}>
            <TextField 
              placeholder='Name'
              label='Name'
              name='customerName'
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextField 
              placeholder='Price'
              label='Price'
              name='price'
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextField 
              placeholder='Street'
              label='Street'
              name='street'
              value={values.street}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextField 
              placeholder='Number'
              label='Number'
              name='number'
              value={values.number}
              onChange={handleChange}
              onBlur={handleBlur}
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
        </CardContentStyled>
      </CardStyled>
    );
  }
};

const OrderAddForm = withFormik({
  mapPropsToValues: props => {
    return ({
      customerName: '',
      price: '',
      street: '',
      number: '',
      postcode: '',
    });
  },
  validationSchema: Yup.object().shape({
    // postcode: Yup.string().required('postcode is required'),
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
    const order = await fetch('http://localhost:5000/orderAdd', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    });

    setSubmitting(false);
  },
})(OrderAdd);

export default Template(withRouter(OrderAddForm), 'Order Add');
