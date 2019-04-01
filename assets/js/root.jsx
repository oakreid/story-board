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
      data: { // get this from login form eventually
        username: "test",
        password: "test"
      },
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
      data: { // get this from login form eventually
        username: "test1",
        password: "test1"
      },
      success: (resp) => {
        let new_state = _.assign({}, this.state, {session: resp.data});
        this.setState(new_state);
      }
    });
  }

  fetch_current_user_favorites() { // call this onclick the favorites tab
    $.ajax("/api/fcuf_articles", {
      method: "post",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: {user_id: this.state.session.user_id},
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
      data: { // this is dummy data, replace with real data eventually
        article: {
          source: "Lifehacker.com",
          author: "David Murphy",
          title: "How to Buy a New (Not-AirPower) Charging Pad",
          description: "Bad news for Apple fans: AirPower is out. At least, Apple snuck that little announcement in right before the weekend to ensure that nobody would think the big cancellation was a hoax. Read more...",
          url: "https://lifehacker.com/how-to-buy-a-new-not-airpower-charging-pad-1833678393",
          image: "https://i.kinja-img.com/gawker-media/image/upload/s--Bv9n48Kn--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/rgksmgvhmidpugmmihga.jpg",
          user_id: this.state.session.user_id
        }
      },
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
      data: {
        id: 1 // get the id of the article to unfavorite
      },
      success: (resp) => {
        this.fetch_current_user_favorites() // refresh view
      }
    });
  }

  render() {
    return (<div>
      Placeholder Text
    </div>);
  }
}
