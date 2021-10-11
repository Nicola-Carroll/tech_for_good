import React, { Component, createContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar.component';
import Homepage from './pages/homepage.component';
import Signup from './pages/create-user.component';
import Login from './pages/login.component';
import CreateListing from './pages/CreateListing';
import ViewListings from './pages/view-listings.component';

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
    this.setState({ user: newUser });
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
          <br />
          <Route path="/" exact component={Homepage} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/listings/new" component={CreateListing} />
          <Route path="/feed" component={ViewListings} />
        </Router>
      </userContext.Provider>
    );
  }
}
