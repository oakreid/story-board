import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import $ from 'jquery';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./components/header.jsx";
import Favorites from "./components/favorites.jsx";
import Home from "./components/home.jsx"
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

export default function root_init(node) {
  ReactDOM.render(<Root />, node);
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
        <Header root={this} />
        <Route path="/" exact={true} render={ () =>
          <Home root={this} />
        } />
        <Route path="/favorites" exact={true} render={ () =>
          <Favorites root={this} />
        } />
      </Router>
    </div>);
  }
}
