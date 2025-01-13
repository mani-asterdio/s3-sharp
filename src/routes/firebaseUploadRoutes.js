const express = require("express");
const {
  firebaseUploadController,
} = require("../controllers/firebaseUploadController");

const firebaseUploadRoutes = express.Router();

firebaseUploadRoutes.post("/upload", firebaseUploadController);

module.exports = { firebaseUploadRoutes };
