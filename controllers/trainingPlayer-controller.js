const trainingPlayerModel = require("../models/trainingPlayer-model");

const insertTrainingPlayer = async (req, res, next) => {
  const { name, phone } = req.body;
  const result = await trainingPlayerModel.insertTrainingPlayer(name, phone);
  res.json({ message: "Training player inserted successfully", result });
};
const getAllTrainingPlayers = async (req, res, next) => {
  const result = await trainingPlayerModel.getAllTrainingPlayers();
  if (result.length === 0) {
    return res.json({ message: "No training players found", result });
  }
  res.json({ message: "Training players retrieved successfully", result });
};
const getTrainingPlayerById = async (req, res, next) => {
  const { id } = req.params;
  const result = await trainingPlayerModel.getTrainingPlayerById(id);
  if (result.length === 0) {
    return res.json({ message: "Training player not found" });
  }
  res.json({ message: "Training player retrieved successfully", result });
};
const updateTrainingPlayer = async (req, res, next) => {
  const { id } = req.params;
  const { name, phone } = req.body;
  const result = await trainingPlayerModel.updateTrainingPlayer(
    id,
    name,
    phone,
  );
  if (result.affectedRows === 0) {
    return res.json({ message: "Training player not found" });
  }
  res.json({ message: "Training player updated successfully", result });
};
const getSessionsOfPlayer = async (req, res, next) => {
  const { id } = req.params;
  const result = await trainingPlayerModel.getSessionsOfPlayer(id);
  if (result.length === 0) {
    return res.json({ message: "No sessions found for this player", result });
  }
  res.json({ message: "Sessions retrieved successfully", result });
};
const deActivatePlayerById = async (req, res, next) => {
  const { id } = req.params;
  const result = await trainingPlayerModel.deActivatePlayerById(id);
  if (result.affectedRows === 0) {
    res.status(404).json({ message: "the player not deactivate" });
  }
  res.json({ message: "player deactivated successfully!", data: result });
};
const ActivatePlayerById = async (req, res, next) => {
  const { id } = req.params;
  const result = await trainingPlayerModel.ActivatePlayerById(id);
  if (result.affectedRows === 0) {
    res.status(404).json({ message: "the player not activate" });
  }
  res.json({ message: "player activated successfully!", data: result });
};

module.exports = {
  insertTrainingPlayer,
  getAllTrainingPlayers,
  getTrainingPlayerById,
  updateTrainingPlayer,
  getSessionsOfPlayer,
  deActivatePlayerById,
  ActivatePlayerById,
};
