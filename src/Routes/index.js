const { Router } = require("express");
const userRoutes = require("./user.routes");
const platesRoutes = require("./plates.routes");

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/plates", platesRoutes);

module.exports = routes;