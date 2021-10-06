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

  async New(req, res) {},
};

export default ListingsController;
