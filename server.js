import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import accountsRoutes from './routes/accounts.js';
import listingsRoutes from './routes/listings.js';

import Account from './models/account.js';
import Listing from './models/listing.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/accounts', accountsRoutes);
app.use('/api/listings', listingsRoutes);

let DB;
if (process.env.NODE_ENV !== 'test') {
  DB = process.env.CONNECTION_URL;
} else {
  DB = process.env.TEST_CONNECTION_URL;
}

mongoose.connect(DB).catch((error) => console.log(error.message));

const PORT = process.env.PORT || 8000;

async function dropCollections() {
  try {
    if (Account.collection) {
      await Account.collection.drop();
    }
    if (Listing.collection) {
      await Listing.collection.drop();
    }
  } catch (error) {
    console.log(error);
  }
}

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
} else {
  dropCollections();
}

export default app;
