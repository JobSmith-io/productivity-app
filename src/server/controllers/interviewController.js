const db = require('../models/dbConnection');

const interviewController = {}

// Get interview from a user
interviewController.getInterview = (req, res, next) => {
  const { _id } = req.params;
  const queryString = 'SELECT * FROM interviews WHERE _id = $1';

  db.query(queryString, [_id]);
    .then(data => {
      res.locals.interview = data.rows[0];
      return next();
    })
    .catch(err => next({
      log: `Error in interviewController.getInterview: ${err}`,
      message: { err: 'Error getting Interview' }
    }));
}

interviewController.getAllInterview = (req, res, next) => {
  const queryString = 'SELECT * FROM interviews'

  db.query(queryString)
    .then(data => {
      res.locals.allInterviews = data.rows;
      return next();
    })
    .catch(err => next({
      log: `Error in interviewController.getAllInterview: ${err}`,
      message: { err: 'Error getting interview' }
    }));
}

// Add a new interview to a user
interviewController.addInterview = (req, res, next) => {
  const queryString = 'INSERT INTO interviews (interview_type, interview_date, feelings, rating, feedback) VALUES ($1, $2, $3, $4, $5);';
  const { interview_type, interview_date, feelings, rating, feedback } = req.body;
  const variables = [interview_type, interview_date, feelings, rating, feedback];

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
  
  const queryString = `UPDATE interviews SET company=$2, role=$3, url=$4 WHERE _id=$1`;

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