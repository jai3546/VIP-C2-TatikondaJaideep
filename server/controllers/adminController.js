import { Admin, User, Product, Orders } from "../models/Schema.js";

// Fetch banner
export const fetchBanner = async (req, res) => {
  try {
    if (req.user.usertype !== "Admin") {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    const admin = await Admin.findOne();
    res.json(admin ? admin.banner : null);
  } catch (err) {
    res.status(500).json({ message: "Error occurred" });
  }
};

// Update banner
export const updateBanner = async (req, res) => {
  const { banner } = req.body;

  try {
    if (req.user.usertype !== "Admin") {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    let admin = await Admin.findOne();

    if (!admin) {
      admin = new Admin({
        banner,
        categories: []
      });
    } else {
      admin.banner = banner;
    }

    await admin.save();

    res.json({ message: "Banner updated successfully" });

  } catch (err) {
    res.status(500).json({ message: "Error occurred" });
  }
};

// Dashboard Statistics
export const fetchDashboardStats = async (req, res) => {
  try {
    if (req.user.usertype !== "Admin") {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    const totalUsers = await User.countDocuments();
    const totalProducts = await Product.countDocuments();
    const totalOrders = await Orders.countDocuments();

    const revenue = await Orders.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: {
            $sum: "$price"
          }
        }
      }
    ]);

    res.json({
      totalUsers,
      totalProducts,
      totalOrders,
      totalRevenue: revenue.length ? revenue[0].totalRevenue : 0
    });

  } catch (err) {
    res.status(500).json({ message: "Error occurred" });
  }
};

// Recent Orders
export const fetchRecentOrders = async (req, res) => {
  try {
    if (req.user.usertype !== "Admin") {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    const orders = await Orders.find()
      .sort({ orderDate: -1 })
      .limit(10);

    res.json(orders);

  } catch (err) {
    res.status(500).json({ message: "Error occurred" });
  }
};

// Recent Users
export const fetchRecentUsers = async (req, res) => {
  try {
    if (req.user.usertype !== "Admin") {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    const users = await User.find()
      .select("-password")
      .sort({ _id: -1 })
      .limit(10);

    res.json(users);

  } catch (err) {
    res.status(500).json({ message: "Error occurred" });
  }
};