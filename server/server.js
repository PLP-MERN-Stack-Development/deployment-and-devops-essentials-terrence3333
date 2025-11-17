import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import sampleRoutes from "./routes/sampleRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/sample", sampleRoutes);

app.get("/", (req, res) => res.send("API running on Render"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on ${port}`));
