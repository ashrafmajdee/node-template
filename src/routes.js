const express = require("express");

const router = express.Router()

const { indexRoute } = require("./routes/index");

router.get("/", indexRoute);

module.exports = router;
