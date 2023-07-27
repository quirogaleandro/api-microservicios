const Films = require("../data/index");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const all_films = await Films.list();
  response(res, 200, all_films);
};
