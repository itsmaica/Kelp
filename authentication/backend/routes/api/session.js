const express = require('express')
const asyncHandler = require('express-async-handler');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

//log in
router.post(
    '/',
    asyncHandler(async (req, res, next) => {
      const { credential, password } = req.body;

      const user = await User.login({ credential, password });

      if (!user) {
        const err = new Error('Login failed');
        err.status = 401;
        err.title = 'Login failed';
        err.errors = ['The provided credentials were invalid.'];
        return next(err);
      }

      await setTokenCookie(res, user);

      return res.json({
        user
      });
    })
  );

// Log out
router.delete(
    '/',
    (_req, res) => {
      res.clearCookie('token');
      return res.json({ message: 'success' });
    }
  );

module.exports = router;

//testing-logging in with username - PASSED
// fetch('/api/session', {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/json",
//       "XSRF-TOKEN": `Yfp4cshp-l-D3WmgZKvXoDu945Szo28r_MtI`
//     },
//     body: JSON.stringify({ credential: 'Demo-lition', password: 'password' })
//   }).then(res => res.json()).then(data => console.log(data));


//testing-logging in with email - PASSED
// fetch('/api/session', {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/json",
//       "XSRF-TOKEN": `Yfp4cshp-l-D3WmgZKvXoDu945Szo28r_MtI`
//     },
//     body: JSON.stringify({ credential: 'demo@user.io', password: 'password' })
//   }).then(res => res.json()).then(data => console.log(data));


//testing credential and password
// fetch('/api/session', {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/json",
//       "XSRF-TOKEN": `Yfp4cshp-l-D3WmgZKvXoDu945Szo28r_MtI`
//     },
//     body: JSON.stringify({ credential: 'Demo-lition', password: 'Hello World!' })
//   }).then(res => res.json()).then(data => console.log(data));


//testing log out - passed
// fetch('/api/session', {
//     method: 'DELETE',
//     headers: {
//       "Content-Type": "application/json",
//       "XSRF-TOKEN": `3yAmL0FY-nURZgNxtxZoqH1u51xaqvoSwQDg`
//     }
//   }).then(res => res.json()).then(data => console.log(data));
