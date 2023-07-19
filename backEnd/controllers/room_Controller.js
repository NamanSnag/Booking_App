// import Hotel from "../models/Hotel.js";

// //  add room 
// const addRoom = async (req, res, next) => {
//     const hotelId = req.params.hotelId;
//     try {
//         // const room = new Room(req.body);
//         // await room.save();
//         // await Hotel.findByIdAndUpdate(hotelId , {
//         //     $push: {
//         //         rooms: room._id
//         //     }
//         // });
//         res.status(200).json(room);
//     } catch (error) {
//         next(error);
//     }
// };

// // Update Hotel
// const updateRoom = async (req, res, next) => {
//     try {
//       const updatedRoom = await Room.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         { new: true }
//       );
//       res.status(200).json(updatedRoom);
//     } catch (error) {
//       next(error);
//     }
//   };
  
//   // Delete Hotel
//   const deleteRoom = async (req, res, next) => {
//     const hotelId = req.params.hotelId;
//     try {
//       await Room.findByIdAndDelete(
//           req.params.id
//       );
//       await Hotel.findByIdAndUpdate(hotelId , {
//         $pull: {
//             rooms: req.params.id
//         }
//       });
  
//       res.status(200).json({ message: 'Room Deleted' });
//     } catch (error) {
//       next(error);
//     }
//   };
  
//   // Get Hotel
//   const getRoom = async (req, res, next) => {
//     try {
//       const room = await Room.findById(
//           req.params.id
//       );
//       res.status(200).json(room);
//     } catch (error) {
//       next(error);
//     }
//   };
  
//   // Get All Hotel
//   const allRoom = async (req, res, next) => {
//     try {
//       const rooms = await Room.find();
//       res.status(200).json(rooms);
//     } catch (error) {
//       next(error);
//     }
//   };
  
  
//   export default {
//       addRoom,
//       updateRoom,
//       deleteRoom,
//       getRoom,
//       allRoom
//   };