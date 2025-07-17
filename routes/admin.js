const express = require('express');
const { authenticate } = require('../middleware/auth');
const { getContactData, getPagesData, getInfluencerData, updatePageBySlug, createPage, getInfluencerByid } = require('../controllers/adminController');
const router = express.Router();

router.get('/contacts', authenticate, getContactData);
router.get('/influencers', authenticate, getInfluencerData);
router.get('/influencers/:id', authenticate, getInfluencerByid);
router.get('/pages', authenticate, getPagesData);
router.post('/page', authenticate, createPage);
router.put('/page/:slug', authenticate, updatePageBySlug);

module.exports = router;
