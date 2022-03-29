const primeNumberRoutes = require("./PrimeNumber/routes");

module.exports = (app) => {
  app.use("/primeNumber", primeNumberRoutes);
};
