const express = require('express');
const {
  getInterview,
  getAllInterviewsForApplication,
  getAllInterviews,
  addInterview,
  updateInterview,
  deleteInterview,
} = require('../controllers/interviewController');

const router = express.Router();

// NOTE: if frontend sends request to /api/interview/1
// we will return all the interviews for application with id 1
// if the request is sent to /api/interview/1/2
// we will return a specific interview that has id 2
// if the request is sent to /api/interview
// we will return all the interviews

// Router for initial get request for all applications
router.get('/:application_id?/:id?', getInterview, getAllInterviewsForApplication, getAllInterviews, (req, res) => {
  if (res.locals.interview) return res.status(200).json({ interview: res.locals.interview });
  return res.status(200).json({ allInterviews: res.locals.allInterviews });
});

// Router for posting a new application
router.post('/:application_id', addInterview, (req, res) => res.status(200).json({ interview: res.locals.interview }));

// Router to update application (Response, Interview, Offer)
router.put('/:id', updateInterview, (req, res) => res.status(200).json({ interview: res.locals.interview }));

// Router to delete application
router.delete('/:id', deleteInterview, (req, res) => res.status(200).json({ interview: res.locals.interview }));

module.exports = router;
