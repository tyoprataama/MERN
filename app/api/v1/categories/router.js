const express = require('express');
const router = express();

router.get('/categories', (req, res) => {
  res.status(200).json({
    message: 'Categories Sections'
  })
});

router.get('/talents', (req, res) => {
  res.status(200).json({
    message: 'Talents Sections'
  })
});

module.exports = router;