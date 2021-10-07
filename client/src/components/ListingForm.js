import React from 'react';
import axios from 'axios';

export default function listingForm() {
  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post('http://localhost:3000/listings/new', {
        numberOfMeals: '',
        description: '',
        timeAvailableUntil: '',
        listedBy: '',
      })
      .then((res) => {
        console.log(res.data);
      });
  }

  return (
    <section className="section w-50 m-auto">
      <form className="listing-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="mt-2 mb-2" htmlFor="meals">
            Number of Meals
          </label>
          <input
            className="form-control"
            type="number"
            name="meals"
            id="meals"
            min="1"
            max="1200"
          />
        </div>
        <div className="form-group">
          <label className="mt-2 mb-2" htmlFor="desc">
            Description
          </label>
          <textarea
            className="form-control"
            type="text"
            name="desc"
            id="desc"
            rows="3"
          ></textarea>
          <small id="passwordHelpBlock" class="form-text text-muted">
            Please describe the type of food along with the dietary
            requirements.
          </small>
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
