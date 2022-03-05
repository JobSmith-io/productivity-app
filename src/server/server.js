const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const apiRouter = require('./routes/api');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRouter);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' }, 
  };

  const errObj = { ...defaultErr, ...err};
  console.log(errObj.log);
  res.status(errObj.status).send(errObj.message);
})

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`)
});
