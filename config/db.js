require('dotenv').config();
const mongoose = require('mongoose');

mongoose
  .connect(
    process.env.MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log('connected to MongoDB'))
  .catch((error) => console.log('Failed to connect to MongoDB', error));
