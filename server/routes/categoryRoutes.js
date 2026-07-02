import express from "express";
import {
  fetchCategories,
  addCategory,
  updateCategory,
  deleteCategory
} from "../controllers/categoryController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public
router.get("/fetch-categories", fetchCategories);

// Admin
router.post("/add-category", protect, addCategory);
router.put("/update-category/:id", protect, updateCategory);
router.delete("/delete-category/:id", protect, deleteCategory);

export default router;