const express = require('express');
const applicationRouter = require('./applicationRouter');
const documentRouter = require('./documentRouter');
const interviewRouter = require('./interviewRouter');
const offerRouter = require('./offerRouter');
const roleRouter = require('./roleRouter');
const userRouter = require('./userRouter');

const router = express.Router();

router.use('/application', applicationRouter);
router.use('/document', documentRouter);
router.use('/interview', interviewRouter);
router.use('/offer', offerRouter);
router.use('/user', userRouter);
// IMPORTANT:
// role route should never be hit by user (unless you develop some sort of admin portal)
// it's a static table that holds list of pre-defined roles
router.use('/role', roleRouter);

module.exports = router;
