import React, { Component } from 'react';
// import Listing from './listing.component';
import axios from 'axios';

const { REACT_APP_ENDPOINT } = process.env;
export default class AddTally extends Component {
  constructor(props) {
    super(props);
    this.state = { total: 0 };
  }

  // this connects the frontend to the backend
  componentDidMount() {
    axios
      .get(`${REACT_APP_ENDPOINT}listings`)
      .then((response) => {
        console.log(response);
        let sum = 0;
        for (let i = 0; i < response.data.length; i++) {
          sum += response.data[i].numberOfMeals;
        }
        this.setState({
          total: sum,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // function Listing(props) {
  //   return (
  //     <tr>{props.listing.numberOfMeals}</tr>

  render() {
    return (
      <div className="section w-50 m-auto">
        <label className="mt-2 mb-2" htmlFor="meals">
          Number of meals that have been claimed thus far {this.state.total}
        </label>
      </div>
    );
  }
}
