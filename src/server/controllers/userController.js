const db = require('../models/dbConnection');

const userController = {};

/**
 * TO PASS TO FRONTEND:
 * res.locals.user
 * res.locals.allUsers
 */

/**
  * Get a specific user (START HERE to check if req.param includes an id)
  * if it does return the user, if not call next which will trigger
  * the getAllUsers middleware
  */
userController.getUser = (req, res, next) => {
  const { id } = req.params;
  if (!id) return next();

  // NOTE: Be aware of SQL injection
  const queryString = 'SELECT * FROM users WHERE _id = $1;';

  db.query(queryString, [id])
    .then((data) => {
      res.locals.user = data.rows[0];
      return next();
    })
    .catch((err) => next({
      log: `Error in userController.getUser: ${err}`,
      message: { err: 'Error getting User' },
    }));
};

// Get all users from users table
userController.getAllUsers = (req, res, next) => {
  // NOTE: we need to check if id exists because getUser will hit next() no matter what
  const { id } = req.params;
  // NOTE: id can't be 0
  // TODO: check what id is when it doesn't exist (null or undefined)
  console.log(id);
  if (id !== undefined) return next();
  const queryString = 'SELECT * FROM users';

  db.query(queryString)
    .then((data) => {
      res.locals.allUsers = data.rows;
      return next();
    })
    // NOTE: status default exists
    .catch((err) => next({
      log: `Error in userController.getAllUsers: ${err}`,
      message: { err: 'Error getting User' },
    }));
};


// Add a new user to a user
userController.addUser = (req, res, next) => {
  const queryString = ''

  const variables = [];

  db.query(queryString, variables)
    .then((data) => {
      // do smth
      return next();
    })
    .catch((err) => next({
      log: `Error in userController.addUser: ${err}`,
      message: { err: 'Error adding User' }
    }));
}

// Update the user's User
userController.updateUser = (req, res, next) => {
  const queryString = ''

  const variables = [];

  db.query(queryString, variables)
    .then((data) => {
      // do smth
      return next();
    })
    .catch((err) => next({
      log: `Error in userController.updateUser: ${err}`,
      message: { err: 'Error updating User' }
    }));
}

// Delete a user's User
userController.deleteUser = (req, res, next) => {
  const queryString = ''

  db.query(queryString)
    .then((data) => {
      // do smth
      return next();
    })
    .catch((err) => next({
      log: `Error in userController.deleteUser: ${err}`,
      message: { err: 'Error deleting User' }
    }));
}

module.exports = userController