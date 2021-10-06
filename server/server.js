import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import accountRoutes from './routes/accounts.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use('/accounts', accountRoutes);

const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`)),
  )
  .catch((error) => console.log(error.message));

export default app;
