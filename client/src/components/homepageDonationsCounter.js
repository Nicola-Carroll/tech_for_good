import React, { Component } from 'react';
import axios from 'axios';

const { REACT_APP_ENDPOINT } = process.env;
export default class AddDonatedMeals extends Component {
  constructor(props) {
    super(props);
    this.state = { totaldonated: 0 };
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
          totaldonated: sum,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="section w-50 m-auto pt-5 pb-5">
        <h2 className="text-center display-5" id="home">
          Donations to date
        </h2>
        <p
          id="total"
          className="row font-weight-bold justify-content-center display-4 pt-5"
        >
          {this.state.totaldonated}
        </p>
      </div>
    );
  }
}
