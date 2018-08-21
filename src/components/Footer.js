import * as React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { IconButton } from '@material-ui/core';

const FooterStyled = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ddd;
  padding: 0 20px;
`;

const FooterText = styled.p`
  color: #888;
  font-size: 14px;
`;

const LinkStyled = styled.a`
  text-decoration: none;
  color: #888;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;

const Social = styled.div`
  display: flex;
`;

const Footer = (Children, title) => {
  return (
    <React.Fragment>
      <Helmet>
        <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.2.0/css/all.css' integrity='sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ' crossorigin='anonymous' />
      </Helmet>
      <FooterStyled>
        <FooterText>albelli © 2018</FooterText>
        <FooterText>Developed by Tiago Souto (soutot)</FooterText>
        <Social>
          <IconButton>
            <LinkStyled target='_blank' href='https://github.com/soutot'>
              <i class="fab fa-github" />
            </LinkStyled>
          </IconButton>
          <IconButton>
            <LinkStyled target='_blank' href='https://www.linkedin.com/in/tiago-souto/'>
            <i class="fab fa-linkedin" />
            </LinkStyled>
          </IconButton>
        </Social>
      </FooterStyled>
    </React.Fragment>
  );
}

export default Footer;
