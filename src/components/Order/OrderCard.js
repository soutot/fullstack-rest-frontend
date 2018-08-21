import * as React from 'react';
import styled from 'styled-components';
import { Button, Icon, IconButton } from '@material-ui/core';

import Card from '../common/Card';
import CardContent from '../common/CardContent';
import CardTitle from '../common/CardTitle';

const CardContentStyled = styled(CardContent)`
  min-width: 200px;
  min-height: 200px;
  align-items: center;
`;

const IconButtonStyled = styled(IconButton)`
  background-color: transparent !important;
  color: #EBB923 !important;
  border: 3px solid !important;
`;

const OrderCard = ({ order, onClick }) => {
  const { id, customerName, price } = order;
  return (
    <Card key={id}>
      <CardContentStyled>
        <CardTitle>{id}</CardTitle>
        <p>{customerName}</p>
        <p>{`Price: ${price}`}</p>
        <IconButtonStyled variant="fab" onClick={onClick}>
          <Icon>arrow_forward_ios</Icon>
        </IconButtonStyled>
      </CardContentStyled>
    </Card>
  );
}

export default OrderCard;
