const express = require("express");
const fieldController = require("../controllers/field-controller");
const bookingsController = require("../controllers/bookings-controller");

const fielRouter = express.Router();

fielRouter.get("/", fieldController.getFields);
fielRouter.get("/:id/availabletimes", bookingsController.getFreeTimes);
fielRouter.post("/register", fieldController.insertField);
fielRouter.patch("/updateField/:id", fieldController.updateField);
fielRouter.get("/:id", fieldController.getField);

module.exports = fielRouter;
