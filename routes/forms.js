const express = require('express');
const { submitContactForm, submitInfluencerForm } = require('../controllers/formController');
const router = express.Router();

router.post('/contact', submitContactForm);
router.post('/influencer', submitInfluencerForm);

module.exports = router;
