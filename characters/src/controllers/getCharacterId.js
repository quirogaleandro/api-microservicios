const Characters = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const newCharacter = await Characters.get(id);
  response(res, 201, newCharacter);
};
