import * as React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

import { orders } from './mocked-orders';

const Wrapper = styled.div`
  margin: 20px;
`;

const Header = styled.header`
  display: flex;
  flex: 1;
`;

const LogoContainer = styled.div`
  flex: 1;
`;

const PageTitleContainer = styled.div`
  flex: 3;
`;

const Content = styled.main`
  margin: 50px;
  display: flex;
  flex-direction: column;
`;

const ContentHeader = styled.section`
  display: flex;
  flex-direction: column;
`;

const SearchContainer = styled.article`
  display: flex;
  flex: 1;
`;

const ExhibitionSettings = styled.article`
  display: flex;
  flex: 1;
  align-self: flex-end;
`;

const CardsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const OrderCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #9c6;
  margin: 15px;
  padding: 10px;
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
`;

class OrderList extends React.Component {
  render() {
    const { match } = this.props;

    return (
      <Wrapper>
        <Helmet>
          <title>Albelli | Order Detail</title>
        </Helmet>
        <Header>
          <LogoContainer>Logo</LogoContainer>
          <PageTitleContainer>DETAIL</PageTitleContainer>
        </Header>
        
        <Content>
          <ContentHeader>
            <SearchContainer>Search</SearchContainer>
            <ExhibitionSettings>Exhibition</ExhibitionSettings>
          </ContentHeader>
          <CardsContainer>
            <OrderCard>
              <p>Title</p>
              <p>CustomerName</p>
              {/* <button
                type="button"
                onClick={() => this.props.navigation.navigate('OrderDetail', { _id })}
              >
                Details
              </button> */}
              <Link to={`${match.url}/order-detail`}>Details</Link>
            </OrderCard>
            
            <OrderCard>
              <p>Title</p>
              <p>CustomerName</p>
              <button
                type="button"
              >
                Details
              </button>
            </OrderCard>
          </CardsContainer>
        </Content>

        <Footer>
          <p>Footer</p>
        </Footer>
      </Wrapper>
    );
  }
};

export default OrderList;
