import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import $ from 'jquery';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.channel = props.channel;
    this.channel.on("other_submit", payload => {
      let new_state = _.assign({}, state, {chat: payload});
      this.props.root.setState(new_state);
    });

    submit() {
      this.channel.push("submit", {message: document.getElementById('chatsubmit')})
      .receive("ok", this.set_chat_view.bind(this));

    this.channel.join().receive("ok", this.set_chat_view.bind(this));
    }
  }

  set_chat_view(view) {
    new_state = _.assign({}, this.props.root.state, {chat:, view});
    this.props.root.setState(new_state);
  }

  render() {
    let {root} = this.props;
    return (<div id="chatMain">
      <input type="text" id="chatsubmit"/><button onClick={() => this.submit()}>Push Me</button>
      <p id="chatlog">This is the chat page</p>
    </div>);
  }
}

export default Chat;
