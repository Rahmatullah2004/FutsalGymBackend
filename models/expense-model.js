const pool = require("../utilities/database-connection");

class ExpenseModel {
  static getAllExpenses = async () => {
    const [response] = await pool.query(
      "SELECT e.id, ec.name AS category_name, e.amount, e.date, e.description FROM Expense e JOIN ExpenseCategory ec ON e.category_id = ec.id",
    );
    return response;
  };
  static getExpenseById = async (id) => {
    const [response] = await pool.query(
      "SELECT e.id, ec.name AS category_name, e.amount, e.date, e.description FROM Expense e JOIN ExpenseCategory ec ON e.category_id = ec.id WHERE e.id = ?",
      [id],
    );
    return response[0];
  };
  static insertExpense = async (categoryId, amount, date, description) => {
    const [response] = await pool.query(
      "INSERT INTO Expense (category_id, amount, date, description) VALUES (?, ?, ?, ?)",
      [categoryId, amount, date, description],
    );
    return response.insertId;
  };
  static updateExpense = async (id, categoryId, amount, date, description) => {
    const [response] = await pool.query(
      "UPDATE Expense SET category_id = ?, amount = ?, date = ?, description = ? WHERE id = ?",
      [categoryId, amount, date, description, id],
    );
    return response.affectedRows > 0;
  };
}
module.exports = ExpenseModel;
