import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.username = "";
    this.password = "";
  }

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  handleClose = () => {
    this.props.onClose();
  }

  onUsernameChange = (event) => {
    this.username = event.target.value;
  }

  onPasswordChange = (event) => {
    this.password = event.target.value;
  }

  onSubmit = () => {
    this.props.action(
      {
        username: this.username,
        password: this.password
      }
    )
    this.handleMenuClose();
  }

  render() {
    const { action, text, anchorEl, classes, open } = this.props;
    return (
      <div className={classes.root}>
            <Dialog
              open={open}
              onClose={this.handleClose}
              aria-labelledby="form-dialog-title"
            >
            <DialogTitle id="form-dialog-title">{text}</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                onChange={(event) => this.onUsernameChange(event)}
                label="Username"
                fullWidth
              />
              <TextField
                margin="dense"
                onChange={(event) => this.onPasswordChange(event)}
                label="Password"
                type="password"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.onSubmit} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>
      </div>
    );
  }
}

export default Form
