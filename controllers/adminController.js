const Page = require('../models/Page');
const ContactSubmission = require('../models/ContactSubmission');
const InfluencerSubmission = require('../models/InfluencerSubmission');

exports.getContactData = async (req, res) => {
  const contactSubmissions = await ContactSubmission.find();
  res.status(200).json({contactSubmissions});
};
exports.getInfluencerData = async (req, res) => {
  const influencerSubmissions = await InfluencerSubmission.find();
  res.status(200).json({ influencerSubmissions });
};
exports.getInfluencerByid = async (req, res) => {
  const { id } = req.params;
  try {
    const influencerSubmission = await InfluencerSubmission.findById(id);
    if (!influencerSubmission) {
      return res.status(404).json({ message: 'Influencer submission not found' });
    }
    res.status(200).json( influencerSubmission );
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
exports.getPagesData = async (req, res) => {
  const pages = await Page.find();
  res.status(200).json({ pages });
};

exports.createPage = async (req, res) => {
  try {
    const { slug, title, content, metadata } = req.body;
    const newPage = new Page({ slug, title, content, metadata });
    await newPage.save();
    res.status(201).json({ success: true, newPage });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error', error: err.message });
  }

};

// Update a page by slug
exports.updatePageBySlug = async (req, res) => {
  const { slug } = req.params;
  const updateData = req.body;

  try {
    const updatedPage = await Page.findOneAndUpdate(
      { slug },
      updateData,
    );

    if (!updatedPage) {
      return res.status(404).json({ success: false, message: 'Page not found' });
    }

    res.status(200).json( {success: true,updatedPage});
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error', error: err.message });
  }
};

