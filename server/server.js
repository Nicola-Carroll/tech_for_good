import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import listingsRoutes from './routes/listings.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/listings', listingsRoutes);

mongoose
  .connect(process.env.CONNECTION_URL)
  .catch((error) => console.log(error.message));

const PORT = process.env.PORT || 8000;

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

export default app;
