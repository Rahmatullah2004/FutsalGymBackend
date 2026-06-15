const pool = require("../utilities/database-connection");

class TrainingSessionModel {
  static insertTrainingSession = async (
    teacher_id,
    day_of_week,
    start_time,
    end_time,
  ) => {
    const [result] = await pool.query(
      "insert into trainingsession (teacher_id, day_of_week, start_time, end_time) values (?, ?, ?, ?)",
      [teacher_id, day_of_week, start_time, end_time],
    );
    return result;
  };
  static getAllTrainingSession = async () => {
    const [result] = await pool.query("select * from trainingsession");
    return result;
  };
  static getTrainingSessionById = async (id) => {
    const [result] = await pool.query(
      "select * from trainingsession where id = ?",
      [id],
    );
    return result;
  };
  static updateTrainingSessionById = async (
    id,
    teacher_id,
    day_of_week,
    start_time,
    end_time,
  ) => {
    const [result] = await pool.query(
      "update trainingsession set teacher_id = ?, day_of_week = ?, start_time = ?, end_time = ? where id = ?",
      [teacher_id, day_of_week, start_time, end_time, id],
    );
    return result;
  };
  static deactivateTrainingSessionById = async (id) => {
    const [result] = await pool.query(
      "update trainingsession set is_active = false where id = ?",
      [id],
    );
    return result;
  };
  static activateTrainingSessionById = async (id) => {
    const [result] = await pool.query(
      "update trainingsession set is_active = true where id = ?",
      [id],
    );
    return result;
  };
  static getPlayersInOneSession = async (id) => {
    const [result] = await pool.query(
      "SELECT tp.id, tp.name, tp.phone FROM TrainingPlayer tp JOIN TrainingEnrollment te ON tp.id = te.player_id WHERE te.session_id = ?",
      [id],
    );
    return result;
  };
}
module.exports = TrainingSessionModel;
