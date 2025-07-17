const Page = require("../models/page");
// Get a single page by slug
exports.getPageBySlug = async (req, res) => {
  try {
    const page = await Page.findOne({ slug: req.params.slug });

    if (!page) {
      return res.status(404).json({ success: false, message: 'Page not found' });
    }

    res.status(200).json({ success: true, page });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};



