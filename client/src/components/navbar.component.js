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
                  <Link to="/" className="navbar-brand">
                    Homepage
                  </Link>
                  <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                      <li className="navbar-item">
                        {!user && (
                          <Link to="/signup" className="nav-link">
                            Signup
                          </Link>
                        )}
                      </li>
                      <li className="navbar-item">
                        {!user && (
                          <Link to="/login" className="nav-link">
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
                          <Link to="/listings/new" className="nav-link">
                            Add listing
                          </Link>
                        )}
                      </li>
                    </ul>
                    {user && (
                      <button
                        class="btn btn-outline-success my-2 my-sm-0"
                        type="submit"
                        onClick={logoutUser}
                      >
                        Logout
                      </button>
                    )}
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
