import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import $ from 'jquery';
import { withRouter } from 'react-router-dom';
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
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import SearchBar from 'material-ui-search-bar';
import {login, register, logout, newsapi_search} from '../redux/actions';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
<<<<<<< HEAD
import Form from './form';
=======
import Form from './form'
import DOMPurify from 'dompurify';

>>>>>>> b1b78e390429c0ebcef3cf34c195108ef9067ae8

const favesLink = props => <RouterLink to="/favorites" {...props} />
const homeLink = props => <RouterLink to="/" {...props} />

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      mobileMoreAnchorEl: null,
      loginOpen: false,
      registerOpen: false
    };
    this.searchText = "";
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
  };

  handleLoginOpen = () => {
    this.setState({ loginOpen: true });
  };

  handleLoginClose = () => {
    this.setState({ loginOpen: false });
  };

  handleRegisterOpen = () => {
    this.setState({ registerOpen: true });
  };

  handleRegisterClose = () => {
    this.setState({ registerOpen: false });
  };

  handleLogout = () => {
    this.props.logout();
  }

  handleSearch = (value) => {
    this.props.newsapi_search(value);
  }

  render() {
    const { anchorEl, mobileMoreAnchorEl, loginOpen, registerOpen } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}><div className={classes.sectionDesktop} onClick={this.handleLogout}>
          <Button color="inherit">Logout</Button>
        </div></MenuItem>
        <MenuItem onClick={this.handleMenuClose}><Link component={favesLink} className={classes.sectionDesktop}>
          <Button color="inherit">Favorites</Button>
        </Link></MenuItem>
        <MenuItem onClick={this.handleMenuClose}><Link component={homeLink} className={classes.sectionDesktop}>
          <Button color="inherit">Home</Button>
        </Link></MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );
    let session_info;
    let favorites;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              Story Board
            </Typography>
            <div className={classes.search}>
              <SearchBar
                onRequestSearch={(value) => {
                  this.handleSearch(value);
                  this.props.history.push('/');
                }}
              />
            </div>
            <div className={classes.grow}/>
            <div className={classes.sectionDesktop}>
            { this.props.reducer.session ? (
              <div>
                <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                  {'Logged in as ' + this.props.reducer.username}
                </Typography>
                <div className={classes.sectionDesktop}>
                  <IconButton
                    aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleProfileMenuOpen}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                </div>
                <div className={classes.sectionMobile}>
                  <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                    <MoreIcon />
                  </IconButton>
                </div>
              </div>
            ) : (
              <div>
                <div className={classes.sectionDesktop} onClick={this.handleLoginOpen}>
                  <Button color="inherit">Login</Button>
                </div>
                <Form action={this.props.login} classes={classes} open={loginOpen} onClose={this.handleLoginClose} anchorEl={anchorEl} mobileMoreAnchorEl={mobileMoreAnchorEl}/>
                <div className={classes.sectionDesktop} onClick={this.handleRegisterOpen}>
                  <Button color="inherit">Register</Button>
                </div>
                <Form action={this.props.register} classes={classes} open={registerOpen} onClose={this.handleRegisterClose} anchorEl={anchorEl} mobileMoreAnchorEl={mobileMoreAnchorEl}/>
              </div>
            )}
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    login: (login_form) => login(login_form),
    logout,
    register: (login_form) => register(login_form),
    newsapi_search
  },
  dispatch
)};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

Header = withStyles(styles)(Header);

Header = connect(mapStateToProps, mapDispatchToProps)(Header);

export default withRouter(Header);
