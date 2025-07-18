const jwt = require('jsonwebtoken');

exports.authenticate = (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];

    // Check if Authorization header exists
    if (!authHeader) {
      return res.status(401).json({ message: 'Authorization header missing' });
    }

    // Format: "Bearer <token>"
    const token = authHeader.split(' ')[1];

    // Check if token is present
    if (!token) {
      return res.status(401).json({ message: 'Token not provided' });
    }

    // Verify token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.error('JWT Error:', err); // Add this for logs on Render
        return res.status(403).json({ message: 'Invalid or expired token' });
      }

      req.user = decoded;
      next();
    });

  } catch (error) {
    console.error('Middleware Crash:', error); // log in Render
    res.status(500).json({ message: 'Internal server error in auth middleware' });
  }
};
