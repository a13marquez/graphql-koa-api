const mongoose = require('mongoose');

const initDB = () => {
  mongoose.connect(
    'mongodb+srv://a13marquez:test12345@cluster0-1orzk.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true,
      useUnifiedTopology: true },
  );

  mongoose.connection.once('open', () => {
    console.log('connected to database');
  });
}

module.exports = initDB;