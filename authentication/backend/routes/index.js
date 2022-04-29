const express = require('express');
const router = express.Router();


//route works when req.csrfToken is NOT invoked. why?
router.get('/hello/world', function(req, res) {
  res.cookie('XSRF-TOKEN', req.csrfToken);
  res.send('Hello World!');
});

module.exports = router;
