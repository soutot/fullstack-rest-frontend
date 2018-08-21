import * as React from 'react';
import { Card } from '@material-ui/core';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";
import { Menu, MenuItem, Icon } from '@material-ui/core';

const MenuStyled = styled(Menu)`
  > div:last-child {
    min-width: 150px !important;
    top: 48px !important;
  }
`;

class MoreMenu extends React.PureComponent {
  render() {
    const { anchorEl, open, onClose } = this.props;
    return (
      <MenuStyled
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
      >
        <MenuItem 
          onClick={() => this.props.history.push({ pathname: '/' })}
        >
          List
        </MenuItem>
        <MenuItem
          onClick={() => this.props.history.push({ pathname: '/order-add' })}
        >
          Add
        </MenuItem>
      </MenuStyled>
    )
  }
}

export default withRouter(MoreMenu);
