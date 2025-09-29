import db from "../models/db.js";
import AWS from "aws-sdk";

// ✅ Configure AWS SDK
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

// GET /api/sketches
export const getSketches = (req, res) => {
  db.query("SELECT * FROM sketches ORDER BY created_at DESC", (err, results) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res.json(results);
  });
};

// POST /api/sketches
export const addSketch = (req, res) => {
  const { title, description } = req.body;
  const image_url = req.file ? req.file.location : null; // ✅ S3 URL

  if (!title || !image_url) {
    return res.status(400).json({ error: "Title and image required" });
  }

  const sql = "INSERT INTO sketches (title, description, image_url) VALUES (?, ?, ?)";
  db.query(sql, [title, description, image_url], (err, result) => {
    if (err) return res.status(500).json({ error: "Insert failed" });
    res.json({ success: true, id: result.insertId, image_url });
  });
};

// DELETE /api/sketches/:id
export const deleteSketch = (req, res) => {
  const { id } = req.params;

  // First, get the image URL from DB
  db.query("SELECT image_url FROM sketches WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).json({ error: "DB lookup failed" });
    if (results.length === 0) return res.status(404).json({ error: "Sketch not found" });

    const imageUrl = results[0].image_url;

    // Extract the file key from S3 URL
    const urlParts = imageUrl.split("/");
    const key = urlParts[urlParts.length - 1]; // e.g. "16952222222-myfile.jpg"

    // Delete from S3
    s3.deleteObject(
      {
        Bucket: process.env.S3_BUCKET,
        Key: key,
      },
      (s3Err, data) => {
        if (s3Err) {
          console.error("S3 delete error:", s3Err);
          // Continue anyway — DB should still be cleaned
        }

        // Delete from DB
        db.query("DELETE FROM sketches WHERE id = ?", [id], (dbErr) => {
          if (dbErr) return res.status(500).json({ error: "DB delete failed" });
          res.json({ success: true, message: "Sketch deleted (DB + S3)" });
        });
      }
    );
  });
};
