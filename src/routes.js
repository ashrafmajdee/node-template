const express = require("express");
const { checkSchema } = require("express-validator");

const router = express.Router()

const { indexRoute } = require("./routes/index");
const { listUsersRoute, userRoute, newUserRoute, createUserRoute, updateUserRoute } = require("./routes/users");

const userValidationSchema = require("./validators/user");

router.get("/", indexRoute);

router.get("/users", listUsersRoute);
router.get("/users/new", newUserRoute);
router.post("/users/new", checkSchema(userValidationSchema), createUserRoute);
router.get("/users/:user", userRoute);
router.post("/users/:user", updateUserRoute);

module.exports = router;
