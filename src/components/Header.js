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

const PageTitleContainer = styled.div`
`;

const Header = () => {
  return (
    <HeaderStyled>
      <Link to={'/'}>
        <Logo />
      </Link>
      <PageTitleContainer>Welcome to Fullstack</PageTitleContainer>
    </HeaderStyled>
  );
};

export default Header;
