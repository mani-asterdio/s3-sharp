const { processAndSaveImage } = require("../utils/multer");

const sharpUpload = async (req, res) => {
  try {
    const file = req.file;
    console.log(file);

    const filePath = await processAndSaveImage(req.file);
    res.status(200).json({ message: "File uploaded", filePath });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { sharpUpload };
