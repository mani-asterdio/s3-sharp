const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs")

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 1 * 1024 * 1024,
  },
});

const processAndSaveImage = async (file) => {
  const uploadDir = path.join(__dirname, "../../uploads");
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const outputPath = path.join(uploadDir, `${Date.now()}-${file.originalname}`);

  await sharp(file.buffer).resize(800, 600).toFile(outputPath);

  return outputPath;
};

module.exports = { upload, processAndSaveImage };
