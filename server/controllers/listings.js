import Listing from '../models/listing.js';

const ListingsController = {
  async index(req, res) {
    try {
      const listings = await Listing.find();
      await res.json(listings);
    } catch (error) {
      res.status(400).json(`Error: ${error}`);
    }
  },

  async create(req, res) {
    try {
      const listing = req.body;
      const newListing = new Listing(listing);

      await newListing.save();
      res.status(200).json(newListing);
    } catch (error) {
      res.status(400).json(`Error: ${error}`);
    }
  },

  async update(req, res) {
    try {
      const id = req.params.id;
      const listing = await Listing.findById(id);
      listing.claimedBy = req.body.claimedBy;

      await listing.save();

      res.send(listing);
    } catch (error) {
      res.status(400).json(`Error: ${error}`);
    }
  },
};

export default ListingsController;
