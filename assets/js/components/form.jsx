import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import $ from 'jquery';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
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
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
    this.handleClose();
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
    const { action, text, anchorEl, mobileMoreAnchorEl, classes, open } = this.props;
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
