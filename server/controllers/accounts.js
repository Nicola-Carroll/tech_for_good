import axios from 'axios';
import Account from '../models/account.js';

const AccountsController = {
  async create(req, res) {
    const account = req.body;
    let postcode;
    if (account.postCode) {
      postcode = account.postCode.replace(/\s/g, '');
    }

    axios
      .get(`http://api.getthedata.com/postcode/${postcode}`)
      .then((response) => {
        if (response.status === 200) {
          account.latitude = `${response.data.data.latitude}`;
          account.longitude = `${response.data.data.longitude}`;
          return account;
        }
      })
      .then((account) => {
        new Account(account).save();
      })
      .then(() => {
        res.status(200).json('Account created');
      })
      .catch((error) => {
        res.status(400).json(`Error: ${error}`);
      });
  },

  authenticate(req, res) {
    Account.findOne(
      { username: req.body.username },
      function (error, foundUser) {
        if (!error) {
          if (foundUser) {
            if (foundUser.password == req.body.password) {
              res.send(foundUser);
            } else {
              res.send('Incorrect password');
            }
          } else {
            res.send('You have not been registered yet');
          }
        } else {
          res.send(error);
        }
      },
    );
  },
};

export default AccountsController;
