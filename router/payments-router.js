const express = require("express");
const paymentsController = require("../controllers/payments-controller");

const paymentsRoute = express.Router();

paymentsRoute.get("/", paymentsController.getAllPayments);
paymentsRoute.post("/", paymentsController.insertPayment);
paymentsRoute.get(
  "/booking/:bookingId",
  paymentsController.getPaymentByBooking,
);
paymentsRoute.get("/balance/:id", paymentsController.getRemainingBalance);
paymentsRoute.get("/:id", paymentsController.getPaymentById);

module.exports = paymentsRoute;
