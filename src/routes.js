const express = require("express");
const { checkSchema } = require("express-validator");

const router = express.Router();

const { authRoute, refreshTokenRoute } = require("./routes/auth");
const { indexRoute } = require("./routes/index");
const {
  listUsersRoute,
  userRoute,
  newUserRoute,
  createUserRoute,
  updateUserRoute,
} = require("./routes/users");

const userValidationSchema = require("./validators/user");

const { userLogin, tokenRefresh, verifyToken } = require("./middlewares/auth");

router.get("/", verifyToken, indexRoute);

router.get("/users", verifyToken, listUsersRoute);
router.get("/users/new", newUserRoute);
router.post("/users/new", checkSchema(userValidationSchema), createUserRoute);
router.get("/users/:user", userRoute);
router.post("/users/:user", updateUserRoute);

router.post("/auth", userLogin, authRoute);
router.post("/auth/refresh", tokenRefresh, refreshTokenRoute);

module.exports = router;
