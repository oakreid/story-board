import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import $ from 'jquery';
import PropTypes from 'prop-types';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./components/header.jsx";
import Favorites from "./components/favorites.jsx";
import Home from "./components/home.jsx"
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Chat from "./components/chat.jsx"
import {Provider, connect} from 'react-redux';
import {createStore, bindActionCreators, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { login, logout, register, favorite } from './redux/actions';
import rootReducer from './redux/reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function root_init(node, channel) {
  ReactDOM.render(
    <Provider store={store}>
      <Root channel={channel} />
    </Provider>, node);
}

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.channel = props.channel;
  }

  render() {
    const { search_results, session, username, current_user_favorites } = this.props.reducer;
    console.log(current_user_favorites)
    return (<div>
      <Router>
        <Header props={this.props}/>
        <Route path="/" exact={true} render={ () =>
          <Home search_results={search_results} session={session} />
        } />
        <Route path="/favorites" exact={true} render={ () =>
          <Favorites cuf={current_user_favorites} session={session} username={username} />
        } />
        <Route path="/chat" exact={true} render={ () =>
          <Chat session={this.props.reducer.session} channel={this.channel} />
        } />
      </Router>
    </div>);
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    login: (login_form) => login(login_form),
    register: (login_form) => register(login_form)
  },
  dispatch
)};

Root = connect(mapStateToProps, mapDispatchToProps)(Root);
