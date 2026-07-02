import { Wishlist } from "../models/Schema.js";

export const fetchWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.find({ userId: req.user._id });
    res.status(200).json(wishlist);
  } catch (err) {
    res.status(500).json({ message: "Error occurred" });
  }
};

export const addToWishlist = async (req, res) => {
  const { productId, title, mainImg, price, discount } = req.body;

  try {
    const existingItem = await Wishlist.findOne({
      userId: req.user._id,
      productId
    });

    if (existingItem) {
      return res.status(400).json({ message: "Product already in wishlist" });
    }

    const item = new Wishlist({
      userId: req.user._id,
      productId,
      title,
      mainImg,
      price,
      discount
    });

    await item.save();

    res.status(201).json({ message: "Added to wishlist" });
  } catch (err) {
    res.status(500).json({ message: "Error occurred" });
  }
};

export const removeFromWishlist = async (req, res) => {
  try {
    const item = await Wishlist.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id
    });

    if (!item) {
      return res.status(404).json({ message: "Wishlist item not found" });
    }

    res.status(200).json({ message: "Removed from wishlist" });
  } catch (err) {
    res.status(500).json({ message: "Error occurred" });
  }
};
