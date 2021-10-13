import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';

import ListingModal from '../shared/ListingModal.component';
import ListingMarker from './ListingMarker.component';

const { REACT_APP_MAP_API } = process.env;
const { REACT_APP_ENDPOINT } = process.env;

class ListingMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
      showModal: false,
      selectedListingId: null,
      listedByAccountCoords: [],
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  static defaultProps = {
    center: {
      lat: 51.50696956402362,
      lng: -0.12783497069894073,
    },
  };

  availableListings(data) {
    return data.filter((currentListing) => {
      return (
        !currentListing.claimedBy &&
        new Date(currentListing.timeAvailableUntil) > new Date()
      );
    });
  }

  async componentDidMount() {
    try {
      const response = await axios.get(`${REACT_APP_ENDPOINT}listings`);
      // .reverse() is added here so that if a restaurant has more than one active listing
      // the marker on the map is for the most recent listing as opposed to the oldest
      const availableListings = this.availableListings(response.data).reverse();
      await this.listedByAccountCoords(availableListings);
    } catch (error) {
      console.log(error);
    }
  }

  async accountCoords(listing) {
    const listedById = listing.listedBy;
    const response = await axios.get(
      `${REACT_APP_ENDPOINT}accounts/${listedById}`,
    );
    return { lat: response.data.latitude, long: response.data.longitude };
  }

  async listedByAccountCoords(availableListings) {
    const promises = [];
    availableListings.forEach((listing) => {
      promises.push(this.accountCoords(listing));
    });
    const accountsCoords = await Promise.all(promises);
    this.setState({
      listedByAccountCoords: accountsCoords,
      listings: availableListings,
    });
  }

  renderListingMarker(lat, long, id) {
    return (
      <ListingMarker
        lat={lat}
        lng={long}
        key={id}
        handleClick={() => this.handleOpenModal(id)}
        className="listing-marker"
      ></ListingMarker>
    );
  }

  renderAllListingMarkers() {
    return this.state.listings.map((currentListing, index) => {
      const lat = this.state.listedByAccountCoords[index].lat;
      const long = this.state.listedByAccountCoords[index].long;
      return this.renderListingMarker(lat, long, currentListing._id);
    });
  }

  handleOpenModal(id) {
    this.setState({ showModal: true, selectedListingId: id });
  }

  handleCloseModal() {
    this.setState({ selectedListingId: null });
    this.componentDidMount();
  }

  render() {
    return (
      <>
        <div
          className="map-container"
          style={{ height: '100vh', width: '75%' }}
        >
          <GoogleMapReact
            bootstrapURLKeys={{ key: REACT_APP_MAP_API }}
            defaultCenter={this.props.center}
            defaultZoom={11.25}
          >
            {this.renderAllListingMarkers()}
          </GoogleMapReact>
        </div>
        <ListingModal
          className="listing-modal"
          listingId={this.state.selectedListingId}
          handleClose={this.handleCloseModal}
        />
      </>
    );
  }
}

export default ListingMap;
