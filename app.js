const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');

const app = express();
const port = process.env.PORT || 3000;

// MongoDB Atlas connection
mongoose.connect('your-mongodb-atlas-connection-string', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch((error) => {
  console.error('Error connecting to MongoDB Atlas', error);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
