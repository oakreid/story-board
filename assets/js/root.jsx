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
import {Provider, connect} from 'react-redux';
import {createStore, bindActionCreators, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { login, logout, register, fcuf, favorite } from './redux/actions';
import rootReducer from './redux/reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function root_init(node) {
  ReactDOM.render(
    <Provider store={store}>
      <Root />
    </Provider>, node);
}

class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    this.props.fcuf(this.props.reducer.session);
  }

  render() {
    const { search_results, session } = this.props.reducer;
    return (<div>
      <Router>
        <Header props={this.props}/>
        <Route path="/" exact={true} render={ () =>
          <Home search_results={search_results} session={session} />
        } />
        <Route path="/favorites" exact={true} render={ () =>
          <Favorites />
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
    register: (login_form) => register(login_form),
    fcuf: (session) => fcuf(session)
  },
  dispatch
)};

Root = connect(mapStateToProps, mapDispatchToProps)(Root);
