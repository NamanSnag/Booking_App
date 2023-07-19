import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register User
const registerUser = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    // if email already exist then throw an error
    const user = await User.findOne({ email: email });

    if (user) {
      return res.status(201).json({
        msg: "User already exists, please login first or try again",
      });
    }

    // converting password to hash
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);

    // create new user
    await User.create({
      username: username,
      email: email,
      password: hash,
    });

    return res.status(200).json({
      msg: `${username}, You registered successfully`,
    });
  } catch (error) {
    next(error);
  }
};

// Login User
const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (!user)
      return res.status(404).json({
        msg: "plz, register your self",
      });

    // comparing password with hash password in database
    const hash = await user.password;

    const isPassword = await bcrypt.compareSync(password, hash);

    if (!isPassword)
      return res.status(403).json({
        msg: "Invalid Password or Email",
      });

    // token for authentication
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET_KEY
    );

    let { isAdmin, username } = user._doc;

    return res.status(200).json({
      token: token,
      user: username,
      isAdmin: isAdmin,
    });
  } catch (error) {
    next(error);
  }
};

// Update User
const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

// Delete User
const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "User Deleted",
    });
  } catch (error) {
    next(error);
  }
};

// Get User
const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// Get All User
const allUser = async (req, res, next) => {
  try {
    const Users = await User.find();
    res.status(200).json(Users);
  } catch (error) {
    next(error);
  }
};

// Logout User
const logout = async (req, res, next) => {
  try {
    req.session.destroy();
    return res.status(200).json({
      message: "Logged out successfully",
    });
  } catch (error) {
    next(error);
  }
};

export default {
  registerUser,
  login,
  updateUser,
  deleteUser,
  getUser,
  allUser,
  logout,
};
