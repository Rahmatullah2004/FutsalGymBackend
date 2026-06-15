const pool = require("../utilities/database-connection");

class ExpenseCategoryModel {
  static getAllExpenseCategories = async () => {
    const [response] = await pool.query("select * from expensecategory");
    return response;
  };
  static getExpenseCategoryById = async (id) => {
    const [response] = await pool.query(
      "select * from expensecategory where id = ?",
      [id],
    );
    return response;
  };
  static createExpenseCategory = async (name) => {
    const [response] = await pool.query(
      "insert into expensecategory (name) values (?)",
      [name],
    );
    return response;
  };
  static updateExpenseCategory = async (id, name) => {
    const [response] = await pool.query(
      "update expensecategory set name = ? where id = ?",
      [name, id],
    );
    return response;
  };
}
module.exports = ExpenseCategoryModel;
