const express = require('express');
const { getUser, getAllUsers } = require('../controllers/userController');

const router = express.Router();

/*
  NOTE:
  The plan is to use the same get route /api/user to perform a getUser
  and a getAllUsers. The idea is that we check the req.params to see if id is defined
  if it is we return a single entity otherwise we return all
*/

// Router for initial get request for all users
router.get('/:id?', getUser, getAllUsers, (req, res) => {
  if (res.locals.user) return res.status(200).json({ user: res.locals.user });
  return res.status(200).json({ allUsers: res.locals.allUsers });
});

// Router for posting a new user
router.post('/', (req, res) => res.status(200).json({}));

// Router to update user (Response, Interview, Offer)
router.put('/:id', (req, res) => res.status(200).json({}));

// Router to delete user
router.delete('/:id', (req, res) => res.status(200).json({}));

module.exports = router;
