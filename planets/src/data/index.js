const axios = require("axios");

module.exports = {
  list: async () => {
    const planets = await axios.get("http://database:8004/Planet");
    return planets.data;
  },
  get: async (id) => {
    const planets = await axios.get("http://database:8004/Planet/" + id);
    return planets.data;
  },
  create: async (planet) => {
    try {
      const planets = await axios.post("http://database:8004/Planet", planet);
      return planets.data;
    } catch (error) {
      console.error(error);
      throw new Error("Error creating film");
    }
  },
};
