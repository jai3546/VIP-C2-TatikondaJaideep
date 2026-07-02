import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/Schema.js";

const generateToken = (id, usertype) => {
  return jwt.sign(
    { id, usertype },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
};

// Register User
export const registerUser = async (req, res) => {
  const { username, email, usertype, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      usertype,
      password: hashedPassword
    });

    const userCreated = await newUser.save();

    const token = generateToken(
      userCreated._id,
      userCreated.usertype
    );

    res.status(201).json({
      _id: userCreated._id,
      username: userCreated.username,
      email: userCreated.email,
      usertype: userCreated.usertype,
      token
    });

  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Login User
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    const token = generateToken(user._id, user.usertype);

    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      usertype: user.usertype,
      token
    });

  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Fetch Users
export const fetchUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.status(200).json(users);

  } catch (err) {
    res.status(500).json({ message: "Error occurred" });
  }
};