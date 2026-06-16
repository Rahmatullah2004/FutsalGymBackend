const PaymentsModel = require("../models/payments-model");

const getAllPayments = async (req, res, next) => {
  const result = await PaymentsModel.getAllPayments();
  if (result.length === 0) {
    return res.status(404).json({ message: "No payments found" });
  }
  res.json({ data: result });
};
const insertPayment = async (req, res, next) => {
  const { booking_id, training_enrollment_id, amount } = req.body;
  if (booking_id && training_enrollment_id) {
    return res.status(400).json({
      message: "payment cannot belong to both booking and training enrollment",
    });
  }
  if (!booking_id && !training_enrollment_id) {
    return res.status(400).json({
      message: "payment must belong to either booking or training enrollment",
    });
  }
  if (booking_id) {
    const result = await PaymentsModel.insertBookingPayment(booking_id, amount);
    res.json({ data: result });
  } else {
    const result = await PaymentsModel.insertEnrollmentPayment(
      training_enrollment_id,
      amount,
    );
    res.json({ data: result });
  }
};
const getPaymentById = async (req, res, next) => {
  const { id } = req.params;
  console.log("id:", id);
  const [result] = await PaymentsModel.getPaymentById(id);
  if (!result) {
    return res.status(404).json({ message: "Payment not found" });
  }
  res.json({ data: result });
};
const getPaymentByBooking = async (req, res, next) => {
  const booking_id = req.params.bookingId;
  console.log("booking_id:", booking_id);
  const [result] = await PaymentsModel.getPaymentByBookingId(booking_id);
  if (!result) {
    return res
      .status(404)
      .json({ message: "Payment not found for this booking" });
  }
  res.json({ data: result });
};
const getRemainingBalance = async (req, res, next) => {
  const bookingId = req.params.id;
  const booking = await PaymentsModel.getTotalPrice(bookingId);
  if (booking.length === 0) {
    return res.status(404).json({ message: "payment not found" });
  }
  const payments = await PaymentsModel.getPaidAmount(bookingId);
  const totalPrice = booking[0].total_price;
  const paidAmount = payments[0].paid_amount;

  res.json({
    booking_id: bookingId,
    total_price: totalPrice,
    paid_amount: paidAmount,
    remaining_balance: totalPrice - paidAmount,
  });
};

module.exports = {
  getAllPayments,
  insertPayment,
  getPaymentById,
  getPaymentByBooking,
  getRemainingBalance,
};
