import express from 'express';

import ListingsController from '../controllers/listings.js';

const listingsRouter = express.Router();

listingsRouter.get('/', ListingsController.Index);
listingsRouter.post('/create', ListingsController.New);

export default listingsRouter;
