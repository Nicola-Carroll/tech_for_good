// /* eslint-disable react/jsx-no-undef */
// import React, { Component } from 'react';
// // import 'Relationship'?
// import axios from 'axios';

// const { REACT_APP_ENDPOINT } = process.env;

// export default class Leaderboard extends Component {
//   constructor(props) {
//     super(props);
//     // this.state = { relationships: [] };
//   }

//   async componentDidMount() {
//     try {
//       const response = await axios.get(
//         `${REACT_APP_ENDPOINT}listings/?`,
//       );
//       this.setState({ relationships: response.data });
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   relationshipCollection() {
//     return this.state.relationships.map((relationship) => {
//       return (

//       );
//     });
//   }

//   render() {
//     return (
//       // <>
//       //   <table className="table">
//       //     <thead className="thead-light">
//       //       {/* <tr>
//       //         <th>Charity</th>
//       //         <th>Donator</th>
//       //         <th>Number of Meals</th>
//       //       </tr>
//       //     </thead>
//       //     <tbody>{this.relationshipCollection()}</tbody> */}
//       //   </table>
//       // </>
//     );
//   }
// }
