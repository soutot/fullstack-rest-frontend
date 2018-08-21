import * as React from 'react';
import styled from 'styled-components';
import { Icon, IconButton } from '@material-ui/core';

import Card from '../common/Card';
import CardContent from '../common/CardContent';
import CardTitle from '../common/CardTitle';

import { colors } from '../../theme';

const CardContentStyled = styled(CardContent)`
  min-width: 200px;
  min-height: 200px;
  align-items: center;
`;

const IconButtonStyled = styled(IconButton)`
  background-color: ${colors.none} !important;
  color: ${colors.secondary} !important;
  border: 3px solid !important;
`;

const Text = styled.p`
  color: ${colors.text};
`;

const OrderCard = ({ order, onClick }: Object) => {
  const { id, customerName, price } = order;
  return (
    <Card key={id}>
      <CardContentStyled>
        <CardTitle>{id}</CardTitle>
        <Text>{customerName}</Text>
        <Text>{`Price: ${price}`}</Text>
        <IconButtonStyled variant="fab" onClick={onClick}>
          <Icon>arrow_forward_ios</Icon>
        </IconButtonStyled>
      </CardContentStyled>
    </Card>
  );
};

export default OrderCard;
