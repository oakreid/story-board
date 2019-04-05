import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import $ from 'jquery';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

class Chat extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {root} = this.props;
    return (<div id="chatMain">
      <p>This is the chat page</p>
    </div>);
  }
}

export default Chat;
