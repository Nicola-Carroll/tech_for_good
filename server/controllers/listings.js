const Listing = require('./models/listing');

const ListingsController = {
  NewListing: async function (req, res) {
    return res.send('TESTING DID WE GET HERE');
  },
};

module.exports = ListingsController;
