import * as React from 'react';
import { Slide, Snackbar } from '@material-ui/core';

const TransitionUp = (props) => <Slide {...props} direction="up" />;

const withSnackbar = (Children) => {
  return class Component extends React.Component {
    state = {
      open: false,
      Transition: null,
      message: '',
    };

    handleClick = Transition => () => {
      if (this.state.message) {
        this.setState({ open: true, Transition });
      }
    };

    handleClose = () => {
      this.setState({ open: false });
    };

    setMessage = (message) => {
      this.setState({ message });
    }

    render() {
      const { open, Transition, message } = this.state;
      return (
        <React.Fragment>
          <Children
            setSnackbarMessage={this.setMessage}
            openSnackback={this.handleClick(TransitionUp)}
            {...this.props}
          />
          <Snackbar
            open={open}
            onClose={this.handleClose}
            TransitionComponent={Transition}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{message}</span>}
          />
        </React.Fragment>
      );
    }
  };
};

export default withSnackbar;
