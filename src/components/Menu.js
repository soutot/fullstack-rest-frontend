import * as React from 'react';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";
import { MenuItem, MenuList, ListItemIcon, ListItemText, Icon } from '@material-ui/core';

import MenuMore from './Menu/MenuMore';
import MenuOrder from './Menu/MenuOrder';
import MenuHelp from './Menu/MenuHelp';

import { colors } from '../theme';

const MenuListStyled = styled(MenuList)`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  padding: 0 !important;
`;

const NavStyled = styled.nav`
  flex: 1;
  display: flex;
  flex: 1;
  align-items: center;
  background-color: ${colors.primary};
`;

const MenuItemStyled = styled(MenuItem)`
  border-left: 1px solid ${colors.white} !important;
`;

const StyledIcon = styled(Icon).attrs({
  style: {
    color: colors.white,
    fontSize: '20px',
  },
})``;

const ListItemTextStyled = styled(ListItemText)`
  > span {
    color: ${colors.white};
  }
`; 

class MenuComponent extends React.Component { 
  state = {
    isOrderMenuOpen: false,
    isHelpMenuOpen: false,
    isMoreMenuOpen: false,
    anchor: null,
  };

  handleClose() {
    this.setState({
      isOrderMenuOpen: false,
      isHelpMenuOpen: false,
      isMoreMenuOpen: false,
      anchor: null,
    });
  }

  render() {
    return (
      <NavStyled>
        <MenuListStyled>
          <MenuItemStyled
            onClick={(event) => this.setState({ isHelpMenuOpen: true, anchor: event.currentTarget })}
          >
            <ListItemIcon>
              <StyledIcon>help</StyledIcon>
            </ListItemIcon>
            <ListItemTextStyled
              inset
              primary="Help"
            />
          </MenuItemStyled>
          <MenuHelp
            anchorEl={this.state.anchor}
            open={this.state.isHelpMenuOpen}
            onClose={() => this.handleClose()}
          />
          <MenuItemStyled
            onClick={(event) => this.setState({ isOrderMenuOpen: true, anchor: event.currentTarget })}
          >
            <ListItemIcon>
              <StyledIcon>shopping_cart</StyledIcon>
            </ListItemIcon>
            <ListItemTextStyled
              inset
              primary="Orders"
            />
          </MenuItemStyled>
          <MenuOrder
            anchorEl={this.state.anchor}
            open={this.state.isOrderMenuOpen}
            onClose={() => this.handleClose()}
          />
          <MenuItemStyled
            onClick={(event) => this.setState({ isMoreMenuOpen: true, anchor: event.currentTarget })}
          >
            <ListItemIcon>
              <StyledIcon>more_vert</StyledIcon>
            </ListItemIcon>
            <ListItemTextStyled
              inset
              primary="More"
            />
          </MenuItemStyled>
          <MenuMore
            anchorEl={this.state.anchor}
            open={this.state.isMoreMenuOpen}
            onClose={() => this.handleClose()}
          />
        </MenuListStyled>
      </NavStyled>
    );
  }
}

export default withRouter(MenuComponent);
