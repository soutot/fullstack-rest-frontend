
import * as React from 'react';
import styled from 'styled-components';

import reactLogo from '../../images/logo-react.svg';

const LogoContainer = styled.div``;

const LogoStyled = styled.img`
  width: 200px;
  height: 100px;
`;

const Logo = ({ ...props }) => {
  return (
    <LogoContainer {...props}>
      <LogoStyled src={reactLogo} alt="React Logo" title="React Logo" />
    </LogoContainer>
  );
};

export default Logo;
