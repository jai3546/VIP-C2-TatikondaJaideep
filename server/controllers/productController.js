import { Product, Admin } from "../models/Schema.js";

// Fetch all products
export const fetchProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Error occurred" });
  }
};

// Fetch single product details
export const fetchProductDetails = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Error occurred" });
  }
};

// Fetch categories
export const fetchCategories = async (req, res) => {
  try {
    let admin = await Admin.findOne();

    if (!admin) {
      admin = new Admin({ banner: "", categories: [] });
      await admin.save();
    }

    res.json(admin.categories);
  } catch (err) {
    res.status(500).json({ message: "Error occurred" });
  }
};

// Add new product
export const addNewProduct = async (req, res) => {
  const {
    productName,
    productDescription,
    productMainImg,
    productCarousel,
    productSizes,
    productGender,
    productCategory,
    productNewCategory,
    productPrice,
    productDiscount
  } = req.body;

  try {
    if (req.user.usertype !== "Admin") {
      return res.status(403).json({ message: "Access denied: Admins only" });
    }

    let finalCategory = productCategory;

    if (productCategory === "new category") {
      let admin = await Admin.findOne();

      if (!admin) {
        admin = new Admin({ banner: "", categories: [] });
      }

      if (!admin.categories.includes(productNewCategory)) {
        admin.categories.push(productNewCategory);
      }

      await admin.save();
      finalCategory = productNewCategory;
    }

    const newProduct = new Product({
      title: productName,
      description: productDescription,
      mainImg: productMainImg,
      carousel: productCarousel,
      category: finalCategory,
      sizes: productSizes,
      gender: productGender,
      price: productPrice,
      discount: productDiscount
    });

    await newProduct.save();

    res.json({ message: "Product added!!" });
  } catch (err) {
    res.status(500).json({ message: "Error occurred" });
  }
};

// Update product
export const updateProduct = async (req, res) => {
  const {
    productName,
    productDescription,
    productMainImg,
    productCarousel,
    productSizes,
    productGender,
    productCategory,
    productNewCategory,
    productPrice,
    productDiscount
  } = req.body;

  try {
    if (req.user.usertype !== "Admin") {
      return res.status(403).json({ message: "Access denied: Admins only" });
    }

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    let finalCategory = productCategory;

    if (productCategory === "new category") {
      let admin = await Admin.findOne();

      if (!admin) {
        admin = new Admin({ banner: "", categories: [] });
      }

      if (!admin.categories.includes(productNewCategory)) {
        admin.categories.push(productNewCategory);
      }

      await admin.save();
      finalCategory = productNewCategory;
    }

    product.title = productName;
    product.description = productDescription;
    product.mainImg = productMainImg;
    product.carousel = productCarousel;
    product.sizes = productSizes;
    product.gender = productGender;
    product.category = finalCategory;
    product.price = productPrice;
    product.discount = productDiscount;

    await product.save();

    res.json({ message: "Product updated!!" });
  } catch (err) {
    res.status(500).json({ message: "Error occurred" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    if (req.user.usertype !== "Admin") {
      return res.status(403).json({
        message: "Access denied. Admins only."
      });
    }

    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    res.status(200).json({
      message: "Product deleted successfully"
    });

  } catch (err) {
    res.status(500).json({
      message: "Error occurred"
    });
  }
};