const express = require("express");
const gymController = require("../controllers/gym-controller");

const gymRouter = express.Router();

gymRouter.post("/register", gymController.insertGym);
gymRouter.get("/getGym", gymController.getGym);
gymRouter.put("/updateGym/:id", gymController.updateGym);

module.exports = gymRouter;
