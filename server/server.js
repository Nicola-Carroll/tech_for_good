import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import accountsRoutes from './routes/accounts.js';
import listingsRoutes from './routes/listings.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/accounts', accountsRoutes);
app.use('/api/listings', listingsRoutes);

let DB
if (process.env.NODE_ENV !== 'test') {
   DB = process.env.CONNECTION_URL
}
else {  DB = process.env.TEST_CONNECTION_URL }
console.log(DB)
mongoose
  .connect(DB)
  .catch((error) => console.log(error.message));

const PORT = process.env.PORT || 8000;

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

export default app;
