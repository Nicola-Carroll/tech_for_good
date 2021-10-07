import React from 'react';
export default function ListingForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className="section listing">
      <form className="listing-form" onSubmit={handleSubmit}>
        <div className="form-meals">
          <label htmlFor="meals">Number of Meals</label>
          <input type="number" name="meals" id="meals" />
        </div>
        <div className="form-description">
          <label htmlFor="desc">Description</label>
          <input type="text" name="desc" id="desc" />
        </div>
        <div className="form-submit">
          <input type="submit" value="Create Listing" />
        </div>
      </form>
    </section>
  );
}
