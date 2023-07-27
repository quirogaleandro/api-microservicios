const Planets = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const all_planets = await Planets.list();
  response(res, 200, all_planets);
};
