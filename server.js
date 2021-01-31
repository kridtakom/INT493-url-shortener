const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();
const indexRoute = require("./routes/index");

app.use(cors());

app.use("/", indexRoute);

app.listen(port, () => {
  console.log(`Start server at port. ${port}`);
});

app.use((req, res, next) => {
  var err = new Error("Error Page Not Found");
  err.status = 404;
  next(err);
  res.send("Page not found");
});
