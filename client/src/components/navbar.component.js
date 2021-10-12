import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../App.js';

export default class Navbar extends Component {
  render() {
    return (
      <>
        <userContext.Consumer>
          {({ user, logoutUser }) => {
            return (
              <>
                <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                  <Link id="homepage-link" to="/" className="navbar-brand">
                    Homepage
                  </Link>
                  <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                      <li className="navbar-item">
                        {!user && (
                          <Link
                            id="signup-link"
                            to="/signup"
                            className="nav-link"
                          >
                            Signup
                          </Link>
                        )}
                      </li>
                      <li className="navbar-item">
                        {!user && (
                          <Link
                            id="login-link"
                            to="/login"
                            className="nav-link"
                          >
                            Login
                          </Link>
                        )}
                      </li>
                      <li className="navbar-item">
                        {user && user.type === 'Charity' && (
                          <Link id="feed-link" to="/feed" className="nav-link">
                            Feed
                          </Link>
                        )}
                      </li>
                      <li className="navbar-item">
                        {user && user.type === 'Restaurant' && (
                          <Link
                            id="new-listing-link"
                            to="/listings/new"
                            className="nav-link"
                          >
                            Add listing
                          </Link>
                        )}
                      </li>
                      <li className="navbar-item">
                        {user && (
                          <Link
                            id="logout-link"
                            className="nav-link"
                            to="/login"
                            onClick={logoutUser}
                          >
                            Logout
                          </Link>
                        )}
                      </li>
                    </ul>
                  </div>
                </nav>
              </>
            );
          }}
        </userContext.Consumer>
      </>
    );
  }
}
