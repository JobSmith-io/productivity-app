const db = require('../models/dbConnection');

const applicationController = {}

applicationController.getAllApplications = (req, res, next) => {
  const queryString = ''

  db.query(queryString)
    .then(data => {
      // do smth
      return next();
    })
    .catch(err => next({
      log: `Error in applicationController.getAllApplications: ${err}`,
      message: { err: 'Error getting applications' }
    }));
}

// Get applications from a user
applicationController.getApplications = (req, res, next) => {
  const queryString = ''

  db.query(queryString)
    .then(data => {
      // do smth
      return next();
    })
    .catch(err => next({
      log: `Error in applicationController.getApplications: ${err}`,
      message: { err: 'Error getting applications' }
    }));
}

// Add a new application to a user
applicationController.addApplications = (req, res, next) => {
  const queryString = ''

  const variables = [];

  db.query(queryString, variables)
    .then(data => {
      // do smth
      return next();
    })
    .catch(err => next({
      log: `Error in applicationController.addApplications: ${err}`,
      message: { err: 'Error adding applications' }
    }));
}

// Update the user's application
applicationController.updateApplications = (req, res, next) => {
  const queryString = ''

  const variables = [];

  db.query(queryString, variables)
    .then(data => {
      // do smth
      return next();
    })
    .catch(err => next({
      log: `Error in applicationController.updateApplications: ${err}`,
      message: { err: 'Error updating applications' }
    }));
}

// Delete a user's application
applicationController.deleteApplications = (req, res, next) => {
  const queryString = ''

  db.query(queryString)
    .then(data => {
      // do smth
      return next();
    })
    .catch(err => next({
      log: `Error in applicationController.deleteApplications: ${err}`,
      message: { err: 'Error deleting applications' }
    }));
}

module.exports = applicationController
