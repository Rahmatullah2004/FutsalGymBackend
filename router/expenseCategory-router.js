const express = require("express");
const expenseCategoryController = require("../controllers/expenseCategory-controller");

const expenseCategoryRouter = express.Router();

expenseCategoryRouter.get(
  "/",
  expenseCategoryController.getAllExpenseCategories,
);

expenseCategoryRouter.get(
  "/:id",
  expenseCategoryController.getExpenseCategoryById,
);
expenseCategoryRouter.post(
  "/",
  expenseCategoryController.createExpenseCategory,
);
expenseCategoryRouter.put(
  "/:id",
  expenseCategoryController.updateExpenseCategory,
);

module.exports = expenseCategoryRouter;
