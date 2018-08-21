
import * as React from 'react';
import styled from 'styled-components';

import albelliLogo from '../../images/logo-albelli.svg';

const LogoContainer = styled.div``;

const LogoStyled = styled.img`
  width: 200px;
  height: 100px;
`;

const Logo = ({ ...props }) => {
  return (
    <LogoContainer {...props}>
      <LogoStyled src={albelliLogo} alt="Albelli Logo" title="Albelli Logo" />
    </LogoContainer>
  );
};

export default Logo;
