const Films = require("../data/index");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const createFilm = await Films.get(id);
  response(res, 200, createFilm);
};
