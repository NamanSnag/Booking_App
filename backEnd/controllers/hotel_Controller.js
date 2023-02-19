import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

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
    await Hotel.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Hotel Deleted" });
  } catch (error) {
    next(error);
  }
};

// Get Hotel
const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};

// Get All Hotel
const allHotel = async (req, res, next) => {
  const { min, max, limit, ...other } = req.query;
  try {
    const hotels = await Hotel.find({
      ...other,
      cheapest_Price: { $gt: min | 1, $lt: max || 9999 },
    }).limit(limit);
    res.status(200).json(hotels);
  } catch (error) {
    next(error);
  }
};

const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((c) => {
        return Hotel.countDocuments({ city: c });
      })
    );
    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};

const countByType = async (req, res, next) => {
  try {
    const hotelsCount = await Hotel.countDocuments({ type: "Hotel" });
    const apartmentsCount = await Hotel.countDocuments({ type: "Apartment" });
    const resortsCount = await Hotel.countDocuments({ type: "Resort" });
    const cabinsCount = await Hotel.countDocuments({ type: "Cabin" });
    const villasCount = await Hotel.countDocuments({ type: "villa" });
    res.status(200).json([
      { type: "Hotels", count: hotelsCount },
      { type: "Resorts", count: resortsCount },
      { type: "cabins", count: cabinsCount },
      { type: "villas", count: villasCount },
      { type: "Apartments", count: apartmentsCount },
    ]);
  } catch (error) {
    next(error);
  }
};

const getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    const rooms = await Promise.all(hotel.rooms.map(room => Room.findById(room)));
    console.log(rooms)
    res.status(200).json(rooms);
  } catch (error) {
    next(error);
  }
}

export default {
  addHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  allHotel,
  countByCity,
  countByType,
  getHotelRooms
};
