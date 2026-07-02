import { Orders, Cart } from "../models/Schema.js";

// Fetch logged-in user's orders; Admin can fetch all
export const fetchOrders = async (req, res) => {
  try {
    let orders;

    if (req.user.usertype === "Admin") {
      orders = await Orders.find();
    } else {
      orders = await Orders.find({ userId: req.user._id });
    }

    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Error occurred" });
  }
};

// Buy single product
export const buyProduct = async (req, res) => {
  const {
    name,
    email,
    mobile,
    address,
    pincode,
    title,
    description,
    mainImg,
    size,
    quantity,
    price,
    discount,
    paymentMethod
  } = req.body;

  try {
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 5);

    const newOrder = new Orders({
      userId: req.user._id,
      name,
      email,
      mobile,
      address,
      pincode,
      title,
      description,
      mainImg,
      size,
      quantity,
      price,
      discount,
      paymentMethod,
      deliveryDate
    });

    await newOrder.save();

    res.json({ message: "Order placed" });
  } catch (err) {
    res.status(500).json({ message: "Error occurred" });
  }
};

// Cancel order
export const cancelOrder = async (req, res) => {
  const { orderId } = req.body;

  if (!orderId) {
    return res.status(400).json({ message: "Order ID is required" });
  }

  try {
    const order = await Orders.findById(orderId);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.orderStatus = "Cancelled";
    await order.save();

    res.status(200).json({ message: "Order cancelled successfully" });
  } catch (error) {
    console.error("Cancel order error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update order status
export const updateOrderStatus = async (req, res) => {
  const { id, updateStatus } = req.body;

  try {
    const order = await Orders.findById(id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.orderStatus = updateStatus;
    await order.save();

    res.json({ message: "Order status updated" });
  } catch (err) {
    res.status(500).json({ message: "Error occurred" });
  }
};

// Place order from cart
export const placeCartOrder = async (req, res) => {
  const { name, mobile, email, address, pincode, paymentMethod } = req.body;

  try {
    const cartItems = await Cart.find({ userId: req.user._id });

    if (cartItems.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 5);

    await Promise.all(
      cartItems.map(async (item) => {
        const newOrder = new Orders({
          userId: req.user._id,
          name,
          email,
          mobile,
          address,
          pincode,
          title: item.title,
          description: item.description,
          mainImg: item.mainImg,
          size: item.size,
          quantity: item.quantity,
          price: item.price,
          discount: item.discount,
          paymentMethod,
          deliveryDate
        });

        await newOrder.save();
        await Cart.deleteOne({ _id: item._id });
      })
    );

    res.json({ message: "Order placed" });
  } catch (err) {
    res.status(500).json({ message: "Error occurred" });
  }
};