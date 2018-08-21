import * as React from 'react';
import styled from 'styled-components';
import { Icon, TextField, IconButton } from '@material-ui/core';
import withSnackbar from './common/Snackbar';

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

  handleChange = (event) => {
    this.setState({ search: event.target.value });
  }

  render() {
    const { setSnackbarMessage, openSnackback } = this.props;
    
    return (
      <Content>
        <SearchContainer>
          <TextField 
            placeholder='Search'
            value={this.state.search}
            onChange={this.handleChange}
          />
          
          <IconButton onClick={() => {
             setSnackbarMessage('Sorry. This feature is not available');
             openSnackback();
          }}>
            <Icon>search</Icon>
          </IconButton>
        </SearchContainer>
      </Content>
    );
  }
}

export default withSnackbar(ContentHeader);
