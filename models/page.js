const mongoose = require('mongoose');

const pageSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: [true, 'Slug is required'],
      unique: true,
      trim: true,
      lowercase: true, // helps with consistency
    },
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    content: {
      type: mongoose.Schema.Types.Mixed, // allows flexibility (JSON, strings, etc.)
      required: [true, 'Content is required'],
    },
    metadata: {
      type: mongoose.Schema.Types.Mixed, // allows flexibility (JSON, strings, etc.)
      required: [true, 'metadata is required'],
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt fields automatically
  }
);

module.exports = mongoose.model('Page', pageSchema);
