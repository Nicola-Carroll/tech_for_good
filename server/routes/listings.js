import express from 'express';

import ListingsController from '../controllers/listings.js';

const listingsRoutes = express.Router();

listingsRoutes.get('/', ListingsController.index);
listingsRoutes.post('/create', ListingsController.create);

export default listingsRoutes;
