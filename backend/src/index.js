const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/songmanager')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
const songRoutes = require('./routes/songs');
app.use('/api/songs', songRoutes);

// Statistics Route
const statsRoutes = require('./routes/stats');
app.use('/api/stats', statsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 