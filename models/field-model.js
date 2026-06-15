const pool = require("../utilities/database-connection");

class FieldModel {
  static getFields = async () => {
    const [result] = await pool.query("select * from field");
    return result;
  };

  static getField = async (id) => {
    const [result] = await pool.query("select * from field where id = ?", [id]);
    return result;
  };

  static insertField = async (gymId, name) => {
    const [result] = await pool.query(
      "insert into field (gym_id, name) values (?, ?)",
      [gymId, name],
    );
    return result.insertId;
  };

  static updateField = async (id, name) => {
    const [result] = await pool.query(
      "update field set name = ? where id = ?",
      [name, id],
    );
    return result;
  };
}
module.exports = FieldModel;
