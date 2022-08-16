const { Router } = require("express");
const multer = require('multer');
const uploadConfig = require('../configs/upload');

const PlatesController = require("../Controllers/PlatesController");

const platesRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const platesController = new PlatesController();

platesRoutes.post("/", upload.single("img"),platesController.create);

module.exports = platesRoutes;