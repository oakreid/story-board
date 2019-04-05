import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import $ from 'jquery';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./components/header.jsx";
import Favorites from "./components/favorites.jsx";
import Home from "./components/home.jsx"
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Chat from "/.components/chat.jsx"
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';
import { login, logout, register, fcuf, favorite } from './redux/actions';
import rootReducer from './redux/reducers';

const store = createStore(rootReducer);

export default function root_init(node) {
  ReactDOM.render(
    <Provider store={store}>
      <Root />
    </Provider>, node);
}

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login_form: {username: "", password: ""},
      session: null,
      current_user_favorites: [],
      search_bar: ""
    }
  }

  update_login_form(data) {
    let new_form = _.assign({}, this.state.login_form, data);
    let new_state = _.assign({}, this.state, {login_form: new_form});
    this.setState(new_state);
  }

  update_search_bar(data) {
    let new_state = _.assign({}, this.state, {search_bar: data});
    this.setState(new_state);
  }

  render() {
    return (<div>
      <Router>
        <Header login={login} root={this} />
        <Route path="/" exact={true} render={ () =>
          <Home root={this} />
        } />
        <Route path="/favorites" exact={true} render={ () =>
          <Favorites root={this} />
        } />
        <Route path="/chat" exact={true} render={ () =>
          <Chat root={this} />
        } />
      </Router>
    </div>);
  }
}

const mapStateToProps = state => {
  return {
    login_form: state.login_form,
    session: state.session,
    current_user_favorites: state.current_user_favorites,
    search_bar: state.search
  }
};

const mapDispatchToProps = dispatch => {
  return {
    login: (state) => dispatch(login(state)),
    logout: () => dispatch(logout()),
    register: (state) => dispatch(register(state)),
    fcuf: (state) => dispatch(fcuf(state)),
    favorite: (state) => dispatch(favorite(state))
  }
}

Root = connect(mapStateToProps, mapDispatchToProps)(Root);
