const express = require("express");
const expenseController = require("../controllers/expense-controller");

const expenseRouter = express.Router();

expenseRouter.get("/", expenseController.getAllExpenses);
expenseRouter.post("/", expenseController.insertExpense);
expenseRouter.get("/category/:id", expenseController.getExpenseByCategory);
expenseRouter.get("/date", expenseController.getExpenseByDate);
expenseRouter.get("/total", expenseController.getTotalExpense);
expenseRouter.get("/:id", expenseController.getExpenseById);
expenseRouter.put("/:id", expenseController.updateExpense);

module.exports = expenseRouter;
