const ContactSubmission = require('../models/ContactSubmission');
const InfluencerSubmission = require('../models/InfluencerSubmission');

exports.submitContactForm = async (req, res) => {
  const { name, email, message } = req.body;
  const submission = new ContactSubmission({ name, email, message });
  await submission.save();
  res.status(201).json(submission);
};


exports.submitInfluencerForm = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      instagramHandle,
      instagramLink,
      followerCount,
      niche,
      city,
      collaborationType,
      contentLink,
    } = req.body;

    const submission = new InfluencerSubmission({
      fullName,
      email,
      phone,
      instagramHandle,
      instagramLink,
      followerCount,
      niche,
      city,
      collaborationType,
      contentLink, // optional field
    });

    await submission.save();
    res.status(201).json({ success: true, data: submission });
  } catch (error) {
    console.error("Error saving influencer submission:", error);
    res.status(500).json({ success: false, message: "Server error while saving submission." });
  }
};
