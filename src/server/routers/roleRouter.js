const express = require('express');
const {
  getRole,
  getAllRoles,
  addRole,
  updateRole,
  deleteRole,
} = require('../controllers/roleController');

const router = express.Router();

// Router for initial get request for all applications
router.get('/:id?', getRole, getAllRoles, (req, res) => {
  if (req.params.id) return res.status(200).json({ role: res.locals.role });
  return res.status(200).json({ allRoles: res.locals.allRoles });
});

// Router for posting a new application
router.post('/', addRole, (req, res) => {
  console.log(res.locals.role);
  res.status(200).json({ role: res.locals.role });
});

// Router to update application (Response, Interview, Offer)
router.put('/:id', updateRole, (req, res) => res.status(200).json({ role: res.locals.role }));

// Router to delete application
router.delete('/:id', deleteRole, (req, res) => res.status(200).json({ role: res.locals.role }));

module.exports = router;
