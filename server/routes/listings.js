import express from 'express';

import ListingsController from '../controllers/listings.js';

const listingsRoutes = express.Router();

listingsRoutes.get('/', ListingsController.index);
listingsRoutes.get('/account/:id', ListingsController.listingDetails);
listingsRoutes.get('/claimed/:id', ListingsController.claimDetails);
listingsRoutes.post('/create', ListingsController.create);
listingsRoutes.patch('/update/:id', ListingsController.update);

export default listingsRoutes;
