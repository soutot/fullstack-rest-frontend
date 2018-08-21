import * as React from 'react';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";
import { Menu, MenuItem } from '@material-ui/core';

const MenuStyled = styled(Menu)`
  > div:last-child {
    min-width: 150px !important;
    top: 48px !important;
  }
`;

const Props = {
  open: Boolean,
  onClose: () => {},
  anchorEl: React.Node,
};

class MenuHelp extends React.PureComponent<Props> {
  render() {
    const { anchorEl, open, onClose } = this.props;
    return (
      <MenuStyled
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
      >
        <MenuItem onClick={() => {}}>Help</MenuItem>
      </MenuStyled>
    );
  }
}

export default withRouter(MenuHelp);
