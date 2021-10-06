const express = require('express');
const ListingRouter = express.Router();

const ListingController = require('../controllers/listings');

ListingRouter.post('api/listings/new', ListingController.NewListing);

module.exports = ListingRouter;
