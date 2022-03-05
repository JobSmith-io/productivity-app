const express = require('express');
const { getApplication, getAllApplications, addApplication } = require('../controllers/applicationController');

const router = express.Router();

// Router for initial get request for all applications
router.get('/:id?', getApplication, getAllApplications, (req, res) => {
  if (res.locals.application) return res.status(200).json({ application: res.locals.application });
  return res.status(200).json({ allApplications: res.locals.allApplications });
});

// Router for posting a new application
router.post('/', addApplication, (req, res) => res.status(200).json({ application: res.locals.application }));

// Router to update application (Response, Interview, Offer)
router.put('/:id', (req, res) => res.status(200).json({}));

// Router to delete application
router.delete('/:id', (req, res) => res.status(200).json({}));

module.exports = router;
