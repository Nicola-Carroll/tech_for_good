import Account from '../models/account.js';

const AccountsController = {
  create(req, res) {
    const account = req.body;

    const newAccount = new Account(account);

    newAccount
      .save()
      .then(() => res.status(200).json(newAccount))
      .catch((error) => res.status(400).json('Error: ' + error));
  },

  async accountDetails(req, res) {
    try {
      const account = await Account.findById(req.params.id);
      await res.status(200).json(account);
    } catch (error) {
      res.status(400).json(`Error: ${error}`);
    }
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
