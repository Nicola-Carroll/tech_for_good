import mongoose from 'mongoose';

const accountSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: {
      streetAddress: { type: String, required: true },
      city: { type: String, required: true },
      postCode: { type: String, required: true },
    },
    telephoneNumber: { type: Number, required: true },
    description: { type: String, required: true },
    charityNumber: { type: Number, required: true },
    websiteLink: { type: String, required: true },
    foodHygieneRating: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const Account = mongoose.model('Account', accountSchema);

export default Account;
