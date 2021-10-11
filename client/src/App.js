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
      user: 'hello',
    };
  }

  render() {
    return (
      <userContext.Provider value={this.state.user}>
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
