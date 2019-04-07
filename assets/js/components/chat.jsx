import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import $ from 'jquery';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DOMPurify from 'dompurify';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.channel = props.channel;
    this.session = props.session;
    this.state = {
      chat: []
    }

    this.channel.on("other_submit", payload => {
      this.setState(payload);
    });

    this.channel.join().receive("ok", this.set_chat_view.bind(this));
  }

  submit() {
    let cs = DOMPurify.sanitize($("#chatsubmit").val());
    let dt = new Date();
    let to_push = {
      message: {
        value: cs,
        uid: this.session.user_id,
        dt: dt.toLocaleString()
      }
    };
    this.channel.push("submit", to_push).receive("ok", this.set_chat_view.bind(this));
  }

  set_chat_view(view) {
    let { chat } = view;
    let new_state = _.assign({}, this.state, {chat: chat});
    this.setState(new_state);
  }

  buildChat() {
    return this.state.chat.map(function(message) {
      let div_key = "" + _.random(99999999999999999999999999);
      let p_key = "" + _.random(99999999999999999999999999);
      let style = {
        padding: "5px",
        backgroundColor: "#3F51B5",
        color: "white"
      };
      return (<div key={div_key}>
        {message["header"]}
        <p key={p_key} className="rounded" style={style}>{message["val"]}</p>
      </div>);
    });
  }

  render() {
    let {root} = this.props;
    let chat_log = this.buildChat();
    return (<div id="chatMain">
      <TextField placeholder="Chat with fellow humans" variant="outlined" margin="normal" id="chatsubmit"/>
      <div><Button variant="outlined" margin="normal" color="primary" onClick={() => this.submit()}>Send</Button></div>
      <br></br>
      <h3>Chat:</h3>
      <div id="chatlog" className="border border-secondary rounded" style={{padding: "10px"}}>
        {chat_log}
      </div>
    </div>);
  }
}

export default Chat;
