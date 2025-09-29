import express from "express";
import multer from "multer";
import multerS3 from "multer-s3";
import AWS from "aws-sdk";
import { getSketches, addSketch, deleteSketch } from "../controllers/sketchesController.js";

const router = express.Router();

// ✅ Configure AWS SDK v2
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();

// ✅ Multer storage to S3
const upload = multer({
  storage: multerS3({
    s3,
    bucket: process.env.S3_BUCKET,
    //acl: "public-read",
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + "-" + file.originalname);
    },
  }),
});

// Routes
router.get("/", getSketches);
router.post("/", upload.single("image"), addSketch);
router.delete("/:id", deleteSketch);

export default router;
