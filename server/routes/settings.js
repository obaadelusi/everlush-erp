const express = require('express');
const router = express.Router();

const Business = require('../models/Business');

router.get('/', (req, res) => {
  res.render('settings/index');
});

/* 
- Edit business
- Create and edit branches
- Add owners

*/
module.exports = router;
