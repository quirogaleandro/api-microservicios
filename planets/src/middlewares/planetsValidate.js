const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
  const {
    _id,
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water,
  } = req.body;
  if (
    _id &&
    name &&
    rotation_period &&
    orbital_period &&
    diameter &&
    climate &&
    gravity &&
    terrain &&
    surface_water
  )
    return next();
  else throw new ClientError("Missing properties", 400);
};
