const express = require('express')
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

//sign up
router.post(
    '/',
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
