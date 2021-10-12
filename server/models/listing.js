import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema(
  {
    numberOfMeals: { type: Number, required: true },
    description: { type: String, required: true },
    timeAvailableUntil: { type: Date, required: true },
    listedBy: { type: String, required: true },
    listedByUsername: { type: String, required: true },
    claimedBy: { type: String },
  },
  {
    timestamps: true,
  },
);

const Listing = mongoose.model('Listing', listingSchema);
export default Listing;
