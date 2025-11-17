import mongoose from "mongoose";

const sampleSchema = new mongoose.Schema({
  message: { type: String, required: true }
});

export default mongoose.model("Sample", sampleSchema);
