const db = require('../models/dbConnection');

const interviewController = {}

interviewController.getAllInterview = (req, res, next) => {
  const queryString = ''

  db.query(queryString)
    .then(data => {
      // do smth
      return next();
    })
    .catch(err => next({
      log: `Error in interviewController.getAllInterview: ${err}`,
      message: { err: 'Error getting interview' }
    }));
}

// Get interview from a user
interviewController.getInterview = (req, res, next) => {
  const queryString = ''

  db.query(queryString)
    .then(data => {
      // do smth
      return next();
    })
    .catch(err => next({
      log: `Error in interviewController.getInterview: ${err}`,
      message: { err: 'Error getting Interview' }
    }));
}

// Add a new interview to a user
interviewController.addInterview = (req, res, next) => {
  const queryString = ''

  const variables = [];

  db.query(queryString, variables)
    .then(data => {
      // do smth
      return next();
    })
    .catch(err => next({
      log: `Error in interviewController.addInterview: ${err}`,
      message: { err: 'Error adding Interview' }
    }));
}

// Update the user's interview
interviewController.updateInterview = (req, res, next) => {
  const queryString = ''

  const variables = [];

  db.query(queryString, variables)
    .then(data => {
      // do smth
      return next();
    })
    .catch(err => next({
      log: `Error in interviewController.updateInterview: ${err}`,
      message: { err: 'Error updating Interview' }
    }));
}

// Delete a user's interview
interviewController.deleteInterview = (req, res, next) => {
  const queryString = ''

  db.query(queryString)
    .then(data => {
      // do smth
      return next();
    })
    .catch(err => next({
      log: `Error in interviewController.deleteInterview: ${err}`,
      message: { err: 'Error deleting Interview' }
    }));
}

module.exports = interviewController