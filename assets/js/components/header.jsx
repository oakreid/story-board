import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import $ from 'jquery';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {root} = this.props;
    let session_info;
    let favorites;
    if (root.state.session == null) {
      session_info = (<div className="form-inline my-2">
        <input type="text" placeholder="username"
          onChange={(ev) => root.update_login_form({username: ev.target.value})} />
        <input type="password" placeholder="password"
          onChange={(ev) => root.update_login_form({password: ev.target.value})} />
        <button className="btn btn-secondary" onClick={() => root.login()}>Login</button>
        <button className="btn btn-secondary" onClick={() => root.register()}>Register</button>
      </div>);
      favorites = (<p></p>);
    } else {
      session_info = (<div className="my-2">
        <p className="text-success">Logged in as: {root.state.login_form.username}</p>
        <p className="text-success">My ID: {root.state.session.user_id}</p>
        <button className="btn btn-secondary" onClick={() => root.logout()}>Logout</button>
      </div>);
      favorites = (<p><Link to={"/favorites"} onClick={() => root.fetch_current_user_favorites()}>My Favorites</Link></p>);
    }

    return (<div>
      <div className="row my-2 bg-dark">
        <div className="col-3">
          <h1 className="text-white">Story Board</h1>
        </div>
        <div className="col-2">
          <p><Link to={"/"}>Search Articles</Link></p>
        </div>
        <div className="col-2">
          {favorites}
        </div>
        <div className="col-3">
          {session_info}
        </div>
      </div>
      <div className="row my-2 bg-white">
        <input type="text" placeholder="Search here"
          onChange={(ev) => root.update_search_bar(ev.target.value)} />
        <button className="btn btn-secondary">Go</button>
      </div>
    </div>);
  }
}

export default Header;
