import Listing from '../models/listing.js';

const ListingsController = {
  async index(req, res) {
    try {
      const listings = await Listing.find().sort({ $natural: -1 });
      await res.json(listings);
    } catch (error) {
      res.status(400).json(`Error: ${error}`);
    }
  },

  async listingDetails(req, res) {
    try {
      const account = await Listing.find()
        .where('listedBy')
        .in(req.params.id)
        .exec();
      await res.status(200).json(account);
    } catch (error) {
      res.status(400).json(`Error: ${error}`);
    }
  },

  async claimDetails(req, res) {
    try {
      const account = await Listing.find()
        .where('claimedBy')
        .in(req.params.id)
        .exec();
      await res.status(200).json(account);
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

  async donations(req, res) {
    try {
      const listings = await Listing.find();
      let donators = [];
      let donations = [];

      listings.forEach((listings) => donators.push(listings.listedBy));
      let uniq = [...new Set(donators)];

      uniq.forEach((donator) => {
        let counter = 0;
        listings.forEach((listing) => {
          if (listing.listedBy === donator) {
            counter += listing.numberOfMeals;
          }
        });
        donations.push(counter);
      });
      let totalDonations = {};
      for (let i = 0; i < uniq.length; i++) {
        totalDonations[uniq[i]] = donations[i];
      }
      await res.json(totalDonations);
    } catch (error) {
      res.status(400).json(`Error: ${error}`);
    }
  },

  async update(req, res) {
    try {
      const id = req.params.id;
      const listing = await Listing.findById(id);

      if (!listing.claimedBy) {
        listing.claimedBy = req.body.claimedBy;
        listing.claimStatus = 'Claimed';
      }

      await listing.save();

      res.status(200).send(listing);
    } catch (error) {
      res.status(400).json(`Error: ${error}`);
    }
  },
};

export default ListingsController;
