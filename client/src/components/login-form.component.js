import axios from 'axios';
import React, { useState } from 'react';

const { REACT_APP_ENDPOINT } = process.env;

export default function LoginForm() {
  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post(`${REACT_APP_ENDPOINT}accounts/authenticate`, {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data._id) {
          window.location = '/feed';
        } else {
          alert(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  return (
    <section className="section w-50 m-auto">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group mt-4 mb-4">
          <input
            className="form-control"
            placeholder="Username"
            type="string"
            name="username"
            id="username"
            required
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-group mt-4 mb-4">
          <input
            className="form-control"
            placeholder="Password"
            type="password"
            name="password"
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-submit">
          <button
            id="loginSubmit"
            className="btn btn-outline-success mt-3"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </section>
  );
}
