import express from 'express';

import ListingsController from '../controllers/listings.js';

const listingsRoutes = express.Router();

listingsRoutes.get('/', ListingsController.index);
listingsRoutes.post('/create', ListingsController.create);
listingsRoutes.get('/donations', ListingsController.donations);
listingsRoutes.patch('/update/:id', ListingsController.update);

export default listingsRoutes;
