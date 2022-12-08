const mongoose = require('mongoose');

// connect to a appointments database, or create an appointment database
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const db = mongoose.connection;

// database connection event
db.on('connected', function () {
  console.log(`Mongoose connected to: ${db.host}:${db.port}`);
});

db.on("error", function (err) {
  console.log(`There was an ${err}`);
});


