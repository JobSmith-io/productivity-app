const db = require('../models/dbConnection');

const interviewController = {};

// Get an interview
// NOTE: if frontend sends request to /api/interview/1
// we will return all the interviews for application with id 1
// if the request is sent to /api/interview/1/2
// we will return a specific interview that has id 2
// if the request is sent to /api/interview
// we will return all the interviews
interviewController.getInterview = (req, res, next) => {
  const { id } = req.params;

  // Check if there's no id we want to jump to next middleware
  if (!id) return next();

  const queryString = 'SELECT * FROM interviews WHERE _id = $1';

  db.query(queryString, [id])
    .then((data) => {
      res.locals.interview = data.rows[0];
      return next();
    })
    .catch((err) => next({
      log: `Error in interviewController.getInterview: ${err}`,
      message: { err: 'Error getting Interview' },
    }));
};

interviewController.getAllInterviewsForApplication = (req, res, next) => {
  const { application_id, id } = req.params;

  // Check if id (interview) was passed in
  if (!application_id || id) return next();

  const queryString = 'SELECT * FROM ';

  db.query(queryString, [application_id])
    .then((data) => {
      res.locals.allInterviews = data.rows;
      return next();
    })
    .catch((err) => next({
      log: `Error in interviewController.getAllInterviewsForApplication: ${err}`,
      message: { err: 'Error getting Interview for Application' },
    }));
};

interviewController.getAllInterviews = (req, res, next) => {
  const queryString = 'SELECT * FROM interviews';

  db.query(queryString)
    .then((data) => {
      res.locals.allInterviews = data.rows;
      return next();
    })
    .catch((err) => next({
      log: `Error in interviewController.getAllInterview: ${err}`,
      message: { err: 'Error getting all interviews' },
    }));
};

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
      message: { err: 'Error adding Interview' },
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
      message: { err: 'Error updating Interview' },
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
      message: { err: 'Error deleting Interview' },
    }));
}

module.exports = interviewController;
