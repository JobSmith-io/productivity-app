const db = require('../models/dbConnection');

const applicationController = {};

//TODO: switch hard coded user_id to pass in req.body
// SET DEFAULTS:
let company_name, role, url, responded, response_date, interview_id, offer_id,
application_date, document_id, role_id, user_id;

// _id is defaulted to 1 bc users are a stretch feature
[company_name, role, url, responded, response_date, interview_id, offer_id,
  application_date, document_id, role_id, user_id] = ['DEFAULT', 'DEFAULT', 'DEFAULT', 't', Date.now().toLocaleString(), -1, 1];

// Get applications from a user
applicationController.getApplication = (req, res, next) => {
  const { id } = req.params;
  const queryString = 'SELECT * FROM applications WHERE user_id = $1, _id = $2';

  db.query(queryString, [user_id, id])
    .then((data) => {
      res.locals.application = data.rows[0];
      return next();
    })
    .catch((err) => next({
      log: `Error in applicationController.getApplications: ${err}`,
      message: { err: 'Error getting applications' }
    }));
}

applicationController.getAllApplications = (req, res, next) => {
  const queryString = 'SELECT * FROM applications WHERE user_id = $1';

  db.query(queryString, [user_id])
    .then((data) => {
      res.locals.allApplications = data.rows;
      return next();
    })
    .catch((err) => next({
      log: `Error in applicationController.getAllApplications: ${err}`,
      message: { err: 'Error getting applications' },
    }));
}

// Add a new application to a user
applicationController.addApplications = (req, res, next) => {
  const queryString = 'INSERT INTO applications (company_name, role, url, responded, response_date, interview_id, offer_id, application_date, document_id, role_id, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11 RETURNING *);';

  // TODO: CHECK THAT THIS IS ESLINT
  { company_name, role_id, url } = req.body;

  const variables = [company_name, role_id, url, responded, response_date, interview_id, offer_id, application_date, document_id, role_id, user_id];

  db.query(queryString, variables)
    .then((data) => {
      res.locals.application = data.rows[0];
      return next();
    })
    .catch((err) => next({
      log: `Error in applicationController.addApplications: ${err}`,
      message: { err: 'Error adding applications' },
    }));
};

// TODO: can we think of some way to do this without updating everything?
/**
 update table1
   set col1 = 'hello',
       col2 = 'hello',
       col3 = 'hello'
// Only update rows from CustomerId 100, 101, 102 & 103
where table1.CustomerId IN (100, 101, 102, 103)
// AVOID NET ZERO CHANGES
  and exists
    (
    // DESTINATION
    select table1.col1
           table1.col2
           table1.col3
    except
    // SOURCE
    select z.col1,
           z.col2,
           z.col3
      from #anytemptableorsubquery z
     where z.CustomerId = table1.CustomerId
    )
 */

// Update the user's application
applicationController.updateApplications = (req, res, next) => {
  // design a query string that will update what is changed
  /**
   * user_id
   * company_name
   * url
   * responded
   * response_date
   * interview_id
   * offer_id
   * application_date
   * document_id
   * role_id
   * user_id
   */
  // TODO: check if this causes error if something is not passed in req.body
  const { company_name, url, role_id } = req.body;

  const queryString = `UPDATE applications SET company_name=$2, role_id=$3, url=$4 WHERE _id=$1 RETURNING *`;

  const variables = [user_id, company_name, role, role_id];

  db.query(queryString, variables)
    .then((data) => {
      res.locals.application = data.rows[0];
      return next();
    })
    .catch((err) => next({
      log: `Error in applicationController.updateApplications: ${err}`,
      message: { err: 'Error updating applications' }
    }));
}

// Delete a user's application
applicationController.deleteApplications = (req, res, next) => {
  const { _id } = req.body;
  const queryString = 'DELETE FROM applications WHERE _id=$1 RETURNING *;';
  const variables = [_id];

  db.query(queryString, variables)
    .then(data => {
      // do smth
      return next();
    })
    .catch(err => next({
      log: `Error in applicationController.deleteApplications: ${err}`,
      message: { err: 'Error deleting applications' }
    }));
}

module.exports = applicationController;
