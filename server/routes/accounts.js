import express from 'express';
import { createAccount } from '../controllers/accounts.js';

const router = express.Router();

router.post('/create', createAccount);

export default router;
