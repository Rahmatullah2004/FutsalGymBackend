const express = require("express");
const trainingEnrollmentController = require("../controllers/trainingEnrollment-controller");

const trainingEnrollmentRouter = express.Router();

trainingEnrollmentRouter.post(
  "/",
  trainingEnrollmentController.insertTrainingEnrollment,
);
trainingEnrollmentRouter.get(
  "/",
  trainingEnrollmentController.getAllTrainingEnrollments,
);
trainingEnrollmentRouter.get(
  "/:id",
  trainingEnrollmentController.getTrainingEnrollmentById,
);
trainingEnrollmentRouter.delete(
  "/:id",
  trainingEnrollmentController.deleteTrainingEnrollment,
);
module.exports = trainingEnrollmentRouter;
