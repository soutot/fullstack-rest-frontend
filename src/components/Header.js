
import * as React from 'react';
import styled from 'styled-components';

import logo from '../images/albelli.jpeg';

const HeaderStyled = styled.header`
  display: flex;
  flex: 1;
  align-items: center;
`;

const LogoContainer = styled.div`
  margin: 15px;
`;

const Logo = styled.img`
  width: 70px;
  height: 70px;
`;

const PageTitleContainer = styled.div`
`;

const Header = (Children, title) => {
  return (
    <HeaderStyled>
      <LogoContainer>
        <Logo src={logo} alt="Albelli Logo" title="Albelli Logo" />
      </LogoContainer>
      <PageTitleContainer>Welcome to Albelli</PageTitleContainer>
    </HeaderStyled>
  );
}

export default Header;
