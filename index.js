const app = require("./src/app");

app.listen(process.env.PORT, () => {
  console.log(`Server Started at ${process.env.PORT}`);
});
