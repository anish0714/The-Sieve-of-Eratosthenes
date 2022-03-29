const primeNumberRoutes = require("./PrimeNumber/routes");

// handles all the different routes
module.exports = (app) => {
  app.use("/primeNumber", primeNumberRoutes);
};
