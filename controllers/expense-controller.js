const ExpenseModel = require("../models/expense-model");

const getAllExpenses = async (req, res) => {
  const result = await ExpenseModel.getAllExpenses();
  if (!result) {
    return res.status(404).json({ message: "No expenses found" });
  }
  res.json({ message: "Expenses retrieved successfully", data: result });
};

const getExpenseById = async (req, res) => {
  const { id } = req.params;
  const result = await ExpenseModel.getExpenseById(id);
  if (!result) {
    return res.status(404).json({ message: "Expense not found" });
  }
  res.json({ message: "Expense retrieved successfully", data: result });
};
const insertExpense = async (req, res) => {
  const { categoryId, amount, date, description } = req.body;
  const result = await ExpenseModel.insertExpense(
    categoryId,
    amount,
    date,
    description,
  );
  res
    .status(201)
    .json({ message: "Expense created successfully", data: { id: result } });
};
const updateExpense = async (req, res) => {
  const { id } = req.params;
  const { categoryId, amount, date, description } = req.body;
  const result = await ExpenseModel.updateExpense(
    id,
    categoryId,
    amount,
    date,
    description,
  );
  if (!result) {
    return res.status(404).json({ message: "Expense not found" });
  }
  res.json({ message: "Expense updated successfully" });
};

module.exports = {
  getAllExpenses,
  getExpenseById,
  insertExpense,
  updateExpense,
};
