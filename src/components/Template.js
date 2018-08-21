import * as React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Menu from './Menu';
import Header from './Header';
import Footer from './Footer';

const Wrapper = styled.div``;

const Content = styled.main`
  display: flex;
  flex-direction: column;
`;

const Template = (Children, title) => {
  return class Component extends React.PureComponent {
    state = {
      search: '',
    };
  
    handleChange = (event) => {
      this.setState({ search: event.target.value });
    }
  
    render() {
      return (
        <Wrapper>
          <Helmet>
            <title>{`Albelli ${title && `| ${title}`}`}</title>
          </Helmet>
          <Menu />
          <Header />
          <Content>
            {Children ? <Children {...this.props} /> : 'No content to show'}
          </Content>
          <Footer />
        </Wrapper>
      );
    }
  };
};

export default Template;
