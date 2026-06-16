const pool = require("../utilities/database-connection");

class GymModel {
  static insertGym = async (name, phone, address, city, session_duration) => {
    const [result] = await pool.query("select count(*) as count from gym");
    if (result[0]?.count == 0) {
      const [result] = await pool.query(
        "insert into gym (name, phone, address, city, session_duration) values (?, ?, ?, ?, ?)",
        [name, phone, address, city, session_duration],
      );
      return result;
    }
    return result[0];
  };

  static getGym = async () => {
    const [result] = await pool.query("select * from gym");
    return result[0];
  };

  static updateGym = async (
    id,
    name,
    phone,
    address,
    city,
    session_duration,
  ) => {
    const [result] = await pool.query(
      "update gym set name = ?, phone = ?, address = ?, city = ?, session_duration = ? where id = ?",
      [name, phone, address, city, session_duration, id],
    );
    return result;
  };
}
module.exports = GymModel;
