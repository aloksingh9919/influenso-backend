const express = require('express');
const {
  getPageBySlug,
} = require('../controllers/pageController');

const router = express.Router();
router.get('/:slug', getPageBySlug);

module.exports = router;

