import asyncHandler from "express-async-handler";
import Admin from "../models/adminModel.js";
import generateToken from "../utils/generateToken.js";
import dotenv from "dotenv";

dotenv.config();

// @desc    Auth admin & get token
// @route   POST /api/admin/login
// @access  Public
const authAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  const admin = await Admin.findOne({ email });

  // if (admin && (await admin.matchPassword(password))) {
  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    res.json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      token: generateToken(admin._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    Register a new admin
// @route   POST /api/admin/register
// @access  Public (should be restricted in production)
const registerAdmin = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const adminExists = await Admin.findOne({ email });

  if (adminExists) {
    res.status(400);
    throw new Error("Admin already exists");
  }

  const admin = await Admin.create({
    name,
    email,
    password,
  });

  if (admin) {
    res.status(201).json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      token: generateToken(admin._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid admin data");
  }
});

// @desc    Get admin profile
// @route   GET /api/admin/profile
// @access  Private
const getAdminProfile = asyncHandler(async (req, res) => {
  const admin = await Admin.findById(req.admin._id);

  if (admin) {
    res.json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
    });
  } else {
    res.status(404);
    throw new Error("Admin not found");
  }
});

// @desc    Create default admin if none exists
// @route   GET /api/admin/seed
// @access  Public (should be secured in production)
const seedAdmin = asyncHandler(async (req, res) => {
  const adminCount = await Admin.countDocuments();

  if (adminCount === 0) {
    await Admin.create({
      name: "Admin",
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
    });
    res.status(201).json({ message: "Default admin created" });
  } else {
    res.status(400).json({ message: "Admin already exists" });
  }
});

export { authAdmin, registerAdmin, getAdminProfile, seedAdmin };
