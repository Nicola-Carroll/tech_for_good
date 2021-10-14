import React, { Component } from 'react';
//import axios from 'axios';

//const { REACT_APP_ENDPOINT } = process.env;
export default class AboutUs extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { total: 0 };
//   }

//   componentDidMount() {
//     axios
//       .get(`${REACT_APP_ENDPOINT}listings`)
//       .then((response) => {
//         console.log(response);
//         let sum = 0;

//         let claimed = response.data.filter((currentListing) => {
//           return currentListing.claimedBy;
//         });

//         for (let i = 0; i < claimed.length; i++) {
//           sum += claimed[i].numberOfMeals;
//         }

//         this.setState({
//           total: sum,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

  render() {
    return (
      <div className="section w-50 m-auto">
        <h1 className="mt-2 mb-2 display-5 text-center" htmlFor="meals">
        What we do:
        </h1>
        <p className="row font-weight-bold justify-content-center text-success display-6 text-center">
        SecondHelpings is a London based charity food redistributor. We connect businesses that have surplus food with frontline charities. Helping others and reducing waste.
        </p> 
      </div>
    );
  };
}

