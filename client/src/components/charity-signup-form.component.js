import axios from 'axios';
import React, { useState } from 'react';

export default function CharitySignupForm() {
  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post('http://localhost:5000/api/accounts/create', allValues)
      .then((response) => {
        if (response.status === 200) {
          window.location = '/login';
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const [allValues, setAllValues] = useState({
    type: '',
    username: '',
    emailAddress: '',
    password: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    postCode: '',
    contactNumber: '',
    description: '',
    charityNumber: '',
    websiteLink: '',
    foodHygieneRating: '',
  });

  const allValuesUpdate = (e) => {
    setAllValues({
      ...allValues,
      [e.target.name]: e.target.value,
      type: 'Charity',
      foodHygieneRating: 5,
    });
  };

  return (
    <section className="section w-50 m-auto">
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group mt-4 mb-4">
          <input
            className="form-control"
            placeholder="Username"
            type="string"
            name="username"
            id="username"
            required
            onChange={allValuesUpdate}
          />
        </div>
        <div className="form-group mt-4 mb-4">
          <input
            className="form-control"
            placeholder="Email address"
            type="string"
            name="emailAddress"
            id="emailAddress"
            required
            onChange={allValuesUpdate}
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
            onChange={allValuesUpdate}
          />
        </div>
        <div className="form-group mt-4 mb-4">
          <input
            className="form-control"
            placeholder="Password confirmation"
            type="password"
            name="passwordConfirmation"
            id="passwordConfirmation"
            required
          />
        </div>
        <div className="form-group mt-4 mb-4">
          <input
            className="form-control"
            placeholder="Address line 1"
            type="string"
            name="addressLine1"
            id="addressLine1"
            required
            onChange={allValuesUpdate}
          />
        </div>
        <div className="form-group mt-4 mb-4">
          <input
            className="form-control"
            placeholder="Address line 2"
            type="string"
            name="addressLine2"
            id="addressLine2"
            onChange={allValuesUpdate}
          />
        </div>
        <div className="form-group mt-4 mb-4">
          <input
            className="form-control"
            placeholder="City"
            type="string"
            name="city"
            id="city"
            required
            onChange={allValuesUpdate}
          />
        </div>
        <div className="form-group mt-4 mb-4">
          <input
            className="form-control"
            placeholder="Post code"
            type="string"
            name="postCode"
            id="postCode"
            required
            onChange={allValuesUpdate}
          />
        </div>
        <div className="form-group mt-4 mb-4">
          <input
            className="form-control"
            placeholder="Contact number"
            type="tel"
            name="contactNumber"
            id="contactNumber"
            required
            onChange={allValuesUpdate}
          />
        </div>
        <div className="form-group mt-4 mb-4">
          <textarea
            className="form-control"
            placeholder="A description of your charity"
            type="text"
            name="description"
            id="description"
            rows="3"
            required
            onChange={allValuesUpdate}
          ></textarea>
        </div>
        <div className="form-group mt-4 mb-4">
          <input
            className="form-control"
            placeholder="Charity number"
            type="number"
            name="charityNumber"
            id="charityNumber"
            required
            onChange={allValuesUpdate}
          />
        </div>
        <div className="form-group mt-4 mb-4">
          <input
            className="form-control"
            placeholder="Website link"
            type="string"
            name="websiteLink"
            id="websiteLink"
            required
            onChange={allValuesUpdate}
          />
        </div>
        <div className="form-submit">
          <button
            id="charitySubmit"
            className="btn btn-outline-success mt-3"
            type="submit"
          >
            Create Account
          </button>
        </div>
      </form>
    </section>
  );
}
