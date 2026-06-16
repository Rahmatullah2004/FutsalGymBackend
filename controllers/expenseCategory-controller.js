const ExpenseCategoryModel = require("../models/expenseCategory-model");

const getAllExpenseCategories = async (req, res) => {
  const result = await ExpenseCategoryModel.getAllExpenseCategories();
  if (!result) {
    return res.status(400).json({ message: "No expense category found" });
  }
  return res.status(200).json(result);
};
const getExpenseCategoryById = async (req, res) => {
  const { id } = req.params;
  const result = await ExpenseCategoryModel.getExpenseCategoryById(id);
  if (!result) {
    return res.status(400).json({ message: "No expense category found" });
  }
  res.json({ data: result });
};
const createExpenseCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }
  const result = await ExpenseCategoryModel.createExpenseCategory(name);
  if (!result) {
    return res.status(400).json({ message: "Expense category not created" });
  }
  res
    .status(201)
    .json({ message: "Expense category created successfully", data: result });
};
const updateExpenseCategory = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }
  const result = await ExpenseCategoryModel.updateExpenseCategory(id, name);
  if (!result) {
    return res.status(400).json({ message: "Expense category not updated" });
  }
  res.json({ message: "Expense category updated successfully", data: result });
};

module.exports = {
  getAllExpenseCategories,
  getExpenseCategoryById,
  createExpenseCategory,
  updateExpenseCategory,
};
