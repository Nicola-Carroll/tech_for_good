import express from 'express';

import ListingsController from '../controllers/listings.js';

const listingsRoutes = express.Router();

listingsRoutes.get('/', ListingsController.Index);
listingsRoutes.post('/create', ListingsController.New);

export default listingsRoutes;
