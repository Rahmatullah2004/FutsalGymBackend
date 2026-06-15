const GymModel = require("../models/gym-model");
const joi = require("joi");

const insertGym = async (req, res, nex) => {
  const schema = {
    name: joi.string().min(3).required(),
    phone: joi.string().min(10).max(12).required(),
    address: joi.string().min(3).required(),
    city: joi.string().min(3).required(),
    session_duration: joi.number().valid(60, 90).required(),
  };
  const validData = joi.object(schema).validate(req.body);
  if (validData.error)
    return res.json({ data: validData.error.details[0].message });
  const data = req.body;
  const { name, phone, address, city, session_duration } = data;
  const result = await GymModel.insertGym(
    name,
    phone,
    address,
    city,
    session_duration,
  );
  if (result.count > 0) {
    res.json({ count: result.count, data: "Gym already exist" });
  }
  res.json({ id: result.insertId, data: "Created successfully" });
};

const getGym = async (req, res, nex) => {
  const result = await GymModel.getGym();
  res.json({ data: result });
};

const updateGym = async (req, res, next) => {
  const data = req.body;
  const id = req.params.id;
  const { name, phone, address, city, session_duration } = data;
  const result = await GymModel.updateGym(
    id,
    name,
    phone,
    address,
    city,
    session_duration,
  );

  res.json({ data: result });
};
module.exports = { insertGym, getGym, updateGym };
