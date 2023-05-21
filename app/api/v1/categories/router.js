const express = require('express');
const router = express();
const { create } = require('./controller');

router.post('/categories', create);

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