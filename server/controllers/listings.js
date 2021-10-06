import Listing from '../models/listing.js';

const ListingsController = {
  Index(req, res) {
    // res.send('Hello Listings page!');

    Listing.find()
      .then((listings) => res.json(listings))
      .catch((error) => res.status(400).json(`Error: ${error}`));
  },

  async New(req, res) {},
};

// module.exports = ListingsController;

export default ListingsController;
