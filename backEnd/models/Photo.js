import mongoose from "mongoose";

// photo schema
export const photoSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
  },
}); 
