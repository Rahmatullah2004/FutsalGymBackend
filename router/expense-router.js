const express = require("express");
const expenseController = require("../controllers/expense-controller");

const expenseRouter = express.Router();

expenseRouter.get("/", expenseController.getAllExpenses);
expenseRouter.get("/:id", expenseController.getExpenseById);
expenseRouter.post("/", expenseController.insertExpense);
expenseRouter.put("/:id", expenseController.updateExpense);

module.exports = expenseRouter;
