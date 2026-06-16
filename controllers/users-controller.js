const userModel = require("../models/users-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const register = async (req, res, next) => {
  const data = req.body;
  async function insertUser(data) {
    const { username, password_hash, role, name, phone, monthly_fee } = data;
    if (!username || !password_hash || !role) {
      return res.send("username, password and role are required");
    }

    if ((!name || !phone) && role != "admin") {
      return res.send("name and phone are required");
    }
    if (role === "teacher" && !monthly_fee) {
      return res.send("monthly fee is required for teacher");
    }
    const hashedPassword = await bcrypt.hash(password_hash, 10);
    const a = await userModel.getUserName(username);
    const userResult = await userModel.insertInUsers(
      username,
      hashedPassword,
      role,
    );
    const userId = userResult.insertId;
    if (role === "customer") {
      await userModel.insertInCustomer(userId, name, phone);
    }
    if (role === "teacher") {
      await userModel.insertInTeacher(userId, name, phone, monthly_fee);
    }
    return res.json({ message: "user created", data: userId });
  }
  insertUser(data);
};

const login = async (req, res, next) => {
  if (!req.body.username || !req.body.password_hash)
    res.send("Username and password are required!");
  const user = await userModel.getUserName(req.body.username);
  if (!user) res.send("Username or password is not correct!");
  const validPassword = await bcrypt.compare(
    req.body.password_hash,
    user.password_hash,
  );
  if (!validPassword) res.send("Username or password is not correct");
  const token = jwt.sign(
    { id: user.id, password: user.password_hash },
    process.env.SECRET_KEY,
  );
  res
    .header("Authorization", `Bearer ${token}`)
    .json({ message: "Login successfully" });
};

const edit = async (req, res, nex) => {
  const id = req.params.id;
  const data = req.body;
  async function editUsers(data) {
    const { username, password, role, name, phone, monthly_fee } = data;
    if (!username || !password || !role) {
      return res.send("username, password and role are required");
    }

    if ((!name || !phone) && role != "admin") {
      return res.send("name and phone are required");
    }
    if (role === "teacher" && !monthly_fee) {
      return res.send("monthly fee is required for teacher");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const a = await userModel.getUserName(username);
    const userResult = await userModel.updateUsers(
      id,
      username,
      hashedPassword,
      role,
    );
    const userId = userResult.insertId;
    if (role === "customer") {
      await userModel.updateCustomer(id, userId, name, phone);
    }
    if (role === "teacher") {
      await userModel.updateTeacher(id, userId, name, phone, monthly_fee);
    }
    return res.json({ message: "user updated successfully", data: id });
  }
  editUsers(data);
};

module.exports = { register, login, edit };
