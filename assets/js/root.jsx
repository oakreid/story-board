import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import $ from 'jquery';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'

export default function root_init(node) {
  ReactDOM.render(<Root />, node);
}

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: null,
      current_user_favorites: []
    }
  }

  login() {
      method: "post",
      $.ajax("/api/login", {
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: {
        username: "test",
        password: "test"
      }, // get this from login form eventually
      success: (resp) => {
        let new_state = _.assign({}, this.state, {session: resp.data});
        this.setState(new_state);
      }
    });
  }

  logout() {
    let new_state = _.assign({}, this.state, {session: null});
    this.setState(new_state);
  }

  register() {
    $.ajax("/api/register", {
      method: "post",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: {
        username: "test1",
        password: "test1"
      }, // get this from login form eventually
      success: (resp) => {
        let new_state = _.assign({}, this.state, {session: resp.data});
        this.setState(new_state);
      }
    });
  }

  fetch_current_user_favorites() {
    $.ajax("/api/fcuf_articles", {
      method: "get",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: {user_id: this.state.session.user_id},
      success: (resp) => {
        let new_state = _.assign({}, this.state, { current_user_favorites: resp.data.cuf });
        this.setState(new_state);
      }
    });
  }

  render() {
    return (<div>
      Placeholder Text
    </div>);
  }
}
