import mongoose from "mongoose";
import { photoSchema } from './Photo.js';
import { reviewSchema } from './Review.js';
import { roomSchema } from "./Room.js";

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true,
  },
  type: {
    type: String,
    required: true,
    index: true,
  },
  address: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
      required: true,
      index: true,
    },
    zipCode: {
      type: String,
      required: true,
    },
  },
  startPrice: {
    type: Number,
    required: true,
  },
  highestPrice: {
    type: Number,
    required: true,
  },
  phone: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  photos: [photoSchema],
  rooms: [roomSchema],
  rating: {
    type: Number,
  },
  review: [reviewSchema],
});

const Hotel = mongoose.model("Hotel", hotelSchema);

export default Hotel;
