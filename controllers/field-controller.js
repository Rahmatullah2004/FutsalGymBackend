const joi = require("joi");
const fieldModel = require("../models/field-model");
const getFields = async (req, res, nex) => {
  const result = await fieldModel.getFields();
  if (result.length === 0) {
    res.status(404).json({ message: "No fields found" });
    return;
  }
  res.json({ data: result });
};

const getField = async (req, res, nex) => {
  const result = await fieldModel.getField(req.params.id);
  if (result.length === 0) {
    res.status(404).json({ message: "Field not found" });
    return;
  }
  res.json({ data: result });
};

const insertField = async (req, res, nex) => {
  const schema = {
    gym_id: joi.number().required(),
    name: joi.string().min(3).required(),
  };
  const validData = joi.object(schema).validate(req.body);
  if (validData.error)
    return res.json({ data: validData.error.details[0].message });
  const result = await fieldModel.insertField(req.body.gym_id, req.body.name);
  res.json({ data: result });
};

const updateField = async (req, res, nex) => {
  const schema = {
    gym_id: joi.number().required(),
    name: joi.string().min(3).required(),
  };
  const validData = joi.object(schema).validate(req.body);
  if (validData.error)
    return res.json({ data: validData.error.details[0].message });
  const result = await fieldModel.updateField(req.params.id, req.body.name);
  res.json({ data: result });
};
module.exports = { getFields, getField, insertField, updateField };
