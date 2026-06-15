const pool = require("../utilities/database-connection");

class UserModel {
  static insertInUsers = async (username, hashedPassword, role) => {
    const result = await pool.query(
      "insert into users (username, password_hash, role) values (?, ?, ?)",
      [username, hashedPassword, role],
    );
    return result[0];
  };
  static updateUsers = async (id, username, hashedPassword, role) => {
    const result = await pool.query(
      "update users set username = ?, password_hash = ?, role = ? where id = ?",
      [username, hashedPassword, role, id],
    );
    return result[0];
  };

  static insertInCustomer = async (userId, name, phone) => {
    const result = await pool.query(
      "insert into customer (user_id, name, phone) values (?, ?, ?)",
      [userId, name, phone],
    );
    return result[0];
  };
  static updateCustomer = async (id, userId, name, phone) => {
    const result = await pool.query(
      "update customer set user_id = ?, name = ?, phone = ? where id = ?",
      [userId, name, phone, id],
    );
    return result[0];
  };

  static insertInTeacher = async (userId, name, phone, monthlyFee) => {
    const result = await pool.query(
      "insert into teacher(user_id, name, phone, monthly_fee) values (?, ?, ?, ?)",
      [userId, name, phone, monthlyFee],
    );
    return result[0];
  };
  static updateTeacher = async (id, userId, name, phone, monthlyFee) => {
    const result = await pool.query(
      "update teacher set user_id = ?, name = ?, phone = ?, monthly_fee = ? where id = ?",
      [userId, name, phone, monthlyFee, id],
    );
    return result[0];
  };

  static getUserName = async (username) => {
    const [result] = await pool.query(
      "select * from users where username = ?",
      [username],
    );
    return result[0];
  };
}
module.exports = UserModel;
