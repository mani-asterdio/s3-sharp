const s3 = require("../config/aws");
require("dotenv").config();

const uploadFile = async (req, res) => {
  try {
    if (!req.files || !req.files.file || !req.files.file[0]) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const filekey = req.files.file[0].originalname;
    const fileBuffer = req.files.file[0].buffer;
    const folder = req.body.folder || "public";
    const keyWithPath = `${folder}/${filekey}`;

    const data = await s3
      .upload({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: keyWithPath,
        Body: fileBuffer,
        ContentType: req.files.file[0].mimetype,
      })
      .promise();

    let fileUrl;
    if (folder.startsWith("public")) {
      fileUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${keyWithPath}`;
    } else {
      const signedParams = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: keyWithPath,
        Expires: 60 * 10,
      };
      fileUrl = await s3.getSignedUrlPromise("getObject", signedParams);
    }
    console.log(fileUrl);

    res.status(201).json({
      message: "File Uploaded Successfully",
      fileUrl,
      folder,
      keyWithPath,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const listObjects = async (req, res) => {
  try {
    const data = await s3
      .listObjectsV2({ Bucket: process.env.AWS_BUCKET_NAME })
      .promise();
    res.status(200).json(data.Contents);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteObject = async (req, res) => {
  try {
    const { key } = req.body;

    if (!key) {
      return res
        .status(400)
        .json({ message: "Key is required in the request body" });
    }

    const result = await s3
      .deleteObject({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: key,
      })
      .promise();

    res.status(200).json({ message: "Successfully deleted", result });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { uploadFile, listObjects, deleteObject };
