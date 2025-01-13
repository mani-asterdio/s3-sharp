const express = require("express");
const { upload } = require("../utils/multer");
const { sharpUpload } = require("../controllers/sharpTestController");

const sharPtestRoutes = express.Router();

sharPtestRoutes.post("/upload-image", upload.single("image"), sharpUpload);

module.exports = { sharPtestRoutes };
