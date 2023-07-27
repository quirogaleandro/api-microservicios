const axios = require("axios");

module.exports = {
  list: async () => {
    const characters = await axios.get("http://database:8004/Character");
    return characters.data;
  },
  get: async (id) => {
    const characters = await axios.get("http://database:8004/Character/" + id);
    return characters.data;
  },
  create: async (newCharacter) => {
    try {
      const response = await axios.post(
        "http://database:8004/Character",
        newCharacter
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Error creating character");
    }
  },
};
