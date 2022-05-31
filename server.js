// connect to Express
const express = require('express');
// connect to Mongoose
const mongoose = require('mongoose');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));

// tells mongoose which database we want to connect to
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/pizza-hunt', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use this to log mongo queries being executed
mongoose.set('debug', true);


app.listen(PORT, () =>
  console.log(
    "Now listening on port %s. Visit http://localhost:%s in your browser.",
    PORT,
    PORT
  )
);
