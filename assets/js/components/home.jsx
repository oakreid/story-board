import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import $ from 'jquery';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {root} = this.props;
    return (<div>
      <Link to={"/chat"}>Goto chat</Link>
    </div>);
  }
}

export default Home;
