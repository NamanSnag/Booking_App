import express from 'express';
const userRouter = express.Router();
import user_Controller from '../controllers/user_Controller.js';
import { verifyAdmin, verifyUser } from '../utils/jwt_Verify.js';


// create new user
userRouter.post('/register', user_Controller.registerUser);

// login user
userRouter.post('/login', user_Controller.login);

// Update user 
userRouter.put('/:id', verifyUser, user_Controller.updateUser);

// delete user
userRouter.delete('/:id', verifyUser, user_Controller.deleteUser);

// get hotel 
userRouter.get('/:id', verifyUser, user_Controller.getUser);

// get all users
userRouter.get('/', verifyAdmin, user_Controller.allUser);

export default userRouter;