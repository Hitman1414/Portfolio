import db from "../models/db.js";

// GET all photos
export const getPhotos = (req, res) => {
  db.query("SELECT * FROM photography ORDER BY created_at DESC", (err, results) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res.json(results);
  });
};

// POST new photo
export const addPhoto = (req, res) => {
  const { title, description } = req.body;
  const image_url = req.file ? req.file.location : null;

  if (!title || !image_url) {
    return res.status(400).json({ error: "Title and image required" });
  }

  const sql = "INSERT INTO photography (title, description, image_url) VALUES (?, ?, ?)";
  db.query(sql, [title, description, image_url], (err, result) => {
    if (err) return res.status(500).json({ error: "Insert failed" });
    res.json({ success: true, id: result.insertId, image_url });
  });
};
