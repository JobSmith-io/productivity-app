const express = require('express')
const router = express.Router()

// Router for initial get request for all applications
router.get('/role', (req, res) => {
  return res.status(200).json({})
})

// Router for posting a new application
router.post('/role', (req, res) => {
  return res.status(200).json({})
})

// Router to update application (Response, Interview, Offer)
router.put('/role', (req, res) => {
  return res.status(200).json({})
})

// Router to delete application
router.delete('/role', (req, res) => {
  return res.status(200).json({})
})

module.exports = router
