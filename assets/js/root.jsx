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
import { login, logout, register, fcuf, favorite } from './redux/actions';
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

  // update_login_form(data) {
  //   let new_form = _.assign({}, this.state.login_form, data);
  //   let new_state = _.assign({}, this.state, {login_form: new_form});
  //   this.setState(new_state);
  // }
  //
  // update_search_bar(data) {
  //   let new_state = _.assign({}, this.state, {search_bar: data});
  //   this.setState(new_state);
  // }

  render() {
    return (<div>
      <Router>
        <Header props={this.props}/>
        <Route path="/" exact={true} render={ () =>
          <Home />
        } />
        <Route path="/favorites" exact={true} render={ () =>
          <Favorites />
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
