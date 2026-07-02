import express from "express";
import {
  fetchBanner,
  updateBanner,
  fetchDashboardStats,
  fetchRecentOrders,
  fetchRecentUsers
} from "../controllers/adminController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/fetch-banner", protect, fetchBanner);
router.post("/update-banner", protect, updateBanner);

router.get("/dashboard-stats", protect, fetchDashboardStats);
router.get("/recent-orders", protect, fetchRecentOrders);
router.get("/recent-users", protect, fetchRecentUsers);

export default router;