import Hotel from "../models/Hotel.js";

// Add Hotel
const addHotel = async (req, res, next) => {
  try {
    const newHotel = new Hotel(req.body);
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
};

// Update Hotel
const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    next(error);
  }
};

// Delete Hotel
const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(
        req.params.id
    );

    res.status(200).json({ message: 'Hotel Deleted' });
  } catch (error) {
    next(error);
  }
};

// Get Hotel
const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(
        req.params.id
    );
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};

// Get All Hotel
const allHotel = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    next(error);
  }
};


export default {
    addHotel,
    updateHotel,
    deleteHotel,
    getHotel,
    allHotel
};