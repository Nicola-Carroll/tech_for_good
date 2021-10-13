import axios from 'axios';
import Account from '../models/account.js';

const AccountsController = {
  async create(req, res) {
    let account = req.body;
    let postcode;
    if (account.postCode) {
      postcode = account.postCode.replace(/\s/g, '');
    }

    axios
      .get(`http://api.getthedata.com/postcode/${postcode}`)
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          let lat = `${response.data.data.latitude}`;
          let long = `${response.data.data.longitude}`;
          account.latitude = lat;
          account.longitude = long;
          console.log(account.latitude);
          return account;
        }
      })
      .then((account) => {
        const newAccount = new Account(account);
        newAccount.save();
      })
      .then(() => {
        res.status(200).json('Account created');
      })
      .catch((error) => {
        // console.log(error);
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
