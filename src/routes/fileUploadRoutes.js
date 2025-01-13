const express = require("express");
const {
  uploadFile,
  listObjects,
  deleteObject,
} = require("../controllers/fileUploadController");
const { upload } = require("../utils/multer");

const fileRoutes = express.Router();

fileRoutes.post(
  "/file-upload",
  upload.fields([{ name: "file" }, { name: "folder" }]),
  uploadFile
);
fileRoutes.get("/list-file", listObjects);
fileRoutes.delete("/delete-object", deleteObject);

module.exports = { fileRoutes };
