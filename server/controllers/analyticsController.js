import { User, Product, Orders, Cart, Wishlist } from "../models/Schema.js";

export const fetchAnalytics = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalProducts = await Product.countDocuments();
    const totalOrders = await Orders.countDocuments();
    const totalCartItems = await Cart.countDocuments();
    const totalWishlistItems = await Wishlist.countDocuments();

    const revenue = await Orders.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$price" }
        }
      }
    ]);

    res.status(200).json({
      totalUsers,
      totalProducts,
      totalOrders,
      totalCartItems,
      totalWishlistItems,
      totalRevenue: revenue.length ? revenue[0].totalRevenue : 0
    });
  } catch (err) {
    res.status(500).json({ message: "Error occurred" });
  }
};

export const fetchSalesAnalytics = async (req, res) => {
  try {
    const orders = await Orders.find();

    const totalOrders = orders.length;
    const totalRevenue = orders.reduce((sum, order) => {
      return sum + Number(order.price || 0);
    }, 0);

    res.status(200).json({
      totalOrders,
      totalRevenue
    });
  } catch (err) {
    res.status(500).json({ message: "Error occurred" });
  }
};

export const fetchUserAnalytics = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const adminUsers = await User.countDocuments({ usertype: "Admin" });
    const normalUsers = await User.countDocuments({ usertype: { $ne: "Admin" } });

    res.status(200).json({
      totalUsers,
      adminUsers,
      normalUsers
    });
  } catch (err) {
    res.status(500).json({ message: "Error occurred" });
  }
};