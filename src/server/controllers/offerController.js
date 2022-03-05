const db = require('../models/dbConnection');

const offerController = {}

offerController.getAllOffers = (req, res, next) => {
  const queryString = ''

  db.query(queryString)
    .then(data => {
      // do smth
      return next();
    })
    .catch(err => next({
      log: `Error in offerController.getAllOffers: ${err}`,
      message: { err: 'Error getting offers' }
    }));
}

// Get offer from a user
offerController.getOffer = (req, res, next) => {
  const queryString = ''

  db.query(queryString)
    .then(data => {
      // do smth
      return next();
    })
    .catch(err => next({
      log: `Error in offerController.getOffer: ${err}`,
      message: { err: 'Error getting Offer' }
    }));
}

// Add a new offer to a user
offerController.addOffer = (req, res, next) => {
  const queryString = ''

  const variables = [];

  db.query(queryString, variables)
    .then(data => {
      // do smth
      return next();
    })
    .catch(err => next({
      log: `Error in offerController.addOffer: ${err}`,
      message: { err: 'Error adding Offer' }
    }));
}

// Update the user's offer
offerController.updateOffer = (req, res, next) => {
  const queryString = ''

  const variables = [];

  db.query(queryString, variables)
    .then(data => {
      // do smth
      return next();
    })
    .catch(err => next({
      log: `Error in offerController.updateOffer: ${err}`,
      message: { err: 'Error updating Offer' }
    }));
}

// Delete a user's offer
offerController.deleteOffer = (req, res, next) => {
  const queryString = ''

  db.query(queryString)
    .then(data => {
      // do smth
      return next();
    })
    .catch(err => next({
      log: `Error in offerController.deleteOffer: ${err}`,
      message: { err: 'Error deleting Offer' }
    }));
}

module.exports = offerController