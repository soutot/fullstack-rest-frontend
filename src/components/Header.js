
import * as React from 'react';
import styled from 'styled-components';

import Logo from './common/Logo';

const HeaderStyled = styled.header`
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
      <Logo />
      <PageTitleContainer>Welcome to Albelli</PageTitleContainer>
    </HeaderStyled>
  );
}

export default Header;
