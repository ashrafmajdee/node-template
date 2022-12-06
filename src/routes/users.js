const prisma = require("../prisma");
const { validationResult } = require("express-validator");

const listUsersRoute = async (req, res) => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true
    },
  });
  // console.log(req.query.filter)
  // res.render("list-users", {
  //   users,
  // });
  res.status(200).json(users);
};

const userRoute = async (req, res) => {
  const user = await prisma.user.findFirst({
    where: {
      id: parseInt(req.params.user),
    },
  });

  res.render("user-form", {
    user,
  });
};

const newUserRoute = async (req, res) => {
  res.render("user-form", {
    user: {},
  });
};

const createUserRoute = async (req, res) => {

  const errors = validationResult(req);
  console.log(errors);
  if (errors.isEmpty()) {
    await prisma.user
    .create({
      data: {
        name: req.body.name,
      },
    })
    .then(() => {
      res.status(202).redirect("/users");
    });
  } else {
    const extractedErrors = [];

    errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));
  
    return res.status(422).json({
      errors: extractedErrors,
    });
  }
};

const updateUserRoute = async (req, res) => {
  await prisma.user
    .update({
      where: {
        id: parseInt(req.params.user),
      },
      data: {
        name: req.body.name,
      },
    })
    .then((response) => {
      res.status(202).redirect("/users");
    });
};

module.exports = {
  listUsersRoute,
  userRoute,
  newUserRoute,
  createUserRoute,
  updateUserRoute,
};
