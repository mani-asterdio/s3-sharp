const express = require("express");
const { fileRoutes } = require("./fileUploadRoutes");
const { firebaseUploadRoutes } = require("./firebaseUploadRoutes");
const { sharPtestRoutes } = require("./sharpTestRoute");

const router = express.Router();

router.use("/uploads", fileRoutes);
router.use("/firebase", firebaseUploadRoutes);
router.use("/sharp", sharPtestRoutes);

module.exports = { router };
