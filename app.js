const express = require('express');
const mongoose = require('mongoose');
const dotenv = require ('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const authRoutes = require('./routes/auth');
const pageRoutes = require('./routes/pages');
const formRoutes = require('./routes/forms');
const adminRoutes = require('./routes/admin');
const errorHandler = require('./middleware/errorHandler');
const {connectDB} = require('./database/db')
const app = express();
dotenv.config();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Connect to Database

// Routes
app.use('/api/auth', authRoutes); // api /auth/login
app.use('/api/pages', pageRoutes); // api/pages/slug
app.use('/api/forms', formRoutes);  //api/forms/contact , api/forms/influencer
app.use('/api/admin', adminRoutes); // api/admin/

// Error Handling Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
