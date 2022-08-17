const { Router } = require("express");
const multer = require('multer');
const uploadConfig = require('../configs/upload');

const PlatesController = require("../Controllers/PlatesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const ensureIsAdmin  = require("../middlewares/ensureIsAdmin");

const platesRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const platesController = new PlatesController();

platesRoutes.use(ensureAuthenticated);

platesRoutes.post("/", ensureIsAdmin, upload.single("img"),platesController.create);
platesRoutes.get("/", platesController.index);
platesRoutes.get("/:id", platesController.show);
platesRoutes.delete("/:id", ensureIsAdmin, platesController.delete);
platesRoutes.put("/:id", ensureIsAdmin, upload.single("img"), platesController.update);

module.exports = platesRoutes;