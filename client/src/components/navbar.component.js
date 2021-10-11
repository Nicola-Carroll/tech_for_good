import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar bg-warning navbar-expand">
        <Link to="/" className="navbar-brand">
          Homepage
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item btn btn-outline-success my-2 my-sm-0 ">
              <Link to="/signup" className="nav-link">
                Signup
              </Link>
            </li>
            <li className="navbar-item btn btn-outline-success my-2 my-sm-0">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="navbar-item btn btn-outline-success my-2 my-sm-0">
              <Link id="feed-link" to="/feed" className="nav-link">
                Feed
              </Link>
            </li>
            <li className="navbar-item btn btn-outline-success my-2 my-sm-0">
              <Link to="/listings/new" className="nav-link">
                Add listing
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
