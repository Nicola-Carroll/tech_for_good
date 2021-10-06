import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar.component';
import Homepage from './pages/homepage.component';
import Signup from './pages/create-user.component';
import Login from './pages/login.component';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <br />
        <Route path="/" exact component={Homepage} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </Router>
      <div className="container">Hello tech for good!</div>
    </>
  );
}

export default App;
