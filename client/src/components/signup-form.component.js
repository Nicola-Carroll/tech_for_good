import React from 'react';

export default function SignupForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className="section w-50 m-auto">
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="mt-2 mb-2" htmlFor="username">
            Username:
          </label>
          <input
            className="form-control"
            type="string"
            name="username"
            id="username"
            required
          />
        </div>
        <div className="form-group">
          <label className="mt-2 mb-2" htmlFor="emailAddress">
            Email address:
          </label>
          <input
            className="form-control"
            type="string"
            name="emailAddress"
            id="emailAddress"
            required
          />
        </div>
        <div className="form-group">
          <label className="mt-2 mb-2" htmlFor="password">
            Password:
          </label>
          <input
            className="form-control"
            type="string"
            name="password"
            id="password"
            required
          />
        </div>
        <div className="form-group">
          <label className="mt-2 mb-2" htmlFor="passwordConfirmation">
            Password Confirmation:
          </label>
          <input
            className="form-control"
            type="string"
            name="passwordConfirmation"
            id="passwordConfirmation"
            required
          />
        </div>
        <div className="form-group">
          <label className="mt-2 mb-2" htmlFor="addressLine1">
            Address line 1:
          </label>
          <input
            className="form-control"
            type="string"
            name="addressLine1"
            id="addressLine1"
            required
          />
        </div>
        <div className="form-group">
          <label className="mt-2 mb-2" htmlFor="addressLine2">
            Address line 2:
          </label>
          <input
            className="form-control"
            type="string"
            name="addressLine2"
            id="addressLine2"
            required
          />
        </div>
        <div className="form-group">
          <label className="mt-2 mb-2" htmlFor="city">
            City:
          </label>
          <input
            className="form-control"
            type="string"
            name="city"
            id="city"
            required
          />
        </div>
        <div className="form-group">
          <label className="mt-2 mb-2" htmlFor="postCode">
            Post code:
          </label>
          <input
            className="form-control"
            type="string"
            name="postCode"
            id="postCode"
            required
          />
        </div>
        <div className="form-group">
          <label className="mt-2 mb-2" htmlFor="contactNumber">
            Contact number:
          </label>
          <input
            className="form-control"
            type="number"
            name="contactNumber"
            id="contactNumber"
            required
          />
        </div>
        <div className="form-group">
          <label className="mt-2 mb-2" htmlFor="desc">
            Description:
          </label>
          <textarea
            className="form-control"
            type="text"
            name="desc"
            id="desc"
            rows="3"
          ></textarea>
        </div>
        <div className="form-group">
          <label className="mt-2 mb-2" htmlFor="charityNumber">
            Charity number:
          </label>
          <input
            className="form-control"
            type="number"
            name="charityNumber"
            id="charityNumber"
            required
          />
        </div>
        <div className="form-group">
          <label className="mt-2 mb-2" htmlFor="websiteLink">
            Website link:
          </label>
          <input
            className="form-control"
            type="string"
            name="websiteLink"
            id="websiteLink"
            required
          />
        </div>
        <div className="form-submit">
          <button className="btn btn-outline-success mt-3" type="submit">
            Create Listing
          </button>
        </div>
      </form>
    </section>
  );
}
