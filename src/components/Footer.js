import * as React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ddd;
`;

const Footer = (Children, title) => {
  return (
    <FooterStyled>
      <p>Footer</p>
    </FooterStyled>
  );
}

export default Footer;
