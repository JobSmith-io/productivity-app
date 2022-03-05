const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// Use a pool so we don't have to keep making new connections to the db to make queries?
const pool = new Pool({
  connectionString: process.env.PG_URI,
});

// export object with custom query method so we can add functionality
// to the query method (console.log)
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
