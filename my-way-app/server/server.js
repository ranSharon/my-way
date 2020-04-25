const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const keys = require('./config/keys');
const mongoose = require('mongoose');

// database
mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
