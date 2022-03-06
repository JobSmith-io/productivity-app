const express = require('express');
const {
  getDocument,
  getAllDocuments,
  addDocument,
  updateDocument,
  deleteDocument,
} = require('../controllers/documentController');

const router = express.Router();

// // Router for initial get request for all applications
// router.get('/:id?', getDocument, getAllDocuments, (req, res) => {
//   if (res.locals.document) return res.status(200).json({ document: res.locals.document });
//   return res.status(200).json({ allDocuments: res.locals.allDocuments });
// });

// // Router for posting a new application
// router.post('/', addDocument, (req, res) => {
//   return res.status(200).json({});
// });

// // Router to update application (Response, Interview, Offer)
// router.put('/:id', updateDocument, (req, res) => {
//   return res.status(200).json({});
// });

// // Router to delete application
// router.delete('/:id', deleteDocument, (req, res) => {
//   return res.status(200).json({});
// });

module.exports = router;
