import express from 'express';
const roomRouter = express.Router();

roomRouter.get('/', (req , res)=>{
    res.send('Room routes');
})

export default roomRouter;