const userValidationSchema = {
  name: {
    in: ["body"],
    notEmpty: {
      errorMessage: "name is required",
    },
    isLength: {
      options: { min: 10 },
      errorMessage: "name must be at least 10 characters",
    },
  },
};

module.exports = userValidationSchema;
