const mongoose = require('mongoose');

const initDB = () => {
  mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true,
      useUnifiedTopology: true },
  );

  mongoose.connection.once('open', () => {
    console.log('connected to database');
  });
}

module.exports = initDB;