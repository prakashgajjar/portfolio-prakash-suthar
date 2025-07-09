import mongoose from "mongoose";

const responseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Response = mongoose.model("Response", responseSchema);

export default Response;
