require("dotenv").config();

const path = require("path");
const express = require("express");
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require("body-parser")
const routes = require("./routes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressLayouts);

app.use("/", routes);

app.use(express.static(path.join(__dirname, "../public"), { maxAge: 31557600000 }));

app.set("views", path.join(__dirname, "./views"));
app.set("layout", "./layout");
app.set("view engine", "ejs");

app.listen(process.env.PORT, () => {
  console.log(`Server Started at ${process.env.PORT}`);
});
