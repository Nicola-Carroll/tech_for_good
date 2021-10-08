import React, { Component } from 'react';
import axios from 'axios';

const { REACT_APP_ENDPOINT } = process.env;

export default class ListingForm extends Component {
  constructor(props) {
    super(props);

    this.updateNumberOfMeals = this.updateNumberOfMeals.bind(this);
    this.updateDescription = this.updateDescription.bind(this);

    this.state = {
      numberOfMeals: '',
      description: '',
      timeAvailableUntil: new Date(),
      listedBy: '',
    };
  }

  updateNumberOfMeals(e) {
    this.setState({
      numberOfMeals: e.target.value,
    });
  }

  updateDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const listing = {
      numberOfMeals: this.state.numberOfMeals,
      description: this.state.description,
      timeAvailableUntil: new Date(),
      listedBy: 1, // just a default
    };

    axios.post(`${REACT_APP_ENDPOINT}listings/create`, listing).then((res) => {
      console.log(res.data);
    });
  }

  render() {
    return (
      <section className="section w-50 m-auto">
        <form className="listing-form" onSubmit={this.handleSubmit.bind(this)}>
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
              value={this.state.numberOfMeals}
              onChange={this.updateNumberOfMeals}
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
              value={this.state.description}
              onChange={this.updateDescription}
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
}
