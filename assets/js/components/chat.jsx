import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import $ from 'jquery';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.channel = props.channel;
    this.state = {
      chat: []
    }

    this.channel.on("other_submit", payload => {
      this.setState(payload);
    });

    this.channel.join().receive("ok", this.set_chat_view.bind(this));
  }

  submit() {
    let cs = $("#chatsubmit").val();
    this.channel.push("submit", {message: {value: cs}}).receive("ok", this.set_chat_view.bind(this));
  }

  set_chat_view(view) {
    let { chat } = view;
    let new_state = _.assign({}, this.state, {chat: chat});
    this.setState(new_state);
  }

  buildChat() {
    return this.state.chat.map(function(message) {
      let key = "" + _.random(99999999999999999999999999);
      return (<p key={key}>{message}</p>);
    });
  }

  render() {
    let {root} = this.props;
    let chat_log = this.buildChat();
    return (<div id="chatMain">
      <input type="text" id="chatsubmit"/><button onClick={() => this.submit()}>Push Me</button>
      <p>This is the chat page</p>
      <div id="chatlog">
        {chat_log}
      </div>
    </div>);
  }
}

export default Chat;
