import mongoose from "mongoose";

import {reviewSchema} from './Review.js'
import { photoSchema } from "./Photo.js";

export const roomSchema = new mongoose.Schema({
  roomNumber: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  availability: [
    {
      date: {
        type: Date,
        required: true,
      },
      isAvailable: {
        type: Boolean,
        default: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  ratings: [reviewSchema],
  photos: [photoSchema],
});

