import express from 'express';
const hotelRouter = express.Router();

import hotel from '../controllers/hotel_Controller.js';
import { verifyAdmin, verifyUser } from '../utils/jwt_Verify.js';

// add hotel routes
hotelRouter.post('/', verifyAdmin, hotel.addHotel);

// Update hotel routes
hotelRouter.put('/:id', verifyAdmin, hotel.updateHotel);

// delete hotel routes
hotelRouter.delete('/:id', verifyAdmin, hotel.deleteHotel);

// get hotel routes
hotelRouter.get('/:id', hotel.getHotel);

// get all hotels routes
hotelRouter.get('/', hotel.allHotel);

export default hotelRouter;