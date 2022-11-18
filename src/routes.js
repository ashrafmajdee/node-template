const express = require("express");

const router = express.Router()

const { indexRoute } = require("./routes/index");
const { listUsersRoute, userRoute, newUserRoute, createUserRoute, updateUserRoute } = require("./routes/users");

router.get("/", indexRoute);

router.get("/users", listUsersRoute);
router.get("/users/new", newUserRoute);
router.post("/users/new", createUserRoute);
router.get("/users/:user", userRoute);
router.post("/users/:user", updateUserRoute);

module.exports = router;
