/* eslint-disable no-undef */
import React, { Component, createRef } from 'react';
import axios from 'axios';
import { userContext } from '../App.js';

const { REACT_APP_ENDPOINT } = process.env;

export default class ListingForm extends Component {
  constructor(props) {
    super(props);

    this.updateNumberOfMeals = this.updateNumberOfMeals.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.updateDate = this.updateDateTime.bind(this);
    this.input = createRef();

    this.state = {
      numberOfMeals: '',
      description: '',
      timeAvailableUntil: '',
      listedBy: '',
      showNotice: false,
    };
  }

  clearForm() {
    this.setState({
      numberOfMeals: '',
      description: '',
      timeAvailableUntil: '',
    });
  }

  showNotice() {
    this.setState({
      showNotice: true,
    });
    setTimeout(() => {
      this.setState({
        showNotice: false,
      });
    }, 2000);
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

  updateDateTime(e) {
    this.setState({
      timeAvailableUntil: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const listing = {
      numberOfMeals: this.state.numberOfMeals,
      description: this.state.description,
      timeAvailableUntil: this.state.timeAvailableUntil,
      listedBy: this.input.current.value,
    };

    axios.post(`${REACT_APP_ENDPOINT}listings/create`, listing).then((res) => {
      console.log(res.data);
    });
    this.clearForm();
    this.showNotice();
  }

  render() {
    return (
      <>
        <userContext.Consumer>
          {({ user }) => {
            return (
              <>
                <section className="section w-50 m-auto">
                  <form
                    className="listing-form"
                    onSubmit={this.handleSubmit.bind(this)}
                  >
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
                      <small
                        id="listingDescGuidance"
                        className="form-text text-muted"
                      >
                        Please describe the type of food along with the dietary
                        requirements.
                      </small>
                    </div>

                    <div className="form-group">
                      <label className="mt-2 mb-2" htmlFor="timeAvailableUntil">
                        Available Until:
                      </label>
                      <input
                        className="form-control"
                        type="datetime-local"
                        name="timeAvailableUntil"
                        id="timeAvailableUntil"
                        onChange={this.updateDateTime.bind(this)}
                      />
                    </div>

                    <div className="form-group">
                      <input
                        className="form-control"
                        type="hidden"
                        name="listedBy"
                        id="listedBy"
                        ref={this.input}
                        value={user._id}
                      />
                    </div>

                    <div className="form-submit">
                      <button
                        id="create-listing-btn"
                        className="btn btn-outline-success mt-3"
                        type="submit"
                      >
                        Create Listing
                      </button>
                    </div>
                  </form>
                  {this.state.showNotice && (
                    <div id="submission-notice">
                      <p>Your food listing has been successfully added.</p>
                    </div>
                  )}
                </section>
              </>
            );
          }}
        </userContext.Consumer>
      </>
    );
  }
}
