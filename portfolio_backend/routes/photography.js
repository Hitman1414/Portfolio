import express from "express";
import multer from "multer";
import multerS3 from "multer-s3";
import AWS from "aws-sdk";
import { getPhotos, addPhoto } from "../controllers/photographyController.js";

const router = express.Router();

// AWS S3 setup
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const upload = multer({
  storage: multerS3({
    s3,
    bucket: process.env.S3_BUCKET,
    acl: "public-read",
    key: (req, file, cb) => {
      cb(null, `photography/${Date.now()}_${file.originalname}`);
    },
  }),
});

// GET all photos
router.get("/", getPhotos);

// POST upload new photo
router.post("/", upload.single("image"), addPhoto);

export default router;
