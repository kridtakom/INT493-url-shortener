const express = require("express");
const cors = require("cors");
const indexRoute = require("./routes/index");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("[success] task 2 : connected to the database ");
    },
    (error) => {
      console.log("[failed] task 2 " + error);
      process.exit();
    }
  );

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", indexRoute);

app.listen(port, () => {
  console.log(`[success] task 1: Start server at port. ${port}`);
});

app.use((req, res, next) => {
  var err = new Error("Error Page Not Found");
  err.status = 404;
  next(err);
  res.send("Page not found");
});
