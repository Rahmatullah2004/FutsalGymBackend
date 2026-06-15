const { get, update } = require("lodash");
const TrainingSessionModel = require("../models/trainingSession-model");

const insertTrainingSession = async (req, res, next) => {
  const { teacher_id, day_of_week, start_time, end_time } = req.body;
  const result = await TrainingSessionModel.insertTrainingSession(
    teacher_id,
    day_of_week,
    start_time,
    end_time,
  );
  res.json({
    message: "Training session inserted successfully",
    insertedId: result.insertId,
  });
};
const getAllTrainingSession = async (req, res, next) => {
  const result = await TrainingSessionModel.getAllTrainingSession();
  res.json({
    data: result,
  });
};
const getTrainingSessionById = async (req, res, next) => {
  const { id } = req.params;
  const result = await TrainingSessionModel.getTrainingSessionById(id);
  if (result.length === 0) {
    return res.status(404).json({ message: "Training session not found" });
  }
  res.json({
    data: result[0],
  });
};
const updateTrainingSessionById = async (req, res, next) => {
  const { id } = req.params;
  const { teacher_id, day_of_week, start_time, end_time } = req.body;
  const result = await TrainingSessionModel.updateTrainingSessionById(
    id,
    teacher_id,
    day_of_week,
    start_time,
    end_time,
  );
  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Training session not found" });
  }
  res.json({
    message: "Training session updated successfully",
    updatedId: id,
  });
};

const deactivateTrainingSessionById = async (req, res, next) => {
  const { id } = req.params;
  const result = await TrainingSessionModel.deactivateTrainingSessionById(id);
  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Training session not found" });
  }
  res.json({
    message: "Training session deactivated successfully",
    deactivatedId: id,
  });
};
const activateTrainingSessionById = async (req, res, next) => {
  const { id } = req.params;
  const result = await TrainingSessionModel.activateTrainingSessionById(id);
  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Training session not found" });
  }
  res.json({
    message: "Training session activated successfully",
    deactivatedId: id,
  });
};
const getPlayersInOneSession = async (req, res, next) => {
  const { id } = req.params;
  const result = await TrainingSessionModel.getPlayersInOneSession(id);
  if (!result) {
    return res
      .status(404)
      .json({ message: "No players found for this session" });
  }
  res.json({
    data: result,
  });
};

module.exports = {
  insertTrainingSession,
  getAllTrainingSession,
  getTrainingSessionById,
  updateTrainingSessionById,
  deactivateTrainingSessionById,
  activateTrainingSessionById,
  getPlayersInOneSession,
};
