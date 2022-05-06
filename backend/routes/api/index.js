// backend/routes/api/index.js
const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth.js');

const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const userBeachesRouter = require('./userBeaches')
const beachesRouter = require('./beaches')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/usersBeaches', userBeachesRouter)

router.use('/beaches', beachesRouter)

module.exports = router;
