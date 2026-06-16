const joi = require("joi");
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
  const schema = {
    categoryId: joi.number().required(),
    amount: joi.number().required(),
    date: joi.date().required(),
    description: joi.string().min(3).required(),
  };
  const validData = joi.object(schema).validate(req.body);
  if (validData.error)
    return res.json({ data: validData.error.details[0].message });
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
  const schema = {
    categoryId: joi.number().required(),
    amount: joi.number().required(),
    date: joi.date().required(),
    description: joi.string().min(3).required(),
  };
  const validData = joi.object(schema).validate(req.body);
  if (validData.error)
    return res.json({ data: validData.error.details[0].message });
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
const getExpenseByCategory = async (req, res, next) => {
  const { id } = req.params;
  const result = await ExpenseModel.getExpenseByCategory(id);
  if (!result) {
    res.status(404).json({ message: "the expense not found" });
  }
  res.json({ data: result });
};
const getExpenseByDate = async (req, res, next) => {
  const { date } = req.query;
  const result = await ExpenseModel.getExpenseByDate(date);
  if (!result) {
    res.status(404).json({ message: "not found" });
  }
  res.json({ data: result });
};
const getTotalExpense = async (req, res, next) => {
  const result = await ExpenseModel.getTotalExpense();
  if (!result) {
    res.status(404).json({ message: "not found" });
  }
  res.json(result);
};

module.exports = {
  getAllExpenses,
  getExpenseById,
  insertExpense,
  updateExpense,
  getExpenseByCategory,
  getExpenseByDate,
  getTotalExpense,
};
