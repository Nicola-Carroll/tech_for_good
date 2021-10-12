import React, { Component } from 'react';
import axios from 'axios';

const { REACT_APP_ENDPOINT } = process.env;
export default class AddDonationLeaderboard extends Component {
  constructor(props) {
    super(props);
    // this.state = { total: [] };
  }

  componentDidMount() {
    axios
      .get(`${REACT_APP_ENDPOINT}accounts/create`)
      .then((response) => {
        console.log(response.data, 'hiiiiihiii');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="section w-50 m-auto">
        <p className="mt-2 mb-2 text-left" htmlFor="meals">
          Leaderboard of restaurants that have donated the most:
        </p>
      </div>
    );
  }
}
