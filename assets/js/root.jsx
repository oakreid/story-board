import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import $ from 'jquery';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./components/header.jsx";
import Favorites from "./components/favorites.jsx";
import Home from "./components/home.jsx"

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

  login() {
      $.ajax("/api/login", {
      method: "post",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify(this.state.login_form),
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
      data: JSON.stringify(this.state.login_form),
      success: (resp) => {
        let new_state = _.assign({}, this.state, {session: resp.data});
        this.setState(new_state);
      }
    });
  }

  fetch_current_user_favorites() {
    $.ajax("/api/fcuf_articles", {
      method: "post",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify({user_id: this.state.session.user_id}),
      success: (resp) => {
        let new_state = _.assign({}, this.state, { current_user_favorites: resp.data.cuf });
        this.setState(new_state);
      }
    });
  }

  favorite() {
    $.ajax("/api/favorite", {
      method: "post",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify({
        article: {
          source: "Lifehacker.com",
          author: "David Murphy",
          title: "How to Buy a New (Not-AirPower) Charging Pad",
          description: "Bad news for Apple fans: AirPower is out. At least, Apple snuck that little announcement in right before the weekend to ensure that nobody would think the big cancellation was a hoax. Read more...",
          url: "https://lifehacker.com/how-to-buy-a-new-not-airpower-charging-pad-1833678393",
          image: "https://i.kinja-img.com/gawker-media/image/upload/s--Bv9n48Kn--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/rgksmgvhmidpugmmihga.jpg",
          user_id: this.state.session.user_id
        }
      }), // this is dummy data, replace with real data eventually
      success: (resp) => {
        this.setState(this.state) // refresh view
      }
    });
  }

  unfavorite() {
    $.ajax("/api/unfavorite", {
      method: "post",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify({
        id: 1
      }), // get the id of the article to unfavorite
      success: (resp) => {
        this.fetch_current_user_favorites() // refresh view
      }
    });
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
