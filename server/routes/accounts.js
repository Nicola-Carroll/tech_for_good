import express from 'express';
import AccountsController from '../controllers/accounts.js';

const accountsRoutes = express.Router();

accountsRoutes.post('/create', AccountsController.create);

export default accountsRoutes;
