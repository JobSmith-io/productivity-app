const db = require('../models/dbConnection');

const documentController = {}

documentController.getAllDocument = (req, res, next) => {
  const queryString = ''

  db.query(queryString)
    .then(data => {
      // do smth
      return next();
    })
    .catch(err => next({
      log: `Error in documentController.getAllDocument: ${err}`,
      message: { err: 'Error getting document' }
    }));
}

// Get document from a user
documentController.getDocument = (req, res, next) => {
  const queryString = ''

  db.query(queryString)
    .then(data => {
      // do smth
      return next();
    })
    .catch(err => next({
      log: `Error in documentController.getDocument: ${err}`,
      message: { err: 'Error getting Document' }
    }));
}

// Add a new document to a user
documentController.addDocument = (req, res, next) => {
  const queryString = ''

  const variables = [];

  db.query(queryString, variables)
    .then(data => {
      // do smth
      return next();
    })
    .catch(err => next({
      log: `Error in documentController.addDocument: ${err}`,
      message: { err: 'Error adding Document' }
    }));
}

// Update the user's document
documentController.updateDocument = (req, res, next) => {
  const queryString = ''

  const variables = [];

  db.query(queryString, variables)
    .then(data => {
      // do smth
      return next();
    })
    .catch(err => next({
      log: `Error in documentController.updateDocument: ${err}`,
      message: { err: 'Error updating Document' }
    }));
}

// Delete a user's document
documentController.deleteDocument = (req, res, next) => {
  const queryString = ''

  db.query(queryString)
    .then(data => {
      // do smth
      return next();
    })
    .catch(err => next({
      log: `Error in documentController.deleteDocument: ${err}`,
      message: { err: 'Error deleting Document' }
    }));
}

module.exports = documentController