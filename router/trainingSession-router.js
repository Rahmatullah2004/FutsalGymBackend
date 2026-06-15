const express = require("express");
const TrainingSessionController = require("../controllers/trainingSession-controller");

const TrainingSessionRouter = express.Router();

TrainingSessionRouter.post(
  "/",
  TrainingSessionController.insertTrainingSession,
);
TrainingSessionRouter.get("/", TrainingSessionController.getAllTrainingSession);
TrainingSessionRouter.patch(
  "/:id/deactivate",
  TrainingSessionController.deactivateTrainingSessionById,
);
TrainingSessionRouter.patch(
  "/:id/activate",
  TrainingSessionController.activateTrainingSessionById,
);
TrainingSessionRouter.get(
  "/:id/players",
  TrainingSessionController.getPlayersInOneSession,
);
TrainingSessionRouter.get(
  "/:id",
  TrainingSessionController.getTrainingSessionById,
);
TrainingSessionRouter.put(
  "/:id",
  TrainingSessionController.updateTrainingSessionById,
);

module.exports = TrainingSessionRouter;
