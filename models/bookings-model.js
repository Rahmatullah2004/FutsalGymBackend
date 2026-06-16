const pool = require("../utilities/database-connection");

class BookingsModel {
  static getAllBookings = async () => {
    const [result] = await pool.query("select * from booking");
    return result;
  };
  static getById = async (id) => {
    const [result] = await pool.query("select * from booking where id = ?", [
      id,
    ]);
    return result;
  };
  static getByDate = async (date) => {
    const [result] = await pool.query("select * from booking where date = ?", [
      date,
    ]);
    return result;
  };
  static getMybooking = async (id) => {
    const [result] = await pool.query(
      "select * from booking where customer_id = ?",
      [id],
    );
    return result;
  };
  static insertBooking = async (
    customer_id,
    field_id,
    date,
    start_time,
    end_time,
    total_price,
    status,
  ) => {
    const [result] = await pool.query(
      "insert into booking (customer_id, field_id, date, start_time, end_time, total_price, status) values( ?, ?, ?, ?, ?, ?, ?)",
      [customer_id, field_id, date, start_time, end_time, total_price, status],
    );
    return result;
  };

  static updateStatus = async (id, newState) => {
    const [result] = pool.query("update booking set status = ? where id = ?", [
      newState,
      id,
    ]);
    return result;
  };
  static getFreeTimes = async (id, date) => {
    const [result] = await pool.query(
      "select start_time, end_time from booking where field_id = ? and date = ? and status != 'cancelled'",
      [id, date],
    );
    return result;
  };
}
module.exports = BookingsModel;
