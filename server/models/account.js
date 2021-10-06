import mongoose from 'mongoose';

const options = { discriminatorKey: 'kind' };

const accountSchema = new mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
  },
  options,
);

// export const Charity = Account.discriminator(
//   'Charity',
//   new mongoose.Schema({
//     charityNumber: { type: Number, required: true },
//     websiteLink: { type: String, required: true },
//     options,
//   }),
// );

// const Restaurant = Account.discriminator(
//   'Restaurant',
//   new mongoose.Schema({
//     foodHygieneRating: { type: String, required: true },
//     options,
//   }),
// );

const Account = mongoose.model('Account', accountSchema);

export default Account;
