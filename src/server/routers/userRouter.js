const express = require('express');
const { getUser, getAllUsers } = require('../controllers/userController');
const router = express.Router();

/*
  NOTE:
  The plan is to use the same get route /api/user to perform a getUser
  and a getAllUsers. The idea is that we check the req.params to see if it's empty
  if it's 
*/ 

// Router for initial get request for all applications
router.get('/:id', getUser, getAllUsers, (req, res) => {
  return res.status(200).json({});
})

// Router for posting a new application
router.post('/', (req, res) => {
  return res.status(200).json({});
})

// Router to update application (Response, Interview, Offer)
router.put('/', (req, res) => {
  return res.status(200).json({});
})

// Router to delete application
router.delete('/', (req, res) => {
  return res.status(200).json({});
})

module.exports = router;
