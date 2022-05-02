// backend/routes/api/index.js
const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const { Beach } = require('../../db/models')
const { Review } = require('../../db/models')

const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const beachesRouter = require('./beaches.js')


router.use('/session', sessionRouter);

router.use('/users', usersRouter);

// router.use('/beaches', beachesRouter);


module.exports = router;
