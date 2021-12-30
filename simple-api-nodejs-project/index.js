const express = require("express"); // import the framework epress
const mongoose = require("mongoose"); // import mongoose a library to manage mongo databae
const bodyParser = require("body-parser"); // import body parser to parse the data sent in requests
const res = require("express/lib/response");

// define the port that you will use to access your app
const PORT = 4000;

//define the app
const app = express();

// connection with db
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/ContactDatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// body parser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app routes setup
const contactRoutes = require("./src/routes/contactsRoutes");
app.use("/", contactRoutes());

// create app server
app.listen(PORT, () => {
  console.log(`App is running on port : ${PORT}`);
});
