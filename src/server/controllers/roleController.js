// THIS CONTROLLER IS NOT TO BE INTERACTED WITH BY FRONTEND

const db = require('../models/dbConnection');

const roleController = {};

// Get a role
roleController.getRole = (req, res, next) => {
  const { id } = req.params;
  const queryString = 'SELECT * FROM roles WHERE _id = $1';

  db.query(queryString, [id])
    .then((data) => {
      res.locals.role = data.rows[0];
      return next();
    })
    .catch((err) => next({
      log: `Error in roleController.getRole: ${err}`,
      message: { err: 'Error getting Role' },
    }));
};

// Get all roles
roleController.getAllRoles = (req, res, next) => {
  const queryString = 'SELECT * FROM roles';

  db.query(queryString)
    .then((data) => {
      res.locals.allRoles = data.rows;
      return next();
    })
    .catch((err) => next({
      log: `Error in roleController.getAllRoles: ${err}`,
      message: { err: 'Error getting roles' },
    }));
};

// Add a new role
roleController.addRole = (req, res, next) => {
  const { title, department } = req.body;
  const queryString = 'INSERT INTO roles (title, department) VALUES ($1, $2) RETURNING *';

  const variables = [title, department];

  db.query(queryString, variables)
    .then((data) => {
      res.locals.role = data.rows[0];
      return next();
    })
    .catch((err) => next({
      log: `Error in roleController.addRole: ${err}`,
      message: { err: 'Error adding Role' },
    }));
};

// Update the role
roleController.updateRole = (req, res, next) => {
  const { id } = req.params;
  const { title, department } = req.body;

  const queryString = 'UPDATE roles SET title=$2, department=$3 WHERE _id=$1 RETURNING *';

  const variables = [id, title, department];

  db.query(queryString, variables)
    .then((data) => {
      res.locals.role = data.rows[0];
      return next();
    })
    .catch((err) => next({
      log: `Error in roleController.updateRole: ${err}`,
      message: { err: 'Error updating Role' },
    }));
};

// Delete a role
roleController.deleteRole = (req, res, next) => {
  const { id } = req.params;
  const queryString = 'DELETE FROM roles WHERE _id=$1 RETURNING *';

  db.query(queryString, [id])
    .then((data) => {
      res.locals.role = data.rows[0];
      return next();
    })
    .catch((err) => next({
      log: `Error in roleController.deleteRole: ${err}`,
      message: { err: 'Error deleting Role' },
    }));
};

module.exports = roleController;
