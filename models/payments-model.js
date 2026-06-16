const pool = require("../utilities/database-connection");

class PaymentsModel {
  static getAllPayments = async () => {
    const result = await pool.query("select * from payment");
    return result[0];
  };
  static insertBookingPayment = async (booking_id, amount) => {
    const result = await pool.query(
      "insert into payment (booking_id, amount) values(?, ?)",
      [booking_id, amount],
    );
    return result[0];
  };
  static insertEnrollmentPayment = async (training_enrollment_id, amount) => {
    const result = await pool.query(
      "insert into payment (training_enrollment_id, amount) values(?, ?)",
      [training_enrollment_id, amount],
    );
    return result[0];
  };
  static getPaymentById = async (id) => {
    console.log("result:");
    const result = await pool.query("select * from payment where id = ?", [id]);
    return result[0];
  };
  static getPaymentByBookingId = async (booking_id) => {
    const result = await pool.query(
      "select * from payment where booking_id = ?",
      [booking_id],
    );
    return result[0];
  };
  static getTotalPrice = async (bookingId) => {
    const [result] = await pool.query(
      "select total_price from booking where id = ?",
      [bookingId],
    );
    return result;
  };
  static getPaidAmount = async (bookingId) => {
    const [result] = await pool.query(
      "select coalesce(sum(amount), 0) as paid_amount from payment where booking_id = ?",
      [bookingId],
    );
    return result;
  };
}
module.exports = PaymentsModel;
