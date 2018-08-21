
import * as React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import Logo from './common/Logo';

const HeaderStyled = styled.header`
  flex: 1;
  display: flex;
  flex: 1;
  align-items: center;
`;

const LogoContainer = styled.div`
  margin: 15px;
`;

const PageTitleContainer = styled.div`
`;

const Header = (Children, title) => {
  return (
    <HeaderStyled>
      <Link to={'/'}>
        <Logo />
      </Link>
      <PageTitleContainer>Welcome to Albelli</PageTitleContainer>
    </HeaderStyled>
  );
}

export default Header;
