import mongoose from 'mongoose';

const accountSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: {
        values: ['Charity', 'Restaurant'],
        message: '{VALUE} is not an available account type',
      },
      required: [true, 'Account type required'],
    },
    username: { type: String, required: [true, 'Username required'] }, // needs uniqueness
    email: {
      // needs uniqueness
      type: String,
      validate: {
        validator: function (v) {
          return /\A[^@\s]+@[^@\s]+\z/.test(v);
        },
        message: (props) => `${props.value} is not a valid email address`,
      },
      required: [true, 'Email address required'],
    },
    password: { type: String, required: [true, 'Password required'] },
    address: {
      streetAddress: {
        type: String,
        required: [true, 'Street address required'],
      },
      city: { type: String, required: [true, 'City required'] },
      postCode: { type: String, required: [true, 'Post code required'] },
    },
    telephoneNumber: {
      type: Number,
      validate: {
        validator: function (v) {
          return /\d{3}/.test(v); // regex needs updating
        },
        message: (props) => `${props.value} is not a valid phone number`,
      },
      required: [true, 'Phone number required'],
    },
    description: { type: String, required: [true, 'Description required'] },
    charityNumber: {
      type: Number,
      validate: {
        validator: function (v) {
          return /\d{3}/.test(v); // regex needs updating
        },
        message: (props) => `${props.value} is not a valid charity number`,
      },
      required: [true, 'Charity number required'],
    },
    websiteLink: { type: String, required: [true, 'Website link required'] },
    foodHygieneRating: {
      type: String,
      required: [true, 'Food hygiene rating required'],
    },
  },
  {
    timestamps: true,
  },
);

const Account = mongoose.model('Account', accountSchema);

export default Account;
