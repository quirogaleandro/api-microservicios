const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
  const {
    _id,
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
  } = req.body;
  if (
    _id &&
    name &&
    height &&
    mass &&
    hair_color &&
    skin_color &&
    eye_color &&
    birth_year &&
    gender
  )
    return next();
  else throw new ClientError("Missing properties", 400);
};
