const pool = require("../utilities/database-connection");

class TrainingEnrollment {
  static insertTrainingEnrollment = async (player_id, session_id) => {
    const [result] = await pool.query(
      "insert into trainingenrollment(player_id, session_id) values(?, ?)",
      [player_id, session_id],
    );
    return result;
  };
  static getAllTrainingEnrollments = async () => {
    const [result] = await pool.query(
      "SELECT te.id, tp.name AS player_name, tp.phone, ts.id AS session_id FROM TrainingEnrollment te JOIN TrainingPlayer tp ON te.player_id = tp.id JOIN TrainingSession ts ON te.session_id = ts.id",
    );
    return result;
  };
  static getTrainingEnrollmentById = async (id) => {
    const [result] = await pool.query(
      "SELECT te.id, tp.name AS player_name, tp.phone, ts.id AS session_id FROM TrainingEnrollment te JOIN TrainingPlayer tp ON te.player_id = tp.id JOIN TrainingSession ts ON te.session_id = ts.id WHERE te.id = ?",
      [id],
    );
    return result;
  };
  static deleteTrainingEnrollment = async (id) => {
    const [result] = await pool.query(
      "DELETE FROM TrainingEnrollment WHERE id = ?",
      [id],
    );
    return result;
  };
}
module.exports = TrainingEnrollment;
