import express from 'express';
const router = express.Router();

import userRouter from './users.js';
// import roomRouter from './rooms.js';
import hotelRouter from './hotels.js';

// user routes link
router.use('/user', userRouter);

// // hotel routes link
router.use('/hotel', hotelRouter);

// // room routes link
// router.use('/room', roomRouter);

export default router;