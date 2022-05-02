const express = require('express')
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateSignup = [
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.'),
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
  ];

//sign up
router.post(
    '/',
    validateSignup,
    asyncHandler(async (req, res) => {
      const { email, password, username } = req.body;
      const user = await User.signup({ email, username, password });

      await setTokenCookie(res, user);

      return res.json({
        user
      });
    })
  );

module.exports = router;

//testing sign-up
// fetch('/api/users', {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/json",
//       "XSRF-TOKEN": `P3WzpvQ8-PZJD7dgEeUSSMMIHjht0KSnyZzk`
//     },
//     body: JSON.stringify({
//       email: 'spidey@spider.man',
//       username: 'Spidey',
//       password: 'password'
//     })
//   }).then(res => res.json()).then(data => console.log(data));


//signup error for username already existing works. do not see email tho?

// fetch('/api/users', {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/json",
//       "XSRF-TOKEN": `3xGwn3pw-QKy16BhB6ES-vxIZGQEWtvf4gdI`
//     },
//     body: JSON.stringify({
//       email: 'cheese@no.com',
//       username: 'mamaia',
//       password: 'lolha'
//     })
//   }).then(res => res.json()).then(data => console.log(data));