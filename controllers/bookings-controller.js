const BookingsModel = require("../models/bookings-model");
const joi = require("joi");

const getAllBookings = async (req, res, nex) => {
  const result = await BookingsModel.getAllBookings();
  console.log("all");
  res.json({ data: result });
};
const getById = async (req, res, nex) => {
  const result = await BookingsModel.getById(req.params.id);
  console.log("by id");
  res.json({ data: result });
};
const getMybooking = async (req, res, nex) => {
  const result = await BookingsModel.getMybooking(req.params.id);
  console.log("my booking");
  res.json({ data: result });
};
const getByDate = async (req, res, nex) => {
  const { date } = req.query;
  console.log("date---", date);
  const result = await BookingsModel.getByDate(date);
  console.log(result);
  res.json({ data: result });
};
const insertBooking = async (req, res, nex) => {
  const schema = {
    customer_id: joi.number().required(),
    field_id: joi.number().required(),
    date: joi.date().required(),
    start_time: joi.string().required(),
    end_time: joi.string().required(),
    total_price: joi.number().required(),
  };

  const validInput = joi.object(schema).validate(req.body);
  if (validInput.error)
    return res.json({ data: validInput.error.details[0].message });
  const data = req.body;
  console.log("data: ", data);
  const {
    customer_id,
    field_id,
    date,
    start_time,
    end_time,
    total_price,
    status,
  } = data;
  const result = await BookingsModel.insertBooking(
    customer_id,
    field_id,
    date,
    start_time,
    end_time,
    total_price,
    status,
  );
  console.log("insert");
  res.json({ data: result });
};

const changeStatus = async (req, res, next) => {
  if (
    req.body.state == "canceled" ||
    req.body.state == "Cancelsed" ||
    req.body.state == "pending" ||
    req.body.state == "Pending" ||
    req.body.state == "confirmed" ||
    req.body.state == "Confirmed" ||
    req.body.state == "Completed" ||
    req.body.state == "completed"
  ) {
    const result = BookingsModel.updateStatus(req.params.id, newState);
    console.log("change status");
    return res.json({ data: result });
  }
  console.log("change status");
  return;
};

const getFreeTimes = async (req, res, next) => {
  const { date } = req.query;
  const result = BookingsModel.getFreeTimes(req.params.id, date);
  console.log("free times: ", result);
  return res.json({ data: result });
};

module.exports = {
  getAllBookings,
  getById,
  getMybooking,
  getByDate,
  insertBooking,
  changeStatus,
  getFreeTimes,
};
