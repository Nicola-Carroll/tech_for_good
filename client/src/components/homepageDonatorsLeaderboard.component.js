import React, { Component } from 'react';
import axios from 'axios';
import TopDonator from '../components/TopDonator.component.js';

const { REACT_APP_ENDPOINT } = process.env;

export default class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = { top5: [] };
  }

  async componentDidMount() {
    try {
      const response = await axios.get(
        `${REACT_APP_ENDPOINT}listings/donations`,
      );
      this.setState({ top5: response.data });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  leaderboard() {
    return this.state.top5.map((donator, index) => {
      return (
        <TopDonator
          name={donator[0]}
          donations={donator[1]}
          key={index}
        ></TopDonator>
      );
    });
  }

  render() {
    console.log(this.state.top5.length);
    if (this.state.top5.length !== 0) {
      return (
        <>
          <section id="top-donators">
            <h2 className="text-center display-5 pt-5">Most food donated</h2>
            <table id="top-donators" className="table w-50 mx-auto">
              <thead className="thead-dark">
                <tr>
                  <th className="text-center" scope="col">
                    Name
                  </th>
                  <th className="text-center" scope="col">
                    Donations
                  </th>
                </tr>
              </thead>
              <tbody>{this.leaderboard()}</tbody>
            </table>
          </section>
        </>
      );
    } else {
      return <div></div>;
    }
  }
}
