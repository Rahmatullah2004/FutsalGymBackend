const express = require("express");
const bookingsController = require("../controllers/bookings-controller");

const bookingsRouter = express.Router();

bookingsRouter.get("/", bookingsController.getAllBookings);
bookingsRouter.get("/date", bookingsController.getByDate);
bookingsRouter.get("/mybooking/:id", bookingsController.getMybooking);
bookingsRouter.get("/:id", bookingsController.getById);
bookingsRouter.post("/", bookingsController.insertBooking);
bookingsRouter.patch("/:id", bookingsController.changeStatus);

module.exports = bookingsRouter;
