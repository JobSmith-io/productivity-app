const db = require('../models/dbConnection');
const userController = {}

userController.getAllUsers = (req, res, next) => {
  const queryString = ''

  db.query(queryString)
    .then(data => {
      // do smth
      return next();
    })
    .catch(err => next({
      log: `Error in userController.getAllUsers: ${err}`,
      message: { err: 'Error getting User' }
    }));
}

// Get user from a user
userController.getUser = (req, res, next) => {
  const queryString = ''

  db.query(queryString)
    .then(data => {
      // do smth
      return next();
    })
    .catch(err => next({
      log: `Error in userController.getUser: ${err}`,
      message: { err: 'Error getting User' }
    }));
}

// Add a new user to a user
userController.addUser = (req, res, next) => {
  const queryString = ''

  const variables = [];

  db.query(queryString, variables)
    .then(data => {
      // do smth
      return next();
    })
    .catch(err => next({
      log: `Error in userController.addUser: ${err}`,
      message: { err: 'Error adding User' }
    }));
}

// Update the user's User
userController.updateUser = (req, res, next) => {
  const queryString = ''

  const variables = [];

  db.query(queryString, variables)
    .then(data => {
      // do smth
      return next();
    })
    .catch(err => next({
      log: `Error in userController.updateUser: ${err}`,
      message: { err: 'Error updating User' }
    }));
}

// Delete a user's User
userController.deleteUser = (req, res, next) => {
  const queryString = ''

  db.query(queryString)
    .then(data => {
      // do smth
      return next();
    })
    .catch(err => next({
      log: `Error in userController.deleteUser: ${err}`,
      message: { err: 'Error deleting User' }
    }));
}

module.exports = userController