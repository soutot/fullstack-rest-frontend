import * as React from 'react';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";
import { Button, TextField } from '@material-ui/core';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import idx from 'idx';

import withSnackbar from '../common/Snackbar';
import { colors, fontSizes } from '../../theme';

const ALLOWED_CONTRIES = ['BR', 'NL'];
// const ALLOWED_CONTRIES = ['NL'];

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
`;

const TextFieldStyled = styled(TextField)`
  margin: 10px !important;
`;

const ErrorText = styled.div`
  font-size: ${fontSizes.small};
  margin: 5px 0 0 5px;
  color: ${colors.error};
  font-weight: bold;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const CancelButton = styled(Button)`
  color: ${colors.text} !important;
`;

const ActionButton = styled(Button)`
  color: ${colors.primary} !important;
`;

const validatePostCode = async (postcode) => {
  if (!postcode) return false;

  // TODO: improve security
  const apiKey = 'AIzaSyC4WPicQ3D2MUeaM939o8RHdBeEML4R8cA';
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
      return null;
    });
  });
  return ALLOWED_CONTRIES.includes(country);
};

class Order extends React.Component {
  state = {
    isLoading: true,
  };

  render() {
    const { 
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
      values,
      errors,
      touched,
      isEdit,
      isView,
      history,
      match,
     } = this.props;

    return (
      <FormStyled onSubmit={handleSubmit}>
        <TextFieldStyled 
          placeholder='Name'
          label='Name'
          name='customerName'
          value={values.customerName}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isEdit || isView}
        />
        {errors.customerName && touched.customerName && <ErrorText>{errors.customerName}</ErrorText>}
        <TextFieldStyled 
          placeholder='Price'
          label='Price'
          name='price'
          value={values.price}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isEdit || isView}
        />
        {errors.price && touched.price && <ErrorText>{errors.price}</ErrorText>}
        <TextFieldStyled 
          placeholder='Postcode'
          label='Postcode'
          name='postcode'
          value={values.postcode}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isView}
        />
        {errors.postcode && touched.postcode && <ErrorText>{errors.postcode}</ErrorText>}
        <TextFieldStyled 
          placeholder='Street'
          label='Street'
          name='street'
          value={values.street}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isView}
        />
        {errors.street && touched.street && <ErrorText>{errors.street}</ErrorText>}
        <TextFieldStyled 
          placeholder='Number'
          label='Number'
          name='number'
          value={values.number}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isView}
        />
        {errors.number && touched.number && <ErrorText>{errors.number}</ErrorText>}
        <ButtonsWrapper>
          <CancelButton onClick={() => history.goBack()}>{isView ? 'Back' : 'Cancel'}</CancelButton>
          {isView ?
            <ActionButton onClick={() => history.push({ pathname: `/order-edit/${match.params.id}` })}>Edit</ActionButton>
          :
            <ActionButton
              type="submit"
              disabled={isSubmitting}
            >
              Save
            </ActionButton>
          }
        </ButtonsWrapper>
      </FormStyled>
    );
  }
}

const OrderForm = withFormik({
  mapPropsToValues: ({ data }) => {
    return ({
      customerName: idx(data, _ => _.customerName) || '',
      price: idx(data, _ => _.price) || '',
      street: idx(data, _ => _.address.street) || '',
      number: idx(data, _ => _.address.number) || '',
      postcode: idx(data, _ => _.address.postcode) || '',
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
  handleSubmit: async (values, { setSubmitting, props }) => {
    const { id } = props.match.params;
    const { setSnackbarMessage, openSnackback } = props;
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
    
    await fetch(url, {
      method,
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    });

    setSubmitting(false);
    const successMessage = props.isEdit ? 'The order has been edited!' : 'The order has been saved!';
    setSnackbarMessage(successMessage);
    openSnackback();
  },
})(Order);

export default withSnackbar(withRouter(OrderForm));
