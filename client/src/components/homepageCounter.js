import React, { Component } from 'react';
import axios from 'axios';

const { REACT_APP_ENDPOINT } = process.env;
export default class AddTally extends Component {
  constructor(props) {
    super(props);
    this.state = { total: 0 };
  }

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

  render() {
    return (
      <div className="section w-50 m-auto">
        <p className="mt-2 mb-2 text-center" htmlFor="meals">
          Number of meals that have been saved from waste thus far:
        </p>
        <p className="row font-weight-bold justify-content-center text-success display-5">
        {this.state.total}
        </p>
      </div>
    );
  }
}
