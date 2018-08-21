import * as React from 'react';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";
import { Button, TextField } from '@material-ui/core';
import { withFormik } from 'formik';
import * as Yup from 'yup';

// const ALLOWED_CONTRIES = ['BR', 'NL'];
const ALLOWED_CONTRIES = ['NL'];


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

const validatePostCode = async (postcode) => {
  if (!postcode) return false;

  // TODO: improve security
  const apiKey = 'AIzaSyClMz2GdFZUXCQ9w69DKShnfErno2AfwM4';
  let country = null;
  
  await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${postcode}&key=${apiKey}`)
  .then(response => response.json())
  .then(({ results }) => {
    if (!results || results.length === 0) {
      return;
    }

    country = results[0].address_components.reduce((acc, { types, short_name }) => {
      if (types.includes('country')) {
        return short_name;
      }
    })
  });
  return ALLOWED_CONTRIES.includes(country);
}

class Order extends React.Component {
  state = {
    isLoading: true,
  };

  render() {
    const { handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue, values, errors, touched, isEdit } = this.props;

    return (
      <FormStyled onSubmit={handleSubmit}>
        <TextField 
          placeholder='Name'
          label='Name'
          name='customerName'
          value={values.customerName}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isEdit}
        />
        {errors.customerName && touched.customerName && <ErrorText>{errors.customerName}</ErrorText>}
        <TextField 
          placeholder='Price'
          label='Price'
          name='price'
          value={values.price}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isEdit}
        />
        {errors.price && touched.price && <ErrorText>{errors.price}</ErrorText>}
        <TextField 
          placeholder='Postcode'
          label='Postcode'
          name='postcode'
          value={values.postcode}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.postcode && touched.postcode && <ErrorText>{errors.postcode}</ErrorText>}
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
        <div>
          <Button variant="contained" type="submit">Save</Button>
          <Button variant="contained" onClick={() => this.props.history.goBack()}>Back</Button>
        </div>
      </FormStyled>
    );
  }
};

const OrderForm = withFormik({
  mapPropsToValues: ({ data }) => {
    return ({
      customerName: data && data.customerName || '',
      price: data && data.price || '',
      street: data && data.address.street || '',
      number: data && data.address.number || '',
      postcode: data && data.address.postcode || '',
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
    postcode: Yup.string()
    .required('Postcode field is required')
    .test({
      name: 'is-valid-country',
      message: 'This postcode country is not allowed',
      test: postcode => validatePostCode(postcode),
    }),
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

    const method = props.isEdit ? 'PUT' : 'POST';
    const url = props.isEdit ? `http://localhost:5000/orderEdit/${id}` : 'http://localhost:5000/orderAdd';
    
    const order = await fetch(url, {
      method,
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    });

    setSubmitting(false);
  },
})(Order);

export default withRouter(OrderForm);
