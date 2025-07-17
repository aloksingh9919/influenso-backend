const mongoose = require('mongoose');

const influencerSchema = new mongoose.Schema({
  fullName: { type: String, required: true },  // Full Name *
  email: { type: String, required: true },      // Email Address *
  phone: { type: String, required: true },      // Phone Number / WhatsApp Number *
  instagramHandle: { type: String, required: true }, // Instagram Handle *
  instagramLink: { type: String, required: true },   // Instagram Profile Link *
  followerCount: { type: String, required: true },   // Follower Count *
  niche: { type: String, required: true },           // Primary Niche *
  city: { type: String, required: true },            // City & State *
  collaborationType: { type: String, enum: ['Paid Only', 'Barter Only', 'Both Paid & Barter'], required: true }, // Collaboration Preference *
  contentLink: { type: String, default: null },      // Optional: Reel/Content Link
  createdAt: { type: Date, default: Date.now },      // Auto timestamp
});

module.exports = mongoose.model('InfluencerSubmission', influencerSchema);

