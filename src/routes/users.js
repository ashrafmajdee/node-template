const prisma = require('../prisma');

const listUsersRoute = async (req, res) => {
  const users = await prisma.user.findMany();
  // console.log(req.query.filter)
  res.render("list-users", {
    users
  });
};

const userRoute = async (req, res) => {
  const user = await prisma.user.findFirst({
    where: {
      id: parseInt(req.params.user)
    }
  });

  res.render("user-form", {
    user
  });
};

const newUserRoute = async (req, res) => {
  res.render("user-form", {
    user: {}
  });
};

const createUserRoute = async (req, res) => {
  await prisma.user.create({
    data: {
      name: req.body.name,
    },
  }).then(() => {
    res.status(202).redirect("/users");
  });
};

const updateUserRoute = async (req, res) => {
  await prisma.user.update({
    where: {
      id: parseInt(req.params.user),
    },
    data: {
      name: req.body.name,
    },
  }).then((response) => {
    res.status(202).redirect("/users");
  })
};

module.exports = {
  listUsersRoute,
  userRoute,
  newUserRoute,
  createUserRoute,
  updateUserRoute
};
