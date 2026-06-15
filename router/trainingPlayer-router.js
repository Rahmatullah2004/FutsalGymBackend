const express = require("express");
const trainingPlayerRouter = express.Router();
const trainingPlayerController = require("../controllers/trainingPlayer-controller");

trainingPlayerRouter.post("/", trainingPlayerController.insertTrainingPlayer);
trainingPlayerRouter.get("/", trainingPlayerController.getAllTrainingPlayers);
trainingPlayerRouter.get(
  "/:id/sessions",
  trainingPlayerController.getSessionsOfPlayer,
);
trainingPlayerRouter.patch(
  "/:id/deactivate",
  trainingPlayerController.deActivatePlayerById,
);
trainingPlayerRouter.patch(
  "/:id/activate",
  trainingPlayerController.ActivatePlayerById,
);
trainingPlayerRouter.get(
  "/:id",
  trainingPlayerController.getTrainingPlayerById,
);
trainingPlayerRouter.put("/:id", trainingPlayerController.updateTrainingPlayer);

module.exports = trainingPlayerRouter;
