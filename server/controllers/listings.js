import Listing from '../models/listing.js';

const ListingsController = {
  async Index(req, res) {
    try {
      const listings = await Listing.find();
      const data = await res.json(listings);
    } catch (error) {
      res.status(400).json(`Error: ${error}`);
    }
  },

  async New(req, res) {
    const listing = req.body;

    const newListing = new Listing(listing);

    newListing
      .save()
      .then(() => res.status(200).json(newListing))
      .catch((error) => res.status(400).json('Error: ' + error));
  },
};

export default ListingsController;
