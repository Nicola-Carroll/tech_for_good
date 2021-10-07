import React from 'react';

export default function ListingForm() {
  function handleSubmit(e) {
    e.preventDefault();
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
          />
        </div>
        <div className="form-group">
          <label className="mt-2 mb-2" htmlFor="desc">
            Description
          </label>
          <input className="form-control" type="text" name="desc" id="desc" />
        </div>
        <div className="form-submit">
          <button
            className="btn btn-primary"
            type="submit"
            value="Create Listing"
          />
        </div>
      </form>
    </section>
  );
}
