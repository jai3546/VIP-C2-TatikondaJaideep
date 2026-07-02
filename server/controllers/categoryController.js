import { Category } from "../models/Schema.js";

export const fetchCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: "Error occurred" });
  }
};

export const addCategory = async (req, res) => {
  const { name, image, description } = req.body;

  try {
    const existingCategory = await Category.findOne({ name });

    if (existingCategory) {
      return res.status(400).json({ message: "Category already exists" });
    }

    const category = new Category({
      name,
      image,
      description
    });

    await category.save();

    res.status(201).json({ message: "Category added" });
  } catch (err) {
    res.status(500).json({ message: "Error occurred" });
  }
};

export const updateCategory = async (req, res) => {
  const { name, image, description } = req.body;

  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    category.name = name;
    category.image = image;
    category.description = description;

    await category.save();

    res.status(200).json({ message: "Category updated" });
  } catch (err) {
    res.status(500).json({ message: "Error occurred" });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json({ message: "Category deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error occurred" });
  }
};