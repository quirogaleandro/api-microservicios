const Films = require("../data/index");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const createFilm = await Films.create(req.body);
  response(res, 200, createFilm);
};
