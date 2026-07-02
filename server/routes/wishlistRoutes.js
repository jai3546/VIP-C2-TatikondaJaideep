import express from "express";
import {
  fetchWishlist,
  addToWishlist,
  removeFromWishlist
} from "../controllers/wishlistController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/fetch-wishlist", protect, fetchWishlist);
router.post("/add-to-wishlist", protect, addToWishlist);
router.delete("/remove-from-wishlist/:id", protect, removeFromWishlist);

export default router;