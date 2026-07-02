import { Admin } from "../models/Schema.js";

export const getAllBanners = async (req, res) => {
  try {
    const banner = await Admin.findOne();
    res.json(banner?.banner || "");
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch banner" });
  }
};