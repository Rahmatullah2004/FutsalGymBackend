const TrainingEnrollmentModel = require("../models/trainingEnrollment-model");

const insertTrainingEnrollment = async (req, res, next) => {
  const { player_id, session_id } = req.body;
  const result = await TrainingEnrollmentModel.insertTrainingEnrollment(
    player_id,
    session_id,
  );
  if (!result) {
    return res.status(500).json({ message: "Failed to insert data" });
  }
  res.json({ message: "data inserted successfully!", data: result });
};
const getAllTrainingEnrollments = async (req, res, next) => {
  const result = await TrainingEnrollmentModel.getAllTrainingEnrollments();
  if (!result) {
    return res.status(500).json({ message: "Failed to retrieve data" });
  }
  res.json({ message: "data retrieved successfully!", data: result });
};
const getTrainingEnrollmentById = async (req, res, next) => {
  const { id } = req.params;
  const result = await TrainingEnrollmentModel.getTrainingEnrollmentById(id);
  if (!result) {
    return res.status(404).json({ message: "Data not found" });
  }
  res.json({ message: "data retrieved successfully!", data: result });
};
const deleteTrainingEnrollment = async (req, res, next) => {
  const { id } = req.params;
  const result = await TrainingEnrollmentModel.deleteTrainingEnrollment(id);
  if (!result) {
    return res.status(404).json({ message: "Data not found" });
  }
  res.json({ message: "data deleted successfully!", data: result });
};
module.exports = {
  insertTrainingEnrollment,
  getAllTrainingEnrollments,
  getTrainingEnrollmentById,
  deleteTrainingEnrollment,
};
