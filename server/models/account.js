import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

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
    username: {
      type: String,
      unique: true,
      uniqueCaseInsensitive: true,
      required: [true, 'Username required'],
    },
    emailAddress: {
      type: String,
      validate: {
        validator: function (v) {
          return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email address`,
      },
      unique: true,
      uniqueCaseInsensitive: true,
      required: [true, 'Email address required'],
    },
    password: { type: String, required: [true, 'Password required'] },
    address: {
      addressLine1: {
        type: String,
        required: [true, 'Address line 1 required'],
      },
      addressLine2: {
        type: String,
      },
      city: { type: String, required: [true, 'City required'] },
      postCode: {
        type: String,
        validate: {
          validator: function (v) {
            return /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/.test(v);
          },
          message: (props) => `${props.value} is not a valid post code`,
        },
        required: [true, 'Post code required'],
      },
    },
    contactNumber: {
      type: Number,
      validate: {
        validator: function (v) {
          return /^[0-9]{9,12}$/.test(v);
        },
        message: (props) => `${props.value} is not a valid phone number`,
      },
      required: [true, 'Contact number required'],
    },
    description: { type: String, required: [true, 'Description required'] },
    charityNumber: {
      type: Number,
      validate: {
        validator: function (v) {
          return /^[0-9]{5,8}$/.test(v);
        },
        message: (props) => `${props.value} is not a valid charity number`,
      },
      required: [true, 'Charity number required'],
    },
    websiteLink: {
      type: String,
      required: [true, 'Website link required'],
    },
    foodHygieneRating: {
      type: Number,
      validate: {
        validator: function (v) {
          return /^[0-5]$/.test(v);
        },
        message: (props) => `${props.value} is not a valid food hygiene rating`,
      },
      required: [true, 'Food hygiene rating required'],
    },
  },
  {
    timestamps: true,
  },
);

accountSchema.plugin(uniqueValidator);

const Account = mongoose.model('Account', accountSchema);

export default Account;
