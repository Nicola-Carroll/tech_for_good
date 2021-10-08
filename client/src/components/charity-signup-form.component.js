import React from 'react';

export default function CharitySignupForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className="section w-50 m-auto">
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            type="hidden"
            name="type"
            id="type"
            value="Charity"
            required
          />
        </div>
        <div className="form-group mt-4 mb-4">
          <input
            className="form-control"
            placeholder="Username"
            type="string"
            name="username"
            id="username"
            required
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
          />
        </div>
        <div className="form-group mt-4 mb-4">
          <input
            className="form-control"
            placeholder="Password"
            type="string"
            name="password"
            id="password"
            required
          />
        </div>
        <div className="form-group mt-4 mb-4">
          <input
            className="form-control"
            placeholder="Password confirmation"
            type="string"
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
          />
        </div>
        <div className="form-group mt-4 mb-4">
          <input
            className="form-control"
            placeholder="Address line 2"
            type="string"
            name="addressLine2"
            id="addressLine2"
            required
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
          />
        </div>
        <div className="form-group mt-4 mb-4">
          <input
            className="form-control"
            placeholder="Contact number"
            type="number"
            name="contactNumber"
            id="contactNumber"
            required
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
          />
        </div>
        <div className="form-submit">
          <button className="btn btn-outline-success mt-3" type="submit">
            Create Account
          </button>
        </div>
      </form>
    </section>
  );
}
