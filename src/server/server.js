const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();
const { PORT } = process.env;

const apiRouter = require('./routers/apiRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

// TODO: Serve up a nice 404 page
// Catch all that sends back 404 when route not found
app.use((req, res) => {
  return res.status(404).json('Error: Not Found');
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };

  const errObj = { ...defaultErr, ...err};
  console.log(errObj.log);
  res.status(errObj.status).send(errObj.message);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
