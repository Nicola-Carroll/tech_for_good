// import React, { Component } from 'react';
// import axios from 'axios';

// const { REACT_APP_ENDPOINT } = process.env;
// export default class AddDonationLeaderboard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { restaurants: [] };
//   }

//   restaurantsLeaderboard(data) {
//     return data.filter((totalRestaurants) => {
//       return totalRestaurants.type;
//     });
//   }

//   async componentDidMount() {
//     try {
//       const response = await axios.get(`${REACT_APP_ENDPOINT}accounts`);
//       console.log(response.data);
//       this.setState({
//         restaurants: this.restaurantsLeaderboard(response.data),
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   RestaurantList() {
//     return this.state.restaurants.map((totalRestaurants) => {
//       return <div restaurant={totalRestaurants}></div>;
//     });
//   }

//   // {
//   //   type: {
//   //     type: String,
//   //     enum: {
//   //       values: ['Charity', 'Restaurant'],
//   //       message: '{VALUE} is not an available account type',
//   //     },
//   //     required: [true, 'Account type required'],
//   //   },

//   render() {
//     return (
//       <div className="section w-50 m-auto">
//         <p className="mt-2 mb-2 text-left" htmlFor="meals">
//           Leaderboard of restaurants that have donated the most:
//         </p>
//         <p>{this.RestaurantList()}</p>
//       </div>
//     );
//   }
// }
