import React, { Component, createContext } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/shared/navbar.component';
import Homepage from './pages/homepage.component';
import Signup from './pages/create-user.component';
import Login from './pages/login.component';
import CreateListing from './pages/CreateListing';
import ViewListings from './pages/ViewListings.component';
import ViewMyListings from './pages/view-my-listings.component';
import ViewMyClaims from './pages/view-my-claims.component';

export const userContext = createContext(null);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login(newUser) {
    this.setState({
      user: newUser,
    });
  }

  logout() {
    this.setState({ user: null });
  }

  render() {
    const value = {
      user: this.state.user,
      loginUser: this.login,
      logoutUser: this.logout,
    };
    return (
      <userContext.Provider value={value}>
        <Router>
          <Navbar />
          <Route path="/" exact component={Homepage} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/login">
            {!this.state.user ? (
              <Login />
            ) : this.state.user.type === 'Charity' ? (
              <Redirect to="/feed" />
            ) : (
              <Redirect to="/mylistings" />
            )}
          </Route>
          <Route exact path="/feed">
            {this.state.user ? <ViewListings /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/mylistings">
            {this.state.user ? <ViewMyListings /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/myclaims">
            {this.state.user ? <ViewMyClaims /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/listings/new">
            {this.state.user ? <CreateListing /> : <Redirect to="/login" />}
          </Route>
        </Router>
      </userContext.Provider>
    );
  }
}
