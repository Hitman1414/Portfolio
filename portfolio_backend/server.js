import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import sketchesRoutes from "./routes/sketches.js";
import photographyRoutes from "./routes/photography.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/sketches", sketchesRoutes);
app.use("/api/photography", photographyRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
