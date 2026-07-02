import express from "express";
import {
  fetchAnalytics,
  fetchSalesAnalytics,
  fetchUserAnalytics
} from "../controllers/analyticsController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/dashboard", protect, fetchAnalytics);
router.get("/sales", protect, fetchSalesAnalytics);
router.get("/users", protect, fetchUserAnalytics);

export default router;