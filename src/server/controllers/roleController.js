// THIS CONTROLLER IS NOT TO BE INTERACTED WITH BY FRONTEND

const db = require('../models/dbConnection');

const roleController = {}

roleController.getAllRoles = (req, res, next) => {
  const queryString = ''

  db.query(queryString)
    .then(data => {
      // do smth
      return next();
    })
    .catch(err => next({
      log: `Error in roleController.getAllRoles: ${err}`,
      message: { err: 'Error getting roles' }
    }));
}

// Get role from a user
roleController.getRole = (req, res, next) => {
  const queryString = ''

  db.query(queryString)
    .then(data => {
      // do smth
      return next();
    })
    .catch(err => next({
      log: `Error in roleController.getRole: ${err}`,
      message: { err: 'Error getting Role' }
    }));
}

// Add a new role to a user
roleController.addRole = (req, res, next) => {
  const queryString = ''

  const variables = [];

  db.query(queryString, variables)
    .then(data => {
      // do smth
      return next();
    })
    .catch(err => next({
      log: `Error in roleController.addRole: ${err}`,
      message: { err: 'Error adding Role' }
    }));
}

// Update the user's role
roleController.updateRole = (req, res, next) => {
  const queryString = ''

  const variables = [];

  db.query(queryString, variables)
    .then(data => {
      // do smth
      return next();
    })
    .catch(err => next({
      log: `Error in roleController.updateRole: ${err}`,
      message: { err: 'Error updating Role' }
    }));
}

// Delete a user's role
roleController.deleteRole = (req, res, next) => {
  const queryString = ''

  db.query(queryString)
    .then(data => {
      // do smth
      return next();
    })
    .catch(err => next({
      log: `Error in roleController.deleteRole: ${err}`,
      message: { err: 'Error deleting Role' }
    }));
}

module.exports = roleController