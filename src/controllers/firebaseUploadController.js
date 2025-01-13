const { getStorage } = require("firebase/storage");

const firebaseUploadController = async (req, res) => {
  try {
    //
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { firebaseUploadController };
