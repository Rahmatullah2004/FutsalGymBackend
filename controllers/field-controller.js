const fieldModel = require("../models/field-model");
const getFields = async (req, res, nex) => {
  const result = await fieldModel.getFields();
  res.json({ data: result });
};

const getField = async (req, res, nex) => {
  const result = await fieldModel.getField(req.params.id);
  res.json({ data: result });
};

const insertField = async (req, res, nex) => {
  const result = await fieldModel.insertField(req.body.gym_id, req.body.name);
  res.json({ data: result });
};

const updateField = async (req, res, nex) => {
  const result = await fieldModel.updateField(req.params.id, req.body.name);
  res.json({ data: result });
};
module.exports = { getFields, getField, insertField, updateField };
