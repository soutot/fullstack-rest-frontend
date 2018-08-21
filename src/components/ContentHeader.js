import * as React from 'react';
import styled from 'styled-components';
import { Icon, TextField, IconButton } from '@material-ui/core';

const Content = styled.main`
  display: flex;
  flex-direction: column;
`;

const SearchContainer = styled.article`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

class ContentHeader extends React.Component {
  state = {
    search: '',
  };

  handleChange(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    return (
      <Content>
        <SearchContainer>
          <TextField 
            placeholder='Search'
            value={this.state.search}
            onChange={this.handleChange}
          />
          
          <IconButton onClick={() => alert('Sorry. This feature is not working')}>
            <Icon>search</Icon>
          </IconButton>
        </SearchContainer>
      </Content>
    );
  }
}

export default ContentHeader;
