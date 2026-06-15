const pool = require("../utilities/database-connection");

class TrainingPlayer {
  static insertTrainingPlayer = async (name, phone) => {
    const [result] = await pool.query(
      "insert into trainingplayer (name, phone) values (?, ?)",
      [name, phone],
    );
    return result;
  };
  static getAllTrainingPlayers = async () => {
    const [result] = await pool.query("select * from trainingplayer");
    return result;
  };
  static getTrainingPlayerById = async (id) => {
    const [result] = await pool.query(
      "select * from trainingplayer where id = ?",
      [id],
    );
    return result;
  };
  static updateTrainingPlayer = async (id, name, phone) => {
    const [result] = await pool.query(
      "update trainingplayer set name = ?, phone = ? where id = ?",
      [name, phone, id],
    );
    return result;
  };
  static getSessionsOfPlayer = async (playerId) => {
    const [result] = await pool.query(
      `SELECT ts.id, ts.day_of_week, ts.start_time, ts.end_time FROM TrainingSession ts JOIN TrainingEnrollment te ON ts.id = te.session_id WHERE te.player_id = ?`,
      [playerId],
    );
    return result;
  };
  static deActivatePlayerById = async (playerId) => {
    const [result] = await pool.query(
      "update trainingplayer set is_active = false where id = ?",
      [playerId],
    );
    return result;
  };
  static ActivatePlayerById = async (playerId) => {
    const [result] = await pool.query(
      "update trainingplayer set is_active = true where id = ?",
      [playerId],
    );
    return result;
  };
}

module.exports = TrainingPlayer;
