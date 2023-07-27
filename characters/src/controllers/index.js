const { catchedAsync } = require("../utils");

module.exports = {
  getCharacter: catchedAsync(require("./getCharacters")),
  createCharacter: catchedAsync(require("./createCharacter")),
  getCharacterId: catchedAsync(require("./getCharacterId")),
};
