import * as React from 'react';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";
import { Icon, TextField, IconButton, Card, CardContent, Button } from '@material-ui/core';
import { Helmet } from 'react-helmet';

import { orders } from './mocked-orders';

import logo from '../images/albelli.jpeg';

const Wrapper = styled.div`
  margin: 20px;
`;

const Header = styled.header`
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

// const LoadingContainer = styled.div`
//   position: absolute;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: rgba(0, 0, 0, 0.3);
//   height: 100%;
//   width: 100%;
//   flex-direction: column;
// `;

// const Loading = styled.img`
//   width: 70px;
//   height: 70px;
//   animation: rotating 5s linear infinite;
//   @keyframes rotating {
//     from {
//       transform: rotate(0deg);
//     }
//     to {
//       transform: rotate(360deg);
//     }
//   }
//   position: absolute;
// `;

const PageTitleContainer = styled.div`
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

const CardStyled = styled(Card)`
  margin: 10px;
`;

const CardContentStyled = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const OrderCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #9c6;
  margin: 15px;
  padding: 10px;
`;

const CardTitle = styled.h1``;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
`;

class OrderList extends React.Component {
  state = {
    search: '',
  };

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  renderOrderCard = ({ id, customerName, price }) => {
    {/* <Link to={'/order-detail'}>Details</Link> */}
    return (
      <CardStyled key={id}>
        <CardContentStyled>
          <CardTitle>{customerName}</CardTitle>
          <p>{price}</p>
          <Button variant="contained" onClick={() => this.props.history.push('/order-detail')}>Details</Button>
        </CardContentStyled>
      </CardStyled>
    );
  }

  render() {
    const { match } = this.props;

    return (
      <Wrapper>
        <Helmet>
          <title>Albelli | Order List</title>
        </Helmet>
        <Header>
          <LogoContainer>
            <Logo src={logo} alt="Albelli Logo" title="Albelli Logo" />
          </LogoContainer>
          <PageTitleContainer>Welcome to Albelli</PageTitleContainer>
        </Header>
        {orders && orders.length > 0 ?
          <Content>
            <ContentHeader>
              <SearchContainer>
                <TextField 
                  placeholder='Search'
                  value={this.state.search}
                  onChange={this.handleChange}
                />
                
                <IconButton>
                  <Icon>search</Icon>
                </IconButton>
              </SearchContainer>
              <ExhibitionSettings>Exhibition</ExhibitionSettings>
            </ContentHeader>
            <CardsContainer>
              {orders.map(order => this.renderOrderCard(order))}
            </CardsContainer>
          </Content>
          :
          <Content>
            <p> Nothing to show </p>
          </Content>
        }

        <Footer>
          <p>Footer</p>
        </Footer>

      </Wrapper>
      // <LoadingContainer>
      //   <Loading src={logo} alt="Albelli loading" title="Albelli loading" />
      //   <span>Loading...</span>
      // </LoadingContainer>
    );
  }
};

export default withRouter(OrderList);
