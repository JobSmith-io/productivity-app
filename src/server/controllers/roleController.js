// THIS CONTROLLER IS NOT TO BE INTERACTED WITH BY FRONTEND

const db = require('../models/dbConnection');

const roleController = {}

// Get role from a user
roleController.getRole = (req, res, next) => {
  const { _id } = req.body;
  const queryString = 'SELECT * FROM roles WHERE _id = $1';

  db.query(queryString, [_id])
    .then(data => {
      res.locals.role = data.rows[0];
      return next();
    })
    .catch(err => next({
      log: `Error in roleController.getRole: ${err}`,
      message: { err: 'Error getting Role' },
    }));
};

roleController.getAllRoles = (req, res, next) => {
  const queryString = 'SELECT * FROM roles';

  db.query(queryString)
    .then(data => {
      res.locals.allRoles = data.rows;
      return next();
    })
    .catch(err => next({
      log: `Error in roleController.getAllRoles: ${err}`,
      message: { err: 'Error getting roles' },
    }));
};

// Add a new role to a user
roleController.addRole = (req, res, next) => {
  const { title, department } = req.body;
  const queryString = 'INSERT INTO roles (title, department) VALUES ($1 $2)';

  const variables = [title, department];

  db.query(queryString, variables)
    .then(data => {
      res.locals.role = data.rows[0];
      return next();
    })
    .catch(err => next({
      log: `Error in roleController.addRole: ${err}`,
      message: { err: 'Error adding Role' },
    }));
};

// Update the user's role
roleController.updateRole = (req, res, next) => {
  const { _id, title, department } = req.body;

  const queryString = 'UPDATE roles SET tite=$2, department=$3 WHERE _id=$1';

  const variables = [_id, title, department];

  db.query(queryString, variables)
    .then(data => {
      res.locals.role = data.rows[0];
      return next();
    })
    .catch(err => next({
      log: `Error in roleController.updateRole: ${err}`,
      message: { err: 'Error updating Role' },
    }));
};

// Delete a user's role
roleController.deleteRole = (req, res, next) => {
  const { _id } = req.body;
  const queryString = 'DELETE FROM roles WHERE _id=$1';

  db.query(queryString, [_id])
    .then(data => {
      res.locals.role = data.rows[0];
      return next();
    })
    .catch(err => next({
      log: `Error in roleController.deleteRole: ${err}`,
      message: { err: 'Error deleting Role' },
    }));
};

module.exports = roleController;
